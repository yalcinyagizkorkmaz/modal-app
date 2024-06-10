import logo from './logo.svg';
import './App.css';
import { createModal,useModals } from './utils/modal';
import Modal from './modals';



function App() {
  const modals=useModals()
  console.log(modals)
  
 
  return (
    <div className="App">
    <div className="flex justify-between p-4">
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => createModal('login')}
      >
        Modal Aç
      </button>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => createModal('register')}
      >
        Register Modal Aç
      </button>
    </div>
    <Modal /> {/* Render the dynamic Modal component */}
  </div>
  );

}

export default App;
