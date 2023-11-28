
import Navbar from './components/navbar/Navbar.jsx';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import SinglePost from './components/singlePost/SinglePost.jsx';
import Publish from './components/publish/publish.jsx';
import Settings from './components/settings/Settings.jsx';
import { SignIn } from './components/login/SignIn.jsx';
import { SignUp } from './components/SignUp/Signup.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const user=false;


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<MainContent />} />
          <Route path="/signup" element={user ? <MainContent /> : <SignUp/> } />
          <Route path="/signin" element={user ? <MainContent /> : <SignIn/> } />
          {/* <Route path="/signin"  element={<SignIn/>} />
          <Route path="/singlePost"  element={<SinglePost/>} /> */}
          
          <Route path="/publish"  element={user ? <Publish /> : <SignIn/> } />
          <Route path="/settings"  element={user ? <Settings /> : <SignIn/> } />
        
        </Routes>
      </BrowserRouter>
    </>
  );
}






function MainContent() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;

