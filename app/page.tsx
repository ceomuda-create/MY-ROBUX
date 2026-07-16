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



useEffect(()=>{
  if(darkMode){
    document.documentElement.classList.add("dark");
    document.documentElement.style.colorScheme = "dark";
  }else{
    document.documentElement.classList.remove("dark");
    document.documentElement.style.colorScheme = "light";
  }
},[darkMode]);



const selected =
robuxList.find(
(item)=>item.robux===robux
);



const price =
method==="gamepass"
?
selected?.gamepass ?? robux*150
:
selected?.username ?? robux*160;



const ticketGamepass =
Math.ceil(robux / 0.7);



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

if(value<10){

setWarning(
"⚠️ Minimal 10 Robux"
);

}else if(value>10000){

setWarning(
"⚠️ Maksimal 10.000 Robux"
);

}else{

setWarning("");

}

}



function orderNow(){

if(!username.trim()){

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



const pesan = `Halo Admin MY ROBUX 👋

Saya ingin order Robux.

👤 Username:
${username}

💎 Jumlah:
${robux} Robux

📦 Metode:
${method==="gamepass"
?"🎮 Gamepass"
:"💎 Username"
}


${
method==="gamepass"
?
`🎟️ Tiket Gamepass:
${ticketGamepass} Robux

🔗 Link:
${gamepassLink}`
:
""
}


💰 Harga:
Rp ${price.toLocaleString("id-ID")}


Terima kasih 🙏`;



window.open(
"https://wa.me/628982186538?text="+
encodeURIComponent(pesan),
"_blank"
);

}

return (

<main
className={`
min-h-screen
px-4
py-6
transition-all
duration-500
relative
overflow-hidden

${
darkMode
?
"bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 text-white"
:
"bg-gradient-to-br from-[#fff1d6] via-[#e8c58f] to-[#9b6b3f] text-[#5b3925]"
}

`}
>

{/* EFEK PREMIUM BACKGROUND */}

<div
className="
absolute
top-[-200px]
left-1/2
-translate-x-1/2
w-[600px]
h-[600px]
rounded-full
bg-yellow-400/20
blur-[140px]
animate-pulse
"
/>


<div
className="
absolute
bottom-[-150px]
left-[-150px]
w-[450px]
h-[450px]
rounded-full
bg-orange-400/20
blur-[120px]
animate-pulse
"
/>


<div
className="
absolute
top-1/2
right-[-150px]
w-[400px]
h-[400px]
rounded-full
bg-green-400/10
blur-[120px]
animate-pulse
"
/>




{/* DARK MODE */}

<div className="
fixed
right-5
top-5
z-50
">

<button
onClick={()=>setDarkMode(!darkMode)}
className={`
rounded-full
px-5
py-3
font-black
shadow-xl
transition
hover:scale-110

${
darkMode
?
"bg-slate-700 text-yellow-300"
:
"bg-white text-[#5b3925]"
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



<div className="
relative
z-10
mx-auto
max-w-5xl
pt-10
">



{/* STATUS */}

<div className="
flex
justify-center
">

<div
className={`
rounded-full
px-5
py-2
font-black
transition-all
duration-300

${
darkMode
?
"bg-slate-800 text-yellow-300 shadow-[0_0_20px_rgba(250,204,21,0.5)]"
:
"bg-green-100 text-green-700"
}
`}
>
🟢 STORE OPEN • MY ROBUX
</div>

</div>




{/* HEADER */}

<header className="
mt-10
text-center
">


<h1
className={`
text-6xl
md:text-7xl
font-black
tracking-widest

${
darkMode
? "text-yellow-400"
: "text-yellow-600"
}

`}
>
MY ROBUX
</h1>


<p
className={`
text-xl
md:text-2xl
font-bold
tracking-wider

${
darkMode
? "text-yellow-300"
: "text-yellow-700"
}

`}
>
PREMIUM ROBUX STORE
</p>




<div className="
mt-6
overflow-hidden
rounded-xl
bg-[#5b3925]
py-3
">


<div className="
animate-marquee
whitespace-nowrap
font-black
text-white
">

💎 FAST DELIVERY • TRUSTED STORE • AMAN • FAST DELIVERY • TRUSTED STORE

</div>


</div>


</header>






{/* BENEFIT */}

<section className="
mt-10
grid
gap-5
md:grid-cols-3
">


{[

["⚡","Proses Cepat",
"Pesanan diproses dengan cepat"],

["🔒","Aman",
"Tidak meminta password Roblox"],

["💬","Fast Response",
"Admin siap membantu"]

].map((item,index)=>(


<div

key={index}

className={`
rounded-3xl
p-6
text-center
shadow-xl

transition-all
duration-300
hover:-translate-y-3
hover:scale-[1.03]
hover:shadow-2xl

${
darkMode
?
"bg-slate-800 text-white"
:
"bg-[#fff4e3]"
}

`}

>


<div className="
text-4xl
">

{item[0]}

</div>


<h3 className="
mt-3
text-xl
font-black
">

{item[1]}

</h3>


<p>

{item[2]}

</p>


</div>


))}


</section>





{/* CHECKOUT */}

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
className={`
text-3xl
font-black

${
darkMode
?
"text-yellow-300 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]"
:
"text-[#5b3925]"
}
`}
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
"bg-zinc-900 text-white border-zinc-700"
:
"bg-white text-black border-gray-300"
}

`}

/>



<div className="
mt-6
">


<div className={`
mb-3
flex
justify-between
font-black

${
darkMode
?
"text-[#5b3925]"
:
"text-[#5b3925]"
}

`}>

<span className={darkMode ? "text-yellow-300" : "text-[#5b3925]"}>
10R
</span>


<span className={darkMode ? "text-yellow-300" : "text-[#5b3925]"}>
💎 {customRobux} Robux
</span>


<span className={darkMode ? "text-yellow-300" : "text-[#5b3925]"}>
10000R
</span>


</div>




<input

type="range"

min="10"

max="10000"

step="10"

value={customRobux}

onChange={(e)=>
sliderChange(
Number(e.target.value)
)
}

className="
h-3
w-full
cursor-pointer
accent-yellow-500
"

/>



{
warning &&

<p className="
mt-3
text-center
font-black
text-red-600
">

{warning}

</p>

}



</div>



<div className="
mt-5
flex
gap-3
">


<button

onClick={()=>
setMethod("gamepass")
}

className="
flex-1
rounded-xl
bg-green-400
p-4
font-black
text-black
dark:bg-green-700
dark:text-white
"

>

💚 Gamepass

</button>




<button

onClick={()=>
setMethod("username")
}

className="
flex-1
rounded-xl
bg-blue-400
p-4
font-black
text-black
dark:bg-blue-700
dark:text-white
"

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
shadow-xl

${
darkMode
?
"border-green-500/30 bg-zinc-900"
:
"border-green-300 bg-green-50"
}
`}
>

<h3
className="
text-center
text-2xl
font-black
text-green-700
dark:text-green-400
"
>
🎮 METODE GAMEPASS
</h3>


<div
className={`
mt-6
rounded-3xl
border
border-green-500/30
p-5
shadow

${
darkMode
?
"bg-zinc-800 text-white"
:
"bg-white text-gray-800"
}
`}
>


<p className="text-center font-bold">
Buat Gamepass sebesar:
</p>


<div
className="
mt-5
rounded-3xl
bg-green-600
p-6
text-center
text-white
shadow-lg
"
>

<p className="text-lg font-bold">
Harga Tiket
</p>

<h2 className="
text-6xl
font-black
">
{ticketGamepass}R
</h2>

</div>



<input
type="text"
placeholder="Link Gamepass Roblox"
value={gamepassLink}
onChange={(e)=>setGamepassLink(e.target.value)}

className={`
mt-5
w-full
rounded-xl
border
p-4

${
darkMode
?
"border-zinc-700 bg-zinc-900 text-white placeholder-gray-400"
:
"border-gray-300 bg-white text-black placeholder-gray-500"
}
`}
/>


</div>

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
transition
hover:scale-105
"

>

🛒 ORDER SEKARANG

</button>


</section>







{/* LIST PAKET */}


<h2
className={`
text-4xl
font-black
mt-4

${
darkMode
?
"text-yellow-300 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]"
:
"text-[#5b3925]"
}
`}
>
PAKET ROBUX
</h2>



<p className="
mt-2
font-bold
text-[#8b5e3c]
">

Pilih paket Robux favorit kamu ✨

</p>





<div className="
mt-8
grid
gap-6
md:grid-cols-2
">



{
robuxList.map((item)=>(


<div

key={item.robux}

className={`

relative
overflow-hidden
rounded-[32px]
border
p-6
shadow-xl
transition
hover:-translate-y-3
hover:scale-[1.03]

${
darkMode
?
"bg-slate-800"
:
item.robux===500
?
"bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-700"
:
item.robux===1000
?
"bg-gradient-to-br from-yellow-100 via-yellow-300 to-orange-500"
:
"bg-[#fff4e3]"
}

`}

>



{
item.robux===500 &&

<div className="
absolute
left-4
top-4
rounded-full
bg-orange-500
px-4
py-2
font-black
text-white
shadow
">

🔥 BEST SELLER

</div>

}




{
item.robux===1000 &&

<div className="
absolute
left-4
top-4
rounded-full
bg-yellow-500
px-4
py-2
font-black
text-[#5b3925]
shadow
">

👑 BEST VALUE

</div>

}




<div className="
mt-5
text-center
">


<div className="
mx-auto
flex
h-20
w-20
items-center
justify-center
rounded-full
bg-[#5b3925]
text-4xl
shadow-xl
">

💎

</div>



<h2 className={`
mt-5
text-center
text-4xl
font-black

${
darkMode
?
"text-white"
:
"text-[#5b3925]"
}

`}>
{item.robux}R
</h2>



<p className={`
text-center
font-black
tracking-widest

${
darkMode
?
"text-white"
:
"text-[#5b3925]"
}

`}>
PREMIUM ROBUX
</p>



<div className="
my-6
h-[2px]
bg-yellow-500
"></div>



<div className="
space-y-4
">


<div
className={`
rounded-2xl
p-5
text-center
shadow-inner

${
darkMode
?
"bg-green-900/40"
:
"bg-green-100"
}

`}
>


<p className={`font-black ${
darkMode
?
"text-green-400"
:
"text-green-700"
}`}>
💚 GAMEPASS
</p>


<p className={`
mt-2
text-2xl
font-black

${
darkMode
?
"text-white"
:
"text-[#5b3925]"
}

`}>

Rp {item.gamepass.toLocaleString("id-ID")}

</p>


</div>





<div
className={`
rounded-2xl
p-5
text-center
shadow-inner

${
darkMode
?
"bg-blue-900/40"
:
"bg-blue-100"
}

`}
>


<p className={`font-black ${
darkMode
?
"text-blue-400"
:
"text-blue-700"
}`}>
💙 USERNAME
</p>


<p className={`
mt-2
text-3xl
font-black

${
darkMode
?
"text-white"
:
"text-[#5b3925]"
}

`}>

Rp {item.username.toLocaleString("id-ID")}

</p>


</div>



</div>




<button

onClick={()=>
pilihPaket(item.robux)
}

className="
mt-7
w-full
rounded-2xl
bg-gradient-to-r
from-[#5b3925]
to-[#c99a3b]
p-4
font-black
text-white
shadow-xl
transition
hover:scale-105
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

<section className="
mt-16
">


<h2 className="
text-center
text-4xl
font-black
">

⭐ TESTIMONI

</h2>



<div className="
mt-8
grid
gap-5
md:grid-cols-3
">


{[
"Robux masuk cepat banget! Admin ramah dan aman.",
"Harga murah dan proses sangat cepat.",
"Sudah berkali-kali order, selalu aman."
].map((text,index)=>(


<div

key={index}

className={`

rounded-3xl
p-6
shadow-xl

${
darkMode
?
"bg-slate-800"
:
"bg-white"
}

`}

>


⭐⭐⭐⭐⭐


<p className="
mt-3
">

{text}

</p>



<b>

— Customer MY ROBUX

</b>



</div>


))}


</div>


</section>






{/* CARA ORDER */}

<section className="
mt-16
">


<h2 className="
text-4xl
font-black
">

🛒 Cara Order

</h2>



<div className="
mt-6
grid
gap-5
md:grid-cols-4
">


{[
["💎","Pilih Paket"],
["👤","Isi Username"],
["💳","Pembayaran"],
["🚀","Robux Masuk"]

].map((item,index)=>(


<div

key={index}

className={`

rounded-2xl
p-5
text-center
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


<div className="
text-4xl
">

{item[0]}

</div>



<h3 className="
mt-3
font-black
">

{index+1}. {item[1]}

</h3>


</div>


))}


</div>


</section>







{/* FAQ */}

<section className="
mt-16
">


<h2 className="
text-4xl
font-black
">

❓ FAQ

</h2>



<div className="
mt-6
space-y-4
">



{[

[
"💎 Apakah Robux aman?",
"Aman, gunakan metode transaksi yang benar."
],

[
"⏱️ Berapa lama proses?",
"Diproses setelah pembayaran berhasil."
],

[
"🔒 Apakah perlu password?",
"Tidak. Jangan pernah memberikan password Roblox."
]

].map((item,index)=>(


<div

key={index}

className={`

rounded-2xl
p-5
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


<h3 className="
font-black
">

{item[0]}

</h3>


<p className="
mt-2
">

{item[1]}

</p>


</div>


))}



</div>


</section>






{/* SALURAN WA */}

<section className="
mt-16
rounded-3xl
bg-[#5b3925]
p-8
text-center
text-white
">


<h2 className="
text-3xl
font-black
">

⭐ FULL TESTI? CEK SALURAN

</h2>



<p className="
mt-3
">

Lihat testimoni lengkap customer MY ROBUX.

</p>




<a

href="https://whatsapp.com/channel/0029VbDbCxi0QeagiImPiE3H"

target="_blank"

className="
mt-5
inline-block
rounded-full
bg-green-500
px-6
py-3
font-black
text-white
transition
hover:scale-105
"

>

📢 Saluran WhatsApp MY ROBUX

</a>



</section>






{/* FOOTER */}

<footer className={`
mt-12
rounded-3xl
p-6
text-center
text-white

${
darkMode
?
"bg-slate-950"
:
"bg-[#5b3925]"
}

`}>



<div className={`
rounded-full
px-5
py-2
font-black

${
darkMode
?
"bg-green-900 text-green-300"
:
"bg-green-100 text-green-700"
}

`}>
🟢 STORE OPEN • MY ROBUX
</div>



<p className="
mt-3
">

Trusted Robux Store • Fast & Safe

</p>



<a
href="https://instagram.com/strmyrbx"
target="_blank"
className={`
mt-5
inline-block
rounded-full
px-6
py-3
font-black
transition

${
darkMode
?
"bg-slate-700 text-white"
:
"bg-white text-[#5b3925]"
}
`}
>
📸 @strmyrbx
</a>



<p className="
mt-4
text-xs
opacity-80
">

© 2026 MY ROBUX

</p>



</footer>





{/* FLOATING WHATSAPP */}

<a

href="https://wa.me/628982186538"

target="_blank"

className="
fixed
bottom-8
right-6
z-50
flex
items-center
gap-3
rounded-full
bg-green-500
px-5
py-3
text-white
shadow-xl
transition-all
hover:scale-110
hover:shadow-[0_0_35px_#22c55e]
animate-pulse
"

>


<div className="
flex
h-11
w-11
items-center
justify-center
rounded-full
bg-white/20
text-2xl
">

💬

</div>



<div>

<p className="
text-xs
font-bold
">

Need Help? 👑

</p>


<p className="
font-black
">

Chat Owner

</p>


</div>


</a>



</div>

</main>

);

}