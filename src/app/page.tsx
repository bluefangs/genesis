"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // In a real app, you would check if the user is authenticated here
    // For now, we'll just redirect to the login page
    // If authenticated, redirect to dashboard
    const isAuthenticated = true; // Placeholder - in a real app this would be a real check
    
    if (isAuthenticated) {
      // Redirect to the main dashboard page
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  }, [router]);

  return null; // No need to render anything since we're redirecting
}
