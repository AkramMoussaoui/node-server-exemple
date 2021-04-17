const { string } = require('joi');
const joi = require('joi');

module.exports = {
	postUser: {
		body: {
			name: joi.string().required(),
			prenom: joi.string().required(),
			Email: joi.string().email().required(),
			phone: joi.number().required(),
		},
	},
};
