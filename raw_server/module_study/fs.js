const fs =  require('fs');

fs.writeFile('1.txt','erqeeeeeeeeee',err=>{
    if(err){
        console.log(err);
    }else{
        console.log('成功');
    }

})