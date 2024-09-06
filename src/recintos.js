import { Animal } from "./animais";

class Recinto {
    numero = 0;
    bioma = 'Desconhecido';
    tamanhoTotal = 0;
    tamanhoOcupado = 0;
    animaisExistentes = [];
    classeHabitantes = '';

    constructor(numero, bioma, total, animais) {
        this.numero = numero;
        this.bioma = bioma;
        this.tamanhoTotal = total;
        this.setAnimais(animais);
        this.classeHabitantes = this.animaisExistentes.length ? this.animaisExistentes[0].classe : '';
        this.tamanhoOcupado = this.animaisExistentes.length ? this.animaisExistentes[0].tamanho * this.animaisExistentes.length : 0;
    }

    setAnimais(animais) {
        if(animais.length) {

            animais.forEach(animal => {
                if(animal instanceof Animal) {
                    this.animaisExistentes.push(animal);
                } else {
                    throw new Error('Objeto não é uma instância de Animal');
                }
            });

        }
    }

    addTamanhoOcupado(tamanho) {
        if(tamanho + this.tamanhoOcupado > this.tamanhoTotal) {
            throw new Error('Tamanho excede o total');
        } else {
            this.tamanhoOcupado += tamanho;
        }
    }

    podeEntrar(animal, espaco) {
        if(animal.recintosPossiveis.indexOf(this.numero) === -1) {
            return false;
        } else if(this.classeHabitantes && animal.classe !== this.classeHabitantes) {
            return false;
        } else if(this.tamanhoOcupado + espaco > this.tamanhoTotal) {
            return false;
        } else if(animal.classe === 'carnivoro' && this.animaisExistentes.length && this.animaisExistentes[0].especie !== animal.especie) {
            return false;
        } else if(animal.especie === 'macaco' && espaco <= 1 && !this.animaisExistentes.length) {
            return false;
        } else if(animal.especie === 'hipopótamo' && this.animaisExistentes.length && this.animaisExistentes[0].especie !== 'hipopótamo' && this.numero !== 3) {
            return false;
        } else {
            this.animaisExistentes[0] && animal.especie !== this.animaisExistentes[0].especie ? this.addTamanhoOcupado(espaco + 1) : this.addTamanhoOcupado(espaco);
            return true;
        }
    }
}

export { Recinto as Recinto };