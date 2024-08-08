// pages/_app.tsx

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/Components/UI/Header";  // Adjust the path if necessary
import Footer from "@/Components/UI/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <main className=""> {/* Add padding or other layout styles here if needed */}
        <Component {...pageProps} />
      </main>
      <Footer/>
    </div>
  );
}
