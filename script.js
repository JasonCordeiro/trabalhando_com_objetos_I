//1º Modelagem
console.log ('Kenzie Academy');
const pessoa = {
    nome: ' ',
    anoDeNascimento: ' ',
    cpf: ' ',
    cidade: ' ',
    estado: ' ',
    logradouro: ' ',
};

const escola = {
    nome: ' ',
    cnpj: ' ',
    anreaDeAtuacao: ' ',
    cidade: ' ',
    estado: ' ',
    logradouro: ' ',
    curso: ' ',
};

const curso = {
    nome: ' ',
    duracaoEmAnos: ' ',
    turma: ' ',
    modulos: ' ',
};

const endereço = {
    cidade: ' ',
    estado: ' ',
    logradouro: ' ',
    cep: ' ',
};

//2º Manipulação
//Ex. 1
const carro = {
    placa: 'ABC2308',
    classe: 'SUV',
    luxo: true,
    potencia: 200,
    estacionado: true,
};

function obterPlaca() {
    return carro.placa;
}

const resultado1 = obterPlaca();
console.log('ex1 - ', resultado1);


//Ex. 2

function verificarClasses() {
    if (carro.classe.length === 1) {
        return carro.classe[0];
    }
    return carro.classe;
}

const resultado2 = verificarClasses();
console.log(resultado2);


//Ex. 3

function potenciaReal() {
    const potencia = carro.potencia;

    if (carro.luxo) {
    return potencia**2;    
    }
    return potencia;
}

const resultado3 = potenciaReal();
console.log('ex3 - ', resultado3);


//Ex. 4

function adicionarNovaClasse(novaClasse) {
    const classesPermitidas = ['seda', 'hatchback', 'suv', 'crossover', 'cupê'];
    const classes = carro.classes;

    if (classes.length >= 3) {
        return 'Este carro não pode ter mais classes!';
    }

    if (classesPermitidas.includes(novaClasse.toLowerCase())) {
        if (classes.includes (novaClasse)) {
            return `O carro já possui a classe ${novaClasse}`;
        }
        classes.push(novaClasse);
        console.log(classes);
        return `Classe ${novaClasse} adicionada com sucesso!`
        }
    return 'Classe invalida. As classes permitidas são: Sedan, Hatchback, Suv, Crossover e Cupê';
}

const resultado4 = adicionarNovaClasse('crossover');
console.log('ex4 - ', resultado4)


//Ex. 5

function naoMaisLuxo() {
    if(!carro.estacionado) {
        return `O carro ${carro.placa} não está estacionado!`;
    }
    else if (!carro.luxo) {
        return `O carro ${carro.placa} não é luxuoso!`;
    }

    carro.luxo = false;

    return `O carro ${carro.placa} não é mais considerado um carro de luxo!`;
}

const resultado5 = naoMaisLuxo();
console.log('ex5 - ', resultado5);