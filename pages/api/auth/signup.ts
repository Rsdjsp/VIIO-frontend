import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email,password } = req.body;

    const userFound = {
      data: [
        {
          id: "1",
          name: "Test",
          email: "test@test.com",
          password: await bcrypt.hash("admin123", 12),
        },
      ],
    };

    if (userFound.data[0].email === email) {
      return res.status(409).json({
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = req.body;
    user.password = hashedPassword;

    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
