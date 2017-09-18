var command = require('./command')


// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

    if (cmd === 'pwd'){
        return command.pwd();
    } else if (cmd === 'date'){
        return command.date();
    } else if (cmd === 'ls') {
        return command.ls();
    }
//   switch (cmd){
//       case 'pwd':
//         process.stdout.write(process.cwd());
//         break;
//         default:
//   }

  //process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');

});
// console.log(process.stdout.write(Date()));
//console.log(process.cwd());

