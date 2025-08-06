import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#959393ff',
  };

  const cardStyle = {
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#d4af37',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  const linkStyle = {
    marginTop: '15px',
    fontSize: '0.9rem',
  };

  const socialButtonsStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '15px',
    marginBottom: '15px',
  };

  const iconStyle = {
    width: '30px',
    height: '30px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2>SportGlam</h2> 
        <input
          style={inputStyle}
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={inputStyle}
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div style={{ textAlign: 'left', marginBottom: '10px' }}>
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />{' '}
          Recuérdame
        </div>
        <button style={buttonStyle}>Entrar</button>

        <div style={socialButtonsStyle}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Google login"
            style={iconStyle}
            onClick={() => alert('Iniciar sesión con Google')}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
            alt="Facebook login"
            style={iconStyle}
            onClick={() => alert('Iniciar sesión con Facebook')}
          />
        </div>

        <div style={linkStyle}>
          ¿No tienes cuenta? <a href="/register">Regístrate</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
