

const formulario = document.getElementById("dopplerForm");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    // Recebendo os dados informados pelo usuário
    const vo = Number(document.getElementById("vo").value);
    const vf = Number(document.getElementById("vf").value);
    const v = Number(document.getElementById("v").value);
    const f = Number(document.getElementById("f").value);

    const movimento = document.getElementById("movimento").value;

    // Validando os valores
    if (vo < 0 || vf < 0 || v <= 0 || f <= 0) {
        resultado.textContent =
            "Informe velocidades não negativas e valores válidos.";
        return;
    }

    // Calculando a frequência percebida
    let frequenciaPercebida;

    if (movimento === "aproximando") {
        frequenciaPercebida = f * (v + vo) / (v - vf);
    } else {
        frequenciaPercebida = f * (v - vo) / (v + vf);
    }

    // Evitando divisão por zero ou resultados sem sentido físico
    if (v <= vf && movimento === "aproximando") {
        resultado.textContent =
            "Erro: a velocidade da fonte deve ser menor que a velocidade do som.";
        return;
    }

    if (v <= vo && movimento === "afastando") {
        resultado.textContent =
            "Erro: a velocidade do observador deve ser menor que a velocidade do som.";
        return;
    }

    // Exibindo o resultado
    resultado.innerHTML =
        "Frequência percebida:<br>" +
        frequenciaPercebida.toFixed(2) + " Hz";
});
