
function validarEntrada()
{
    let entrada = $("input").val();
    console.log(entrada);

    if (!entrada)
    {
        window.alert("Você não inseriu nada não, meu chegado. :)");
    } else  {
        let ano = entrada[0] + entrada[1] + entrada[2] + entrada[3];
        let mes = entrada[5] + entrada[6];
        let dia = entrada[8] + entrada[9];

        calculo(dia, mes, ano);
    }
}

function calculo(dia, mes, ano)
{
    let tempoDeNamoro, ateMil, milesimoDia;
    let hoje = moment();
    let inicio = moment(new Date(ano, mes, dia, 0,0,0));

    //calculando o tempo de namoro
    tempoDeNamoro = hoje.diff(inicio, 'days');

    //calculando a milésima data
    milesimoDia = inicio.add(1000, 'days');

    //calculando dias até mil
    ateMil = milesimoDia.diff(hoje, 'days');

    exibir(tempoDeNamoro, milesimoDia, ateMil);
}

function exibir(tempoDeNamoro, milesimoDia, ateMil)
{
        milesimoDia = milesimoDia.format("D") + "/" + milesimoDia.format("MM") + "/" + milesimoDia.format("Y");
    
        //exibindo o tempo de namoro
        $("#diasDeNamoro h5").html(tempoDeNamoro);

        //exibindo quanto tempo falta para 1000
        $("#diasParaMil h5").html(ateMil);

        //exibindo o milésimo dia
        $("#milDia h5").html(milesimoDia);

        $("#resultado").fadeIn("slow");

        $("#diasDeNamoro").fadeIn("slow");
        $("#diasParaMil").fadeIn("slow");
        $("#milDia").fadeIn("slow");
}

$("#iniciarConsulta").click(function(){
    console.log("Achei");
    $("#consulta").fadeIn("slow");

    $("#Submit").click(validarEntrada);
})