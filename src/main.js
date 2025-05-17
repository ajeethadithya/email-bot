require('dotenv').config();
const nodemailer = require('nodemailer');
const {TodoistApi} = require('@doist/todoist-api-typescript');
const api = new TodoistApi(process.env.TODOIST_API_KEY);

async function getProjects() {
        try {
                const projects = await api.getProjects();
                return projects;
        }
        catch(error){
                console.error('error', error);
        }
}

async function getTasks(project_id) {

	try {
		const tasks = await api.getTasks({project_id});
		return tasks
	}
	catch {
		console.error('error', error);
	}
}

(async function run() {

	console.log('Running my daily report..\n')	

	const projects = await getProjects();
	//console.log(projects);

	for (let i = 1; i < projects.results.length; i++) {
		console.log(projects.results[i].name);
		const tasks = await getTasks(projects.results[i].id);
		//console.log(tasks);
		for(let j = 0; j < tasks.results.length; j++) {
			console.log("\t", tasks.results[j].content);
		}
		console.log("\n");
	}

	//const tasks = await getTasks(projects.results[1].id);
        //console.log(tasks);

	/* Email code */
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
		subject: "Todoist",
		text: `
			Todoist!
		`,
		html: `
			<ht>Welcome</h1>
		`,
	});

})();
