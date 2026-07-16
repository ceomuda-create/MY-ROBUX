export default function Konfirmasi() {
  return (
    <main className="min-h-screen bg-black text-white p-6">

      <div className="max-w-xl mx-auto bg-zinc-900 border border-yellow-500/40 rounded-3xl p-8 text-center">

        <div className="text-6xl">
          ✅
        </div>

        <h1 className="text-4xl font-black text-yellow-400 mt-5">
          PESANAN DITERIMA
        </h1>

        <p className="text-gray-300 mt-4">
          Terima kasih sudah membeli di MY ROBUX.
        </p>

        <p className="text-gray-400 mt-2">
          Kirim bukti pembayaran agar Robux segera diproses.
        </p>


        <div className="mt-8 bg-black border border-yellow-500/30 rounded-2xl p-5">

          <h2 className="text-xl font-bold text-yellow-400">
            Status Pesanan
          </h2>

          <p className="mt-3 text-yellow-500">
            ⏳ Menunggu Verifikasi
          </p>

        </div>


        <a
          href="https://wa.me/628982186538"
          target="_blank"
          className="block mt-8 w-full bg-green-500 hover:bg-green-400 text-white font-bold py-3 rounded-xl"
        >
          💬 HUBUNGI ADMIN
        </a>


      </div>

    </main>
  );
}