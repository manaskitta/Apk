"use client";

import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <nav className="flex justify-between items-center px-8 py-6 shadow-md bg-white dark:bg-gray-900">
      <Link href="/" className="text-2xl font-bold text-blue-600">
        Aparoksha EMS
      </Link>
      <div className="flex gap-8 items-center">
        <Link
          href="/events"
          className="text-lg font-semibold text-gray-800 dark:text-white hover:text-blue-600 transition duration-300"
        >
          Events
        </Link>
        <Link
          href="/profile"
          className="text-lg font-semibold text-gray-800 dark:text-white hover:text-blue-600 transition duration-300"
        >
          Profile
        </Link>

        {!isSignedIn ? (
          <Link
            href="/login"
            className="text-lg font-semibold text-gray-800 dark:text-white hover:text-blue-600 transition duration-300"
          >
            Login / Signup
          </Link>
        ) : (
          <UserButton afterSignOutUrl="/" />
        )}
      </div>
    </nav>
  );
}
