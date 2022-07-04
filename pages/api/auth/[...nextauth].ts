/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { decode } from "jsonwebtoken";
import jwt from "jsonwebtoken";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import client from "prisma/client";
import GoogleProvider from "next-auth/providers/google";
import { JWT } from "next-auth/jwt";
import Cookies from "cookies";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000";

export default (req: NextApiRequest, res: NextApiResponse): void => {
    return NextAuth(req, res, {
        // Configure one or more authentication providers
        adapter: PrismaAdapter(client),
        providers: [
            CredentialsProvider({
                id: "credentials",
                name: "Login",
                credentials: {
                    email: {
                        label: "Email",
                        type: "text",
                        placeholder: "",
                    },
                    password: { label: "Password", type: "password" },
                },
                async authorize(credentials) {
                    if (!credentials) return null;
                    const prismaUser = await client.user.findUnique({
                        where: {
                            email: credentials.email,
                        },
                        rejectOnNotFound: true,
                    });

                    const isValid = bcrypt.compareSync(
                        credentials.password,
                        prismaUser.password || "",
                    );

                    const { password, ...userWithoutPassword } = prismaUser;
                    if (prismaUser && isValid) {
                        return userWithoutPassword;
                    } else {
                        return null;
                    }
                },
            }),
            GithubProvider({
                name: "Github",
                id: "github",
                clientId: process.env.GITHUB_ID,
                clientSecret: process.env.GITHUB_SECRET,
            }),
            GoogleProvider({
                clientId: process.env.GOOGLE_ID as string,
                clientSecret: process.env.GOOGLE_SECRET as string,
            }),
        ],
        events: {
            createUser: async (user) => {
                await client.preference.create({
                    data: {
                        userId: user.user.id,
                    },
                });
            },
        },

        session: {
            strategy: "jwt",
            maxAge: 30 * 24 * 60 * 60, // 30 days
            updateAge: 24 * 60 * 60, // 24 hours
        },

        // logger: {
        //     error: (code, metadata) => {
        //         console.error(code, metadata);
        //     },
        //     warn: (code) => {
        //         console.warn(code);
        //     },
        //     debug: (code, metadata) => {
        //         console.debug(code, metadata);
        //     },
        // },

        jwt: {
            secret: process.env.JWT_SECRET,
            encode: async ({ secret, token, maxAge }) => {
                const cookies = new Cookies(req, res, {
                    secure: process.env.NODE_ENV === "production",
                });
                if (!token) {
                    return Promise.reject();
                }

                const userFromDatabase = await client.user.findUnique({
                    where: {
                        email:
                            typeof token.email === "string" ? token.email : "",
                    },
                });
                const newToken = jwt.sign(
                    {
                        picture: token.picture,
                        id: token.id,
                        name: token.name,
                        state: token.state,
                        email: token.email,
                        nickname: token.nickname,
                        roles: userFromDatabase?.role,
                    },
                    secret,
                    {
                        algorithm: "HS256",
                        expiresIn: 30 * 24 * 60 * 60, // 30 days
                    },
                );
                cookies.set("token", newToken, {
                    domain: process.env.COOKIE_DOMAIN,
                    secure: process.env.NODE_ENV === "production",
                    httpOnly: true,
                    sameSite: "lax",
                });
                cookies.set("unsafe-token", newToken, {
                    secure: false,
                    httpOnly: false,
                });

                return newToken;
            },
            decode: async ({ secret, token }) => {
                const decoded = decode(token as string);
                return decoded as JWT;
            },
        },

        secret: process.env.JWT_SECRET,

        callbacks: {
            async redirect({ url, baseUrl }) {
                return "/";
            },
            async signIn(param) {
                const isAllowedToSignIn = true;
                if (isAllowedToSignIn) {
                    return true;
                } else {
                    return false;
                }
            },
            async session({ session, token, user }) {
                const { expires } = session;
                session.token = token;
                return { ...session, ...token, ...user };
            },
            async jwt({ token, account, isNewUser, profile, user }) {
                return { ...token, ...user };
            },
        },
        debug: true,
    });
};
