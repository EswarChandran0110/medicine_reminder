import React from 'react';

const MedicationTracker = ({ medicationHistory }) => {
  return (
    <ul>
      {medicationHistory.map((medication, index) => (
        <li key={index}>
          <span>{medication.medicine}</span>
          <span>{medication.time}</span>
        </li>
      ))}
    </ul>
  );
};

export default MedicationTracker;
