// Import necessary libraries (if using a framework)
// ...

let bankroll = 0; // Global variable for bankroll
let probVitoria = 0; // Local variable for win probability
let probDerrota = 0; // Local variable for loss probability
let valorAposta = 0; // Local variable for bet amount
let lucro = 0; // Local variable for profit
let roi = 0; // Local variable for ROI

// Function to calculate ROI (Return on Investment)
function calcularROI(odd, investimento) {
  const valor = odd * investimento;
  lucro = valor - investimento;
  roi = (lucro / investimento) * 100;
  // Update UI elements with calculated values (assuming you have DOM elements)
  document.getElementById('valor').textContent = `R$ ${valor.toFixed(2)}`;
  document.getElementById('lucroValor').textContent = `R$ ${lucro.toFixed(2)}`;
  document.getElementById('roiPorcentagem').textContent = `${roi.toFixed(2)}%`;
  return roi;
}

// Function to calculate Kelly Criterion (betting strategy)
function calcularKelly(odd, valor) {
  console.log("olámundo")
  odd = parseFloat(odd.replace(',', '.')); // Convert comma to decimal point
  if (odd > 0) {
    calcularBankroll(valor);
    probVitoria = 1 / odd;
    probDerrota = 1 - probVitoria;
    const kelly = ((probVitoria * odd) - probDerrota) / odd;
    const kellyPercent = Math.floor(kelly * 100); // Round to nearest integer
    probVitoria = probVitoria*100
    probDerrota = probDerrota*100
    valorAposta = (bankroll * kellyPercent) / 100;

    // Update UI elements with calculated values (assuming you have DOM elements)
    document.getElementById('probVitoriaValor').textContent = `${probVitoria.toFixed(2)}%`;
    document.getElementById('probDerrotaValor').textContent = `${probDerrota.toFixed(2)}%`;
    document.getElementById('kellyValor').textContent = `${kellyPercent}%`;
    document.getElementById('valorApostaValor').textContent = `R$ ${valorAposta.toFixed(2)}`;
    
    calcularROI(odd, valorAposta); // Calculate ROI based on the bet amount
  }
  return kellyPercent;
}

// Function to calculate maximum bankroll based on a percentage (assuming 10%)
function calcularBankroll(valor) {
  const valorConvertido = parseFloat(valor.replace(',', '.'));
  const maximo = valorConvertido * 0.10;
  bankroll = maximo;
  // Update UI element with calculated value (assuming you have DOM element)
  document.getElementById('bankrollResultado').textContent = `R$ ${bankroll.toFixed(2)}`;
  return bankroll;
}

// Event listeners or functions to trigger calculations on button clicks or input changes
// (assuming you have buttons and input fields in your HTML structure)
