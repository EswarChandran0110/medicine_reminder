import { TYPE } from "./action";

const initialState = {
    reminders: [],
    medicationHistory: []
  };

  export const reducer = (state = initialState, action) => {
    
    if (action.type === TYPE.ADD_REMINDER) {
      
        return {
            ...state,
            reminders: [...state.reminders, action.payload],
        };
    }else if(action.type === TYPE.MARK_TAKEN){
      
        return {
            ...state,
            reminders: state.reminders.filter((_, i) => i !== action.payload),
        };
    }else if(action.type === TYPE.ADD_MEDICATION){
      
        return {
            ...state,
        medicationHistory: [...state.medicationHistory, action.payload],
        };
    }else{
      
        return state;
    
    }   
  };  

  export default reducer;