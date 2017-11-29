/**
 * Created by zhao on 2017/11/28.
 */

const  mongoose=require("mongoose");
const  Schema=mongoose.Schema;
// const  oBjectid=Schema.Types;
const  userSchema=new Schema({
    name:{type:String,required:true,index:1},
    age:{type:Number,max:150,min:0}

});
const userModel=mongoose.model('user',userSchema);
// 插入数据
async function inSert(name,age){
    const  user=await userModel.create({name,age});
    return user;
}

async function getbyId(userid){
    const  sub=await userModel.findOne({_id:userid});
    if(sub){
        const user=userModel.find({});
        const  users=await  user.exec();
        return users;
    }
}

// 获取姓名
async  function  getbyName(name){
    const  sub=await userModel.findOne({name});
    return sub;
}

// 获取所有数据
async  function List(query){
    const user=userModel.find({});
    const  sub=await  user.exec();
    return sub;
}

// 删除数据
async  function deList(userid){
    const  sub=await userModel.remove({_id:userid});
    return sub;
}

// 修改数据
async  function Edit(userid,name,age){
    const  newuser=await userModel.update({_id:userid},{$set:{name:name,age:age}});
    return newuser;
}
module.exports={
    inSert,
    getbyId,
    getbyName,
    List,
    deList,
    Edit,
}