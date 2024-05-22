import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import KakaoProvider from "next-auth/providers/kakao";
import { saveUser } from "@/service/user";
import { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async signIn({ user: { id, name, image, email } }) {
      if (!email) {
        return false;
      }
      try {
        await saveUser({
          id,
          name: name || "",
          image,
          email,
          username: email.split("@")[0],
        });
      } catch (error) {
        console.error("사용자 저장 중 오류 발생:", error);
        return false; // 오류 발생 시 로그인 실패 처리
      }
      return true;
    },
    async session({ session }) {
      console.log(session);
      const user = session?.user;
      if (user !== undefined) {
        session.user = {
          ...user,
          username: user.email ? user.email.split("@")[0] : "", // username 추가 (email 주소에서 @ 앞부분만 추출
        };
      }
      return session;
    },
  },
};

export { authOptions };
