import { User } from "../../src/models/BaseUser";

declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}
