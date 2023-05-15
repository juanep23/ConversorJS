// Obtenha os elementos HTML
const fahrenheitInput = document.getElementById('fahrenheitInput');
const converterBtn = document.getElementById('converterBtn');
const resultadoDiv = document.getElementById('resultado');
const body = document.body;

// Defina as restrições de temperatura mínima e máxima
const temperaturaMinima = -100;
const temperaturaMaxima = 150;

// Adicione um evento de clique ao botão
converterBtn.addEventListener('click', function() {
  // Obtenha a temperatura em Fahrenheit do input
  const temperaturaFahrenheit = parseFloat(fahrenheitInput.value);

  // Verifique se a temperatura está dentro das restrições
  if (temperaturaFahrenheit < temperaturaMinima || temperaturaFahrenheit > temperaturaMaxima) {
    alert(`Por favor, insira uma temperatura entre ${temperaturaMinima}°F e ${temperaturaMaxima}°F.`);
    return;
  }

  // Converta para Celsius
  const temperaturaCelsius = (temperaturaFahrenheit - 32) * 5 / 9;

  // Exiba o resultado na div
  resultadoDiv.textContent = `A temperatura em Celsius é: ${temperaturaCelsius.toFixed(2)}`;

  // Altere a cor do fundo com base na temperatura
  if (temperaturaCelsius > 30) {
    body.style.backgroundColor = 'orange';
  } else {
    body.style.backgroundColor = 'lightblue';
  }
});
