/**
 * Created by zhao on 2017/11/28.
 * 数据库链接配置
 */
const mongoose=require("mongoose");
const  url=`mongodb://localhost:27017/db_mytest`;
mongoose.Promise=Promise;
const  connection=mongoose.connect(url,{useMongoClient:true});

const  db=mongoose.connection;
db.on("open",(e)=>{
    console.log("数据库链接成功");
});
db.on("error",(e)=>{
    console.log(e);
});
module.exports=db;