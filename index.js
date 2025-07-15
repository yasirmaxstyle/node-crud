const express = require('express')
const { constants: http } = require('http2')

const app = express()

app.use(express.urlencoded())
app.use(express.json())

app.use('/', require('./src/routers/index'))

app.get("/*splat", (req, res) => {
  return res.status(http.HTTP_STATUS_NOT_FOUND).json({
    success: true,
    message: "Backend is running well."
  })
})

app.listen(8080, () => {
  console.log('listening on port 8080')
})