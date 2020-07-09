import { appliedActions } from './store.js';

const getRandomBoolean = () => Math.random() > 0.5;

const getRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
}

const mapActionToBar = {
    Есть: {
        Здоровье: () => getRandomBoolean() ? 2 : -2,
        Голод: () => -10
    },
    Пить: {
        Здоровье: () => getRandomBoolean() ? 1 : -1,
        Жажда: () => -10
    },
    Отдохнуть: {
        Здоровье: () => getRandomInteger(1, 10),
        Жажда: () => -getRandomInteger(1, 100),
        Голод: () => -getRandomInteger(1, 100),
        Усталость: () => -10
    },
    Работать: {
        Жажда: () => getRandomInteger(30, 40),
        Голод: () => getRandomInteger(10, 20),
        Усталость: () => 10
    }
}

const logActionToHistory = (action, barTitle, diff, quantity) => {
    const loggedAction = appliedActions.find((appliedAction) => appliedAction.id === action.id);
    const changedBar = {
        barTitle,
        diff,
        quantity
    }

    if(!loggedAction) {
        const newAction = {
            ...action,
            changedBars: [changedBar]
        }

        appliedActions.push(newAction);        
    } else {
        loggedAction.changedBars.push(changedBar);
    }
}

const updateBar = (title, bars, action) => {
    const currentBar = bars.find((bar) => bar.title === title);
    const quantityDiff =  mapActionToBar[action.title][title]();    
    const newQuantity = (quantityDiff > 0)
        ? Math.min(currentBar.quantity + quantityDiff, 100)
        : Math.max(currentBar.quantity + quantityDiff, 0);
        
    logActionToHistory(action, title, quantityDiff, newQuantity);
    
    return {
        ...currentBar,
        quantity: newQuantity
    }
}



export const updateBars = (bars, action) => {
    const updatedBars = [];

    bars.forEach((bar) => {      
        const isCurrentlyChanged = Object.keys(mapActionToBar[action.title])
            .includes(bar.title);

        if (isCurrentlyChanged) {
            updatedBars.push(updateBar(bar.title, bars, action));
        } else {
            updatedBars.push(bar);
        }
    });

    return updatedBars;
}
