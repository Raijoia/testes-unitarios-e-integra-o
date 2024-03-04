const somaHorasExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;

const calculaDesconto = (salario, descontos) => salario - descontos;

const verifiqueSe = (valor) => {
  const assercoes = {
    ehExatamenteIgualA(esperado) {
      if (valor !== esperado) {
        throw new Error(`${valor} não é igual a ${esperado}`);
      }
    },
  };

  return assercoes;
};

const teste = (titulo, funcaoDeTEste) => {
  try {
    funcaoDeTEste();
    console.log(`✅ ${titulo}`);
  } catch (error) {
    console.error(`❌ ${titulo}`);
    console.error(error);
  }
};

teste('somaHorasExtras', () => {
  const esperado = 2500;
  const retornado = somaHorasExtras(2000, 500);

  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});

teste('calculaDesconto', () => {
  const esperado = 1500;
  const retornado = calculaDesconto(2000, 500);

  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});
