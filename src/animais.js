class Animal {

    especie = '';
    classe = '';
    tamanho = 0;
    recintosPossiveis = [];

    constructor(especie) {
        this.setEspecie(especie);
    }

    removerAcentos(texto) {
        return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    setEspecie(nome) {
        switch (this.removerAcentos(nome.toLowerCase())) {
            case 'leao':
                this.especie = 'leão';
                this.classe = 'carnivoro';
                this.tamanho = 3;
                this.recintosPossiveis = [1, 3, 5];
                break;
            case 'leopardo':
                this.especie = 'leopardo';
                this.classe = 'carnivoro';
                this.tamanho = 2;
                this.recintosPossiveis = [1, 3, 5];
                break;
            case 'crocodilo':
                this.especie = 'crocodilo';
                this.classe = 'carnivoro';
                this.tamanho = 3;
                this.recintosPossiveis = [3, 4];
                break;
            case 'macaco':
                this.especie = 'macaco';
                this.classe = 'herbivoro';
                this.tamanho = 1;
                this.recintosPossiveis = [1, 2, 3, 5];
                break;
            case 'gazela':
                this.especie = 'gazela';
                this.classe = 'herbivoro';
                this.tamanho = 2;
                this.recintosPossiveis = [1, 3, 4];
                break;
            case 'hipopotamo':
                this.especie = 'hipopótamo';
                this.classe = 'herbivoro';
                this.tamanho = 4;
                this.recintosPossiveis = [1, 3, 4, 5];
                break;
            default:
                throw new Error('Animal inválido');
        }
    }
}

export { Animal as Animal };