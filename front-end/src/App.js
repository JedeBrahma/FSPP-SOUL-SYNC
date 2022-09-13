import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./Providers/UserProvider";
import "./index.css";
import {Container} from "react-bootstrap"

// PAGES
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
// import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import { LoginPage } from "./Pages/LoginPage";
import {LoggedInPage} from "./Pages/LoggedInPage"
import image from "./images/background-image1.jpg"
// COMPONENTS
import NavBar from "./Components/NavBar";


function App() {
  return (
    <UserProvider>
       <Container 
         style={{ 
          backgroundImage: `url(${image})`, 
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",       
          // color: "#Cba436", 
         }} 
       >    
        <Router>
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/loggedIn" element={<LoggedInPage />} />
              {/* <Route path="/nav" element={<NavBar />} /> */}
              <Route path="/entries" element={<Index />} />
              <Route path="/entries/new" element={<New />} />
              <Route exact path="/entries/:id" element={<Show />} />
              <Route path="/entries/:id/edit" element={<Edit />} />
              <Route path="*" element={<FourOFour />} />
            </Routes>
          </main>
        </Router>
      </Container>
      </UserProvider>      
  
  );
}

export default App;

//Inspirational quotes provided by <a href="https://zenquotes.io/" target="_blank">ZenQuotes API</a>
