const router = require('express').Router();
const Pet = require('../Model/Pet_Model');
var auth = require('../Helpers/tokenValidation');
const User = require('../Model/User_Model')


route.post('/',auth, async (req, res) => {
    try {
      const pet = await Pet.create({
        name: req.body.name,
        dob: req.body.dob,
        type: req.body.type,
        breed: req.body.breed,
      })
      const userid = req.user.id
      let filter = { _id: userid };
      const user = await User.find({_id: userid})
      let pets = user[0].petlist
      pets.push(pet._id)
      let update = {petlist: pets};
      let usertoupdate = await User.findOneAndUpdate(filter, update, { new: true });
      res.status(200).json({ usertoupdate, pet})
    } catch (err) {
      res.json({ errors: err, message: err.message })
    }
  })
module.exports = router;