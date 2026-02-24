// Crie uma função chamada benchQualityChecker que recebe coatingThickness e isHighTraffic como seus parâmetros.

// O departamento de parques local está enfrentando críticas devido a bancos mal conservados. Sua tarefa é criar uma função que avalie a qualidade dos bancos do parque com base na espessura de seu revestimento e localização.

// Parâmetros:

// coatingThickness (número): Um número inteiro que representa a espessura do revestimento do banco em micrômetros.
// isHighTraffic (booleano): Um booleano indicando se o banco está em uma área de alto tráfego (true) ou não (false).
// A função deve retornar uma string descrevendo a qualidade do revestimento do banco com base nos seguintes critérios:

// Se a espessura do revestimento for inferior a 50 micrômetros, retorne "Terrible - Replace immediately!"
// Se a espessura do revestimento estiver entre 50 e 100 micrômetros (inclusive):
// Para áreas de alto tráfego, retorne "Poor - Needs recoating soon"
// Para áreas de baixo tráfego, retorne "Acceptable - Monitor closely"
// Se a espessura do revestimento estiver entre 101 e 150 micrômetros (inclusive), retorne "Good - No action needed"
// Se a espessura do revestimento for superior a 150 micrômetros, retorne "Excellent - Overcoated!"

function benchQualityChecker(coatingThickness, isHighTraffic) {
    if (coatingThickness < 50){
        return "Terrible - Replace immediately!";
    }
        else if (coatingThickness >= 50 && coatingThickness <= 100){
            if (isHighTraffic === true){
                return "Poor - Needs recoating soon";
            }
            else if (isHighTraffic === false){
                return "Acceptable - Monitor closely";
            }
        }
            else if (coatingThickness >= 101 && coatingThickness <= 150){
                return "Good - No action needed";
            }
                else if (coatingThickness > 150){
                    return "Excellent - Overcoated!";
                }
}

