import { prisma} from '../../services/db';

const users = async (req: any, res: any) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({error: err});
  }
}

export default users;