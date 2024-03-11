class Animal {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    descrever() {
      console.log(`Este é ${this.nome} e tem ${this.idade} anos.`);
    }
  }
  
  let cachorro = new Animal("Cachorro", 15);
  let gato = new Animal("Gato", 6);
  
  cachorro.descrever();
  gato.descrever();

