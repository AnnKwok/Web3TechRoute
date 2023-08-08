var fs = require("fs");

function readFile(src, afterRead) {
     //异步读取函数
     let content = fs.readFile(src, function (err, data) {
          if (err) {
              return console.error(err);
          }
          console.log("异步读取: " + data.toString());
       });
       //读取后执行
       afterRead();
   }
   

   readFile('input.txt', () => {
     console.log(`回调执行`);
     // console.log( _ ); // _ 是所加载的脚本中声明的一个函数
   });