const aereasNacional = ["Latam", "Gol", "Azul" ];

const airCompanies = [...aereasNacional, "Delta", "Unitad Airlines", "Emirates"];

console.log(airCompanies);

const user = {
    name:'Igo Marcos',
    email:'igo@igo',
    passowrd:'çdngowbjvwbvwv',
};

const{ passowrd, ...data } =  user;

console.log('Oh my God!', data);

