import Blog from './pages/blog/Blog';
import Login from './pages/login/Login';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import './App.css';
import { useContext } from 'react';
import { Context } from './context/Context';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { user } = useContext(Context);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />}></Route>
        <Route path="/login" element={user ? <Blog /> : <Login />}></Route>
        <Route path="/write" element={user ? <Write /> : <Login />}></Route>
        <Route path="/settings" element={user ? <Settings /> : <Login />}></Route>
        <Route path="/post/:postId" element={<Single />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
