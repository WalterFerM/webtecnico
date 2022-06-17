import { Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { ProtectedRoute } from './Components/ProtectedRoute';
import { Register } from './Components/Register';
import{ AuthProvider }from "./context/authContext";

function App() {
  return (
    <div className="bg-blue-300 h-screen text-black flex">
      <AuthProvider>
        <Routes >
          <Route path="/" element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App