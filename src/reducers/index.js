import { ADD_REMINDER } from '../constants';

const reminder = action => ({ text: action.text, id: Math.random() })

const reminders = (state = [], action) => {
    let reminders = null;
    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)]
            break;
        case "another case":
            reminders = [...state, { id: 2, text: 'yellow' }]
            break;
        default:
            return state;

    }
    return reminders
}

export default reminders;
