const express = require('express')
const next = require('next')
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
    
app.prepare()
.then(() => {
  const server = express()
    
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  const PORT = process.env.PORT || 5000
  server.listen(PORT, () => {
    console.log(`Mixing it up on port ${PORT}`)
  })
    
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})