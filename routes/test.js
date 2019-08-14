const express = require('express');
const router = express.Router();
const fs = require('fs');


function jsonRes(newPath = ''){
    let result = [];
    fs.readdir(newPath,'utf8',(err,data)=>{
        if (data){
            data.forEach((val,ind)=>{
                fs.stat(newPath+'/'+val, (err,stats)=>{
                    if (stats.isDirectory()){
                        result[ind] = {
                            'type' : 'folder',
                            'name' : val,
                            'path' : newPath+'/'+val,
                            'items' : jsonRes(newPath+'/'+val)
                        };
                    } else if (stats.isFile()) {
                        result[ind] = {
                            'type' : 'file',
                            'name' : val,
                            'path' : newPath+'/'+val,
                            'size' : stats.size
                        };
                    }
                });
            });
        };
    });
    return result;
};
let a = jsonRes('./test');


router.get('/', (req,res)=>{
    //res.render('index', {title: 'World!'});
    res.json(a);
});
module.exports = router;