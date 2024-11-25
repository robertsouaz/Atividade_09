
function mensagem_com_paramentro_return(msg1)
{
    return("Você digitou: " + msg1);
}

function somaNumeros()
{
    var numero1 = parseFloat(document.getElementById('idTexto1').value);
    var numero2 = parseFloat(document.getElementById('idTexto2').value);
    var resultado = numero1 + numero2;
    document.getElementById('idResultado').value = resultado;
}

function dolar()
{
    var numero1 = parseFloat(document.getElementById('idTexto1').value);
    var resultado = numero1 * 5.99;
    var resultadoFormatado = resultado.toLocaleString ('en-US', {style: 'currency', currency: 'USD'});
    document.getElementById('idResultado').value = resultadoFormatado;
}

