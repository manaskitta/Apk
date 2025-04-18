import { saveClerkUserData } from '@/lib/clerkUser'; // adjust path if needed
import { auth } from '@clerk/nextjs';

export async function GET() {
  const { userId } = auth();

  if (!userId) {
    return new Response(JSON.stringify({ message: 'User not authenticated' }), {
      status: 401,
    });
  }

  try {
    const user = await saveClerkUserData(userId);
    return new Response(JSON.stringify({ message: 'User data saved', user }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error saving user data' }), {
      status: 500,
    });
  }
}
