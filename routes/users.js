var express = require('express');
var router = express.Router();
const  UserServer=require('../servers/userServer');
/* GET users listing. */  //获取数据
router.get('/', function(req, res, next) {
  // var us=req.query.firstname;
  // const  u=new User(req.query.firstname,req.query.lastname,req.query.age);
  // console.log(u.getNme());
   // res.locals.user=u; 这种方式也可以返回数据
   // console.log(res.locals.user);
   // res.render('user',{ user: u }); //这种方式也可以返会数据
 // 一般有请求服务的用render
  // res.send('respond with a resource');
  //   一般不请求服务的可以send
  const  user=UserServer.getAllusers();
  res.locals.user=user;
  console.log( user);
  res.render('user');
});
// 添加数据
router.post('/',(req,res)=> {
     // var us=req.query.firstname;
    // console.log(us);
     const  {id,firstname,lastname,age}=req.query;
     // console.log(firstname,lastname,age);
     const data=UserServer.addUser(id,firstname,lastname,age);
      res.json(data);
});

router.get ('/:userId',(req,res)=>{
    const userid=req.params.userId;
    const  user=UserServer.getUserid(Number(userid));
    res.locals.user=user;
    res.render('users');
   // http://localhost:3000/users/1
});


router.post('/:userId/subject',(req,res,next)=>{
     try {
         const userid=req.params.userId;
         const  url=req.body.url;
         const us=UserServer.creaTion(Number(userid),url);
         res.json(us);
     }catch(e) {
         next(e);
     }
})
// 删除
router.post('/del',function (req,res) {
       const  userid=req.body.userId;
       console.log(userid);
       const sub=UserServer.deluser(userid);
        res.json(sub);
})
module.exports = router;


// 获取数据方式有  post query
// post  body    需要字符串
//  get 获取param  //params
// var orderId=req.param('orderId');