const ws = require('ws')

const client = new ws('ws://localhost:3333/adonis-ws')

const ping = JSON.stringify({ t: 8 })
const pinger = () => client.send(ping)
let pingIntervalId = 0

client.on('close', e => {
  console.log('#########\n# CLOSE #\n#########')
  console.dir(e)
})

client.on('error', e => {
  console.log('#########\n# ERROR #\n#########')
  console.dir(e)
})

client.on('message', e => {
  console.log('###########\n# MESSAGE #\n###########')
  console.dir(e)

  const { t, d } = JSON.parse(e)
  
  if (t === 0) {
    // OPEN
    const dt = d.clientInterval
    clearInterval(pingIntervalId)
    setInterval(pinger, dt)
  }
})

client.on('open', e => {
  console.log('########\n# OPEN #\n########')
})

client.on('ping', e => {
  console.log('########\n# PING #\n########')
  console.dir(e)
})

client.on('pong', e => {
  console.log('########\n# PONG #\n########')
  console.dir(e)
})

client.on('unexpected-response', e => {
  console.log('#######################\n# UNEXPECTED_RESPONSE #\n#######################')
  console.dir(e)
})

client.on('upgrade', e => {
  console.log('###########\n# UPGRADE #\n###########')
  console.dir(e)
})