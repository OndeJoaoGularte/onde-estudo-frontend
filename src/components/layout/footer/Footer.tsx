import { Navbar } from "./Navbar";
import { Bottombar } from "./Bottombar";


export function Footer() {
  return (
    <footer className="mt-auto w-full">
      <Navbar />
      <Bottombar />
    </footer>
  );
}