"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";


const Admin = () => {
  const router = useRouter();

  useEffect(() => {
   
    const isLoggedIn = checkIfAdminIsLoggedIn();

    if (!isLoggedIn) {
      router.push('/admin/login');
    } else {
      router.push('/admin/dashboard');
    }
  }, [router]);

  const checkIfAdminIsLoggedIn = () => {
    const token = localStorage.getItem('token');
    return !!token; 
  };
  return (
   <div>
   
   </div>
  )
}

export default Admin