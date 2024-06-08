import Image from "next/image"
import Link from "next/link";
import LoginTrain from "../assets/LoginTrain.jpg"
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";

export const runtime = 'edge';

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/protected");
  };

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      console.log(error, "Error from Signing up");
      return redirect("/login?message=Server Error when register user");
    }

    return redirect("/login?message=Check email to continue sign in process");
  };
  return (
    <section className="relative h-screen py-10 bg-gray-900 sm:py-16 lg:py-24">
      <div className="absolute inset-0">
        <Image className="object-cover w-full h-full" src={LoginTrain} alt="" />
      </div>
      <div className="absolute inset-0 bg-gray-900/20"></div>

      <div className="relative max-w-lg px-4 mx-auto sm:px-0">
        <div className="overflow-hidden bg-white opacity-65 rounded-md shadow-lg">
          <div className="px-4 py-6 sm:px-8 sm:py-7">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800">Thanks for visiting</h2>
              
            </div>

            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div className="flex relative ">
                  <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      width={15}
                      height={15}
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                    </svg>
                  </span>
                  <label className="text-md" htmlFor="email">
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-red-400 invalid:text-red-400
                  focus:invalid:border-red-400 focus:invalid:ring-red-400"

                    placeholder="Your email"
                    required
                  />
                </div>

                <div className="flex relative ">
                  <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      width={15}
                      height={15}
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                    </svg>
                  </span>
                  <label className="text-md" htmlFor="password">
                  </label>
                  <input type="password" name="password" id="password"
                    className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Enter Password"
                    required
                    autoComplete="your current password"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <SubmitButton
                    formAction={signIn}
                    className="w-full rounded-xl px-2 py-2 text-base font-semibold text-center text-gray-200 transition duration-200 ease-in bg-orange-400 shadow-md hover:text-white hover:bg-black focus:outline-none focus:ring-2"
                    pendingText="Signing In..."
                  >
                    Log In
                  </SubmitButton>
                  <SubmitButton
                    formAction={signUp}
                    className="w-full rounded-xl px-2 py-2 text-base font-semibold text-center text-orange-600 transition duration-200 ease-in bg-gray-300 shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
                    pendingText="Signing Up..."
                  >
                    Sign Up
                  </SubmitButton>
                  {searchParams?.message && (
                    <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                      {searchParams.message}
                    </p>
                  )}
                </div>
              </div>
              <p className="mt-8 text-base text-gray-600">Try something else? <Link href="/" title="" className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">Go back</Link></p>
            </form>
          </div>
        </div>
      </div>
    </section>

  )
}
