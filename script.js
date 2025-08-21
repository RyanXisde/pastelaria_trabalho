const cardapio_loja = [
    { id: "carne", pastel: " Pastel de Carne ", preço: 15.00                  },
    { id: "frango", pastel: " Pastel de Frango ", preço: 15.00                },
    { id: "chocolate", pastel: " Pastel de Chocolate ", preço: 20.00          },
    { id: "queijo", pastel: " Pastel de Queijo ", preço: 15.00                },
    { id: "carneQueijo", pastel: " Pastel de Carne com Queijo ", preço: 15.00 },
    { id: "cheddar", pastel: " Pastel de Carne com Cheddar ", preço: 20.00    }
];

const tamanho_loja = [
    { id: "pequeno", tamanho: " Pequeno ", preço: 5.00 },
    { id: "médio", tamanho: " Médio ", preço: 7.00     },
    { id: "grande", tamanho: " Grande ", preço: 10.00  }
];

function preecher(){
    const selectCardapio = document.getElementById("cardapio");
     for (let i = 0; i < cardapio_loja.length; i++) {
         const item = cardapio_loja[i];
         const option = document.createElement("option");
         option.value = item.id;
         option.textContent = item.pastel;
         selectCardapio.appendChild(option);
    }

    const selectTamanho = document.getElementById("tamanho");
     for (let i = 0; i < tamanho_loja.length; i++) {
         const item = tamanho_loja[i];
         const option = document.createElement("option");
         option.value = item.id;
         option.textContent = item.tamanho.trim();
         selectTamanho.appendChild(option);
}
}
preecher();