const WS = require('ws')
const mkMessageswitch = require('./mkMessageswitch')

const token = process.env.JWT_TOKEN

const ws = new WS(`ws://localhost:3333/adonis-ws?token=${token}`)
const messageswitch = mkMessageswitch({ ws })

ws.on('close', e => {
  console.log('#########\n# CLOSE #\n#########')
  console.dir(e)
})

ws.on('error', e => {
  console.log('#########\n# ERROR #\n#########')
  console.dir(e)
})

ws.on('message', e => {
  console.log('###########\n# MESSAGE #\n###########')
  console.dir(e)

  const { t, d } = JSON.parse(e)
  
  switch (t) {
    case 0:
      messageswitch.open(d)
      break;
    case 1:
      messageswitch.join(d)
      break;
    case 2:
      messageswitch.leave(d)
      break;
    case 3:
      messageswitch.joinAck(d)
      break;
    case 4:
      messageswitch.joinError(d)
      break;
    case 5:
      messageswitch.leaveAck(d)
      break;
    case 6:
      messageswitch.leaveError(d)
      break;
    case 7:
      messageswitch.event(d)
      break;
    case 8:
      messageswitch.ping(d)
      break;
    case 9:
      messageswitch.pong(d)
      break;
    default:
      console.log('unknown message type')
      console.dir({ t, d })
  }
})

ws.on('open', e => {
  console.log('########\n# OPEN #\n########')
})

ws.on('ping', e => {
  console.log('########\n# PING #\n########')
  console.dir(e)
})

ws.on('pong', e => {
  console.log('########\n# PONG #\n########')
  console.dir(e)
})

ws.on('unexpected-response', e => {
  console.log('#######################\n# UNEXPECTED_RESPONSE #\n#######################')
  console.dir(e)
})

ws.on('upgrade', e => {
  console.log('###########\n# UPGRADE #\n###########')
  console.dir(e)
})