import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div>
        <div>
          <h1 className="text-6xl font-bold text-red-600">Url Shortener</h1>
        </div>
        <div>
          <h2 className="text-xl font-medium">Paste your long Url here</h2>
          <input type="text" placeholder="Enter the link here" required/>
          <button>Shorten Url</button>
        </div>
      </div>
    </main>
  );
}
