import app from './app';
const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.DB_HOST);
const port = 3333;

app.listen(port);
    
console.log('server on port ' + port);