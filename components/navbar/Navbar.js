import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = () => (
  <nav className="flex items-center justify-between flex-wrap bg-red-500 p-3">
    <div className="flex item-center text-white mr-6">
      <Link href="/">
        <span className="font-semibold text-xl tracking-tight cursor-pointer">PETS APP</span>
      </Link>
    </div>
  </nav >
)


export default Navbar;