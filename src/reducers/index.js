import { ADD_REMINDER, DELETE_REMINDER } from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';

const reminder = action => ({ text: action.text, dueDate: action.dueDate, id: Math.random() })

const removeById = (state = [], id) => {
    const reminders = state.filter(reminder => reminder.id !== id)
    return reminders;
}

const reminders = (state = [], action) => {
    let reminders = null;
    state = read_cookie('reminders');
    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)]
            bake_cookie('reminders', reminders);
            break;
        case DELETE_REMINDER:
            reminders = removeById(state, action.id);
            bake_cookie('reminders', reminders);
            break;
        default:
            return state;

    }
    return reminders
}

export default reminders;
