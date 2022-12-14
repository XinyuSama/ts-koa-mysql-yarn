/**
 * description: 路由层，在这个文件夹中写路由 路由和controller对应的方法绑定
 * date: 2022/3/6 下午5:54 <br>
 * author: xinyu <br>
 * version: 1.0 <br>
 */
// 请求路径 中间件处理的 映射
const Service = require('koa-router');
//请求进来后 先通过中间件处理，比如鉴别权限等等
// 中间件

// 具体的处理逻辑 增删改查

const {
    getUser,
    addUser
} = require('../service/service.user');

// 前缀：
const deportmentRouter = new Service({
    //baseurl
    prefix: '/api'
});

deportmentRouter.get('/getUser', getUser);
deportmentRouter.post('/addUser', addUser);


// 导出
module.exports = deportmentRouter;
