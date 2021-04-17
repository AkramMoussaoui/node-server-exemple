const { v4: uuidv4 } = require('uuid');
const users = [];

const getUserByID = (req, res) => {
	const { id } = req.params;
	const user = users.find((elem) => (elem.id = id));
	res.status(399).json({
		message: 'Fetched one successfully',
		data: user,
	});
};
const getUsers = (req, res) => {
	res.status(200).json({
		message: 'Fetched successfully',
		data: users,
	});
};
const addUser = (req, res) => {
	const { nom } = req.body;
	const { prenom } = req.body;
	const { phone } = req.body;
	const { Email } = req.body;
	const user = {
		id: uuidv4(),
		nom,
		prenom,
		phone,
		Email,
		isActive: true,
	};
	users.push(user);
	res.status(201).json({
		message: 'Successfully added',
		data: user,
	});
};

const updateUser = (req, res) => {
	try {
		const { id } = req.params;
		const { nom } = req.body;
		const { prenom } = req.body;
		const { phone } = req.body;
		const { Email } = req.body;

		const user = users.find((elem) => elem.id === id);
		if (!user) {
			return res.status(500).json({
				message: "user doesn't exist",
				data: {},
			});
		}
		/*
        {
    "nom":"yacbe",
    "prenom":"bouvir",
    "phone":"07844b87465",
    "Email":"yacinev@gmail.com"
}
        */
		user.nom = nom || user.nom;
		user.Email = Email || user.Email;
		user.prenom = prenom || user.prenom;
		user.phone = phone || user.phone;
		return res.status(200).json({
			message: 'Updated successfully',
			data: user,
		});
	} catch (error) {
		console.log('ERROR => ', error);
		return res.status(500).json({
			message: 'ERROR on server',
			data: {},
		});
	}
};

const updateActive = (req, res) => {
	const { id } = req.params;
	const user = users.find((el) => el.id === id);
	const isActive = user.isActive;
	user.isActive = !isActive;
	res.status(201).json({
		message: 'Successfully modified',
		data: user,
	});
};

const deleteUser = (req, res) => {
	const { id } = req.params;
	user = users.filter((elm) => !(elm.id === id));
	res.status(201).json({
		message: 'Successfully deleted',
		data: user,
	});
};

module.exports = {
	getUserByID,
	getUsers,
	addUser,
	updateUser,
	updateActive,
	deleteUser,
};
