/**
 * Created by zhao on 2017/11/28.
 */
const express = require('express');
const router = express.Router();
const  UserServer=require('../servers/user_server');
let resbonse;
router.use( function(req, res, next) {
    resbonse = {
        code: 0,
        message: '',
        result:''
    }
    next();
} );
/* GET users listing.
* 获取数据 list
* */
router.get('/', function(req, res, next) {
    (async()=>{
        const  user=await UserServer.getAllusers();
        res.locals.user=user;
        console.log( user);
        res.render('user');
    })(

    ).then((r)=>{
           console.log(r)
    }).catch((e)=>{
        console.log(e);
    })

});
/*
* 添加一个用户
* */
router.post('/add',(req,res)=> {
    (async()=>{
        // const  {name,age}=req.query;
        const  name=req.body.name;
        const  age=req.body.age;
        // console.log(name+'--'+age);return;
        const data=await  UserServer.addUser(name,age);
        resbonse.code="200";
        resbonse.message="成功";
        resbonse.result=data;
        res.json(resbonse);
    })().then((r)=>{
        console.log(11111)
    }).catch((e)=>{
        resbonse.code="400";
        resbonse.message="失败";
        resbonse.result='';
        res.json(resbonse);
    })


});
/*
* 获取对应id 的数据
* */

router.get ('/:userId',(req,res)=>{
    (async()=>{
        const userid=req.params.userId;
        const  user=await UserServer.getUserid(userid);
        res.locals.user=user;
        // res.json(user);
        res.render('users');
    })().then((r)=>{
         console.log(r)
    }).catch((e)=>{
       console.log(e);
    })

    // http://localhost:3000/users/1
});

/*
* // 新增一个url
* */

router.post('/:userId/subject',(req,res,next)=>{
    (async()=>{
        const  userid=req.params.userId;
        const  url=req.body.url;
        // console.log(userid+'--'+url);
        const us=await  UserServer.creaTion(userid,url);
        res.json(us);
    })().then((r)=>{
        console.log("1111")
    }).catch((e)=>{
        res.json({
            "code":400,
             "msg":"用户不存在",
        });
    })
});
/*
* // 删除
* */
router.post('/del',function (req,res) {
    (async()=>{
        const  userid=req.body.userId;
        console.log(userid);
        const sub=await UserServer.deluser(userid);
        resbonse.code="200";
        resbonse.message="成功";
        resbonse.result=sub;
        res.json(resbonse);
    })().then((r)=>{
        console.log(r)
    }).catch((e)=>{
        res.json("删除失败");
    })


});


/*
* // 修改
* */
router.post('/edit',function (req,res) {
    (async()=>{
        const  userid=req.body.userid;
        const  name=req.body.name;
        const  age=Number(req.body.age);
        const  sub=await UserServer.edituser(userid,name,age);
        resbonse.code="200";
        resbonse.message="修改成功";
        resbonse.result=sub;
        res.json(resbonse);
    })();

})
module.exports = router;


// 获取数据方式有  post query
// post  body    需要字符串
//  get 获取param  //params
// var orderId=req.param('orderId');