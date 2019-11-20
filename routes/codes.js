const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.post('/upload',(req,res) => {
    if(req.files)
    {
        var codefile = req.files.codefile;
        var filename = codefile.name;
        var filepath = path.join(__dirname,'..','codefiles',filename);
        codefile.mv(filepath,(err) => {
            if(err)
            {
                console.log(err);
                res.send('File Upload Failed...');
            }
                
            else
            {
                var code = fs.readFileSync(filepath,'utf-8');
                var resp = {
                    code
                };
                res.json(resp);
            }   
                
        });
    }
    else
    {
        res.send("File not found!!!");
    }
});

module.exports = router;