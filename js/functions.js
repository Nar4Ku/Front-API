$(document).ready(function() {
  let dados;

  $.ajax({
    url: "http://mis-api.dev.br-mediagroup.com/api/v1/cities",
    type: "GET"
  }).done(function(data) {
    (function() {
      dados = data;
      $("#contents").append(
        "<h3>" + data.name + " - " + data.state.name + "</h3>"
      );
    });
    //console.log(dados);

    //input do usuario

    //   let entrada = document.getElementById("input").value;

    //   const resultado = dados.findIndex(function(valor, resultado) {
    //     return valor.name === entrada.value;
    //   });
    //   console.log(resultado);

    //   (function retornaBusca() {
    //     $("#contents").append(
    //       "<h3>" + resultado.name + " - " + resultado.state.name + "</h3>"
    //     );
    //   });
  });
});
