const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonDiscount = document.querySelector('.discount')
const buttonSumAll = document.querySelector('.sum-all')
const buttonVegan = document.querySelector('.vegan')
let myLi = ''

function formatCurrency(value) {
    const formatted = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    return formatted
}

function showAll(productsArray) {
    resetListClass()
    myLi = ''

    productsArray.forEach((product) => {
        myLi += `
    <li>
        <img src="${product.src}" alt="${product.name}">
        <p>${product.name}</p>
        <p class="item-price">${formatCurrency(product.price)}</p>
    </li>
    `
    })

    list.innerHTML = myLi

}

function discount() {
    resetListClass()
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: (product.price * 0.9),
    }))

    showAll(newPrices)

}

function sumAll() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    // Adiciona a classe especial para centralizar
    list.className = 'total-only'
    
    list.innerHTML = `
    <li>
        <p class="total-label">Valor Total</p>
        <p>${formatCurrency(totalValue)}</p>
    </li>
    `
}

// Função para remover a classe especial quando não for total
function resetListClass() {
    list.className = ''
}

function vegan() {
    resetListClass()
    const veganOptions = menuOptions.filter((product) => product.vegan)

    showAll(veganOptions)
}


buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonDiscount.addEventListener('click', discount)
buttonSumAll.addEventListener('click', sumAll)
buttonVegan.addEventListener('click', vegan) 