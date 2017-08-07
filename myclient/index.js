const express = require('express');

const app = express();
// tell the app to look for static files in these directories
//app.use(express.static('./client/dist/'));
app.get('/*',(req,res)  => {
	res.sendFile(path.join(__dir, sever/static/index.html));
});
// start the server
app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000 or http://127.0.0.1:8000');
});