import { default as express } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = express();

app.get('/api/users', async (req: express.Request, res: express.Response) => {
  const users = await prisma.user.findMany();

  return res.status(200).json(users);
});

const server = app.listen(3000);