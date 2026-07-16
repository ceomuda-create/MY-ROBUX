import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { error } = await supabase
      .from("orders")
      .insert([
        {
          robux: data.robux,
          status: "Menunggu Pembayaran",
        },
      ]);

    if (error) {
      console.log(error);

      return NextResponse.json(
        {
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Pesanan berhasil masuk",
    });

  } catch {
    return NextResponse.json(
      {
        error: "Terjadi kesalahan server",
      },
      {
        status: 500,
      }
    );
  }
}


export async function GET() {
  const { data, error } = await supabase
    .from("orders")
    .select("*");

  if (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }

  return NextResponse.json(data);
}