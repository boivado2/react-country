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
        <div
            className="input-group container "
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                alignContent: 'center',
                alignItems: 'center',
                textAlign: 'end'
            }}
        >
            <input
                type="text"
                placeholder="Search Country"
                style={{ margin: '2rem 0', width: '50%' }}
                value={text}
                name="text"
                onChange={handleChangeText}
                className="form-control"
            />
            <select
                onChange={handleSelect}
                value={value}
                style={{ margin: '2rem 0', width: '50%' }}
                className="form-control"
            >
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
