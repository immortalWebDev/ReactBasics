import React, { createContext, useState } from 'react';

export const StudentContext = createContext();

export const StudentContextProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null); 

  const handleAddStudent = (student) => {
    setStudents([...students, student]);
    setIsModalOpen(false);
  };

  const handleDeleteStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };

  const handleEditStudent = (index, updatedStudent) => {
    const updatedStudents = [...students];
    updatedStudents[index] = updatedStudent;
    setStudents(updatedStudents);
    setSelectedStudent(null); 
    setIsModalOpen(false);
  };

  return (
    <StudentContext.Provider value={{ 
      students, 
      isModalOpen, 
      setIsModalOpen, 
      selectedStudent, 
      setSelectedStudent, 
      handleAddStudent, 
      handleDeleteStudent, 
      handleEditStudent 
    }}>
      {children}
    </StudentContext.Provider>
  );
};




