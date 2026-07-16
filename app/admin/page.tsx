"use client";

import { useState } from "react";

export default function AdminPage() {

  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);


  const ADMIN_PASSWORD = "TUANMUDAROBUX#";


  function handleLogin(){

    if(password === ADMIN_PASSWORD){

      setLogin(true);

    }else{

      alert("Password salah!");

    }

  }



  if(!login){

    return (

      <main className="min-h-screen bg-[#f5eadb] flex items-center justify-center p-6">


        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl text-center">


          <h1 className="text-4xl font-black text-[#6b3f22]">
            MY ROBUX
          </h1>


          <p className="mt-3 text-lg">
            🔐 Admin Login
          </p>



          <input

          type="password"

          placeholder="Password Admin"

          value={password}

          onChange={(e)=>setPassword(e.target.value)}

          className="mt-6 w-full rounded-xl border p-4 text-center"

          />



          <button

          onClick={handleLogin}

          className="mt-5 w-full rounded-xl bg-[#6b3f22] py-4 text-white font-bold hover:bg-[#8b572f]"

          >

          LOGIN

          </button>



        </div>


      </main>

    );

  }



  return (

    <main className="min-h-screen bg-[#f5eadb] p-6 text-[#4b2e1f]">


      <h1 className="text-center text-5xl font-black">
        MY ROBUX ADMIN
      </h1>



      <p className="mt-3 text-center">
        Dashboard Admin 💎
      </p>




      <div className="mx-auto mt-10 max-w-xl rounded-3xl bg-white p-8 shadow-xl">


        <h2 className="text-2xl font-bold">
          ✅ Login Berhasil
        </h2>


        <p className="mt-3">
          Selamat datang di panel admin MY ROBUX.
        </p>



      </div>



    </main>

  );

}