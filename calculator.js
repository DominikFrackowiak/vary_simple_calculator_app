const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/index.html`)
})

app.post('/', (req, res) => {
	const num1 = req.body.num1
	const num2 = req.body.num2
	const result = Number(num1) + Number(num2)

	res.send(`The result of the calculation is: ${result}`)
})

app.listen(3000, () => {
	console.log('Dominik, server is running on port 3000')
})
