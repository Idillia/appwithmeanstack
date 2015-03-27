var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		db: 'mongodb://localhost/multivision',
		rootPath: rootPath,
		port: process.env.PORT || 3030
	},
	production: {
		rootPath: rootPath,
		db: 'mongodb://mila:sistema1%@ds045521.mongolab.com:45521/multivision',
		port: process.env.PORT || 80
	}
}