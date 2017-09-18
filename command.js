var fs = require('fs');





function pwd() {
        return process.stdout.write(process.cwd());
} 
function date() {
        return process.stdout.write(Date());
}

function ls() {
 fs.readdir('.', function(err, files) {
        if (err) throw err;
        files.forEach(function(file) {
         process.stdout.write(file.toString() + "\n");
        })
        process.stdout.write("prompt > ");
      });
}



module.exports = {
    pwd: pwd,
    date: date,
    ls:ls
}