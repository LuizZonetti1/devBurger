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

// Função para remover a classe especial quando não for total
function resetListClass() {
    list.className = ''
}

// Função para animação suave de transição
function smoothTransition(callback) {
    // Fade out
    list.style.opacity = '0'
    list.style.transform = 'translateY(20px)'
    
    setTimeout(() => {
        callback() // Executa a mudança de conteúdo
        
        // Fade in
        setTimeout(() => {
            list.style.opacity = '1'
            list.style.transform = 'translateY(0)'
        }, 50)
        
    }, 300)
}

function showAll(productsArray) {
    smoothTransition(() => {
        resetListClass()
        myLi = ''

        productsArray.forEach((product, index) => {
            myLi += `
        <li style="animation-delay: ${index * 0.1}s">
            <img src="${product.src}" alt="${product.name}">
            <p>${product.name}</p>
            <p class="item-price">${formatCurrency(product.price)}</p>
        </li>
        `
        })

        list.innerHTML = myLi
    })
}

function discount() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: (product.price * 0.9),
    }))

    showAll(newPrices)
}

function sumAll() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    
    smoothTransition(() => {
        // Adiciona a classe especial para centralizar
        list.className = 'total-only'
        
        list.innerHTML = `
        <li>
            <p class="total-label">Valor Total</p>
            <p>${formatCurrency(totalValue)}</p>
        </li>
        `
    })
}


function vegan() {
    const veganOptions = menuOptions.filter((product) => product.vegan)

    showAll(veganOptions)
}


buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonDiscount.addEventListener('click', discount)
buttonSumAll.addEventListener('click', sumAll)
buttonVegan.addEventListener('click', vegan) 