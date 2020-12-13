/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

class Select extends Component {
    render() {
        return (
            <select
                className="dropdown"
                style={{ margin: '4rem 0 3rem 3rem' }}
                onChange={(e) => this.props.handleSelectChange(e.target.value)}
            >
                <option
                    className="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    Select
                </option>
                <option className="dropdown-item" value="Africa">
                    Africa
                </option>
                <option className="dropdown-item" value="Asia">
                    Asia
                </option>
                <option className="dropdown-item" value="Americas">
                    Americas
                </option>
                <option className="dropdown-item" value="Europe">
                    Europe
                </option>
                <option className="dropdown-item" value="Oceania">
                    Oceania
                </option>
            </select>
        );
    }
}

export default Select;
