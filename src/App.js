import './App.css';
import ProfilePhoto from './components/ProfilePhoto';
import Header from './components/Header';
import Information from './components/Information'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <Header/>
      <Information/>
      <Footer/>
    </div>
  );
}

export default App;
