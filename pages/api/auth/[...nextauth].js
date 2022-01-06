import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
  session: {
    jwt: true
  },
  jwt: {
    secret: process.env.JWT_SECRET
  },
  providers: [
    Providers.Cognito({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      domain: process.env.COGNITO_DOMAIN
    })
  ],
  pages: {
    signIn: "/login"
  },
})
