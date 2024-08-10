import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {
  return (
    <Router> {/*wraps the entire application*/}
      <Routes> {/* acts as a switch*/}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
