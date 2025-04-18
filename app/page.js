"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, CalendarHeart, Rocket } from "lucide-react";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const title = document.querySelector("#title");
    const description = document.querySelector("#description");
    const buttons = document.querySelectorAll(".button");

    // Add animations
    title.classList.add("animate__animated", "animate__fadeInUp");
    description.classList.add("animate__animated", "animate__fadeInUp", "animate__delay-1s");
    buttons.forEach((button, index) => {
      button.classList.add("animate__animated", "animate__fadeInUp", `animate__delay-${index + 2}s`);
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-950 px-4">
      {/* Logo with Animation */}
      <div className="mb-8 animate__animated animate__zoomIn transition-transform duration-500 hover:scale-110">
        <img
          src="/logo.png"
          alt="Aparoksha EMS"
          className="w-56 h-56 md:w-64 md:h-64 drop-shadow-lg border-none outline-none bg-transparent"
        />
      </div>


      {/* Title with Animation */}
      <h1
        id="title"
        className="text-5xl md:text-6xl font-bold leading-tight mb-4 text-blue-700 dark:text-blue-300 opacity-0"
      >
        Welcome to <span className="text-blue-500 dark:text-white">Aparoksha EMS</span>
      </h1>

      {/* Description with Animation */}
      <p
        id="description"
        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl mb-8 opacity-0"
      >
        Manage, explore, and register for events at Aparoksha. Stay updated with the latest happenings, get reminders, and experience tech competitions like never before.
      </p>

      {/* Buttons with Animations */}
      <div className="flex gap-6 mb-8">
        <Link href="/events">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white transition duration-300 transform hover:scale-105 button"
          >
            <CalendarHeart className="w-4 h-4 mr-2" /> Explore Events
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button
            variant="outline"
            size="lg"
            className="transition duration-300 transform hover:scale-105 button"
          >
            <Rocket className="w-4 h-4 mr-2" /> Join Now
          </Button>
        </Link>
      </div>

      {/* Footer text */}
      <div className="mt-16 text-gray-500 dark:text-gray-400 text-sm">
        <Sparkles className="inline-block w-4 h-4 mr-1 text-yellow-400" /> Powered by Next.js, Clerk, Prisma, and PostgreSQL
      </div>
    </div>
  );
}
