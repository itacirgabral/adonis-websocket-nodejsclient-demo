const reply = body => JSON.stringify({
  t: 7,
  d: {
    topic: "chat",
    event: "message",
    data: { 
      username: "zapguiado", 
      body
    }
  }
})

const mkEvent = ({ ws }) => ({ event, topic, data }) => {
  console.log('## message event')

  if (event === 'message' && topic === 'chat' && data.username !== 'zapguiado') {
    const username = data.username
    const text = data.body

    const message = `Olá ${username} \\o/ \nvocê disse ${text}`
    ws.send(reply(message))
  }
  
}

module.exports = mkEvent
