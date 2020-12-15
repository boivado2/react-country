import React, { useState } from 'react';

const Search = ({ onSearch, onSelect }) => {
    const [text, setText] = useState('');
    const [value, setValue] = useState('');

    const handleChangeText = (e) => {
        onSearch(text);
        setText(e.target.value);
    };

    const handleSelect = (e) => {
        onSelect(e.target.value);
        setValue(e.target.value);
    };

    return (
        <div className="container grid-2">
            <input
                type="text"
                placeholder="Search Country"
                value={text}
                name="text"
                onChange={handleChangeText}
            />
            <select onChange={handleSelect} value={value}>
                <option defaultValue value="">
                    Select By Region
                </option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    );
};

export default Search;
