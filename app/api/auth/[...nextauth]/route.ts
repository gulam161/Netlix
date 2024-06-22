import NextAuth from "next-auth";
import { authOptions } from "@/app/utils/auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     GoogleProvider({
//       clientId: process.env.CLIENT_ID as string,
//       clientSecret: process.env.CLIENT_SECRET as string,
//     }),
//     // ...add more providers here
//   ],

//   secret: process.env.NEXTAUTH_SECRET,
// } satisfies NextAuthOptions;

// export default NextAuth(authOptions);
