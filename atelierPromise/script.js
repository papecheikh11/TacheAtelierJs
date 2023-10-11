//pour la division-------------------
const divisionFunc = (a, b) => {
  return new Promise((resolve, reject) => {
    
    if (b == 0) {
      return reject(`Le calcul ne peut pas se faire`);
    }
    resolve(`le resultat de la division entre a et b est de ${a/b}`);
  });
};

divisionFunc(15,3)
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
});
//pour la multiplication-------------------

const multiplicationFunc = (a, b) => {
  return new Promise((resolve, reject) => {
    resolve(`le resultat de la multiplication entre a et b est de ${a*b}`);
  });
};

multiplicationFunc(15,3)
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
});

//pour l'addition-------------------

const additionFunc = (a, b) => {
  return new Promise((resolve, reject) => {
    resolve(`le resultat de l'addition entre a et b est de ${a+b}`);
  });
};

additionFunc(15,3)
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
});
//pour la soustraction-------------------

const soustractionFunc = (a, b) => {
  return new Promise((resolve, reject) => {
    resolve(`le resultat de la soustraction entre a et b est de ${a-b}`);
  });
};

soustractionFunc(15,3)
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
});
//pour le modulo-------------------

const moduloFunc = (a, b) => {
  return new Promise((resolve, reject) => {
    resolve(`le resultat du modulo entre a et b est de ${a%b}`);
  });
};

moduloFunc(15,3)
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
});