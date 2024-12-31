import Dashboard_page from '@/components/dashboard'; 
import LoginHistory from '@/components/LoginHistory';
import Login from '@/components/LoginPage';

export default function Navbar_menu() {
  return (
    <div>
       <Dashboard_page />
       <LoginHistory/>
    </div>
  );
}