/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
const arr = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray(ar) {
  return ar;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaArray(arr)[1]); // 2

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornaValor(ar, index) {
  return ar[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
const arrVar = [1, 'b', true, null, 2];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
retornaValor(arrVar, 0); // 1
retornaValor(arrVar, 1); // 'b'
retornaValor(arrVar, 2); // true
retornaValor(arrVar, 3); // null
retornaValor(arrVar, 4); // 2

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName) {
  const obj = {
    name1: {
      quantidadePaginas: 100,
      autor: "AAA",
      editora: "aaa"
    },
    name2: {
      quantidadePaginas: 200,
      autor: "BBB",
      editora: "bbb"
    },
    name3: {
      quantidadePaginas: 300,
      autor: "CCC",
      editora: "ccc"
    },
  }

  return bookName ? obj[bookName] : obj;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
const nome0 = Object.keys(book())[0];
`O livro ${nome0} tem ${book(nome0).quantidadePaginas} páginas!`

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
const nome1 = Object.keys(book())[1];
`O autor do livro ${nome1} é ${book(nome1).autor}.`

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
const nome2 = Object.keys(book())[2];
`O livro ${nome2} foi publicado pela editora ${book(nome2).editora}.`
