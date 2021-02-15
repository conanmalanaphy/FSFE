const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) =>{
	res.send('Hello World, This is conan. I love my Lentil, she is wonderful!');
});

app.get('/demo', (req,res) =>{
	res.set("x-full-stack", "4life");
	res.status(418);
	res.send('Hello World, This is conan. I love my Lentil, she is wonderful!');
});

app.listen(port,() => console.log(`example app listening on port ${port}!`));

