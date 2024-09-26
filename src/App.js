import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      {/* <RowPost title="Netflix Orginals" />
      <RowPost title="Comedy Movies"  isSmall/> */}
      <Footer/>
    </div>
  );
}

export default App;
