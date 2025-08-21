const Cardapio_loja = [
    { id: "carne", Pastel: " Pastel de Carne ", Preço: 15.00                  },
    { id: "frango", Pastel: " Pastel de Frango ", Preço: 15.00                },
    { id: "chocolate", Pastel: " Pastel de Chocolate ", Preço: 20.00          },
    { id: "queijo", Pastel: " Pastel de Queijo ", Preço: 15.00                },
    { id: "carneQueijo", Pastel: " Pastel de Carne com Queijo ", Preço: 15.00 },
    { id: "cheddar", Pastel: " Pastel de Carne com Cheddar ", Preço: 20.00    }
];

const Tamanho_loja = [
    { id: "pequeno", Tamanho: " Pequeno ", Preço: 5.00 },
    { id: "médio", Tamanho: " Médio ", Preço: 7.00     },
    { id: "grande", Tamanho: " Grande ", Preço: 10.00  }
];





function preechr() {
    const selectCardapio = document.getElementByid("Cardapio");
    for (let i = 0; 1 < Cardapio_loja.length; i++) {
        const item = Cardapio_loja[i];
        const option = document.creatElement("option");
        option.value = item.id;
        option.textContent = item.Pastel;
        selectCardapio.appendChild(option);
    }

    const selectTamanho = document.getElementByid("Tamanho");
    for (let i = 0; 1 < Tamanho_loja.length; i++) {
        const item = Tamanho_loja[i];
        const option = document.creatElement("option");
        option.value = item.id;
        option.textContent = item.Tamanho;
        selectTamanho.appendChild(option);
    }

    


}
preechr();