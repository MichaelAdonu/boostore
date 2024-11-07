const app = require('./app');

const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

// database setup
const DB = process.env.DATABASE_URL.replace(
	'<db_password>',
	process.env.DATABASE_PASSWORD
);

// mongoose setup
const connectDB = async () => {
	try {
		await mongoose.connect(DB);
		console.log('Connected to database Successfully');
	} catch (error) {
		console.log(error.message);
	}
};
connectDB();

// server setup
const port = 8000;

app.listen(port, (res, req) => {
	console.log(`App running on port ${port}...`);
});
