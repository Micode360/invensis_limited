import jwt from "jsonwebtoken";

export default function authMiddleware(handler: any) {
  return async (req: any, res: any) => {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res
        .status(401)
        .json({ message: "Not authorized to accesss this route" });
    }
    try {
      const isValidToken = await jwt.verify(
        token,
        process.env.JWT_SECRET as string
      );

      if (!isValidToken) {
        return res.status(401).json({ error: "Invalid token" });
      }

      return handler(req, res);
    } catch (error) {
      console.error("Authentication error:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
}
