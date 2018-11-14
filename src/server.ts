import Koa from 'koa';
import Router from 'koa-router';

const server = new Koa();
const router = new Router();

router.get('/*', async (ctx) => {
    ctx.body = 'Hello World!';
});

server.use(router.routes());

server.listen(3000);

console.log('Server running on port 3000', process.env.TEST);
