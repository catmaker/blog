import { DefaultSeesion } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      username: string;
    } & DefaultSeesion["user"];
  }
}
