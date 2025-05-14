require('dotenv').config();
const nodemailer = require('nodemailer');

(async function run() {
	console.log('Running my daily report..')	

	const transporter = nodemailer.createTransport({
  		host: "smtp.gmail.com",
  		port: 465,
  		secure: true, // true for 465, false for other ports
  		auth: {
    			user: process.env.MAIL_USER_EMAIL,
    			pass: process.env.MAIL_USER_PASSWORD,
  		},
	});

	let info = await transporter.sendMail({
		from: process.env.MAIL_FROM,
		to: process.env.MAIL_TO,
		subject: "To-Do List",
		text: `
			Hello world!
		`,
		html: `
			<h1>Hello world!</h1>
		`,
	});

})();
