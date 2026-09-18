const PRECIO_BASE = 25;

const form = document.getElementById("form-reserva");
const personasInput = document.getElementById("personas");
const diasInput = document.getElementById("dias");

const subtotalSalida = document.getElementById("subtotal");
const descuentoSalida = document.getElementById("descuento");
const suplementoSalida = document.getElementById("suplemento");
const totalSalida = document.getElementById("total");
const mensajeSalida = document.getElementById("mensaje");

const formatearEuros = (valor) => `${valor.toFixed(2)} €`;

const limpiarResultado = () => {
    subtotalSalida.textContent = "0.00 €";
    descuentoSalida.textContent = "0.00 €";
    suplementoSalida.textContent = "0.00 €";
    totalSalida.textContent = "0.00 €";
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const personas = Number(personasInput.value);
    const dias = Number(diasInput.value);

    if (!Number.isFinite(personas) || !Number.isFinite(dias) || personas <= 0 || dias <= 0) {
        limpiarResultado();
        mensajeSalida.textContent = "Introduce valores numericos mayores que 0.";
        return;
    }

    mensajeSalida.textContent = "";

    const subtotal = personas * dias * PRECIO_BASE;

    let descuento = 0;
    if (personas > 4) {
        descuento = subtotal * 0.10;
    }

    let suplemento = 0;
    if (dias > 3) {
        suplemento = subtotal * 0.05;
    }

    const total = subtotal - descuento + suplemento;

    subtotalSalida.textContent = formatearEuros(subtotal);
    descuentoSalida.textContent = formatearEuros(descuento);
    suplementoSalida.textContent = formatearEuros(suplemento);
    totalSalida.textContent = formatearEuros(total);
});
