import { connectToDatabase } from "@/helpers/server-helper";
import { prisma } from "@/lib/prisma";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
  secret: process.env.SECRET,

  providers: [
    CredentialsProvider({
      name: "Credentials",
      // credentials: {
      //   username: { label: "Username", type: "text", placeholder: "mg mg" },
      //   password: { label: "Password", type: "password" },
      // },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        

        await connectToDatabase();
       const user= await prisma.user.findMany()
        // console.log("user -", user);
        if (user) {
          return user[0];
        } else {
          return null;
        }
      },
    }),
  ],

  // callbacks: {
  //   async jwt({ token, account, profile }) {
  //     console.log("jwt callback -",token);
  //     return token;
  //   },

  //   async session({ session, token }) {
  //     console.log("token", token.jti);
  //     return {
  //       ...session,
  //       user: {
  //         ...session.user,
  //         id: token.jti,
  //       },
  //     };
  //     // return session;
  //   },
  // },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
