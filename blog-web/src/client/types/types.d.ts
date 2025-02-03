import { User } from "@prisma/client"; // Import your Prisma User type

declare global {
  namespace Express {
    interface Request {
      user?: User | null; // Or your user type
    }
  }
}