import { ADD_REMINDER, DELETE_REMINDER } from '../constants';

export const addReminder = (text, dueDate) => {
    const action = {
        type: ADD_REMINDER,
        text,
        dueDate
    }
    console.log('addReminder = (text , dueDate)', action);
    return action;
}


export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    }
    console.log('deleteReminder = (id)', action);
    return action;
}