export default function Header() {
  return (
    <div className="flex flex-col pt-[5vh]">
      <div className="flex items-center justify-between">
        <h1 className="text-black font-bold text-xl">Temu Dataku</h1>
        <nav className="flex space-x-4">
          <a href="#" className="text-blue-500 hover:underline">Home</a>
          <a href="#" className="text-blue-500 hover:underline">About</a>
          <a href="#" className="text-blue-500 hover:underline">Contact</a>
        </nav>
      </div>
    </div>
  );
}