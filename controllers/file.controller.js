const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'files/' })

app.post('/profile', upload.single('avatar'), function (req, res, next) {

})