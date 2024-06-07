
"use server";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function SignOut() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";
    console.log(user, "userHErere")
    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };
}