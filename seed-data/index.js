const faker = require("faker");
const bcrypt = require("bcrypt");

const user_count = 10;
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync("password", salt);

const data = [
	{
		model: "users",
		documents: Array.from(Array(user_count).keys()).map((f) => {
			return {
				username: faker.internet.userName(),
				userType: 1,
				email: faker.internet.email(),
				firstName: faker.name.firstName(),
				lastName: faker.name.lastName(),
				password: hash,
				created_at: Date.now(),
				added_by: "John Doe",
			};
		}),
	},
];

module.exports = { data };
