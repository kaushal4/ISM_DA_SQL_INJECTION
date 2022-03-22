var mysql      = require('mysql');
try{
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'oracle',
        database: 'test'
    });
}catch(err){
    console.log(err);
    process.exit();
}
const asyncQuery = async (query)=>{
    return new Promise((resolve,reject)=>{
        connection.query(query,(error,result,fields)=>{
            if(error) reject(error);
            resolve(result);
        })
    })
}


//const asyncQuery = new Promise((resolve,reject)=>{
//        connection.connect();
//        connection.query(query,(error,result,fields)=>{
//            if(error) reject(error);
//            resolve(result);
//        })
//        connection.end();
//    });

module.exports = {asyncQuery};