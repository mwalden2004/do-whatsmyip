const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const fetch = require("node-fetch");

app.get('/', async (req, res) => {
	const req = await fetch("https://api.myip.com");
	const resp = await req.json();
	res.json(resp);
})


app.listen(port, () => console.log(`whatsmyip app listening on port ${port}!`))
