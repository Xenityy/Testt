import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const express = require('express');//Set up the express module
const app = express();
const router = express.Router();
const path = require('path') //Include the Path module <--

//Set up the Express router
router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/index.html/index.html'));
});
app.use('/', router);

//Navigate your website
router.get('/home', function(req, res){
  res.sendFile(path.join(__dirname, '/index.html'));
});

router.get('/commands', function(req, res){
  res.sendFile(path.join(__dirname, '/commands.html'));
});

router.get('/projects', function(req, res){
  res.sendFile(path.join(__dirname, '/projects.html'));
});

router.get('/server', function(req, res){
  res.sendFile(path.join(__dirname, '/server.html'));
});

app.use('/lol', router);
//404 Error
app.use(function(req, res, next) {
    res.status(404);
    res.sendFile(__dirname + '/404.html');
});


//set up the Express server to listen on port 3000 and logs some messages when the server is ready
let server = app.listen(3000, function(){
  console.log("App server is running on port 3000");
});