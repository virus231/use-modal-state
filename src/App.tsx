import React from 'react';
import './App.css';
import { Modal } from './components/Modal';
import { useModalState } from './hook/useModalState';

function App() {
  const { isOpen, onToggle } = useModalState();

  const handleClick = () => {
    onToggle()
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Click</button>
      <Modal open={isOpen} />
    </div>
  );
}

export default App;
