$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria() {
    toggleSpinner();
	console.log('Frase aleatoria');
	$.get('http://localhost:3000/frasesaaa', trocaFraseAleatoria)
	.fail(tratarErro)
	.always(toggleSpinner);
}

function trocaFraseAleatoria(data) {
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}

function tratarErro(){
	console.log('tratarErro');
	var erro = $("#erro");
	erro.toggle();
	setTimeout(function(){
		erro.toggle();
	}, 2000);
}

function toggleSpinner(){
	console.log('toggleSpinner');
	$("#spinner").toggle();
}