const fileSystem = require('fs');
const path = './gulp/tasks';
const arrPathFiles = fileSystem.readdirSync(path).map(link => link = path+'/'+link);
module.exports = arrPathFiles;