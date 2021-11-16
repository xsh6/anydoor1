const http = require('http')
const chalk = require('chalk')
const path = require('path')
const conf = require('./config/defaultConfig')
const route = require('./helper/route')
const openUrl = require('./helper/openUrl')

class Server {
   constructor(config) {
     this.conf = Object.assign({},conf,config);
   }

   start() {
     const server = http.createServer((req,res) => {
       const filepath = path.join(this.conf.root,req.url)
       route(req,res,filepath,this.conf)
     })

     server.listen(this.conf.port,this.conf.localhost,() => {
       const add = `http://${this.conf.localhost}:${this.conf.port}`
       console.log(`Server start at ${chalk.green(add)}`)
       openUrl(add)
       // console.log(conf.root);
     })
   }
}

module.exports = Server
