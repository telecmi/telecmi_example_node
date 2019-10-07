const express = require('express'),
bodyParser = require('body-parser'),
app = express();

// parse application/json
app.use(bodyParser.json());


app.post('/you-have-call',(req,res)=>{

    //Received CDR JSON Object from TeleCMI platform
    var cdr = req.body;

    console.log(cdr);

    res.send('got it');

})


app.listen(5000);