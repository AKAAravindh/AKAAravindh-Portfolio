import navItems from "../../utils/navItems";

function NavbarComponent() {
  return (
    <nav className="px-16 h-25 flex items-center justify-between">
      <div className="flex items-center gap-2 font-extrabold text-[2vw]">
        <span className="w-2 h-2 block bg-gray-200 rounded-[1px]" />
        <h3>AR</h3>
        <span className="w-2 h-2 block bg-gray-200 rounded-[1px]" />
      </div>
      <ul className="flex items-center gap-8 text-[1.2vw]">
        {navItems.map((item, idx) => (
          <li key={idx} className="flex gap-2 items-baseline">
            <span className="text-gray-500 text-[1vw] font-[KodeMono]">
              [{item.id}]
            </span>
            <a className="cursor-pointer" href={item.path}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavbarComponent;
