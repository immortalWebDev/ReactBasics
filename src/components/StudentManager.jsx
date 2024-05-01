import React, { useContext } from "react";
import { StudentContext } from "./context/StudentContext";
import Modal from "./Modal";

const StudentManager = () => {
  const {
    students,
    isModalOpen,
    setIsModalOpen,
    setSelectedStudent,
    handleDeleteStudent,
  } = useContext(StudentContext);

  const handleEditClick = (student, index) => {
    
    setSelectedStudent({ ...student, index }); 
    setIsModalOpen(true);
  };

  return (
    <div>
      <h2>Total students: {students.length}</h2>
      <button
        onClick={() => {
          setIsModalOpen(true);
          setSelectedStudent(null);
        }}
      >
        Add Student
      </button>
      {isModalOpen && <Modal />}
      <hr />
      <h3>All Students</h3>
      <div>
        {students.map((student, index) => (
          <div key={index}>
            <p>
              {student.name} - {student.mobile} - {student.address} -{" "}
              <button onClick={() => handleDeleteStudent(index)}>Delete</button>{" "}
              |{" "}
              <button onClick={() => handleEditClick(student, index)}>
                Edit
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentManager;
