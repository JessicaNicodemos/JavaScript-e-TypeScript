function calculeIdade (anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 ={
    nome: MediaStreamAudioDestinationNode,
    idade:30,
};

const pessoa2 ={
    nome: Carla,
    idade:26,
};

const animal ={
    nome: Fiona,
    idade:3,
};

console.log(calculeIdade.call(pessoa2, 30));