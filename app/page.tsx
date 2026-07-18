"use client";

import { useEffect, useRef, useState } from "react";

const robuxList = [
  { robux: 100, gamepass: 10000, username: 15000 },
  { robux: 200, gamepass: 22000, username: 27000 },
  { robux: 300, gamepass: 34000, username: 39000 },
  { robux: 400, gamepass: 45000, username: 52000 },
  { robux: 500, gamepass: 64000, username: 70000 },
  { robux: 600, gamepass: 76000, username: 82000 },
  { robux: 700, gamepass: 90000, username: 95000 },
  { robux: 800, gamepass: 105000, username: 110000 },
  { robux: 900, gamepass: 120000, username: 125000 },
  { robux: 1000, gamepass: 135000, username: 140000 },
];

export default function Home(){

const checkoutRef = useRef<HTMLDivElement>(null);


const [darkMode,setDarkMode] = useState(false);

const [showTerms,setShowTerms] = useState(false);

const [method,setMethod] =
useState<"gamepass"|"username">("gamepass");

const [robux,setRobux] = useState(100);

const [customRobux,setCustomRobux] =
useState(100);

const [username,setUsername] =
useState("");

const [gamepassLink,setGamepassLink] =
useState("");

const [warning,setWarning] =
useState("");

const [showPayment,setShowPayment] =
useState(false);

const [orderId,setOrderId] =
useState("");

const [bukti,setBukti] =
useState<File | null>(null);

const [timeLeft, setTimeLeft] = useState(600);

useEffect(() => {

  // Selalu tampilkan syarat & ketentuan
  setShowTerms(true);

  const savedDark = localStorage.getItem("myrobux_dark");

  if (savedDark === "true") {
    setDarkMode(true);
  }

}, []);

// Countdown pembayaran 10 menit
useEffect(() => {

  if (!showPayment) return;

  const timer = setInterval(() => {

    setTimeLeft((prev) => {

      if (prev <= 1) {

        clearInterval(timer);

        setShowPayment(false);

        setTimeLeft(600);

        setBukti(null);

        alert("⏰ Waktu pembayaran telah habis. Silakan lakukan order kembali.");

        return 0;

      }

      return prev - 1;

    });

  }, 1000);

  return () => clearInterval(timer);

}, [showPayment]);


// Dark Mode
useEffect(() => {

  if (darkMode) {

    document.documentElement.classList.add("dark");

    localStorage.setItem(
      "myrobux_dark",
      "true"
    );

  } else {

    document.documentElement.classList.remove("dark");

    localStorage.setItem(
      "myrobux_dark",
      "false"
    );

  }

}, [darkMode]);


function acceptTerms(){

setShowTerms(false);

}




const selected = robuxList.find(
  (item) => item.robux === customRobux
);



const price =
method==="gamepass"
?
selected?.gamepass ?? 0
:
selected?.username ?? 0;


const ticketGamepass =
Math.ceil(customRobux / 0.7);


function pilihPaket(value:number){

setRobux(value);

setCustomRobux(value);


checkoutRef.current?.scrollIntoView({

behavior:"smooth"

});

}





function sliderChange(value:number){

setCustomRobux(value);

setRobux(value);


if(value < 10){

setWarning(
"⚠️ Minimal 10 Robux"
);


}else if(value > 10000){

setWarning(
"⚠️ Maksimal 10.000 Robux"
);


}else{

setWarning("");

}

}






function orderNow(){


if(!username){

alert(
"Masukkan Username Roblox"
);

return;

}



if(method==="gamepass" && !gamepassLink){

alert(
"Masukkan Link Gamepass"
);

return;

}



const id =
"MR-" +
Math.floor(
100000 + Math.random()*900000
);



setOrderId(id);

setShowPayment(true);
setTimeLeft(600);

}





function kirimBukti(){


if(!bukti){

alert(
"⚠️ Upload bukti pembayaran terlebih dahulu!"
);

return;

}



const pesan = `

Halo Admin MY ROBUX 👋


✅ PEMBAYARAN BARU


🧾 Order ID:
${orderId}


👤 Username:
${username}


💎 Robux:
${robux}R


📦 Metode:
${method}


💰 Total:
Rp ${price.toLocaleString("id-ID")}


Customer sudah mengirim bukti pembayaran.

`;



window.open(

"https://wa.me/628982186538?text="+
encodeURIComponent(pesan),

"_blank"

);


}




return (
<>

{
showTerms && (

<div
className="
fixed
inset-0
z-[100]
flex
items-center
justify-center
bg-black/70
px-5
"
>

<div

className={`
w-full
max-w-lg
rounded-3xl
p-7
shadow-2xl

${
darkMode
?
"bg-slate-900 text-white"
:
"bg-white text-[#5b3925]"
}

`}

>


<h2
className="
text-center
text-3xl
font-black
"
>

📜 Syarat & Ketentuan

</h2>



<div
className="
mt-5
max-h-72
space-y-3
overflow-y-auto
text-sm
font-bold
"
>


<p>
✅ MY ROBUX tidak meminta password atau OTP Roblox.
</p>


<p>
✅ Username harus benar sebelum order.
</p>


<p>
✅ Pembayaran harus disertai bukti pembayaran.
</p>


<p>
✅ Pesanan tanpa bukti pembayaran tidak diproses.
</p>


<p>
✅ Jangan memberikan data akun Roblox.
</p>


</div>



<button

onClick={acceptTerms}

className="
mt-6
w-full
rounded-xl
bg-[#5b3925]
p-4
font-black
text-white
"

>

Saya Setuju & Masuk

</button>



</div>

</div>

)

}





<main

className={`

min-h-screen
px-4
py-6
transition-all
duration-500


${
darkMode

?

"bg-slate-950 text-white"

:

"bg-gradient-to-br from-[#fff1d6] via-[#e8c58f] to-[#9b6b3f] text-[#5b3925]"

}

`}

>




<div

className="
fixed
right-5
top-5
z-50
"

>


<button

onClick={()=>setDarkMode(!darkMode)}

className={`

rounded-full
px-5
py-3
font-black
shadow-lg


${
darkMode

?

"bg-slate-900 text-yellow-300"

:

"bg-white/40 text-[#5b3925]"

}

`}

>


{
darkMode
?
"☀️ LIGHT"
:
"🌙 DARK"
}


</button>


</div>






<div

className="
mx-auto
max-w-5xl
"

>



<div
className={`
relative
mx-auto
w-fit
overflow-hidden
rounded-full
px-10
py-4
font-black
tracking-widest
border
transition-all
duration-500
cursor-pointer
hover:scale-110
hover:-translate-y-1

${
darkMode
?
"bg-gradient-to-r from-green-900 via-emerald-700 to-green-900 border-green-400 text-green-200 shadow-[0_0_45px_rgba(34,197,94,.8)]"
:
"bg-gradient-to-r from-green-100 via-white to-green-100 border-green-400 text-green-700 shadow-[0_0_35px_rgba(34,197,94,.45)]"
}
`}
>

<span className="absolute inset-0 animate-pulse bg-white/10"></span>

<span className="relative">
🟢 STORE OPEN • MY ROBUX
</span>

</div>






<header

className="
mt-6
text-center
"

>



<h1
className={`
mt-3
text-6xl
md:text-8xl
font-black
tracking-[0.15em]
transition-all
duration-500
cursor-default
hover:scale-105

${
darkMode
?
"bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_gold]"
:
"bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-700 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,193,7,.5)]"
}
`}
>

💎 MY ROBUX

</h1>




<p

className={`

mt-2
text-xl
font-bold


${
darkMode

?

"text-yellow-300"

:

"text-yellow-700"

}

`}

>

PREMIUM ROBUX STORE

</p>




</header>






<section

ref={checkoutRef}

className={`

mt-16
rounded-3xl
p-6
shadow-xl


${
darkMode

?

"bg-slate-800"

:

"bg-[#fff4e3]"

}

`}

>



<h2

className="
text-3xl
font-black
text-yellow-500
"

>

🛒 Checkout Robux

</h2>





<input

placeholder="Username Roblox"

value={username}

onChange={(e)=>
setUsername(e.target.value)
}


className={`

mt-5
w-full
rounded-xl
border
p-4


${
darkMode

?

"bg-zinc-900 text-white"

:

"bg-white text-black"

}

`}

/>

<div
className={`
mt-6
rounded-2xl
p-4

${
darkMode
?
"bg-slate-900 text-white"
:
"bg-white text-[#5b3925]"
}

`}
>


<div
className="
flex
justify-between
font-black
"
>

<span>
10R
</span>


<span>
💎 {customRobux} Robux
</span>


<span>
10000R
</span>

</div>



<input

type="range"

min="100"

max="1000"

step="100"

value={customRobux}

onChange={(e)=>
sliderChange(
Number(e.target.value)
)
}

className="
mt-3
w-full
accent-yellow-500
"

/>



{
warning &&

<p

className="
mt-3
text-center
font-black
text-red-500
"

>

{warning}

</p>

}


</div>





<div

className="
mt-6
flex
gap-3
"

>


<button

onClick={()=>
setMethod("gamepass")
}

className={`

flex-1
rounded-xl
p-4
font-black


${
method==="gamepass"

?

"bg-green-500 text-black"

:

darkMode

?

"bg-slate-700 text-white"

:

"bg-green-100 text-green-700"

}

`}

>

💚 Gamepass

</button>






<button

onClick={()=>
setMethod("username")
}

className={`

flex-1
rounded-xl
p-4
font-black


${
method==="username"

?

"bg-blue-500 text-black"

:

darkMode

?

"bg-slate-700 text-white"

:

"bg-blue-100 text-blue-700"

}

`}

>

💎 Username

</button>


</div>







{

method==="gamepass" && (

<div

className={`

mt-6
rounded-3xl
border
p-6


${
darkMode

?

"bg-zinc-900 border-green-500"

:

"bg-green-50 border-green-300"

}

`}

>



<h3

className="
text-center
text-2xl
font-black
text-green-600
"

>

🎮 METODE GAMEPASS

</h3>




<div

className="
mt-5
rounded-3xl
bg-green-600
p-6
text-center
text-white
"

>


<p className="font-bold">

Buat Gamepass:

</p>



<h2

className="
text-6xl
font-black
"

>

{ticketGamepass}R

</h2>


</div>






<input

type="text"

placeholder="Link Gamepass Roblox"

value={gamepassLink}

onChange={(e)=>
setGamepassLink(e.target.value)
}


className={`

mt-5
w-full
rounded-xl
border
p-4


${
darkMode

?

"bg-zinc-800 text-white"

:

"bg-white text-black"

}

`}

/>




</div>

)

}







<button

onClick={orderNow}

className="
mt-6
w-full
rounded-xl
bg-[#5b3925]
p-5
text-xl
font-black
text-white
shadow-xl
"

>

🛒 ORDER SEKARANG

</button>




</section>








{

showPayment && (

<div

className="
fixed
inset-0
z-[100]
flex
items-center
justify-center
bg-black/70
px-5
"

>

<div
className={`
w-full
max-w-[380px]
rounded-[28px]
p-7
text-center
shadow-2xl
border
backdrop-blur-xl
transition-all
duration-500

${
darkMode
? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 border-yellow-500/40 text-white shadow-[0_0_50px_rgba(250,204,21,.2)]"
: "bg-gradient-to-br from-white via-yellow-50 to-orange-100 border-yellow-300 text-[#5b3925] shadow-[0_20px_60px_rgba(0,0,0,.15)]"
}
`}
>




<h2
className={`
text-4xl
font-black
tracking-[0.15em]
bg-gradient-to-r
from-yellow-300
via-amber-500
to-yellow-300
bg-clip-text
text-transparent

${
darkMode
?
"drop-shadow-[0_0_20px_gold]"
:
"drop-shadow-[0_0_8px_rgba(255,193,7,.5)]"
}
`}
>

💳 PEMBAYARAN

</h2>

<p
className={`mt-2 font-bold ${
  darkMode ? "text-yellow-300" : "text-yellow-700"
}`}
>
Secure Payment • MY ROBUX
</p>

<div
  className={`mt-5 rounded-2xl border p-5 text-center ${
    darkMode
      ? "bg-red-500/10 border-red-500 text-red-300"
      : "bg-red-50 border-red-300 text-red-600"
  }`}
>

  <p className="text-sm font-bold">
    ⏳ Selesaikan pembayaran sebelum
  </p>

  <h2 className="mt-2 text-5xl font-black tracking-widest">
    {Math.floor(timeLeft / 60)
      .toString()
      .padStart(2, "0")}
    :
    {(timeLeft % 60)
      .toString()
      .padStart(2, "0")}
  </h2>

  <p className="mt-2 text-xs opacity-80">
    Pesanan akan otomatis dibatalkan jika waktu habis.
  </p>

</div>

<p className="mt-4 font-bold">
  Nomor Pesanan
</p>



<h3

className="
text-2xl
font-black
text-yellow-500
"

>

{orderId}

</h3>




<div
className={`
relative
mt-6
overflow-hidden
rounded-3xl
border
p-5

${
darkMode
?
"bg-white/5 border-yellow-400/30"
:
"bg-white/70 border-yellow-300"
}
`}
>

<div
className="
absolute
left-[-50%]
top-0
h-full
w-1/2
rotate-12
bg-gradient-to-r
from-transparent
via-white/40
to-transparent
animate-pulse
"
/>

<img
  src="/qris-myrobux.jpeg"
  alt="QRIS MY ROBUX"
  className="
  mt-6
  mx-auto
  w-64
  rounded-3xl
  border-4
  border-white
  shadow-[0_0_35px_rgba(250,204,21,.45)]
  hover:scale-105
  transition-all
  duration-500
  "
/>

</div>
<div
className={`
mt-6
rounded-2xl
p-5
text-left

${
darkMode
?
"bg-white/5 border border-white/10"
:
"bg-white/70 border border-yellow-200"
}
`}
>

<div className="flex justify-between">
<span>👤 Username</span>
<b>{username}</b>
</div>

<div className="mt-3 flex justify-between">
<span>💎 Robux</span>
<b>{robux}R</b>
</div>

<div className="mt-3 flex justify-between">
<span>📦 Metode</span>
<b>{method==="gamepass"?"Gamepass":"Username"}</b>
</div>

<div className="mt-3 flex justify-between">
<span>🆔 Order</span>
<b>{orderId}</b>
</div>

<hr className="my-4 opacity-20"/>

<div className="flex justify-between text-xl font-black">

<span>Total</span>

<span className="text-yellow-500">

Rp {price.toLocaleString("id-ID")}

</span>

</div>

</div>
<div

className={`

mt-5
rounded-2xl
p-4
font-bold


${
darkMode

?

"bg-yellow-900/40 text-yellow-300"

:

"bg-yellow-100 text-[#5b3925]"

}

`}

>

<div
className={`
mt-5
rounded-2xl
border
p-5
font-bold
leading-8

${
darkMode
?
"bg-yellow-500/10 border-yellow-400 text-yellow-300"
:
"bg-yellow-50 border-yellow-300 text-yellow-700"
}
`}
>

⚠️ Setelah melakukan pembayaran, upload bukti pembayaran agar pesanan segera diproses oleh Admin MY ROBUX.

</div>

<br/>

Pesanan tanpa bukti pembayaran tidak diproses.

</div>





<div

className="
mt-5
rounded-2xl
border
p-4
"

>


<p className="
font-black
">

📸 Upload Bukti Pembayaran

</p>




<input

type="file"

accept="image/*"

onChange={(e)=>
setBukti(
e.target.files?.[0] || null
)
}

className="
mt-3
w-full
rounded-xl
border
p-3
"

/>



{
bukti &&

<p

className="
mt-3
font-black
text-green-500
"

>

✅ {bukti.name}

</p>

}


</div>

<button
  onClick={() => {
    if (!bukti) {
      alert("⚠️ Upload bukti pembayaran terlebih dahulu!");
      return;
    }

    const pesan = `Halo Admin MY ROBUX 👋

✅ PEMBAYARAN BARU

🧾 Order ID: ${orderId}
👤 Username: ${username}
💎 Robux: ${robux}R
📦 Metode: ${method === "gamepass" ? "Gamepass" : "Username"}
💰 Total: Rp ${price.toLocaleString("id-ID")}

Saya sudah melakukan pembayaran.
Bukti pembayaran sudah saya siapkan.`;

    window.open(
      "https://wa.me/628982186538?text=" + encodeURIComponent(pesan),
      "_blank"
    );
  }}
  disabled={!bukti}
  className={`
    mt-6
    w-full
    rounded-xl
    p-4
    font-black
    text-white

    ${
      bukti
        ? "bg-green-500 hover:bg-green-600"
        : "bg-gray-400 cursor-not-allowed"
    }
  `}
>
  {bukti ? "📲 KIRIM KE OWNER" : "📸 UPLOAD BUKTI DULU"}
</button>



<button
  onClick={() => {
    setShowPayment(false);
    setTimeLeft(600);
    setBukti(null);
    setOrderId("");
    setUsername("");
    setGamepassLink("");
  }}
  className="mt-4 w-full rounded-xl bg-red-500 p-4 font-black text-white hover:bg-red-600"
>
  ❌ BATALKAN PESANAN
</button>


</div>

</div>

)

}








{/* LIST PAKET */}

<div

className="
mt-8
grid
gap-6
md:grid-cols-2
"

>

{

robuxList.map((item)=>(


<div

key={item.robux}

className={`
relative
overflow-hidden
rounded-3xl
p-6
transition-all
duration-500
hover:scale-105

${
  item.robux === 500
    ? (
        darkMode
          ? "bg-gradient-to-br from-yellow-900 via-amber-700 to-yellow-900 border-[3px] border-yellow-300 shadow-[0_0_45px_rgba(250,204,21,.7)]"
          : "bg-gradient-to-br from-yellow-100 via-white to-yellow-200 border-[3px] border-yellow-400 shadow-[0_0_40px_rgba(250,204,21,.45)]"
      )
    : item.robux === 1000
    ? (
        darkMode
          ? "bg-gradient-to-br from-cyan-900 via-sky-700 to-cyan-900 border-[3px] border-sky-300 shadow-[0_0_45px_rgba(34,211,238,.7)]"
          : "bg-gradient-to-br from-cyan-100 via-white to-sky-200 border-[3px] border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,.45)]"
      )
    : (
        darkMode
          ? "bg-slate-800"
          : "bg-[#fff4e3]"
      )
}
`}
>


<div
className="
absolute
-left-40
top-0
h-full
w-24
rotate-12
bg-white/30
blur-md
animate-[shine_4s_linear_infinite]
"
/>

{item.robux === 500 && (
  <div
    className={`
      relative
      mb-5
      w-fit
      overflow-hidden
      rounded-full
      px-5
      py-2
      text-sm
      font-black
      tracking-wider
      transition-all
      duration-500
      hover:scale-105

      ${
        darkMode
          ? "bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600 text-white shadow-[0_0_35px_rgba(236,72,153,.9)]"
          : "bg-gradient-to-r from-pink-300 via-white to-pink-400 text-pink-800 shadow-[0_0_25px_rgba(236,72,153,.6)] border border-pink-300"
      }
    `}
  >
    <span className="absolute inset-0 animate-pulse bg-white/20"></span>

    <span
      className="
      absolute
      -left-16
      top-0
      h-full
      w-10
      rotate-12
      bg-white/60
      blur-sm
      animate-[shine_3s_linear_infinite]
      "
    />

    <span className="relative">
      🔥 BEST SELLER
    </span>
  </div>
)}

{item.robux === 1000 && (
  <div
    className={`
      relative
      mb-5
      w-fit
      overflow-hidden
      rounded-full
      px-5
      py-2
      text-sm
      font-black
      tracking-wider
      transition-all
      duration-500
      hover:scale-105

      ${
        darkMode
          ? "bg-gradient-to-r from-cyan-500 via-sky-400 to-cyan-600 text-white shadow-[0_0_35px_rgba(6,182,212,.9)]"
          : "bg-gradient-to-r from-cyan-300 via-white to-cyan-400 text-cyan-800 shadow-[0_0_25px_rgba(6,182,212,.6)] border border-cyan-300"
      }
    `}
  >
    <span className="absolute inset-0 animate-pulse bg-white/20"></span>

    <span
      className="
      absolute
      -left-16
      top-0
      h-full
      w-10
      rotate-12
      bg-white/60
      blur-sm
      animate-[shine_3s_linear_infinite]
      "
    />

    <span className="relative">
      💎 BEST VALUE
    </span>
  </div>
)}

<div className="text-center">


<div

className="
mx-auto
flex
h-20
w-20
items-center
justify-center
rounded-full
bg-[#5b3925]
text-4xl
"

>

💎

</div>





<h2

className={`

mt-5
text-4xl
font-black


${
darkMode

?

"text-white"

:

"text-[#5b3925]"

}

`}

>

{item.robux}R

</h2>



<p className="font-black">

PREMIUM ROBUX

</p>






<div className="mt-5 space-y-3">



<div

className={`

rounded-xl
p-4
font-black


${
darkMode

?

"bg-green-900/40 text-green-300"

:

"bg-green-100 text-green-700"

}

`}

>

💚 GAMEPASS

<br/>

Rp {item.gamepass.toLocaleString("id-ID")}

</div>





<div

className={`

rounded-xl
p-4
font-black


${
darkMode

?

"bg-blue-900/40 text-blue-300"

:

"bg-blue-100 text-blue-700"

}

`}

>

💙 USERNAME

<br/>

Rp {item.username.toLocaleString("id-ID")}

</div>



</div>






<button

onClick={()=>
pilihPaket(item.robux)
}

className="
mt-6
w-full
rounded-xl
bg-gradient-to-r
from-[#5b3925]
to-[#c99a3b]
p-4
font-black
text-white
"

>

🛒 PILIH PAKET

</button>



</div>


</div>


))

}

</div>







{/* TESTIMONI */}

<section className="mt-20">

<h2
className={`
text-center
text-5xl
font-black
tracking-widest
mb-12

${
darkMode
?
"bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_gold]"
:
"bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-700 bg-clip-text text-transparent"
}
`}
>
⭐ TESTIMONI CUSTOMER
</h2>

<div className="grid gap-7 md:grid-cols-3">

{[
"Robux masuk cepat banget!",
"Admin ramah dan aman.",
"Sudah order berkali-kali aman."
].map((text,index)=>(

<div

key={index}

className={`
relative
overflow-hidden
rounded-3xl
p-8
transition-all
duration-500
hover:-translate-y-3
hover:scale-105

${
darkMode
?
"bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-yellow-500 shadow-[0_0_40px_rgba(250,204,21,.35)]"
:
"bg-gradient-to-br from-white via-yellow-50 to-orange-100 border border-yellow-300 shadow-xl"
}
`}

>

<div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-yellow-400/20 blur-3xl"></div>

<div className="text-3xl">
⭐⭐⭐⭐⭐
</div>

<p className="mt-5 text-lg font-bold leading-8">
{text}
</p>

<div className="mt-7 flex items-center gap-3">

<div
className="
flex
h-14
w-14
items-center
justify-center
rounded-full
bg-gradient-to-r
from-yellow-400
to-orange-500
text-2xl
"
>
👤
</div>

<div>

<p className="font-black">
Customer MY ROBUX
</p>

<p className="text-sm opacity-70">
Verified Buyer ✔
</p>

</div>

</div>

</div>

))}

</div>

</section>



{/* FOOTER */}

<footer
  className={`
    mt-16
    rounded-3xl
    p-8
    text-center
    text-white

    ${
      darkMode
        ? "bg-slate-950"
        : "bg-[#5b3925]"
    }
  `}
>

  <div
className={`
mx-auto
w-fit
rounded-full
px-8
py-3
font-black
border
backdrop-blur-xl
transition-all
duration-500
cursor-pointer
hover:scale-110
hover:-translate-y-1

${
darkMode
?
"bg-white/10 border-yellow-300/30 text-yellow-300 hover:bg-yellow-400/15 hover:shadow-[0_0_40px_rgba(250,204,21,.9)]"
:
"bg-white/45 border-white/70 text-green-700 hover:bg-white/65 hover:shadow-[0_0_35px_rgba(34,197,94,.7)]"
}
`}
>
🟢 STORE OPEN • MY ROBUX
</div>

  <div className="mt-10 flex flex-wrap justify-center gap-5">

    <a
href="https://instagram.com/strmyrbx"
target="_blank"
rel="noopener noreferrer"
className={`
rounded-full
border
backdrop-blur-xl
px-6
py-3
font-black
transition-all
duration-500
hover:-translate-y-1
hover:scale-110

${
darkMode
?
"bg-white/10 border-pink-400/30 text-pink-300 hover:bg-pink-500/20 hover:shadow-[0_0_35px_rgba(236,72,153,.9)]"
:
"bg-white/45 border-white/70 text-pink-700 hover:bg-pink-500 hover:text-white hover:shadow-[0_0_30px_rgba(236,72,153,.8)]"
}
`}
>
📸 Instagram
</a>

    <a
href="https://whatsapp.com/channel/0029VbDbCxi0QeagiImPiE3H"
target="_blank"
rel="noopener noreferrer"
className={`
rounded-full
border
backdrop-blur-xl
px-6
py-3
font-black
transition-all
duration-500
hover:-translate-y-1
hover:scale-110

${
darkMode
?
"bg-white/10 border-green-400/30 text-green-300 hover:bg-green-500/20 hover:shadow-[0_0_35px_rgba(34,197,94,.9)]"
:
"bg-white/45 border-white/70 text-green-700 hover:bg-green-500 hover:text-white hover:shadow-[0_0_30px_rgba(34,197,94,.8)]"
}
`}
>
📢 Saluran WhatsApp
</a>

  </div>

  <div className="mt-10 border-t border-white/10 pt-6">

    <p className="text-sm tracking-widest opacity-80">
      © 2026 MY ROBUX
    </p>

  </div>

</footer>


<a
  href="https://wa.me/628982186538"
  target="_blank"
  rel="noopener noreferrer"
  className={`
group
fixed
bottom-8
right-6
z-50
overflow-hidden
flex
items-center
gap-4
rounded-full
border
backdrop-blur-2xl
px-5
py-3
transition-all
duration-500
ease-out

hover:-translate-y-2
hover:scale-105
active:scale-95

${
darkMode
?
"bg-white/10 border-green-400/30 text-white shadow-[0_0_20px_rgba(34,197,94,.25)] hover:shadow-[0_0_55px_rgba(34,197,94,.9)]"
:
"bg-white/55 border-white/70 text-[#333] shadow-xl hover:shadow-[0_0_40px_rgba(34,197,94,.55)]"
}
`}
>

{/* Glossy Animation */}
<div
className="
absolute
-inset-full
bg-gradient-to-r
from-transparent
via-white/40
to-transparent
rotate-12
transition-all
duration-700
group-hover:translate-x-[260%]
"
/>

{/* Icon */}
<div
className="
relative
flex
h-12
w-12
items-center
justify-center
rounded-full
bg-gradient-to-br
from-green-400
to-green-600
text-2xl
shadow-lg
transition-all
duration-500
group-hover:rotate-12
group-hover:scale-110
group-hover:shadow-[0_0_30px_rgba(34,197,94,.9)]
"
>

<div
className="
absolute
top-1
left-1
h-3
w-6
rounded-full
bg-white/70
blur-sm
"
/>

💬

</div>

<div className="relative">

<p
className={`
text-xs
font-bold
transition-all
duration-500

${
darkMode
?
"text-green-200"
:
"text-green-700"
}

group-hover:tracking-widest
`}
>
NEED HELP?
</p>

<h3
className="
relative
font-black
tracking-wide
transition-all
duration-500
group-hover:text-green-400
"
>

<span className="relative z-10">
CHAT ADMIN
</span>

<span
className="
absolute
inset-0
blur-xl
opacity-0
text-green-400
transition-all
duration-500
group-hover:opacity-100
"
>
CHAT OWNER
</span>

</h3>

</div>

</a>

</div>

</main>

</>

);

}