const resultado = document.querySelector("#resultado");

//arrow function não acessa 'arguments'

let myFunc = {
    showArguments(){
        resultado.innerHTML = arguments;
        console.log(arguments);

    }

}


myFunc.showArguments(
    "BMW",
    "AUDI",
    "MERCEDES",
    "BENTLEY",
    "FERRARI",
    "ROLLS ROYCE"
    );

// A FUNÇÃO ARROW NÃO POSSUI OU NÃOA CESSA ARGUMENTS.
    let myFun2 = {
        showArguments2: () => {
            resultado.innerHTML = arguments;
            console.log(arguments);
    
        }
    
    };

    // myFunc2.showArguments2(
    //     "COMBI",
    //     "CELTA",
    //     "FUSCA",
    //     "CORSA",
    //     );

    let user = {
        name: "Igo Marcos",
        usandoArrow: () => {              //o this não existe na arrow function
            console.log(`Meu nome é ${this.name}, com Arrow Function.`);
        },
        usandoNominal() {
            console.log(`Meu nome é ${this.name}, com Nominal Function.`);
        },
    };

    user.usandoArrow();
    user.usandoNominal();

let soma = (a, b) => {
    console.log(a + b);
};

let soma2 = function(a, b){
    console.log( a + b);
};

new soma(50, 20);
new soma2(50, 20);


