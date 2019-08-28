var url = require('url');
// console.log(url.parse())
// var obj = url.resolve('http://127.0.0.1/q','/b')
// console.log(obj);
// var parse = url.parse('http://127.0.0.1');
// console.log(parse)
var obj = url.format({
    protocol: null,
    slashes: null,
    auth: null,
    host: null,
    port: '3000',
    hostname: 'http://127.0.0.1',
    hash: '#a',
    search: '?username=admin1',
    query: 'username=admin',
    pathname: '/send',
    path: '/send?username=admin',
    href: '/send?username=admin',
})
console.log(obj);