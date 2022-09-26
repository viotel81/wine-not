import Home from './pages/home/Home';
import WineCatalogue from './pages/winecatalogue/WineCatalogue';
import Blog from './pages/blog/Blog';
import Login from './pages/login/Login';
import Publish from './pages/publish/Publish';
import WineManage from './pages/winemanage/WineManage';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Topbar from './components/topbar/Topbar';
import Footer from './components/footer/Footer';
import './App.css';
import { useContext } from 'react';
import { Context } from './context/Context';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/scrolltotop/ScrollToTop';


function App() {
  const { user } = useContext(Context);

  return (
    <Router>
      <ScrollToTop>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/catalogue" element={<WineCatalogue />}></Route>
          <Route path="/login" element={user ? <Blog /> : <Login />}></Route>
          <Route path="/publish" element={user ? <Publish /> : <Login />}></Route>
          <Route path="/addwine" element={user ? <WineManage /> : <Login />}></Route>
          <Route path="/settings" element={user ? <Settings /> : <Login />}></Route>
          <Route path="/post/:postId" element={<Single />}></Route>
        </Routes>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
