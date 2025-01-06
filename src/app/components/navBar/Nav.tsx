import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed w-[100vw] alinha5 shadow-lg ">
      <div>
        <h2>Logo</h2>
      </div>
      <Link href="#section1">Sessão 1</Link>
      <Link href="#section2">Sessão 2</Link>
      <Link href="#section3">Sessão 3</Link>
      <Link href="#section4">Sessão 4</Link>
      <Link href="#section5">Sessão 5</Link>
    </nav>
  );
}
