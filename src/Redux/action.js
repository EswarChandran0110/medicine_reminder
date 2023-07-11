export const TYPE ={
    ADD_REMINDER : 'ADD_REMINDER',
     MARK_TAKEN : 'MARK_TAKEN',
     ADD_MEDICATION : 'ADD_MEDICATION'
};

export const addReminder = (reminder) => ({
    type: 'ADD_REMINDER',
    payload: reminder,
  });
  
  export const markTaken = (index) => ({
    type: 'MARK_TAKEN',
    payload: index,
  });

  export const addMedication = (medication) => ({
    type: 'ADD_MEDICATION',
    payload: medication,
  });