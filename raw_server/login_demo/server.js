const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');
let users = {};
let server = http.createServer((req, res) => {
    let { pathname, query } = url.parse(req.url, true);
    console.log(pathname);
    let str = '';
    req.on('data', data => {
        console.log(data);
        str += data;
    })

    req.on('end', () => {
        let post = querystring.parse(str);
        console.log('post', JSON.stringify(post), query);
        let { user, pass } = query;

        switch (pathname) {
            case '/reg':
                if (!user) {
                    res.write('{"err":1,"msg":"user is required"}');
                } else if (!pass) {
                    res.write('{"err":1,"msg":"pass is required"}');
                } else if (/^\w{8,32}$/.test(user)) {
                    res.write('{"err":1,"msg":"user is invaild"}')
                } else if (/['|"]/.test(pass)) {
                    res.write('{"err":1,"msg": invaild pass}')
                } else {
                    users[user] = pass;
                    res.write('{"err":0,"msg":"register success"}')
                }

                res.end();
                break;

            case '/login':
                if (!user) {
                    res.write('{"err":1,"msg":"user is required"}');
                } else if (!pass) {
                    res.write('{"err":1,"msg":"pass is required"}');
                } else if (/^\w{8,32}$/.test(user)) {
                    res.write('{"err":1,"msg":"user is invaild"}');
                } else if (/['|"]/.test(pass)) {
                    res.write('{"err":1,"msg": invaild pass}');
                } else if (!users[user]) {
                    res.write('{"err":1,"msg":"user is no exsit"}');
                }else if(user[user]!=pass){
                    res.write('{"err":1,"msg":"user or passsword is incorrect"}');
                }else {
                    users[user] = pass;
                    res.write('{"err":0,"msg":"login success"}')
                }
                res.end();
                break;
            default:
                fs.readFile(`www${pathname}`, (err, data) => {
                    if (err) {
                        res.writeHeader('404');
                        res.write("Not Found");
                    }else{
                    res.write(data);
                    }
                    res.end();
                });
        }

    })

});

server.listen(8080);