const express = require('express')
const app = express()
const PORT = 5000
const Smart_contract = require('./api/routes/smart_contract')



require('dotenv').config();
require('./config/database').connect() 

app.use(express.json())

app.use('/api', Smart_contract);


app.listen(PORT, () => {
    console.log(`Server running on PORT : ${PORT}`);
});