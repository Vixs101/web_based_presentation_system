import React, { useState } from "react";
import { PropsWithChildren, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { onAuthStateChanged } from "firebase/auth";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsUserSignedIn(!!user);
      if (user) {
        navigate("/");
      }
    });

    return () => unsubscribe(); //cleaning up the listener on unmount
  }, [auth]);

    if (!isUserSignedIn) {
      navigate("/login", { replace: true });
      return null
    }
  

  return (
    <div className="flex h-screen ">
      <Navbar navigate={navigate} />
      <Sidebar navigate={navigate} />
      <div className="flex-grow overflow-auto md:ml-1/5 lg:ml-1/4 mt-16 md:mt-0">
        <Outlet />
      </div>
    </div>
  );
}
