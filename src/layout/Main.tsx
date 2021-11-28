import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';

export const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="min-h-screen"> {children}</div>
    </div>
  );
};
