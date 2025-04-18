import { auth } from '@clerk/nextjs/server';
import { saveClerkUserData } from '@/lib/clerkUser'; // make sure the path is correct

export async function GET(req) {
  console.log("🔥 Clerk callback triggered");

  const { userId } = auth();

  console.log("🧑‍💻 Clerk User ID:", userId);

  if (!userId) {
    return new Response(JSON.stringify({ error: 'User not authenticated' }), { status: 401 });
  }

  try {
    const user = await saveClerkUserData(userId);
    console.log("✅ User saved to DB:", user);

    return new Response(JSON.stringify({ success: true, user }), { status: 200 });
  } catch (err) {
    console.error("❌ Error saving user:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
