const express = require('express')
const mongoose = require('mongoose')
const app = express();

require('dotenv').config()


const PORT = process.env.PORT || 3000

mongoose.set('strictQuery',false)

const connectDB = async()=>{
	try {
		const conn = await mongoose.connect(process.env.DATABASE_URL)
		console.log(`Chalu kiya database connection,`)
	} catch (error) {
		console.log(error)
		process.exit(1)
	}
}
connectDB().then(()=>{
	app.listen(PORT,()=>{
		console.log(`Tera server port ${PORT} pe chalu hai...`);

	})
})

app.use(express.json())

const authRoute = require('./Routes/auth')
app.use('/api/user',authRoute);


const testRoute = require('./Routes/test')
app.use('/api/test',testRoute);
