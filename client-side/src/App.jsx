// import React from 'react';
import {Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Layout from './components/Navbar/Layout';
import UserProfile from './pages/UserProfile';
import WishList from './pages/WishList';
import OwnedList from './pages/OwnedList';
import DiscoverySearch from './pages/Discovery';
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />;
        <Route path="/login" element={<LoginPage />} />;
        <Route path="/register" element={<SignupPage />} />;
        <Route path="/discover" element={<DiscoverySearch />}/>
        <Route path="/user-detail" element={<UserProfile />} />;
        <Route path="/wish-list" element ={<WishList/>}/>;
        <Route path="/owned-list" element ={<OwnedList/>}/>;
      </Routes>
      </Layout>
  );
}
export default App;
// import { Routes, Route } from 'react-router-dom';

// import HomePage from './pages/HomePage';
// import LoginPage from './components/LoginPage';
// import SignupPage from './components/SignupPage';
// import Layout from './components/Navbar/Layout';
// import UserProfile from './pages/UserProfile';
// import DiscoverySearch from './pages/Discovery';
// import OwnedList from './pages/OwnedList';
// import WishList from './pages/WishList';

// function App() {
//   return (
//     <Layout>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<SignupPage />}/>
//         <Route path="/discover" element={<DiscoverySearch />}/>
//           <Route exact path="/" element={<OwnedList />  } />
//         <Route path="/another-page" element={<WishList /> } />
//         <Route path="/user-detail" element={<UserProfile />} />
//       </Routes>
//       </Layout>
    
//   );
// }

// export default App;



