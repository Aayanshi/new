import Home from '@/components/Home';
import LoginHistory from '@/components/LoginHistory';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export default function Login() {
  return (
    <div>
      
      <Navbar/>
      {/* <Sidebar/> */}
      <Home/>
      <LoginHistory/>

      
    </div>
  );
}