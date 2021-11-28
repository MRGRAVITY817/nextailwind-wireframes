import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';

export const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <NavBar />
      <div className="min-h-screen p-12"> {children}</div>
      <Footer />
    </div>
  );
};
