import { ADD_REMINDER, DELETE_REMINDER } from '../constants';

const reminder = action => ({ text: action.text, dueDate: action.dueDate, id: Math.random() })

const removeById = (state = [], id) => {
    const reminders = state.filter(reminder => reminder.id !== id)
    return reminders;
}

const reminders = (state = [], action) => {
    let reminders = null;
    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)]
            break;
        case DELETE_REMINDER:
            reminders = removeById(state, action.id);
            break;
        default:
            return state;

    }
    return reminders
}

export default reminders;
