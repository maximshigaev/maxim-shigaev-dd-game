import React, { useState } from 'react';

import './TextArea.scss';

const TextArea = () => {
    const [value, setValue] = useState(``);
    const handleChange = (evt) => setValue(evt.target.value);

    return (
        <textarea className="textarea" value={value} placeholder="Insert your command..."
            onChange={handleChange}></textarea>
    );
}

export { TextArea };
