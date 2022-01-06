const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000
const router = express.Router();


router.route('/2_5271552321199804659').get((req, res) => { res.sendFile(__dirname + '/2_5271552321199804659.pdf')})
.listen(PORT, () => console.log('Listening on ${ PORT }'))

router.route('/2_5271633072579108412').get((req, res) => { res.sendFile(__dirname + '/2_5271633072579108412.pdf')})
.listen(PORT, () => console.log('Listening on ${ PORT }'))
