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

function echo(args) {
        var extraCommand;
        args.map(function(el){
                if (el[0] === '$'){
                        extraCommand = el.slice(1);
                }
        });
        if (extraCommand){
                return process.stdout.write(process.env(extraCommand));
        }
        return process.stdout.write(args.join(' '));
}

function cat(args){
        var file = args[0];
        console.log(file);
        fs.readFile(file, (err,data) => {
                        if (err) throw err;
                        process.stdout.write(data);
        });
}

function head(){
        
}

module.exports = {
    pwd: pwd,
    date: date,
    ls: ls,
    echo: echo,
    cat: cat,
    head:head
}
