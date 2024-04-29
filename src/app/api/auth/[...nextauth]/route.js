// import { User } from '../../../models/User';
// import bcrypt from "bcrypt";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { UserInfo } from "../../../models/UserInfo";
// import * as mongoose from "mongoose";
// import NextAuth, {getServerSession} from "next-auth";

// export const authOptions1={
//   secret:process.env.SECRET,
//     providers: [
//         CredentialsProvider({
//         name: "Credentials",
//         id:'credentials',
//         credentials: {
//             username: { label: "Email", type: "email", placeholder: "test@example.com" },
//             password: { label: "Password", type: "password" }
//           },
//           async authorize(credentials, req) {
//             // const {email,password}=credentials;
//             const email=credentials?.email;
//             const password=credentials?.password;
//             mongoose.connect(process.env.MONGO_URL);
//             const user=await User.findOne({email});
//             const passwordOk=user && bcrypt.compareSync(password,user.password);
//             if(passwordOk){
//                 return user;
//             }
//             return null;
//           }
//         })
//       ],
// }

// export async function isAdmin() {
//   const session = await getServerSession(authOptions1);
//   const userEmail = session?.user?.email;
//   if (!userEmail) {
//     return false;
//   }
//   const userInfo = await UserInfo.findOne({email:userEmail});
//   if (!userInfo) {
//     return false;
//   }
//   return userInfo.admin;
// }

// const handler= NextAuth(authOptions1);

// export {handler as GET,handler as POST}

import { User } from '../../../models/User';
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import { UserInfo } from "../../../models/UserInfo";
import * as mongoose from "mongoose";
import NextAuth, { getServerSession } from "next-auth";

const authOptions1 = {
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: 'credentials',
      credentials: {
        username: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        mongoose.connect(process.env.MONGO_URL);
        const user = await User.findOne({ email });
        const passwordOk = user && bcrypt.compareSync(password, user.password);
        if (passwordOk) {
          // Perform any additional logic here if needed
          // For example, you can check if the user is an admin
          const userInfo = await UserInfo.findOne({ email });
          return {
            ...user.toObject(),
            isAdmin: userInfo?.admin || false // Assuming 'admin' is a field in UserInfo model
          };
        }
        return null;
      }
    })
  ],
};

const handler = NextAuth(authOptions1);

export default handler;
