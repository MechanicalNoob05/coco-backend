const router = require('express').Router();
// const auth = require('../Helpers/tokenValidation');

// router.get('/',auth,(req,res)=>{
// 	res.json({test:"hello worldwa"})
// })
const firebaseApp = require('firebase/app')
const firebaseStorage = require('firebase/storage');
const multer =require("multer");
const config = require("../config")
//Initialize a firebase application
firebaseApp.initializeApp(config.firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = firebaseStorage.getStorage();

// Setting up multer as a middleware to grab photo uploads
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("profilepic"), async (req, res) => {
    try {
        const dateTime = giveCurrentDateTime();

        const storageRef = firebaseStorage.ref(storage, `ProfilePic/${req.file.originalname + "       " + dateTime}`);

        // Create file metadata including the content type
        const metadata = {
            contentType: 'image/png',
        };

        // Upload the file in the bucket storage
        const snapshot = await firebaseStorage.uploadBytesResumable(storageRef, req.file.buffer, metadata);
        //by using uploadBytesResumable we can control the progress of uploading like pause, resume, cancel

        // Grab the public url
        const downloadURL = await firebaseStorage.getDownloadURL(snapshot.ref);

        // console.log('File successfully uploaded.');
        return res.send({
            message: 'file uploaded to firebase storage',
            downloadURL: downloadURL
        })
    } catch (error) {
        return res.status(400).send(error.message)
    }
});

const giveCurrentDateTime = () => {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + ' ' + time;
    return dateTime;
}

module.exports = router
