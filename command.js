var fs = require('fs');
var request = require('request');

function pwd(args, done) {
        done(process.cwd());
}

function date(args, done) {
        done(Date());
}

function ls(args, done) {
        fs.readdir('.', function(err, files) {
                if (err) throw err;
                done(files.join('\n'))
        });
}

function echo(args, done) {
        var extraCommand;
        args.map(function(el){
                if (el[0] === '$'){
                        extraCommand = el.slice(1);
                }
        });
        if (extraCommand){
                done(process.env(extraCommand));
        }
        done(args.join(' '));
}

function cat(args, done){
        var file = args[0];
        console.log(file);
        fs.readFile(file, (err, data) => {
                if (err) throw err;
                done(data);
        });
}

function head(file, done){
        // count newlines to print the first five lines
        fs.readFile(file, function (err, data){
                if (err) throw err;
                done(data.split('\n').slice(0, 5).join('\n'));
        })
}

function tail(file, done){
        //count newlines to print the last five lines
        fs.readFile(file, function(err, data){
                if (err) throw err;
                done(data.split('\n').slice(-5).join('\n'));
        })
}

function sort (file, done){
        fs.readFile(file, function(err, text){
                if (err) throw err;
                done(text.split('\n').sort().join('\n'));
        });
}

function wc (file, done){
        fs.readFile(file, function(err, text){
                if (err) throw err;
                done(text.split('\n').length);
        });
}

function uniq (file, done){
        fs.readFile(file, function(err, text){
                if (err) throw err;
                var lines = text.split('\n');
                for (var i = 0; i < lines.length; i++){
                        if (lines[i] === lines[i + 1]){
                                lines.splice(i, 1);
                                i--;
                        }
                }
                done(lines.join('\n'));
        });
}

module.exports = {
    pwd: pwd,
    date: date,
    ls: ls,
    echo: echo,
    cat: cat,
    head: head,
    tail: tail,
    sort: sort,
    wc: wc,
    uniq: uniq
}
