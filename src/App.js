import React from 'react';
import AutocompletePlace from './AutocompletePlace'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    }
    this.handleSelect = this.handleSelect.bind(this)
  }
  handleSelect(place) {
    this.setState({ place })
  }
  render() {
    return (
      <div className="App">
        <h1>React Mapbox Place Autocomplete</h1>
        <AutocompletePlace onSelect={this.handleSelect} />

        {!this.state.place && <div>No place selected</div>}

        {this.state.place && <div>Info about the place: <pre>{JSON.stringify(this.state.place,null,2)}</pre></div>}
      </div>
    );
  }
}

export default App;
