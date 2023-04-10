import "../styles/globals.css";
import { Outfit } from "next/font/google";
// import Header from "../components/Header";

const outfit = Outfit({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={outfit.className}>
      {/* <Header /> */}
      <Component {...pageProps} />
    </main>
  );
}
