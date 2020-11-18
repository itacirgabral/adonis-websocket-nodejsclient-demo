const falacomigo = n => JSON.stringify({
  t: 7,
  d: {
    topic: "chat",
    event: "message",
    data: { 
      username: "zapguiado", 
      body: `fala comigo ${n}`
    }
  }
})
let falacomigoIntervalId = 0
let n = 0

const mkJoinAck = ({ ws }) => ({ topic }) => {
  console.log('## message join ack')

  if (topic === 'chat') {
    ws.send(falacomigo(n++))
    clearInterval(falacomigoIntervalId)
    falacomigoIntervalId = setInterval(() => ws.send(falacomigo(n++)), 10000)
  }
}

module.exports = mkJoinAck
