import { useState } from 'react';

function FormNota({ onAggiungi }) {
  const [testo, setTesto] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!testo.trim()) return;
    onAggiungi(testo);
    setTesto('');
  }

  return (
    <form className="form-nota" onSubmit={handleSubmit}>
      <textarea
        placeholder="Scrivi una nota..."
        value={testo}
        onChange={(e) => setTesto(e.target.value)}
      />
      <button type="submit">+ Aggiungi</button>
    </form>
  );
}

export default FormNota;