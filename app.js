const express=require('express');
const path=require('path');
//post参数 记得设置app.use
const bodyParser=require('body-parser');
const app=express();
//静态资源访问路径
app.use(express.static(path.join(__dirname,'Vue基础知识','案例')))

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

//06天气数据
const weatherLists=[{
    city:'深圳',
    forecast:[{
        date:'星期一',
        high:'高温 29°C',
        low:'低温 22°C',
        type:'晴'
    },
    {
        date:'星期二',
        high:'高温 25°C',
        low:'低温 21°C',
        type:'多云'
    }
]
},{
    city:'北京',
    forecast:[{
        date:'星期一',
        high:'高温 11°C',
        low:'低温 6°C',
        type:'雪'
    },
    {
        date:'星期二',
        high:'高温 14°C',
        low:'低温 2°C',
        type:'雨夹雪'
    }
]
},{
    city:'上海',
    forecast:[{
        date:'星期一',
        high:'高温 30°C',
        low:'低温 27°C',
        type:'晴'
    },
    {
        date:'星期二',
        high:'高温 35°C',
        low:'低温 24°C',
        type:'阴'
    }
]
}
]


//06天气查询
app.get('/weather_mini',(req,res)=>{
    //拿到get参数
    let {city}=req.query;
    let  result= weatherLists.find((item)=>{
        return item.city==city;
    })
    if(result){
        res.send(result);
    }else{
        res.send('没有该城市的数据')
    }

})


// 05 axios+vue
app.get('/getNum',(req,res)=>{
    var num=Math.random();
    res.send({num});
})


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