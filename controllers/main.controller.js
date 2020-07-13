const nodemailer = require('../config/nodemailer.config');

module.exports.index = (req, res, next) => {
	res.render('index');
}

module.exports.handleForm = (req, res, next) => {
	const { name, email, feedback } = req.body;
	nodemailer.handleForm(name, email, feedback);
	res.redirect('/');
}