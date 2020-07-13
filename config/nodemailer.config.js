const nodemailer = require('nodemailer');

const user = process.env.NM_USER;
const pass = process.env.NM_PASS;

const transport = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
		user: user,
		pass: pass
	}
});

module.exports.handleForm = (name, email, feedback) => {
	transport.sendMail({
		to: email,
		from: `Ironhack nodemailer example! <${user}>`,
		subject: 'We have received your feedback!',
		html: `
			<h1>Hi ${name}, we have received your feedback!</h1>
			<p>We have received the following feedback</p>
			<p>${feedback}</p>
			<p>We will get back to you soon ❤️</p>
		`

	})
}