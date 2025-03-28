/*variáveis*/

var contadorGrupos = [0];


/* fim variáveis*/
function toggleColunaEnunciado() {
    document.querySelectorAll('.enunciado').forEach(el => el.classList.toggle('hidden'));
    document.querySelectorAll('.linha-container').forEach(container => {
        container.style.gridTemplateColumns = container.querySelector('.enunciado').classList.contains('hidden') ? 'repeat(5, 1fr)' : 'repeat(6, 1fr)';
    });
}

function atualizarCor(select, tipo) {
    const valor = select.value;
    const celula = select.parentElement;
    celula.className = `linha ${tipo} ${valor}`;
}

function mudarCor(botao) {
    botao.style.backgroundColor = "red"
}

function mudarTexto(botao) {
    botao.innerText = botao.innerText === "Ocultar Coluna 'Enunciado'" ? "Mostrar Coluna 'Enunciado'" : "Ocultar Coluna 'Enunciado'";
}

function adicionarLinha(numero) {
    let argumento = "linhaContainer"+numero;
    const container = document.getElementById(argumento);

    const novaLinha = `
         <div class="linha enunciado"><textarea class="input-text" placeholder="Digite o enunciado"></textarea></div>
                <div class="linha">Elétrica</div>
                <div class="linha risco">
                    <select class="select-box" onchange="atualizarCor(this, 'risco')">
                        <option value="">Selecione</option>
                        <option value="extremo">Extremo</option>
                        <option value="alto">Alto</option>
                        <option value="medio">Médio</option>
                    </select>
                </div>
                <div class="linha procedimento">
                    <select class="select-box" onchange="atualizarCor(this, 'procedimento')">
                        <option value="">Selecione</option>
                        <option value="apropriado">Apropriado</option>
                        <option value="incompleto">Incompleto</option>
                        <option value="inexistente">Inexistente</option>
                    </select>
                </div>
                <div class="linha"><textarea class="input-text" placeholder="Digite a descrição"></textarea></div>
                <div class="linha"><textarea class="input-text" placeholder="Digite a observação"></textarea></div>
    `;

    container.insertAdjacentHTML("beforeend", novaLinha);
}

function adicionarGrupo() {
    contadorGrupos.push(contadorGrupos.length+1);
    const container = document.getElementById("G0");
    let contador = contadorGrupos.length;

    const novaLinha = `
         <div class="grupo" id="G${contador}">
            <div class="legenda">Grupo ${contador}:</div>
            <div class="linha-container" id="linhaContainer${contador}">
                <div class="linha header enunciado">Enunciado</div>
                <div class="linha header">Categoria</div>
                <div class="linha header">Risco</div>
                <div class="linha header">Procedimento e Tecnologia</div>
                <div class="linha header">Descrição</div>
                <div class="linha header">Observação</div>
                <div class="linha enunciado"><textarea class="input-text" placeholder="Digite o enunciado"></textarea></div>
                <div class="linha">Elétrica</div>
                <div class="linha risco">
                    <select class="select-box" onchange="atualizarCor(this, 'risco')">
                        <option value="">Selecione</option>
                        <option value="extremo">Extremo</option>
                        <option value="alto">Alto</option>
                        <option value="medio">Médio</option>
                    </select>
                </div>
                <div class="linha procedimento">
                    <select class="select-box" onchange="atualizarCor(this, 'procedimento')">
                        <option value="">Selecione</option>
                        <option value="apropriado">Apropriado</option>
                        <option value="incompleto">Incompleto</option>
                        <option value="inexistente">Inexistente</option>
                    </select>
                </div>
                <div class="linha"><textarea class="input-text" placeholder="Digite a descrição"></textarea></div>
                <div class="linha"><textarea class="input-text" placeholder="Digite a observação"></textarea></div>
            </div>
            <div>
                <button class="add-row" onclick="adicionarLinha(${contador})">
                    Adicionar linha  <i class="fa-solid fa-plus"></i>
                </button>
        </div>
    `;

    container.insertAdjacentHTML("afterend", novaLinha);
}