"use client"

import Contain from '@/app/component/Contain';
import Footer from '@/app/component/footer/Footer';
import Header from '@/app/component/Header';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {signIn, useSession} from "next-auth/react"
import Link from 'next/link';

const AdminLoginForm = () => {
 

  const router = useRouter();

  const [error, setError] = useState('');
  const session = useSession();

  // useEffect(() => {
  //   if(session?.status === "authenticated") {
  //     router.replace("/admin/dashboard",)
  //   }
  // }, [session, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }


  const handleSubmit = async (e:any ) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if(!isValidEmail (email)) {
      return;
    }

    if(!password || password.length < 8) {
      setError("Error, details not found");
      return;
    }


    const res = await signIn ("credentials", {
      redirect: false,
      email,
      password
    })

    if(res?.error) {
      setError("inavalid email or password");
      if(res?.url) router.replace("/admin/dashboard");
      return;
    } else {
      setError("");
    }

  }

  return (
    <div className="flex min-h-screen flex-col font-mono gap-3 bg-teal-200">
      <Header />
      <div className="flex-grow bg-teal-200">
        <div className="p-8">
          <Contain>
          {error && <div className="text-red-500">{error}</div>}
            <form onSubmit={handleSubmit} className="flex flex-col w-full h-full gap-[2rem] items-center">
              <h1 className="flex font-bold text-orange-300 text-2xl">Admin Login</h1>
              <div className="flex flex-col gap-4 md:w-1/2 w-full">
                <label className="flex text-left">Username</label>
                <input
                  type="text"
                  required
                  className="w-full h-[50px] rounded-md p-2 outline-orange-300"
                />
              </div>
              <div className="flex flex-col gap-4 md:w-1/2 w-full">
                <label className="flex text-left">Password:</label>
                <input
                  type="password"
                  required
                  className="w-full h-[50px] rounded-md p-2"
                />
              </div>
              {/* <h3>
                Register as an Admin{' '}
                <Link href="/admin/register" className="text-orange-300">
                  Register
                </Link>
              </h3> */}
              <button
                type="submit"
                className="md:w-1/4 rounded-md hover:bg-teal-200 hover:border-2 hover:border-orange-300 w-full h-[40px] bg-orange-300"
              >
                Login
              </button>
            </form>
          </Contain>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLoginForm;
