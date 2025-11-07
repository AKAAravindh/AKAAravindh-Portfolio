import NavbarComponent from "../components/navbar/NavbarComponent";
import HomePage from "../pages/HomePage";
import FooterComponent from "../components/footer/FooterComponent";

function Layout() {
  return (
    <main className="bg-black text-gray-200">
      <header className="sticky top-0 right-0 left-0">
        <NavbarComponent />
      </header>

      <HomePage />

      <footer>
        <FooterComponent />
      </footer>
    </main>
  );
}

export default Layout;
