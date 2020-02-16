import React from 'react';
import {mapAbbrevByCountrieName} from './countries';

class SuggestionItem extends React.Component {
  render() {
    const flagIcon = "flag-icon flag-icon-" + this.props.abbrevCountrieName.toLowerCase();
    // console.log(this.props.abbrevCountrieName);
    return (
      < li >
        <div className = "column-country">
          <div className = "row-country">
            <p className = 'country-text'> {this.props.countrieName} </p>
          </div>
          <div className = "row-country">
            <span className = {flagIcon} ></span>
          </div>
        </div>
      </li>
    )
  }
}

export class SuggestionList extends React.Component {
  _renderSuggestionItem(countrieName, abbrevCountrieName) {
    return (
      <SuggestionItem
      countrieName = {countrieName}
      abbrevCountrieName = {abbrevCountrieName}
      key = {abbrevCountrieName}
      />
    )
  }

  _countriesList(searchedCountries) {
    let countriesList = [];

    // console.log(mapAbbrevByCountrieName);
    for (let countrieName of searchedCountries) {
      countriesList.push(this._renderSuggestionItem(countrieName, mapAbbrevByCountrieName.get(countrieName)));
    }
    // console.log(countriesList);

    return countriesList;
  }

  render() {
    // {this._renderSuggestionItem('AFGHANISTAN', 'AF')}
    // {this._renderSuggestionItem('ALAND ISLANDS', 'AX')}
    return (
      <ul>
        {this._countriesList(this.props.searchedCountries)}
      </ul>
    )
  }
}

export class SuggestionCount extends React.Component {
  render() {
    return (
      <div className = "count-suggestion">
        <p>Count Suggestions: {this.props.count}</p>
      </div>
    )
  }
}
