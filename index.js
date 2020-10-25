const cidadeseestados = {
    PR : ['Curitiba', 'Cascavel', 'Maringá'],
    SC : ['Florianópolis', 'Blumenau', 'Lages'],
    RS : ['Porto Alegre', 'Gramado', 'Caxias do Sul']
}

let estadoselecionado;

const $selecEstado = document.querySelector('#estado');
const $selectCidade = document.querySelector('#cidade');

$selectEstado.addEventListener ('change', (e) => {
    estadoselecionado = e.target.value;
    const cidadesDoEstado = cidadesseestados[estadoselecionado];

    if($selectCidade.hasAttribute ('disabled')) $selectCidade.removeAttribute('disable');

    $selectCidade.innerHTML = `<option value='inicio'>Selecione um estado</option`;

    cidadesDoEstado.forEach(cidade => {
        $selectCidade.innerHTML += `<option value=${cidade}>${cidade}</option>`;
    });
}, false);




