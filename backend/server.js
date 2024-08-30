const express = require('express');
const app = express();
const port = 3001;
const cors = require("cors")

app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.get('/getData', (req, res)=>{
    res.status(200).send({"message":"Success", data:{
        name:"Santosh Payasi"
    }})
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    }
);
