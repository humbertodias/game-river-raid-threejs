var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('.')).listen(8080, function(){
    console.log('Server running on http://0.0.0.0:8080/game');
});