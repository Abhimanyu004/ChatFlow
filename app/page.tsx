import{ signIn } from "@/auth"
import { redirect } from "next/dist/server/api-utils";

export default function Home() {
  return (
    <>
    <form action={async ()=>{
      "use server"
      await signIn("github", { redirectTo: "/chatroom" })
    }}>
      <button type="submit">sign in</button>
    </form>
    </>
  );
}
