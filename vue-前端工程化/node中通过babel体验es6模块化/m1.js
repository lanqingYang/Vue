let a=10;
let c=20;
let d=40;

function show(){
    console.log(1111111);
}

/* 1.默认导出  没有导出任何模块 ，在另一文件夹导入 会导入一个空对象 */
export default{
    a,c,show
}


//每个模块中，只允许使用唯一的一次export default 否则会报错！
// export default{
//     d
// }

/* 2.按需导出 */
export  let s1='aaa';
export  let s2="bbb";
export function say(){
    console.log('0000000')
}
