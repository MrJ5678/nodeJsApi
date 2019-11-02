const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const router = new Router()
const usersRouter = new Router({ prefix: '/users' })

router.get('/', (ctx, next) => {
    ctx.body = '这是主页'
})

usersRouter.get('/', (ctx, next) => {
    ctx.body = [{ name: '李雷' }, { name: '韩梅梅' }]
})

usersRouter.post('/', (ctx, next) => {
    ctx.body = {name: '李雷'}
})

usersRouter.get('/:id', (ctx, next) => {
    ctx.body = {name: '李雷'}
})

usersRouter.put('/:id', (ctx, next) => {
    ctx.body = {name: '李雷2'}
})

usersRouter.delete('/:id', (ctx, next) => {
    ctx.status = 204
})

app.use(bodyParser())
app.use(router.routes())
app.use(usersRouter.routes())
app.use(usersRouter.allowedMethods())

app.listen(3000)
