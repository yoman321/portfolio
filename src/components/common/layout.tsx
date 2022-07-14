import Link from "next/link";
import { useMemo } from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const routes = useMemo(
    () => [
      { label: "Home", link: "/" },
      { label: "About", link: "about/" },
      { label: "Projects", link: "projects/" },
      { label: "Contact", link: "contact/" },
    ],
    []
  );
  return (
    <div className="bg-slate-200">
      <nav className="bg-slate-700 text-white">
        <div className="flex flex-row justify-between w-[calc(100vw-30px)] mx-auto">
          <div className="py-3">
            <Link href="/">
              <a>Logo</a>
            </Link>
          </div>
          <div>
            <ul className="flex flex-row gap-6">
              {routes.map((route) => (
                <li key={route.label + route.link}>
                  <Link href={route.link}>
                    <a className=" block py-3">{route.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
