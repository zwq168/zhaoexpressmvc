/**
 * Created by zhao on 2017/11/28.
 */
const  mongoose=require("mongoose");
const  Schema=mongoose.Schema;
const  oBjectid=Schema.Types;
const  userSchema=new Schema({
    userId:{type:oBjectid,required:true,index:1},
    url:{type:String,required:true}

});
const userModel=mongoose.model('sub',userSchema);
// 获取数据
async function list(){
     const  user=await  userModel.find({});
     return user;
}
// 插入数据
async  function inSert(userId,url){
    const  user=await userModel.create({userId,url});
    return user;
}
// 循环查找id
async  function getById(userId){
    const  user=await  userModel.findOne(userId);
    return user;
}
module.exports={
    list,
    inSert,
    getById,
}