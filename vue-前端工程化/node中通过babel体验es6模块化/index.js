//在命令行中执行 npx babel-node index.js 执行index.js文件
console.log('babel ok')
//1.默认文件被导入
import m1 from './m1.js'

console.log(m1)

//2.按需导入
import {s1,s2,say} from './m1.js'
console.log(s1,s2,say)

//也可以写在一起导入
// import m1,{s1,s2,say}  from './m1.js'

//3.单纯导入模块并执行
import './m2.js'
