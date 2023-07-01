import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../libs/prisma"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === 'POST') {
    const { username, password } = req.body;

    try {
      const user = await prisma.user.findFirst({
        where: {
          username,
        },
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid password' });
      }

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string);

      res.status(200).json({ token });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'Failed to login' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
