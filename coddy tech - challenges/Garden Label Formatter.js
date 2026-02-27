/* Crie uma função chamada createGardenLabel que recebe plantName, plantAge e isFlowering como parâmetros.

Esta função gera uma etiqueta formatada para uma planta, incluindo seu nome, idade e status de floração.

O formato da etiqueta:

"Plant: [plantName], Age: [plantAge] years, Flowering: [yes/no]"
Substitua [plantName] pelo nome da planta, [plantAge] pela sua idade, e [yes/no] por "yes" se isFlowering for true, ou "no" se false.

Exemplos:

"Plant: Rose, Age: 3 years, Flowering: yes"
"Plant: Cactus, Age: 5 years, Flowering: no"
Parâmetros:

plantName (string): O nome da planta.
plantAge (number): A idade da planta em anos (inteiro positivo).
isFlowering (boolean): Indica se a planta está florescendo.
Retorna uma string representando a etiqueta de jardim formatada. */
function createGardenLabel(plantName, plantAge, isFlowering) {
    if (isFlowering === true){
        isFlowering = "yes";
    }
    else {
        isFlowering = "no";
    }
    
    let flowerLabel = "Plant: " + plantName + ", Age: " + plantAge + " years, Flowering: " + isFlowering;
    
    return flowerLabel; 
};
