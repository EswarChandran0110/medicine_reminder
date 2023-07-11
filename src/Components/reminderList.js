import React from 'react';
import { connect } from 'react-redux';
import { markTaken } from '../Redux/action';

const ReminderList = ({ reminders, markTaken }) => {
  return (
    <ul>
      {reminders.map((reminder, index) => (
        <li key={index}>
          <span>{reminder.medicine}</span>
          <span>{reminder.time}</span>
          <button onClick={() => markTaken(index)}>Mark Taken</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
    reminders: state.reminders.reminders,
  });
  

export default connect(mapStateToProps, { markTaken })(ReminderList);
