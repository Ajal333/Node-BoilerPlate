const express = require('express')
const expressSession = require('express-session')
const mongoose = require('mongoose')
const logger = require('morgan')
const bodyParser = require('body-parser')


// Setting up MongoDB
const url = 'mongodb://localhost:27017/conFusion'; 
const connect=mongoose.connect(url);
connect.then((db)=>{
	console.log('Connected to the server');
},(err)=>{console.log(err);});

// Creating server
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Setting up other dependencies
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Setting path to static files
app.use('/assets/css', express. static(path.join(__dirname, '/assets/css')));
app.use("/assets/img", express.static(__dirname + "/assets/img"));
app.use(express. static(path.join(__dirname, 'public')));

//Route paths go here


//404 erro handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

//Connecting to port
const port = process.env.port || 8000;
server.listen(port, () => {
    console.log("Listening to port ",port,' at http://localhost:',port);
});

