/* 
    请求地址: http:localhost:3000/weather_mini
    请求方式:get
    请求参数:city
    相应内容:天气信息

    1.点击回车 :按下回车(v-on,.enter)\查询数据(axios接口 v-modle)\渲染数据(v-for 数组 that)
    2.查询数据 :点击城市 查询数据 渲染数据
    3.渲染数据
*/

var app=new Vue({
    el:'#app',
    data:{
        city:'',
        weatherList:[],
        cities:['北京','深圳','上海']
    },
    methods: {
        searchWeather:function(){
            // console.log('天气查询');
            // console.log(this.city);
            var that=this;
            this.weatherList=[];
            axios.get('http://localhost:3000/weather_mini?city='+this.city).then(
                function(response){
                    // console.log(response.data.forecast)
                    
                    response.data.forecast.forEach(item => {
                        that.weatherList.push(item);
                    });
                }
            ).catch(function(err){
                console.log(err);
            })

        },
        changeCity:function(city){
            this.city=city;
            this.searchWeather();

        }
    },
})