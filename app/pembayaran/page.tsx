import Link from "next/link";

export default function Pembayaran() {
  return (
    <main className="min-h-screen bg-black text-white p-6">

      <div className="max-w-xl mx-auto bg-zinc-900 border border-yellow-500/40 rounded-3xl p-8 text-center">

        <h1 className="text-4xl font-black text-yellow-400">
          💳 PEMBAYARAN
        </h1>

        <p className="text-gray-300 mt-3">
          Silakan lakukan pembayaran melalui QRIS
        </p>


        <div className="mt-8 bg-white rounded-2xl h-56 flex items-center justify-center text-black font-bold">
          QRIS MY ROBUX
        </div>


        <p className="text-gray-400 mt-5">
          Scan QRIS lalu kirim bukti pembayaran
        </p>


        <Link href="/konfirmasi">
          <button className="mt-8 w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-xl">
            SAYA SUDAH BAYAR
          </button>
        </Link>


      </div>

    </main>
  );
}