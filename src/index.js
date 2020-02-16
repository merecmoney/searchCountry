import React from 'react';
import ReactDOM from 'react-dom';
import {SuggestionList, SuggestionCount} from './suggestion'
import {SuggestionTextBox} from './input'
import {getPreffixWords} from './suggestionTree'
import {countrieNames} from './countries';
import './App.css';

class SuggestionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pattern: '',
      countries: countrieNames
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let searchedCountries = this._getSearchedCountries(event.target.value.toUpperCase());

    this.setState({
      pattern: event.target.value.toUpperCase(),
      countries: searchedCountries
    });
  }

  _getSearchedCountries(pattern) {
    let searchedCountries = getPreffixWords(pattern);


    // for (let [abbrev, countrieName] of Object.entries(countries)) {
    //     countriesList.push(this._renderSuggestionItem(countrieName, abbrev));
    // }

    //get unique countries
    searchedCountries = searchedCountries.filter((value, index, array) => {
      return array.indexOf(value) === index;
    });

    return searchedCountries;
  }

  render() {
    return (
      <div>
        <SuggestionTextBox
          onClick = {
            this.handleChange
          }
        />
        <SuggestionList
          searchedCountries = {this.state.countries}
        />
        <SuggestionCount
          count = {this.state.countries.length}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <SuggestionContainer />,
  document.getElementById('container')
);
