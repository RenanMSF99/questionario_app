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