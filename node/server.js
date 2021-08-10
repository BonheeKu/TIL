const express = require('express');
const app = express();
var server = require('http').createServer(app);

server.listen(45588, function(){
        console.log('listening on IP');
});

// app.listen(8080, function(){
//         console.log('listening on IP');
// });

// app.get('/', function(요청, 응답){
//         응답.send('용품점입니다.');
// });
