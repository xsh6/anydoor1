const {exec} = require('child_process')

module.exports = (url) => {
  switch (exec.platform) {
    case 'darwin':
      exec(`open${url}`)
      break
    case 'win32':
      exec(`start${url}`)
      break
  }
}
