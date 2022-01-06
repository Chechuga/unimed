const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000

app.get('/2_527155232119980465912', (req, res) => { res.sendFile(__dirname + '/2_527155232119980465912.pdf')})
.listen(PORT, () => console.log('Listening on ${ PORT }'))
