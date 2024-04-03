import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col   p-24">
      <Header />
      <h2 className="mt-20 bg-white text-black ">
        Home Page
      </h2>
    </main>
  );
}
