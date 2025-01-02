export default function Header() {
  return (
    <div className="max-w-6xl mx-auto h-20 flex justify-between items-center">
      <div>Nhat-Quan HO NGUYEN</div>
      <div className="flex space-x-4">
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
}
