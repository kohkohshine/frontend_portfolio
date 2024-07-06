import { Outlet } from 'react-router-dom';
import NavBar from '..components/NavBar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div>
      <header>
    <NavBar/>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}