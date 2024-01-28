import { default as fastify } from 'fastify';
import { PrismaClient } from '@prisma/client';
import 'dotenv/config';
// @ts-ignore
import { default as fastifyCors} from '@fastify/cors'

const app = fastify();

app.register(fastifyCors as any, {
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
});

const prisma = new PrismaClient();

app.get('/api/users', async (req, res) => {
  const users = await prisma.user.findMany();

  return res.code(200).send(users);
});

const server = app.listen({port: 3000}, (err) => {
  if (err) {
    console.error(err)
  }
});;