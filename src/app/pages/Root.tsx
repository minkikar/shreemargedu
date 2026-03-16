import { Outlet , ScrollRestoration} from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollRestoration />
      <Header />
      <main className="flex-1 pt-20">
        <Outlet />

      </main>
      <Footer />
    </div>
  );
}
