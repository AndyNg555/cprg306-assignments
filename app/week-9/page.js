"use client";

import { useUserAuth } from "./_utils/auth-context";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthComponent() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const router = useRouter();

  const handleSignIn = async () => {
    await gitHubSignIn();
    setIsSignedIn(true);
  };

  const handleSignOut = async () => {
    await firebaseSignOut();
    setIsSignedIn(false);
  };

  useEffect(() => {
    if (user) {
      setIsSignedIn(true);
    }
  }, [user]);

  const goToShoppingList = () => {
    router.push("/week-9/shopping-list");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      {isSignedIn && user ? (
        <div className="text-center">
          <p className="mb-4">Welcome, {user.displayName} ({user.email})</p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded"
            >
              Sign Out
            </button>
            <button
              onClick={goToShoppingList}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded"
            >
              Go to Shopping List
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="mb-4">You are not signed in.</p>
          <button
            onClick={handleSignIn}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded"
          >
            Sign In with GitHub
          </button>
        </div>
      )}
    </div>
  );
}
