const express=require('express');
const path=require('path');
//post参数 记得设置app.use
const bodyParser=require('body-parser');
const app=express();
//静态资源访问路径
app.use(express.static(path.join(__dirname,'Vue基础知识')))


//解决跨域
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "mytoken"); //15-03 用
    res.header("X-Powered-By", ' 3.2.1');
    //返回数据格式为json字符串
    // res.header("Content-Type", "application/json;charset=utf-8");
    //返回数据格式设置为html文档
    res.header("Content-Type", "text/html;charset=utf-8");
    next();
  });

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

//16 async/await
app.get('/async1',(req,res)=>{
    res.send('1')
})
app.get('/async2',(req,res)=>{
    res.send(req.query.info)
})


//15-02axios传递参数
app.get('/axios',(req,res)=>{
    res.send("axios get 传递参数传统和params方式:" + req.query.id)
})
app.get('/axios/:id',(req,res)=>{
    res.send("axios get 传递参数restful风格:" + req.params.id)
})

app.post('/axios',(req,res)=>{
    res.send("axios post 传递参数:" + req.body.username+'---'+req.body.age)
})

app.put('/axios/:id',(req,res)=>{
    res.send("axios put 传递参数restful风格:" + req.params.id+'---'+ req.body.username+'---'+req.body.age)
})
app.put('/axios',(req,res)=>{
    res.send("axios put 传递参数风格:" + req.body.username+'---'+req.body.age)
})

//res.json 把 返回数据直接转化为了json数据结构
app.get('/axios-json',(req,res)=>{
    res.json({
        name:'sydney',
        like:'fruit'
    })
})



//15-axios
app.get('/adata',(req,res)=>{
    res.send("hello axios!")
})



//14-02fetch
app.get('/books',(req,res)=>{
    res.send('传统的url传递参数:' +req.query.id)
})
//restful风格
app.get('/books/:id',(req,res)=>{
    res.send('restful的url传递参数：'+ req.params.id)
})

app.delete('/books/:id',(req,res)=>{
    res.send('delete请求传递参数：'+ req.params.id)
})

app.post('/books',(req,res)=>{
    res.send('post请求传递参数：'+req.body.username)
})

app.put('/books/:id',(req,res)=>{
    res.send('put请求传递参数:'+req.params.id+'-------'+req.body.username)
})

app.get('/json',(req,res)=>{
    res.json({
        uname:'tanghao',
        age:1
    })
})



//14-01fetch
app.get('/fdata',(req,res)=>{
    res.send('fdata ok')
})


//13.promise处理Ajax请求
app.get('/data2',(req,res)=>{
    let {name}=req.query;
    let str='hellow ' +name
    setTimeout(() => {
    res.send(str);
        
    }, 2000);
})


//13.promise处理Ajax请求
app.get('/data',(req,res)=>{
    let {name}=req.query;
    let str='hellow ' +name
    res.send(str);
})



app.listen(3000);
console.log('服务器开启了...')