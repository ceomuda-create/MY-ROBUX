"use client";

import { useState } from "react";

export default function Checkout() {
  const [username, setUsername] = useState("");
  const [robux, setRobux] = useState("");
  const [loading, setLoading] = useState(false);

  async function buatPesanan() {
    setLoading(true);

    await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        robux,
      }),
    });

    setLoading(false);

    alert("Pesanan berhasil dibuat!");
  }


  return (
    <main className="min-h-screen bg-black text-white p-6">

      <div className="max-w-xl mx-auto bg-zinc-900 border border-yellow-500/40 rounded-3xl p-8">

        <h1 className="text-4xl text-center font-black text-yellow-400">
          💎 CHECKOUT
        </h1>


        <div className="space-y-5 mt-8">


          <input
            className="w-full bg-black border border-yellow-500/40 p-3 rounded-xl"
            placeholder="Username Roblox"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />


          <select
            className="w-full bg-black border border-yellow-500/40 p-3 rounded-xl"
            value={robux}
            onChange={(e) => setRobux(e.target.value)}
          >
            <option value="">
              Pilih Robux
            </option>

            <option>
              100 Robux - 15K
            </option>

            <option>
              200 Robux - 27K
            </option>

            <option>
              500 Robux - 70K
            </option>

            <option>
              1000 Robux - 138K
            </option>

          </select>


          <button
            onClick={buatPesanan}
            className="w-full bg-yellow-500 text-black font-bold py-3 rounded-xl"
          >
            {loading ? "Memproses..." : "PESAN SEKARANG"}
          </button>


        </div>


      </div>

    </main>
  );
}

