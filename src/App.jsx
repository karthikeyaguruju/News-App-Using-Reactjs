import { useState, useEffect } from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import NewsBoard from './Components/NewsBoard';
import Footer from './Components/Footer';

const App = () => {
  const [category, setCategory] = useState("general");

  useEffect(() => {
    const handleOnlineStatus = () => {
      if (!navigator.onLine) {
        alert("You are offline. Please check your internet connection.");
      }
    };
    window.addEventListener("online", handleOnlineStatus);
    return () => {
      window.removeEventListener("online", handleOnlineStatus);
    };
  }, []);

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
      <hr></hr>
      <Footer/>
    </div>
  );
};

export default App;
