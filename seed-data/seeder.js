require("dotenv").config();
const seeder = require("mongoose-seed");
const db = process.env.MONGODB;
const { data } = require("./index");

seeder.connect(
	db,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	function () {
		seeder.loadModels([`models/User.js`]);
		seeder.clearModels(["users"], function () {
			// Callback to populate DB once collections have been cleared
			seeder.populateModels(data, function () {
				seeder.disconnect();
			});
		});
	}
);
