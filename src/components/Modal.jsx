import React, { useContext, useState ,useEffect} from 'react';
import { StudentContext } from './context/StudentContext';
import './Modal.css';

const Modal = () => {
  const { isModalOpen, setIsModalOpen, selectedStudent, handleAddStudent, handleEditStudent } = useContext(StudentContext);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (selectedStudent) {
      setName(selectedStudent.name);
      setMobile(selectedStudent.mobile);
      setAddress(selectedStudent.address);
    } else {
      setName('');
      setMobile('');
      setAddress('');
    }
  }, [selectedStudent]);

  const handleAdd = () => {
    if (selectedStudent) {
      handleEditStudent(selectedStudent.index, { ...selectedStudent, name, mobile, address });
    } else {
      handleAddStudent({ name, mobile, address });
    }
    setIsModalOpen(false);
  };

  return (
    <div className={`modal-overlay ${isModalOpen ? 'open' : ''}`} onClick={() => setIsModalOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{selectedStudent ? 'Edit Student' : 'Add Student'}</h3>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Mobile" />
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
        <button onClick={handleAdd}>{selectedStudent ? 'Save' : 'Add'}</button>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
