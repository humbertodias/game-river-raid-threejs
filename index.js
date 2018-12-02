const express = require('express')
const app = express()
app.use(express.static('.'))
app.listen(8080, () => console.log('Server running on http://0.0.0.0:8080/game'))