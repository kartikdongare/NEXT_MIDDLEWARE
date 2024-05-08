"use client";

import React, { useState } from "react";
import cookieCutter from 'cookie-cutter';
import style from "./login.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";


function page() {
const navigator=useRouter()
  const [user_name, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const callLogin = async (e:any) => {
    e.preventDefault()
    try {
      const res=await axios.post("http://localhost:8000/api/v1/users/login", {
        user_name,
        password,
      })
    
    cookieCutter.set('access_token',res.data?.data?.access_token)
    console.log(res.data.statusCode)
    if(res.data.statusCode===200){
      navigator.push('/home')
    }
    } catch (error) {
      console.log(error);
    }
   
  };
  // const handleSubmit = () => {
    
  // };
  return (
    <div className={style.regi}>
      <form>
        <div>
          <label>username</label>
          <input
            type="text"
            name="user_name"
            className={style.input}
            placeholder="Enter Name"
            onChange={(e: any) => setUserName(e.target.value)}
            value={user_name}
          />
        </div>

        <div>
          <label>Password:-</label>
          <input
            type="password"
            name="password"
            className={style.input}
            placeholder="Enter password"
            // onChange={handleChange},
            onChange={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setPassword(e.target.value)}
          />
        </div>
        {/* <Link href={`/home`}> */}
          {" "}
          <button
            type="submit"
            style={{ marginTop: "20px" }}
            className={style.btn}
            onClick={callLogin}
          >
            Login
          </button>
        {/* </Link> */}
      </form>
    </div>
  );
}

export default page;
