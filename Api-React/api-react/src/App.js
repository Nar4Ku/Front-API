import React, { Component } from "react";
import Form from "./form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      estaCarregado: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.input.current.value);
    event.preventDefault();
  }

  //metodo para consumir a API
  componentDidMount() {
    fetch("http://mis-api.dev.br-mediagroup.com/api/v1/cities") // url da API
      .then(res => res.json()) // responde em json
      .then(json => {
        //quando for convertido em json muda status do esta carregado
        this.setState({
          estaCarregado: true, // status true
          items: json
        });
      });
  }

  onSubmit = fields => {
    console.log("Componente do App: ", fields);
  };

  filterCidade = () =>

  //render renderiza e printa para o usuario
  render() {
    var { estaCarregado, items } = this.state;

    if (!estaCarregado) {
      return <div>Carregando...</div>;
    } else {
      return (
        <div className="App">
          <Form onSubmit={fields => this.onSubmit(fields)} />
          {/* <ul>
            {items.map(item => (
              <li key={item.id}>
                Cidade: {item.name} | Estado: {item.state.name}
              </li>
            ))}
          </ul> */}
        </div>
      );
    }
  }
}

export default App;
