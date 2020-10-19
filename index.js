const cidadeseestados = [{
    PR : ['Curitiba', 'Cascavel', 'Maringá'],
    SC : ['Florianópolis', 'Blumenau', 'Lages'],
    RS : ['Porto Alegre', 'Gramado', 'Caxias do Sul']
}]

let estadoselecionado;

const $select = document.getElementById ('estado');

$select.onchange = (e) => {
	console.log(e);
}




