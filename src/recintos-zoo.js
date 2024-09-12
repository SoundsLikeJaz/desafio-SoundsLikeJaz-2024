import { Animal } from "./animais";
import { Recinto } from "./recintos";

class RecintosZoo {

    recintosViaveis = [];
    erro = '';

    recintos = [
        new Recinto(1, 'savana', 10, new Array(3).fill().map(() => new Animal('macaco'))),
        new Recinto(2, 'floresta', 5, []),
        new Recinto(3, 'savana e rio', 7, [new Animal('gazela')]),
        new Recinto(4, 'rio', 8, []),
        new Recinto(5, 'savana', 9, [new Animal('leão')])
    ];

    analisaRecintos(animalNome, quantidade) {
        let animal;

        try {
            animal = new Animal(animalNome);
        } catch (error) {
            return { erro: "Animal inválido", recintosViaveis: false };
        }

        if (quantidade < 1) {
            return { erro: "Quantidade inválida", recintosViaveis: false };
        }

        let tempRecintosViaveis = this.recintos.filter(recinto => recinto.podeEntrar(animal, (animal.tamanho * quantidade)));

        if (!tempRecintosViaveis.length) {
            return { erro: "Não há recinto viável", recintosViaveis: false };
        } else {
            let recintosViaveis = tempRecintosViaveis.map(recinto =>
                `Recinto ${recinto.numero} (espaço livre: ${recinto.tamanhoTotal - recinto.tamanhoOcupado} total: ${recinto.tamanhoTotal})`
            );
            return { erro: false, recintosViaveis: recintosViaveis };
        }
    }

}

export { RecintosZoo as RecintosZoo };
