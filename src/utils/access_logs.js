const fs = require('fs');
const path = require('path');
exports.accessLogSystem =  fs.createWriteStream( 
path.join('./','access.log'),
{ flags: 'a'}
);