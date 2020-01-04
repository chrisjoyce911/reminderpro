import { ADD_REMINDER, DELETE_REMINDER } from '../constants';

export const addReminder = (text) => {
    console.log('addReminder = (text)', text);
    const action = {
        type: ADD_REMINDER,
        text
    }
    return action;
}


export const deleteReminder = (id) => {
    console.log('deleteReminder = (id)', id);
    const action = {
        type: DELETE_REMINDER,
        id
    }
    return action;
}