const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000

app.get('/2_5271552321199804659', (req, res) => { res.sendFile(__dirname + '/2_5271552321199804659.pdf')})
.listen(PORT, () => console.log('Listening on ${ PORT }'))



