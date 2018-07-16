const Edison = function () {
    console.log(this);
}

// const Devadoss = {name: "Karisal"};
// Devadoss.college = Edison;
// console.log(Devadoss);
// Edison();

const orange = { name: 'orange' };
Edison.call(orange);