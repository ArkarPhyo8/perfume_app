import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";

export const authOptions = {
  providers: [
    CredentialsProvider({
      // name: "Credentials",
      // credentials: {
      //   username: { label: "Username", type: "text", placeholder: "mg mg" },
      //   password: { label: "Password", type: "password" },
      // },
      async authorize(credentials, req) {
        const { name, email } = credentials;
        const user = { name, email };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
