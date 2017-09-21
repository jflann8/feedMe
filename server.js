
var express = require('express');
var app = new express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
    console.log("file sent.");
});

app.listen(8000, function () {
    console.log("Server listening on 8000...");
});


// Properties: app.color
// Functions: app.GetColor

// method (get)



/*PRETEND CONTENTS OF APP.LISTEN 

    1. CHECK THE CREDENTIALS

    2. CALL GOOGLE AND SAY HI

    3. OPEN THE DB AND LOOK AT STUFF

    4. ASK THE ADMIN TO GET THE COKE

    5....

    6. RETURN THE VALUE

*/

