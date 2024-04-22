import NextAuth, { AuthOptions } from "next-auth";
import {Account, User as AuthUser} from "next-auth"
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import Admin from "@/models/Admin"
import bcrypt from "bcrypt";
import connect from "@/Utils/database";


export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },
            async authorize(credentials: any) {
                await connect();
                try {
                    const admin = await Admin.findOne({email: credentials.email});
                    if(admin) {
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            admin.password
                        )
                        if(isPasswordCorrect) {
                            return admin;
                        }
                    }
                } catch (err:any) {
                    throw new Error(err);
                }
            }
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID ?? "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
        }),

    ],


    debug: process.env.NODE_ENV === 'development',
    secret: process.env.NEXTAUTH_SECRET
}





export async function POST( req: Request) {
    await NextAuth( authOptions);
    return Response.json({ message: "Authentication successful" });
}


export async function GET( req: Request) {
    await NextAuth( authOptions);
    return Response.json({ message: "Authentication successful" });
}



