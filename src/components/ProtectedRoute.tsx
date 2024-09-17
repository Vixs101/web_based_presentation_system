import React, { useState } from "react";
import { PropsWithChildren, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { onAuthStateChanged } from "firebase/auth";
import Loader  from "../components/Loader";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserSignedIn(true);
      } else {
        setIsUserSignedIn(false);
        navigate("/login", { replace: true});
      }
      setLoading(false);
    });

    return () => unsubscribe(); //cleaning up listener on unmount
  }, [navigate]);

  if (loading) {
    return <Loader/>
  }

  if (!isUserSignedIn) {
    return null;
  }

  return (
    <div className="flex h-screen ">
      <Navbar />
      <Sidebar />
      <div className="flex-grow overflow-auto md:ml-1/5 lg:ml-1/4 mt-16 md:mt-0">
        <Outlet />
      </div>
    </div>
  );
}
