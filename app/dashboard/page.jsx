import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { saveClerkUserData } from "@/lib/clerkUser";

export default async function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    // User is not signed in
    return redirect("/sign-in");
  }

  // Save Clerk user data to the DB (Step 2 logic)
  await saveClerkUserData(userId);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">👋 Welcome to your Dashboard!</h1>
      <p>You are successfully signed in. 🎉</p>
    </div>
  );
}
