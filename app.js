const express = require('express')
const path = require('path')
const app = express()
var router = express.Router();
const PORT = process.env.PORT || 5000

router.get('/2_5271552321199804659', (req, res) => { res.sendFile(__dirname + '/2_5271552321199804659.pdf')})
.listen(PORT, () => console.log('Listening on ${ PORT }'))

router.get('/2_5271633072579108412', (req, res) => { res.sendFile(__dirname + '/2_5271633072579108412.pdf')})
.listen(PORT, () => console.log('Listening on ${ PORT }'))

module.exports = router;
