import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';

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

export const clearReminders = () => {
    console.log('clearReminders');
    return {
        type: CLEAR_REMINDERS
    }

}