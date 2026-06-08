function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-200">
      <h1 className="text-xl font-bold">Logo</h1>

      <div className="flex gap-4">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Courses</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;