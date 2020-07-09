import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { mapActionToBar, formatCommand } from '../../helpers.js';

import './TextArea.scss';

let isError = false;

const TextArea = ({handleEnterPress, notify}) => {
    const [value, setValue] = useState(``);
    const handleChange = (evt) => setValue(evt.target.value);

    const enterPressHandler = (evt) => {        
        if (evt.keyCode === 13) {
            const commands = evt.target.value.split(`+`).map((command) => command.trim());
            isError = false;

            const setNotificationError = (notification) => {
                notify(notification, true);
                isError = true;
            }

            for (const command of commands) {
                if (!command) {
                    setNotificationError(`Вы ввели пустую команду`);

                    break;
                }
                
                const isKnownCommand = Object.keys(mapActionToBar).includes(formatCommand(command));

                if(!isKnownCommand) {
                    setNotificationError(`Действие "${command}" неизвестно`);

                    break;
                }
            }

            if (!isError) {
                commands.forEach((command) => handleEnterPress({target: {innerHTML: formatCommand(command)}}, true));

                const notification = commands.length === 1
                    ? `Действие "${commands[0]}" выполнено`
                    : `Действия "${commands.join(`, `)}" выполнены`;
                
                notify(notification);
            }

            setValue(``);
            evt.target.blur();
        }
    }

    return (
        <textarea className="textarea" value={value}
            placeholder="Введите Ваши команды через знак '+' в формате 'есть+пить+работать' и нажмите Enter"
            onChange={handleChange} onKeyDown={enterPressHandler}></textarea>
    );
}

TextArea.propTypes = {
    handleEnterPress: PropTypes.func.isRequired,
    notify: PropTypes.func.isRequired
}

export { TextArea };
