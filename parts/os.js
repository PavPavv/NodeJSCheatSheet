const os = require("os");
const cluster = require("cluster");


const cpus = os.cpus();

if (cluster.isMaster) {
  for (let i = 0; i < cpus.length - 2; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker with pid ${process.pid} is dead`);
    if (code === '') {
      cluster.fork();
    } else {
      console.log('Worker is dead...')
    }
  });
} else {
  console.log(`Worker with pid ${process.pid} is running now.`)

  setInterval(() => {
    console.log(`Worker with pid ${process.pid} is still running.`)
  }, 5000);

}


// console.log('OSSSSSSS')

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());




