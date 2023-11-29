import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;

      return token;
    },
    async session({ session, token }) {
      session.user = token.user as any;

      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        logged: { label: "logged", type: "text" },
      },
      async authorize(credentials) {
        const hashedPassword = await bcrypt.hash(
          credentials!.logged === "yes" ? credentials!.password : "admin123",
          12
        );
        const userFound = {
          data: [
            {
              id: "1",
              name: "Test",
              email:
                credentials!.logged === "yes"
                  ? credentials!.email
                  : "admin@admin.com",
              password: hashedPassword,
            },
          ],
        };

        if (userFound.data[0].email !== credentials?.email)
          throw new Error("Invalid email");

        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          userFound.data[0].password
        );

        if (!passwordMatch) throw new Error("Invalid password");

        const { password, ...userWithoutPassword } = userFound.data[0];
        return userWithoutPassword;
      },
    }),
  ],
};

export default NextAuth(authOptions);
