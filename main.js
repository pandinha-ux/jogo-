//ATIVIDADE PRÁTICA
let num = "";
let aleatorio = Math.floor(Math.random() * 100 + 1);
let chances = 0;

console.log("Adivinhe o número entre 1 a 100");
process.stdin.on("data", function(data){
    if (data.toString().trim() == "sair" || data.toString().trim() == "desisto") {
        console.log("Vc desistiu o numero era " + aleatorio);
        process.exit();
    }
        let diferenca = Math.abs(aleatorio - num)
        num = Number(data.toString().trim())

     if (chances == 5){
        console.log("Infelizmente seu número mudou, pois você errou cinco vezes.")
        console.log("O número antigo era ", aleatorio, ", tente novamente.")
        aleatorio = Math.floor(Math.random() * 100 + 1);
     }
        if (chances == 10 ){
            console.log("Voce nao possui mas tentativas. O numero escolhi era " + aleatorio)
            console.log("Jogue novamente ou digite sair");
            aleatorio = Math.floor(Math.random() * 100 + 1);
            chances = 0;
        } else if (num == aleatorio){
            console.log("Voce acertou! Digite outro numero ou sair");
            aleatorio = Math.floor(Math.random() * 100 + 1);
            chances = 0;
            process.exit();
        }
    
    else if (diferenca > 5 && diferenca <= 10){
        chances++ 
        console.log("ta ficando quente, você ainda possui ", 10-chances, " chances, tente novamente ou desista!");
    } else if (diferenca < 6 && diferenca > 0){
        chances++
        console.log("ta pegando fogo, ainda possui ", 10-chances," chances, tente novamente ou desista!")
    } else if (diferenca > 10 && diferenca <= 20){
        chances++
        console.log("esta morno, está nem tão perto e nem tão longe. Ainda tem", 10-chances," chances, tente novamente ou desista!")
    } else if (diferenca > 20){
        chances++
        console.log("Virou filhote de pinguim? pois ta bem frio aqui! Você ainda tem" , 10-chances, " chances, tente novamente ou desista!")
    }
    
});
