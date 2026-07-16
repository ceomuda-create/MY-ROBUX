"use client";

import { useState } from "react";

export default function TermsModal() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      bg-black/50
      p-4
    ">

      <div className="
        w-full
        max-w-md
        rounded-3xl
        bg-[#fff4e3]
        p-6
        shadow-2xl
        border
        border-[#d6a85f]
      ">

        <h2 className="
          text-center
          text-2xl
          font-black
          text-[#8b5e3c]
        ">
          📜 Syarat & Ketentuan
        </h2>

        <div className="
          mt-5
          space-y-3
          text-sm
          text-[#5b3925]
        ">
          <p>💎 Pastikan data order sudah benar.</p>
          <p>⚡ Pesanan diproses setelah pembayaran dikonfirmasi.</p>
          <p>🔒 Jangan memberikan password akun Roblox.</p>
          <p>💬 Hubungi Owner jika ada kendala.</p>
        </div>

        <button
          onClick={() => setOpen(false)}
          className="
            mt-6
            w-full
            rounded-xl
            bg-[#8b5e3c]
            py-3
            font-black
            text-white
          "
        >
          Saya Mengerti
        </button>

      </div>

    </div>
  );
}