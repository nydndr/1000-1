var calcularBtn = document.querySelector("#calcular-btn");
var containerResultado = document.querySelector("#container-resultado");

var inputData = document.querySelector("#data-inicio");

calcularBtn.addEventListener("click", () => {
    let entrada = inputData.value;

    if(!entrada)
    {
        let emptyMessage = `<div class="flex flex-col space-y-16">
                                <p class="text-center text-6xl font-medium mt-40">Você não inseriu<br>uma data :)</p>
                                <p class="text-center text-3xl font-light mt-8">Tente mais uma vez.</p>
                            </div>`;

        containerResultado.insertAdjacentHTML('beforeend', emptyMessage);

    } else {

        calcular(entrada);
    }

});

let calcular = (dataInicio) => {
    let tempoDeNamoro, ateMil, milesimoDia;
    let hoje = moment();
    
    dataInicio = moment(dataInicio);

     //calculando o tempo de namoro
    tempoDeNamoro = hoje.diff(dataInicio, 'days');

     //calculando a milésima data
    milesimoDia = dataInicio.add(1000, 'days');
 
     //calculando dias até mil
    ateMil = milesimoDia.diff(hoje, 'days');

    exibirResultado(tempoDeNamoro,milesimoDia,ateMil)
}

let exibirResultado = (tempoDeNamoro,milesimoDia,ateMil) => {

    containerResultado.innerHTML = ' ';
    let resultMessage = `<div class="flex flex-col space-y-16">
                                <div class="text-center">
                                    <p class="font-medium text-6xl">${tempoDeNamoro}</p>
                                    <p class="text-2xl">dias de namoro.</p>
                                </div>
                                <div class="text-center">
                                    <p class="font-medium text-6xl">${ateMil}</p>
                                    <p class="text-2xl">dias para o 1000º.</p>
                                </div>
                                <div class="text-center">
                                    <p class="font-medium text-6xl">${milesimoDia.format("D") + "/" + milesimoDia.format("MM") + "/" + milesimoDia.format("Y")}</p>
                                    <p class="text-2xl">é a data do seu milésimo dia.</p>
                                </div>
                            </div>`;

    containerResultado.insertAdjacentHTML('beforeend', resultMessage);
}