var express= require("express");


var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config= require('./server/config/config')[env];

require('./server/config/express')(app,config);
require('./server/config/mongoose')(config);

require('./server/config/passport')();
require('./server/config/routes')(app);



// var messageSchema =  mongoose.Schema({message: String});
// var Message = mongoose.model('Message', messageSchema);
// var mongoMessage;
// Message.findOne().exec(function(err,messageDoc){
// 	mongoMessage = messageDoc.message;
// });



app.listen(config.port);
console.log('Listening on port '+ config.port+'...');