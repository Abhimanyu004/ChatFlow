import React from "react";
import {auth} from "../../auth";
import { SignOut } from "../components/signoutButton";

export default async function ChatRoom(){
    const session = await auth();
    return (
        <>
        <SignOut/>
        <div>ChatRoom</div>
        <div>{session?.user?.name}</div>
        </>
    );
}