import React, {Component} from 'react';
import '../css/SearchForm.css';

function SearchBar(props) {
    function handleChange(event) {
        //Provisório
        event.preventDefault();
    }

    return (
        <label className="search-bar-label">
            <input id={props.id} name={props.name} placeholder={props.placeholder} onChange={handleChange}/>
        </label>
    );
}

class SearchForm extends Component {
    ///Renderization
    render() {
        return (
            <div>
                <form action={{/*O que colocar aqui?*/}}>
                    <div className="search-bar-container">
                        <SearchBar id="search_bar" name="search" placeholder="Search" />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchForm;