import React from 'react';
import '../css/SearchForm.css';

export default class SeachForm extends React.Component {
    render() {
        return (
            <form method="GET" action="/">
                <div className="search-bar-container">
                    <label className="search-bar-label">
                        <input type="text" id="search_bar" name="search" placeholder="Search"/>
                    </label>
                </div>
            </form>
        );
    }
}