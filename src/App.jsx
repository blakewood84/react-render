import { useEffect, useLayoutEffect, useState } from "react";
import { createPortal, render } from "react-dom";
import "./App.css";

const useModal = () => {
  const [modalContainer, setModalContainer] = useState(null)
 
  useLayoutEffect(() => {
    const el = document.getElementById("portal");
    setModalContainer(el);
  }, [])

  const openModal = () => {
    if(modalContainer === null) return;
    return render(<div>Boom!</div>, modalContainer)
  }
  return {
    openModal
  }
}

function App() {
  const { openModal } = useModal();

  return (
    <div className="App">
      <div id="portal"></div>
      <button onClick={() => openModal()}>Portal</button>
    </div>
  );
}

function Modal() {
  const [el, setEl] = useState(null)

  useEffect(() => {
    const element = document.getElementById("portal");
    setEl(element)
  }, []);

  if(el === null) return null;

  return createPortal(
    <div>
      <h1>Boom!</h1>
    </div>,
    el
  );
}

export default App;
