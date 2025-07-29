import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "asd@algo.com"},
                password: { label: "Password", type: "password"}
            },
            async authorize(){
                return null
            }
        })
    ]
});
// This is the NextAuth handler for authentication
export { handler as GET, handler as POST };