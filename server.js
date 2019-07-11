const asana = require('asana');
const client = asana.Client.create().useAccessToken('0/7489731505531d10ba116f8bc77ed4eb');
client.users.me().then(function(me) {
  console.log(me);
});


client.projects.findAll({ workspace: 750933678375982 }).then((projects) => {
  console.log(projects)
}).catch((err) => {
  console.log(err.value)
})

client.tasks.create({ workspace: 750933678375982, name: "api" }).then(() => {
  console.log('successfull')
  
}).catch((err) => {
  console.log(err.value)
})