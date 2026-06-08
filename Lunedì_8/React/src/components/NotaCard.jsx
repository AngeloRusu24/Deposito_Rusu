function NotaCard({ nota, onElimina }) {
  return (
    <div className="nota-card">
      <p>{nota.testo}</p>
      <div className="nota-footer">
        <span className="nota-data">{nota.data}</span>
        <button onClick={() => onElimina(nota.id)}> Elimina</button>
      </div>
    </div>
  );
}

export default NotaCard;