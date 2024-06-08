
"use server";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
// import { Navbar, NavbarContent, Link, } from "@nextui-org/react";

export default async function AuthButton() {
  const supabase = createClient();

  const { data: { user } } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";
    console.log(user, "userHErere")
    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/");
  };

  return (


    <div>
      {user ? <div className="flex items-center gap-4">
        <form action={signOut}>
          <button title=" 📤Click to sign out " className="inline-flex bg-amber-500 border-0 rounded-lg p-2 ml-2 text-white">
            Logout
            <p className="ml-2 italic cursor-pointer text-md">
              {user.email?.slice(0, 5)}...</p>
            {/* <p>{user.last_sign_in_at}</p> ⬅️ use this to pop up msg for logging in */}
          </button>
        </form>
      </div>
        :
        <button title="📤Sign in" className="inline-flex bg-amber-500 border-0 rounded-lg p-2 m-2 text-white">
          <Link href="/login">
            <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(3 3)"><path d="m6.5 10.5 3-3-3-3" /><path d="m5 3v9" transform="matrix(0 1 -1 0 12.5 2.5)" /><path d="m1.5 5.5v-3.0079176c0-1.10147263.89060277-1.99561512 1.99206673-1.99998427l7.95228497-.03160773c1.1045608-.00432011 2.0035361.8875515 2.0079175 1.99211231l.0398162 10.02918369c.0043323 1.1045608-.8875404 2.003535-1.9921012 2.0079309-.0026436 0-.0052873 0-.0079309 0h-7.9920533c-1.1045695 0-2-.8954305-2-2v-2.9897173" /></g></svg>
            {/* <Tooltip content="Login">
              <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(3 3)"><path d="m6.5 10.5 3-3-3-3" /><path d="m5 3v9" transform="matrix(0 1 -1 0 12.5 2.5)" /><path d="m1.5 5.5v-3.0079176c0-1.10147263.89060277-1.99561512 1.99206673-1.99998427l7.95228497-.03160773c1.1045608-.00432011 2.0035361.8875515 2.0079175 1.99211231l.0398162 10.02918369c.0043323 1.1045608-.8875404 2.003535-1.9921012 2.0079309-.0026436 0-.0052873 0-.0079309 0h-7.9920533c-1.1045695 0-2-.8954305-2-2v-2.9897173" /></g></svg>
            </Tooltip> */}
          </Link>
        </button>
      }
    </div >

  )
}
