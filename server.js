const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);
app.get('/', function(request, response){
    response.render('pages/index');
});
console.log("Server up on port 8080");

