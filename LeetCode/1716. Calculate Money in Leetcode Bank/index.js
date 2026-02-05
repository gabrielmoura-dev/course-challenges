var totalHercyMoney = function(n) {

    // Semanas completas que cabem em n
    const completedWeeks = Math.floor(n / 7);
    // Dias restantes
    const remainingDays = n % 7;
    // Soma base de uma semana. Ou seja, 1+2+3+4+5+6+7 = 28
    const sumWeek = 28;
    // Progressão Aritmética para encontrar o total de semanas
    const totalWeeks = completedWeeks * sumWeek + 7 * (completedWeeks * (completedWeeks - 1)) / 2;
    // Incrementação diária 
    const remainingTotal = remainingDays * completedWeeks + (remainingDays * (remainingDays + 1)) / 2;
    // Total de semanas + total de dias restantes 
    return totalWeeks + remainingTotal;
};
