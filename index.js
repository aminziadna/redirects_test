const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('hello fck fck');
});

app.listen(port, () => {
	console.log(" testing app listening at http://localhost:${port}");
});
