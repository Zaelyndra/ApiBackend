const express = require('express')
const app = express()
const port = 4000

app.get('/',  (req, res)=> {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Bonjour su mon server</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


