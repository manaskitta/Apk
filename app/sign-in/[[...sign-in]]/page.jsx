'use client';

import { SignIn } from "@clerk/nextjs";
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <div className="flex justify-center mt-20">
      <SignIn 
        path="/sign-in" 
        routing="path" 
        signUpUrl="/sign-up"
        afterSignIn={async () => {
          try {
            await fetch('/api/clerk-callback');
          } catch (error) {
            console.error("Failed to save user data:", error);
          }
          router.push('/'); // redirect wherever you want after login
        }}
      />
    </div>
  );
}
