const ping = JSON.stringify({ t: 8 })
const joinchat = JSON.stringify({ t: 1, d:{ topic: "chat" }})
let pingIntervalId = 0

const mkOpen = ({ ws }) => ({ connId, serverInterval, serverAttempts, clientInterval, clientAttempts }) => {
  console.log('## message open')

  const dt = Number(clientInterval)
  console.log(`clientInterval ${dt}`)

  clearInterval(pingIntervalId)
  pingIntervalId = setInterval(() => ws.send(ping), dt)

  // JOINT "CHAT" ROOM
  ws.send(joinchat)
}

module.exports = mkOpen
