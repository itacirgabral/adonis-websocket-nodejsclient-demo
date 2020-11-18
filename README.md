# ADONIS WEBSOCKET NODEJS CLIENT DEMO

```
  npm run dev
```

## Connect
```javasript
const token = process.env.JWT_TOKEN
const ws = new WS(`ws://localhost:3333/adonis-ws?token=${token}`)
```

## On open
```javascript
const ping = JSON.stringify({ t: 8 })
const dt = Number(clientInterval)
setInterval(() => ws.send(ping), dt)
```
```javascript
const joinchat = JSON.stringify({ t: 1, d:{ topic: "chat" }})
ws.send(joinchat)
```

## On join ack
```javascript
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
let n = 0

if (topic === 'chat') {
  ws.send(falacomigo(n++))
  setInterval(() => ws.send(falacomigo(n++)), 1000)
}
```

## on event
```javascript
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

if (event === 'message' && topic === 'chat' && data.username !== 'zapguiado') {
  const username = data.username
  const text = data.body

  const message = `Olá ${username} \\o/ \nvocê disse ${text}`
  ws.send(reply(message))
}
```