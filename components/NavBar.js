import Link from "next/link";
export default function NavBar() {
  return (
    <nav className="flex justify-around p-8">
      <Link href="/">
        <div>Home</div>
      </Link>
      <Link href="/about">
        <div>About</div>
      </Link>
      <Link href="/work">
        <div>Work</div>
      </Link>
      <Link href="/thoughts">
        <div>Thoughts</div>
      </Link>
    </nav>
  );
}
