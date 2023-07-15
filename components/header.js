export default function Header() {
  return (
    <header className="p-3 sticky flex justify-between items-center mx-auto max-w-7xl ">
      <div className="text-2xl font-semibold">TD</div>
      <nav>
        <ul className="flex space-x-4">
          <li>LinkedIn</li>
          <li>GitHub</li>
          <li>Figma</li>
        </ul>
      </nav>
    </header>
  );
}
