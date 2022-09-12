import NextAuth, { User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Email',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'jhon@doe.com',
        },
      },
      async authorize(credentials, req): Promise<User> {
        const { email } = credentials;

        const b = Buffer.from(email);
        const id = b.toString('base64');

        if (email) {
          return {
            id,
            email,
            name: '',
            access_token: id,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.access_token = user.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      const { access_token, ...user } = token;

      session.accessToken = access_token;
      session.user = user;

      return session;
    },
  },
});
