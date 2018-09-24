import React from "react";

export default class Form extends React.Component {
  state = { cidade: "" };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form>
        <input
          value={this.state.cidade}
          onChange={e => this.setState({ cidade: e.target.value })}
        />
        <button onClick={e => this.onSubmit(e)}>Buscar</button>
      </form>
    );
  }
}
