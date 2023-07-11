import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addReminder, markTaken } from '../Redux/action';


const ReminderForm = ({ reminders, addReminder, markTaken }) => {
  const [medicine, setMedicine] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (medicine && time) {
      addReminder({ medicine, time });
      setMedicine('');
      setTime('');
    }
  };



  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Medicine"
        value={medicine}
        onChange={(e) => setMedicine(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button type="submit">Add Reminder</button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  reminders: state.reminders.reminders,
});

export default connect(mapStateToProps, { addReminder, markTaken })(
  ReminderForm
);
