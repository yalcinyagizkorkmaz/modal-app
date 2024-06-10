import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { destroyModal } from '../utils/modal';
import modalDefinitions from '../modalss'

const Modal = () => {
  const modalsState = useSelector((state) => state.modal.modals);
  const dispatch = useDispatch();

  if (modalsState.length === 0) return null;

  const { name, data } = modalsState[modalsState.length - 1];
  const modalDefinition = modalDefinitions.find((modal) => modal.name === name);

  if (!modalDefinition) return null;

  const ModalComponent = modalDefinition.element;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <ModalComponent data={data} onClose={() => dispatch(destroyModal())} />
    </div>
  );
};

export default Modal;

