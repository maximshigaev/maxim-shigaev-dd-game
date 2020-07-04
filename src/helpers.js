const getRandomBoolean = () => Math.random() > 0.5;

const getRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
}

const updateHealth = (bars, action) => {
    const health = bars.find((bar) => bar.title === `Здоровье`);

    switch(action) {
        case `Есть`:
            return {
                ...health,
                quantity: getRandomBoolean()
                    ? Math.min(health.quantity + 2, 100)
                    : Math.max(health.quantity - 2, 0)
            }

        case `Пить`:
            return {
                ...health,
                quantity: getRandomBoolean()
                    ? Math.min(health.quantity + 1, 100)
                    : Math.max(health.quantity - 1, 0)
            }

        case `Отдохнуть`:
            return {
                ...health,
                quantity: Math.min(health.quantity + getRandomInteger(1, 10), 100)
            }

        default:
            return health;
    }
}

const updateThirst = (bars, action) => {
    const thirst = bars.find((bar) => bar.title === `Жажда`);

    switch(action) {
        case `Пить`:
            return {
                ...thirst,
                quantity: Math.max(thirst.quantity - 10, 0)
            }

        case `Работать`:
            return {
                ...thirst,
                quantity: Math.min(thirst.quantity + getRandomInteger(30, 40), 100)
            }

        case `Отдохнуть`:
            return {
                ...thirst,
                quantity: Math.max(thirst.quantity - getRandomInteger(1, 100), 0)
            }

        default:
            return thirst;
    }
}

const updateHunger = (bars, action) => {
    const hunger = bars.find((bar) => bar.title === `Голод`);

    switch(action) {
        case `Есть`:
            return {
                ...hunger,
                quantity: Math.max(hunger.quantity - 10, 0)
            }

        case `Работать`:
            return {
                ...hunger,
                quantity: Math.min(hunger.quantity + getRandomInteger(10, 20), 100)
            }

        case `Отдохнуть`:
            return {
                ...hunger,
                quantity: Math.max(hunger.quantity - getRandomInteger(1, 100), 0)
            }

        default:
            return hunger;
    }
}

const updateFatigue = (bars, action) => {
    const fatigue = bars.find((bar) => bar.title === `Усталость`);

    switch(action) {
        case `Работать`:
            return {
                ...fatigue,
                quantity: Math.min(fatigue.quantity + 10, 100)
            }

        case `Отдохнуть`:
            return {
                ...fatigue,
                quantity: Math.max(fatigue.quantity - 10, 0)
            }

        default:
            return fatigue;
    }
}

export const updateBars = (bars, action) => {
    const map = {
        Здоровье: {
            updater: updateHealth,
            actions: [`Есть`, `Пить`, `Отдохнуть`]
        },
        Жажда: {
            updater: updateThirst,
            actions: [`Пить`, `Работать`, `Отдохнуть`]
        },
        Голод: {
            updater: updateHunger,
            actions: [`Есть`, `Работать`, `Отдохнуть`]
        },
        Усталость: {
            updater: updateFatigue,
            actions: [`Работать`, `Отдохнуть`]
        }
    }
    const updatedBars = [];

    bars.forEach((bar) => {      
        const isCurrentlyChanged = map[bar.title]
            .actions
            .includes(action);

        if (isCurrentlyChanged) {
            updatedBars.push(map[bar.title].updater(bars, action));
        } else {
            updatedBars.push(bar);
        }
    });

    return updatedBars;
}
