import { useEffect, useState } from "react";

export default function useCustomPointer(cursor) {
  // Impostiamo lo stato per le coordinate del mouse (x e y)
  const [positionMouse, setPositionMouse] = useState({ x: 0, y: 0 });

  // Usiamo useEffect per eseguire il codice solo al montaggio e smontaggio del componente
  useEffect(() => {
    // Nascondiamo il cursore nativo del browser su tutto il body
    document.body.style.cursor = "none";

    // Funzione per aggiornare le coordinate del mouse ad ogni movimento
    const updatePosition = (e) => {
      setPositionMouse({ x: e.clientX, y: e.clientY });
    };

    // Aggiungiamo un listener per il movimento del mouse che chiama updatePosition
    window.addEventListener("mousemove", updatePosition);

    // Cleanup: al momento dello smontaggio rimuoviamo il listener e ripristiniamo il cursore
    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.body.style.cursor = "auto"; // Ripristiniamo il cursore nativo
    };
  }, []); // L'array vuoto fa eseguire l'effetto solo una volta al montaggio



  
  // Renderizziamo un div che segue il puntatore del mouse,
  // con posizione fissa, senza catturare eventi del mouse e centrato sulle coordinate
  return (
    <div
      style={{
        position: "fixed",
        left: positionMouse.x,
        top: positionMouse.y,
        pointerEvents: "none", // Evita che il div intercetti eventi mouse
        transform: "translate(-50%, -50%)", // Centra il div sulle coordinate
      }}
    >
      {cursor}
    </div>
  );
}
