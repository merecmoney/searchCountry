import React from 'react';

export class SuggestionTextBox extends React.Component {
  render() {
    return (
      <div className = "form-to-search">
        <form>
          <label>
            Search a Countrie by its abbrev or name
            <input className = "input-pattern" type = "text" placeholder = "e.g.MX" onChange = {
                    this.props.onClick
                }
              />
          </label>
        </form>
      </div>
    )
  }
}
