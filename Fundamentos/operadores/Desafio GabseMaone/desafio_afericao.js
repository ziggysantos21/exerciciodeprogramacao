//Faça um programa em Javascript que receba a velocidade aferida no radar, calcule a velocidade considerada e retorne o valor a ser pago.

//Considerando que:
//A velocidade da via é de no máximo 40km/h
//A velocidade considerada pelo radar até os 107 km/h, a diferença é sempre de 7 km/h.
//Por exemplo, se o radar mediu o veículo trafegando a 62 km/h, a velocidade considerada será de 55 km/h.

//Até 20% do limite permitido: R$130,16.
//De 21% até 50% do limite permitido: R$195,23.
//Acima de 50% do limite permitido: R$880,41.


//let velocidade_Aferida = 200;
//let velocidade_Considerada = velocidade_Aferida - 7;

let velocidade_Aferida = 110;
const velocidade_Maxima = 40;
const limite_Percentua20 = velocidade_Maxima * 0.2;
const limite_Percentua50 = velocidade_Maxima * 0.5;
const diferenca = 7;
//const velocidade_considerada = velocidade_Aferida - diferenca;
textAutuado  = " Autuado:\n O veículo está fora do limite de velocidade - \n";// Aqui eu tive que usar uma String!

function calcular_Multa (velocidade_Aferida){
   

    let velocidade_Considerada =  velocidade_Aferida > 107 ? velocidade_Aferida: velocidade_Aferida - diferenca;
    if (velocidade_Considerada <= velocidade_Maxima){
        return " Não autuado: Velocidade está dentro do limite aceito. ";
        }   
    else if (velocidade_Considerada <= velocidade_Maxima + limite_Percentua20)
        return textAutuado + " Valor a ser pago: R$130,16";

    else if (velocidade_Considerada <= velocidade_Maxima + limite_Percentua50) 
            return textAutuado + " Valor a ser pago: R$195,23 "; 
    
    else{
            return textAutuado + " Valor a ser pago: R$880,41: ";
    
        }
        
    }

console.log(calcular_Multa(90));
//Gabs disse que tenho que verififcar os returns!!!