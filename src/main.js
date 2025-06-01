require('dotenv').config();
const nodemailer = require('nodemailer');
const {TodoistApi} = require('@doist/todoist-api-typescript');
const api = new TodoistApi(process.env.TODOIST_API_KEY);

async function getProjects() {
        try {
                const projects = await api.getProjects();
                return projects;
        } catch(err) {
                console.error('error', err);
        }
}

async function getTasks(project_id) {

	try {
		const tasks = await api.getTasks({project_id});
		return tasks
	} catch(err) {
		console.error('error', err);
	}
}

async function markTaskAsCompleted(task_id) {

	try {
		const taskCompleted = await api.closeTask(task_id);
		return taskCompleted;
	} catch(err) {
		console.error('error', err);
	}
}

(async function run() {

	console.log('Running my daily report..\n')	

	/* Retrieve from Todoist */
	let htmlBody = `<h1>Todoist Daily Report</h1>`;

	const projects = await getProjects();

	for (let i = 1; i < projects.results.length; i++) {
		
		console.log(`${projects.results[i].name} (id: ${projects.results[i].id})`);
		htmlBody += `<h2>${projects.results[i].name}</h2>`;
		
		const tasks = await getTasks(projects.results[i].id);
		
		htmlBody += `<ul>`;
		for(let j = 0; j < tasks.results.length; j++) {
			console.log(`\t ${tasks.results[j].content} (id: ${tasks.results[j].id})`);
			htmlBody += `<li><a href="${tasks.results[j].url}">${tasks.results[j].content}</a></li>`;
		}
		htmlBody += `</ul>`;
	}
		
	/* Send the email */
	const transporter = nodemailer.createTransport({
  		host: "smtp.gmail.com",
  		port: 465,
  		secure: true,
  		auth: {
    			user: process.env.MAIL_USER_EMAIL,
    			pass: process.env.MAIL_USER_PASSWORD,
  		},
	});

	let info = await transporter.sendMail({
		from: process.env.MAIL_FROM,
		to: process.env.MAIL_TO,
		subject: "Todoist Daily Report",
		text: 'See the HTML version of this email for your task report.',
		html: htmlBody,
	});
})();

