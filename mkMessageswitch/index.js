const mkEvent = require('./mkEvent')
const mkJoin = require('./mkJoin')
const mkJoinAck = require('./mkJoinAck')
const mkJoinError = require('./mkJoinError')
const mkLeave = require('./mkLeave')
const mkLeaveAck = require('./mkLeaveAck')
const mkLeaveError = require('./mkLeaveError')
const mkOpen = require('./mkOpen')
const mkPing = require('./mkPing')
const mkPong = require('./mkPong')

const mkMessageswitch = ({ ws }) => ({
  event: mkEvent({ ws}),
  join: mkJoin({ ws}),
  joinAck: mkJoinAck({ ws}),
  joinError: mkJoinError({ ws}),
  leave: mkLeave({ ws}),
  leaveAck: mkLeaveAck({ ws}),
  leaveError: mkLeaveError({ ws}),
  open: mkOpen({ ws}),
  ping: mkPing({ ws}),
  pong: mkPong({ ws})
})

module.exports = mkMessageswitch
