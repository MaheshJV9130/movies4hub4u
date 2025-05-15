const express = require('express')
const app = express()
const port = 3000
app.use(express.static(__dirname))
app.get('/download', (req, res) => {
  res.download('./assets/thoda-wait-karlo-prince-kashif.gif')
})
app.get('/', (req, res) => {
  res.sendFile('index.html')
})
// app.get('/json', (req, res) => {
//   res.send('./assets/thoda-wait-karlo-prince-kashif.gif')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
