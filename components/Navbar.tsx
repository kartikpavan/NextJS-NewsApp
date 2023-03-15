import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-neutral text-neutral-content sticky top-0 z-50">
        <a className="btn btn-ghost normal-case text-xl">NEXT-JS News APP</a>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Breaking</Link>
            </li>
            <li>
              <Link href="/search">Search</Link>
            </li>
            <li tabIndex={0}>
              <a>
                Categories
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <Link href="/categories/business" className="text-slate-800">
                    Business
                  </Link>
                </li>
                <li>
                  <Link href="/categories/entertainment" className="text-slate-800">
                    Entertainment
                  </Link>
                </li>
                <li>
                  <Link href="/categories/general" className="text-slate-800">
                    General
                  </Link>
                </li>
                <li>
                  <Link href="/categories/health" className="text-slate-800">
                    Health
                  </Link>
                </li>
                <li>
                  <Link href="/categories/science" className="text-slate-800">
                    Science
                  </Link>
                </li>
                <li>
                  <Link href="/categories/sports" className="text-slate-800">
                    Sports
                  </Link>
                </li>
                <li>
                  <Link href="/categories/technology" className="text-slate-800">
                    Technology
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
