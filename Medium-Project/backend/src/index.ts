import { Hono } from 'hono'
import { userRouter } from './routes/user';
import { bookRouter } from './routes/blog';

export const app = new Hono<{
  Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
  }
}>();

app.route('/api/v1/user', userRouter)
app.route('/api/v1/book', bookRouter)

export default app


































// import { Hono } from 'hono'
// import { PrismaClient } from '@prisma/client/edge'
// import { withAccelerate } from '@prisma/extension-accelerate'

// import { sign, verify } from 'hono/jwt'
// // import dotenv from "dotenv"

// // dotenv.config();

// const app = new Hono<{
// 	Bindings: {
// 		DATABASE_URL: string,
//     JWT_SECRET: string,
// 	}
// }>();

// app.use('/api/v1/blog/*', async (c, next) => {
// 	const jwt = c.req.header('Authorization');
// 	if (!jwt) {
// 		c.status(401);
// 		return c.json({ error: "unauthorized" });
// 	}
// 	const token = jwt.split(' ')[1];
// 	const payload = await verify(token, c.env.JWT_SECRET);
// 	if (!payload) {
// 		c.status(401);
// 		return c.json({ error: "unauthorized" });
// 	}
// 	c.set('jwtPayload', { userId: payload.id });
// 	await next()
// })

// app.post('/api/v1/user/signup', async(c) => {
//  const prisma = new PrismaClient({
// 		datasourceUrl: c.env?.DATABASE_URL,
// 	}).$extends(withAccelerate());

//   const  body = await c.req.json();
//   try{
//     const user = await prisma.user.create({
//       data: {
//         email: body.email,
//         password: body.password
//       }
//     });
//     const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);

//     return c.json({ message: 'User created successfully', user ,jwt });
//   }catch (err) {
//     c.status(403);
//     return c.json({ error: 'Error while creating user' });
//   }
// })


// app.post('/api/v1/user/signin', async(c) => {
//   const prisma = new PrismaClient({
// 		datasourceUrl: c.env?.DATABASE_URL,
// 	}).$extends(withAccelerate());
//   const body = await c.req.json();

//   const user = await prisma.user.findUnique({
//     where:{
//       email: body.email,
//       password: body.password,
//     }
//   })
//   if(!user){
//     c.status(404);
//     return c.json({ error: 'User not found' });
//   }
//   const jwt = await sign({id: user.id},c.env.JWT_SECRET);
//   return c.json({jwt});
// });



// app.post('/api/v1/blog', (c) => {
// 	console.log(c.get('jwtPayload').userId);
// 	return c.text('signin route')
// })

// app.put('/api/v1/blog', (c) => {
//   return c.json({ message: 'Hello, this is a blog post!' });
// });

// app.get('/api/v1/blog/:id', (c) => {
//   return c.json({ message: `Hello, this is a blog post with ID: ${c.req.param('id')}` });
// });

// app.get('/api/v1/blog/:id', (c) => {
//   return c.json({ message:`blog bulk route` });
// });



// export default app
