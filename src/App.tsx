import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MenuBar from './components/MenuBar/MenuBar';
import AuthPopup from './components/AuthPopup/AuthPopup';
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import Community from './pages/Community/Community'; // Importar a nova página

function App() {
  const [popupMode, setPopupMode] = useState<'signIn' | 'signUp' | null>(null);

  const handleSignInClick = () => setPopupMode('signIn');
  const handleSignUpClick = () => setPopupMode('signUp');
  const handleClosePopup = () => setPopupMode(null);
  const handleSwitchPopupMode = (newMode: 'signIn' | 'signUp') => setPopupMode(newMode);

  return (
    <div className="app-container">
      <MenuBar onSignInClick={handleSignInClick} onSignUpClick={handleSignUpClick} />
      {popupMode && (
        <AuthPopup
          mode={popupMode}
          onClose={handleClosePopup}
          onSwitchMode={handleSwitchPopupMode}
        />
      )}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/community" element={<Community />} /> {/* Adicionar a nova rota */}
        </Routes>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Não Sei Ainda. Todos os direitos reservados.</p>
        <p>
          <a href="#">Termos de Serviço</a> | <a href="#">Política de Privacidade</a>
        </p>
      </footer>
    </div>
  );
}

export default App;