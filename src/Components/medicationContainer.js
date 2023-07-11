import { connect } from 'react-redux';


import MedicationTracker from './medicationTracker';

const MedicationTrackerContainer = ({ medicationHistory }) => {
  return <MedicationTracker medicationHistory={medicationHistory} />;
};

const mapStateToProps = (state) => ({
    medicationHistory: state.medicationHistory, // Access the medicationHistory directly
  });
  

export default connect(mapStateToProps)(MedicationTrackerContainer);
