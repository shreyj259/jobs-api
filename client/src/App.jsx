import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./context/Auth"
import Register from "./components/pages/Register"
import Login from "./components/pages/Login"
import "./App.css"
import Navbar from "./components/Navbar"
import { ThemeProvider } from "@emotion/react"
import { theme } from "./components/MuiComponents"

function App() {
    
  return (
    <>
    <BrowserRouter>
    <AuthProvider>
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
    </AuthProvider>
    </BrowserRouter>
    </>
  )
}

export default App
