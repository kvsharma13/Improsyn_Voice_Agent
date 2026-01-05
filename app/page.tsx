import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();
  
  // If user is logged in, send them to dashboard
  if (userId) {
    redirect('/dashboard');
  }
  
  // If not logged in, send them to sign-in
  redirect('/sign-in');
}
