import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma} from '../../services/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { limit } = req.query;
    const users = await prisma.user.findMany({
      take: parseInt(limit as string) || 100
    });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({error: err});
  }
}

export default handler;