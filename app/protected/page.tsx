
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import ProtectedContent from "@/components/ProtectedPage"
export const runtime = 'edge';
export default async function ProtectedPage() {

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  if (user) {
    console.log(user, "herher is the user")
  }
  return (
    <ProtectedContent />
  );
}
