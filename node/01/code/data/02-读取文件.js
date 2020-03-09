var fs = require( 'fs');


//2.读取文件
// 第一个参数就是要读取的文件路径
// 第二个参数就是一个回调函数
        // error 如果读取失败，error就是错误对象；如果读取成功 error就是null
        // data  和error同理
fs.readFile('./01.txt',function(error,data){
    //默认文件中存储的是二进制数据,但是为什么看到的不是0和1原因是二进制转为了16进制，但是
    //无论是二进制还是16进制，人类都不认识 ，所以我们可以通过toString方法将其转化为我们可以认识的字符串
    console.log('data :', data);
    console.log(data.toString());
});

