function apresentarPessoa(nome, idade, cidade) {
    console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`);
  }
  
  const dadosDaPessoa = ["Ana Silva", 30, "São Paulo"];
  
  apresentarPessoa(dadosDaPessoa[0], dadosDaPessoa[1], dadosDaPessoa[2]);

  apresentarPessoa(...dadosDaPessoa);