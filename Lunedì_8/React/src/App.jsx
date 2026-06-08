import { useState } from 'react';
import FormNota from './components/FormNota';
import NotaCard from './components/NotaCard';
import './App.css';

function App() {
  const [note, setNote] = useState([]);

  function aggiungiNota(testo) {
    const nuovaNota = {
      id: Date.now(),
      testo: testo,
      data: new Date().toLocaleDateString('it-IT'),
    };
    setNote([nuovaNota, ...note]);
  }

  function eliminaNota(id) {
    setNote(note.filter((n) => n.id !== id));
  }

  return (
    <div className="app">
      <h1>Le mie note</h1>
      <FormNota onAggiungi={aggiungiNota} />
      {note.length === 0 && (
        <p className="vuoto">Nessuna nota ancora. Aggiungine una!</p>
      )}
      <div className="lista-note">
        {note.map((nota) => (
          <NotaCard key={nota.id} nota={nota} onElimina={eliminaNota} />
        ))}
      </div>
    </div>
  );
}

export default App;