import Image from "next/image";
import { useState } from "react";
import Header from "../components/header/Header";

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Header />
      <main></main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
