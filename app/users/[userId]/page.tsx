import React, { Suspense } from 'react'
import getUser from '@/lib/getUser'
import getUserPost from '@/lib/getUserPost'
import UserPost from '@/components/UserPost'
type Params={
    params:{
        userId:string
    }
}
export default async function Userpage({params:{userId}}:Params) {
    const userData:Promise<User>=getUser(userId)
    const userPostData:Promise<Post[]>=getUserPost(userId)

   // const [user, userPosts]=await Promise.all([userData,userPostData])
   const user =await userData
  return (
    <>
    <h2>{user.name}</h2>
    <br />
    <Suspense fallback={<h2>Loading...</h2>}>
        <UserPost promise={userPostData}/>
    </Suspense>
    </>
  )
}
