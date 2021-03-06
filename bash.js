var command = require('./command')


// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  data = data.toString().trim();
  var cmd = data.split(' ')[0];
  var args = data.split(' ').slice(1) ;

  if (command[cmd]){
    return command[cmd](args);
  } else {
    process.stderr.write('Command not found');
  }


  process.stdout.write('\nprompt > ');

});
// console.log(process.stdout.write(Date()));
//console.log(process.cwd());

function done (output){
  process.stdout.write(output);
  process.stdout.write('\nprompt>');
}

