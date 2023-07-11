import React from 'react';
import { connect } from 'react-redux';
import ReminderForm from './Components/reminderForm';
import ReminderList from './Components/reminderList';
import MedicationTrackerContainer from './Components/medicationContainer';
import * as actions from './Redux/action';

const App = ({ addReminder, addMedication }) => {
  return (
    <div>
      <h1>Medicine Reminder and Tracker</h1>
      <ReminderForm addReminder={addReminder} addMedication={addMedication} />
      <ReminderList />
      <h2>Medication Tracker</h2>
      <MedicationTrackerContainer />
    </div>
  );
};

export default connect(null, actions)(App);