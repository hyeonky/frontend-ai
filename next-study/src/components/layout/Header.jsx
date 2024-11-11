import { navigationItem } from '@/data/navigation';
import Nav from './Nav';
import Nav2 from './Nav2';
import Link from 'next/link';

function Header() {
  // map() 문법
  // 배열이름(array).map((item, index) => (반복코드))

  return (
    <header>
      <div className="inner flex flex-col md:flex-row justify-between bg-gray-100 md:bg-gray-500 lg:bg-gray-900">
        <h1>
          <Link
            href="/"
            className="flex items-center h-16"
          >
            logo
          </Link>
        </h1>
        <Nav2 nav={navigationItem} />
      </div>
    </header>
  );
}

export default Header;
