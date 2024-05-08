'use client'
import React from 'react'
// import * as cookieCutter from 'cookie-cutter';
import cookieCutter from 'cookie-cutter'
const page = () => {
    const handlelogout=(e:any)=>{
        e.preventDefault();
        cookieCutter.remove('access_token');
    }
  return (
    <div>
      Home Page
      <button onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default page
