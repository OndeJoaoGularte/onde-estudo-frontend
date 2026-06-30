import { Topbar } from './Topbar';
import { Navbar } from './Navbar';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-base-100 shadow-md">
      <Topbar />
      <Navbar />
    </header>
  );
}
