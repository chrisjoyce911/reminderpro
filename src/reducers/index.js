import { ADD_REMINDER } from '../constants';

const reminder = action => ({text: action.text, id: Math.random()})
//don't need those extra parentheses around the argument or return if your using arrow functions why only use half the feature.

const reminders = (state = [], action) => {
    switch (action.type) {
        case ADD_REMINDER:
            return [...state, reminder(action)]
        default:
           return state;
    }
}
// If you intending to use let it would appear this is the pattern you might follow otherwise the pattern about looks nicer.

const reminders = (state = [], action) => {
    let reminders = null;
    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)]
            console.log('reminders as state', reminders);
            break;
        case "another case":
            reminders = [..state, yellow:"isn't yellow"]
            break;
        default:
            return state;
    return reminders
    }
}

export default reminders;


// const reminder = (action) => {
//     return {
//         text: action.text,
//         id: Math.random()
//     }
// }

// const reminders = (state = [], action) => {
//     let reminders = null;
//     switch (action.type) {
//         case ADD_REMINDER:
//             reminders = [...state, reminder(action)]
//             console.log('reminders as state', reminders);
//             return reminders;
//         default:
//             return state;

//     }
// }
