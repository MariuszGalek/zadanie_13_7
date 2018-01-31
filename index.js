var fs = require('fs');
var colors = require('colors');

fs.readdir('./', function(err, files) {
    if (err) throw err;

   console.log('All files list'.blue);
   console.log(files);

   fs.writeFile('./files.txt', files, function(err) {
        if (err) throw err;
        console.log('List of files saved in a files.txt'.green);
   });
});