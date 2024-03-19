"use client";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { FaHamburger } from "react-icons/fa";
import { Cross } from "lucide-react";


const LeftSidebar = () => {

const [ham,setHam]=useState(1);
  const pathname = usePathname();
 
  return (
    <>
     
      <section className={`bg-slate-100 light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between  border-r md:p-4 lg:p-6 p-2 pt-36 shadow-light-300 dark:shadow-none   md:w-fit md:flex md:flex-col  lg:w-[266px]`}>
        <div className="flex flex-1 flex-col gap-6">
          {sidebarLinks.map((item) => {
            const isActive =
              (pathname.includes(item.route) && item.route.length > 1) ||
              pathname === item.route;
            return (
              <Link
                key={item.route}
                href={item.route}
                className={`${
                  isActive ? "bg-yellow-600 text-black" : " bg-yellow-400"
                } flex items-center rounded-lg justify-start  gap-4 bg-transparent p-4`}
              >
                <Image
                  className={`${isActive ? "" : "invert-colors"}  `}
                  src={item.imgURL}
                  alt={item.label}
                  width={20}
                  height={20}
                />
                <p
                  className={`${
                    isActive ? "font-bold" : "font-medium"
                  } max-lg:hidden`}
                >
                  {item.label}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="flex flex-col gap-3">
          <Link href="/sign-in">
            <Button className="small-medium  min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/account.svg"
                alt="login"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className=" max-lg:hidden">Log in</span>
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="small-medium light-border-2  min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/sign-up.svg"
                alt="signup"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="text-white max-lg:hidden">Sign Up</span>
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default LeftSidebar;
