import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'
import bcrypt from "bcryptjs";


const prisma = new PrismaClient();

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req; 
  if (method === 'POST') {
  const { username, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(15);
    let cryptPassword = await bcrypt.hash(password, salt);

    const Register = await prisma.user.create({
      data: {
        username,
        password: cryptPassword,
      },
    });

    res.status(201).json(Register);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to register' });
  }
} else {
  res.status(405).json({ error: 'Method Not Allowed' });
}
  //  return res.status(405).json({ error: 'Method not allowed' });
}
