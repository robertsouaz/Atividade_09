
function somaNumeros()
{
    var numero1 = parseFloat(document.getElementById('idTexto1').value);
    var numero2 = parseFloat(document.getElementById('idTexto2').value);
    var resultado = numero1 * numero2;
    var resultadoFormatado = resultado.toLocaleString ('en-US', {style: 'currency', currency: 'USD'});

    document.getElementById('idResultado').value = resultado;
}

