const express = require('express');
const router = express.Router();
const QuestionModel = require('../models/Questions');
const authenticateToken = require('../middleware/fetchuser');
const UserModel = require('../models/UserInfo');

// GET route to fetch all service requests
router.get('/', authenticateToken,async (req, res) => {
	console.log('Get all topics');

	const userId = req.user.userId;
	try {
			const user = await UserModel.findById(userId);
		// Use the distinct method to get unique categories
		const categories = await QuestionModel.distinct('category');
		res.status(200).json({"categories": categories, "selectedCategories": user.selectedCategories});
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});
router.get('/usercategory', authenticateToken, async (req, res) => {
	console.log('Get all topics');
	const userId = req.user.userId;
	try {
		// Use the distinct method to get unique categories
		const user = await UserModel.findById(userId);
		const categories = user.selectedCategories;
		res.status(200).json({"categories": categories});
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
})
router.get('/:category', async (req, res) => {
  console.log('Get random 5 topics');
  try {
    const questions = await QuestionModel.aggregate([
      { $match: { category: req.params.category } },
      { $sample: { size: 5 } },
      { $project: { _id: 1, question: 1, category: 1, options: 1 } }
    ]);

    res.status(200).json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.post('/answer-question', authenticateToken, async (req, res) => {
	console.log('Answer Question');
	try {
		const userId = req.user.userId;
		const { questionId, answer } = req.body;

		const question = await QuestionModel.findById(questionId);

		if (!question) {
			return res.status(404).json({ message: 'Question not found' });
		}

		if (question.answer === answer) {
			const user = await UserModel.findById(userId);

			if (!user) {
				return res.status(404).json({ message: 'User not found' });
			}

			// Find the score object for the specific category
			const categoryScore = user.score.find(score => score.category === question.category);

			if (categoryScore) {
				// Increment the score if the category exists
				categoryScore.score += 1;
			} else {
				// Push a new score object if the category does not exist
				user.score.push({ category: question.category, score: 1 });
			}

			// Save the updated user
			await user.save();

			res.status(200).json({ message: 'Correct answer' });
		} else {
			res.status(400).json({ message: 'Invalid answer' });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

router.post('/check-answers/:category', authenticateToken,async (req, res) => {
  const answers = req.body; // Array of { id, option }
 const category = req.params.category; 
const userId = req.user.userId;
  try {
    const results = await Promise.all(answers.map(async (answer) => {
      const question = await QuestionModel.findById(answer.id);
      if (question) {
        const isCorrect = answer.option === question.answer;
        return {
          id: answer.id,
          question: question.question,
          submittedOption: answer.option,
          correctAnswer: question.answer,
          isCorrect: isCorrect,
        };
      } else {
        return {
          id: answer.id,
          error: 'Question not found',
        };
      }
    }));

    // Calculate the score
    const score = results.reduce((total, result) => {
      if (result.isCorrect) {
        return total + 1;
      }
      return total;
    }, 0);

    const total = answers.length;

const user = await UserModel.findById(userId);

			if (!user) {
				return res.status(404).json({ message: 'User not found' });
			}

			// Find the score object for the specific category
			const categoryScore = user.score.find(score => score.category === category);
			if (categoryScore) {
				// Increment the score if the category exists
				categoryScore.score = score;
				categoryScore.total = total;
			} else {
				// Push a new score object if the category does not exist
				user.score.push({ category: category, score: score, total: total });
			}
		user.lastResults = results;
			await user.save();
    res.status(200).json({ sucess: true });
  } catch (error) {
		console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
router.post('/add-questions', async (req, res) => {
  console.log('Add new Questions');
  try {
    // Assuming the request body contains an array of question objects
    const questionsData = req.body;

    // Insert multiple questions using the QuestionModel
    const newQuestions = await QuestionModel.insertMany(questionsData);

    res.status(201).json(newQuestions); // Respond with the created questions
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
module.exports = router;
