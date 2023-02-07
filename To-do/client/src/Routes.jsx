

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';

const Pages = (props) => (
  <Routes>
    <Route exact path="/" element={<HomePage username={props.username} items={props.items} addUser={props.addUser} />} />
    <Route path="/login" element={<LoginPage addUser={props.addUser}/>} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/profile" element={<ProfilePage username={props.username} addUser={props.addUser}/>} />
    {/* <Route component={NotFoundPage} /> */}
  </Routes>
);

export default Pages;
