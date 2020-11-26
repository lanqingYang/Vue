const express=require('express');
const path=require('path');
//post参数 记得设置app.use
const bodyParser=require('body-parser');
const app=express();
//静态资源访问路径
app.use(express.static(path.join(__dirname,'Vue基础知识')))

//要用bodyparser就要设置这个东西
// (内部实现机制: 对所有请求调用bodyParser.urlencoded({ extended:false })对请求进行处理,
// ps:  extended:false false,表示利用queryString系统模块对参数的值进行处理;
//  true用另一个第三方模块QS来处理参数(更强大,但目前可以不用)
//   ..1检测当前请求中是否包含了请求参数,包含则接收,并将请求参数转换成对象类型
//   ..2为req这个参数添加一个body属性,将请求参数的值赋给了req.body属性


// 使用bodyParser.urlencoded({ extended: false }),使node后台支持了第一种请求体. application/x-www-form-urlencoded
// 使用bodyParser.json(),使node后台支持了第二种请求体.application/json
//处理传递过来是json的时候:

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));



//04axios-get按钮
app.get('/getbtn',(req,res)=>{
    console.log(req.query);
    let {num}=req.query;
    res.send({
        num:num
    })
})
//04axios-post按钮
app.post('/postbtn',(req,res)=>{
    console.log(req.body);
    res.send('post ok')
})

app.listen(3000);
console.log('服务器开启了...')