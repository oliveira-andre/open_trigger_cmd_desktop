let is = require("electron-is");

function getOS() {
    if (is.windows())
      console.log("Windows Detected.")
    if (is.macOS())
      console.log("Apple OS Detected.")
    if (is.linux())
      console.log("Linux Detected.")
}

function execCommand() {
  const process = require('child_process');

  getOS();
  let command = process.spawn('./test.sh', [], { shell: true }); 

  command.on('error', function(err) {
    console.log('stderr: <'+err+'>' );
  });

  command.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  command.stderr.on('data', function (data) {
    console.log('stderr: <'+data+'>' );
  });


  command.on('exit', (code) => {
    console.log(`Child exited with code ${code}`);
  });
}
