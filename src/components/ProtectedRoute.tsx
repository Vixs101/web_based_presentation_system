import React from "react";
import { PropsWithChildren, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  //define a variable that will store whether a user is signed in or not

  //define a variable that will useNavigate from reactrouter-dom to navigate the user to the signin page

  //use use effect to execute the useNavigate function
  //replace true in the useeffect will prevent the user from going back to the previous page.
  //   useEffect(()=> {
  //     if (user === null) {
  //         navigate('/signin', {replace: true});
  //     }
  //   }, [navigate, user]);

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
