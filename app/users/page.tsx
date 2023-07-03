import type { Metadata } from "next";
import getAllusers from "@/lib/getAllusers";
import React from 'react'
import Link from "next/link";


export const metadata:Metadata={
    title:'User'
}

async function Userspage() {
    const userData:Promise<User[]>=getAllusers()
    const users=await userData
    console.log("Hello");
    const content=(
        <section>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>
            <br />
            {users.map(user=>{
                return(
                    <>
                    <p key={user.id}>
                    <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </p>
                    <br />
                    </>
                )
            })}
        </section>
    )
  return content
}

export default Userspage