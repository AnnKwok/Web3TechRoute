/*
async function wait() {
     await new Promise(resolve => setTimeout(resolve, 1000));
   
     return 10;
   }
   
   function f() {
     // 1 秒后显示 10
     wait().then(result => console.log(result));
   }
   
   f();
*/
async function loadJson(url) {
     await fetch(url).catch(console.log('调用失败'));
   }
   
   loadJson('https://javascript.info/no-such-user.json'); // Error: 404