/* eslint-disable no-undef */
import React from 'react';

const Darktheme = () => {
    // toggleDarkTheme(!darkMode);
    return (
        <div>
            <input type="checkbox" id="check" />
            <label htmlFor="check">
                <div className="ball"></div>
            </label>
        </div>
    );
};

export default Darktheme;
