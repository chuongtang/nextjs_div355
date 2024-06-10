
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
    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/");
  };

  return (


    <div className="mx-4 my-2">
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
        <button className="inline-flex bg-amber-500 border-0 rounded-lg p-2 m-2 mr-6 text-white">
          <Link href="/login">
            <svg fill="#000000" width="24px" height="24px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>📤Sign in</title><path d="M392,80H232a56.06,56.06,0,0,0-56,56V240H329.37l-52.68-52.69a16,16,0,0,1,22.62-22.62l80,80a16,16,0,0,1,0,22.62l-80,80a16,16,0,0,1-22.62-22.62L329.37,272H176V376c0,32.05,33.79,56,64,56H392a56.06,56.06,0,0,0,56-56V136A56.06,56.06,0,0,0,392,80Z"></path><path d="M80,240a16,16,0,0,0,0,32h96V240Z"></path></g></svg>
          </Link>
        </button>
      }
    </div>

  )
}
