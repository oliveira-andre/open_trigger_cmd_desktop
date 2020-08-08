const is = require('electron-is');
const process = require('child_process');

const currentUser = 'teste';
const commandName = 'teste';

function getOS() {
  let OS = '';
  if (is.windows()) { OS = 'windows'; }
  if (is.macOS()) { OS = 'mac'; }
  if (is.linux()) { OS = 'linux'; }

  return OS;
}

function execCommand() {
  const OS = getOS();
  const command = process.spawn(`./${OS}/${currentUser}/${commandName}.sh`, [], { shell: true });

  command.on('error', (err) => {
    console.log(`stderr: < ${err} >`);
  });

  command.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  command.stderr.on('data', (data) => {
    console.log(`stderr: < ${data} >`);
  });

  command.on('exit', (code) => {
    console.log(`Child exited with code ${code}`);
  });
}

export default execCommand;
