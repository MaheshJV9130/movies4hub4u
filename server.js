const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
app.get('/download', (req, res) => {
  res.download('./assets/download.gif')
})
app.get('/', (req, res) => {
  res.sendFile('public/index.html')
})
// app.get('/json', (req, res) => {
//   res.send('./assets/thoda-wait-karlo-prince-kashif.gif')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
