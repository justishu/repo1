import { useState } from "react";
import PlusButton from "./Plus";
import Modal from "./Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <PlusButton onClick={() => setShowModal(showModal==false)} />

      {showModal && <Modal />}
    </>
  );
}

export default App;