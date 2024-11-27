const calendarioContainer = document.getElementById('calendario-container');
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

// cria o calendário
for (let mes = 0; mes < 12; mes++) {
    const calendarioMes = document.createElement('div');
    calendarioMes.className = 'calendario-mes';
    calendarioMes.innerHTML = `
        <h2>${meses[mes]}</h2>
        <div class="calendario-dias">
        </div>
    `;
    calendarioContainer.appendChild(calendarioMes);
}

// adiciona dias ao calendário
const diasContainer = document.querySelectorAll('.calendario-dias');
for (let i = 0; i < diasContainer.length; i++) {
    for (let dia = 1; dia <= 31; dia++) {
        const diaElement = document.createElement('div');
        diaElement.className = 'dia';
        diaElement.textContent = dia;
        diasContainer[i].appendChild(diaElement);
    }
}
// adiciona evento de clique em cada dia do calendário
document.querySelectorAll('.dia').forEach((dia) => {
  dia.addEventListener('click', () => {
      document.getElementById('diario-refeicoes').style.display = 'block';
  });
});

// adiciona evento de clique no botão de fechar
document.getElementById('fechar-ficha').addEventListener('click', () => {
  document.getElementById('diario-refeicoes').style.display = 'none';
});
