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
    }

    setAnimais(animais) {
        this.animaisExistentes = animais.filter(animal => animal instanceof Animal);
        this.tamanhoOcupado = this.animaisExistentes.length ? this.animaisExistentes[0].tamanho * this.animaisExistentes.length : 0;
        this.classeHabitantes = this.animaisExistentes.length ? this.animaisExistentes[0].classe : '';
    }

    temOutrasEspecies(animal) {
        return this.animaisExistentes.length && animal.especie !== this.animaisExistentes[0].especie;
    }

    temConflitosEspeciais(animal, espaco) {
        if (animal.especie === 'macaco' && espaco <= 1 && !this.animaisExistentes.length) return true;
        
        if ((animal.especie === 'hipopótamo' || this.animaisExistentes[0]?.especie === 'hipopótamo') && this.temOutrasEspecies(animal) && this.numero !== 3) return true;

        return false;
    }

    podeAcomodar(animal, espaco) {
        const num = this.temOutrasEspecies(animal) ? espaco + 1 : espaco;

        return num + this.tamanhoOcupado <= this.tamanhoTotal;
    }

    addTamanhoOcupado(animal, espaco) {
        this.temOutrasEspecies(animal) ? this.tamanhoOcupado += espaco + 1 : this.tamanhoOcupado += espaco;
    }

    podeEntrar(animal, espaco) {
        if (animal.recintosPossiveis.indexOf(this.numero) === -1) return false;

        if (this.classeHabitantes && animal.classe !== this.classeHabitantes) return false;

        if (!this.podeAcomodar(animal, espaco)) return false;

        if (animal.classe === 'carnivoro' && this.temOutrasEspecies(animal)) return false;

        if (this.temConflitosEspeciais(animal, espaco)) return false;

        this.addTamanhoOcupado(animal, espaco);
        return true;
    }
}

export { Recinto as Recinto };