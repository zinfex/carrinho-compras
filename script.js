let lista = []
let totalCompra = 0

mostrarTotal()

function remove() {
    $('li').remove()
    lista.length = 0
    totalCompra = 0

    mostrarTotal()
}

//Hamburguer
$('#addHam').click(function () {
    $('#resultado').append('<li>Hamburguer R$25,00</li>')
    lista.push('Hamburguer')

    totalCompra = totalCompra + 25.00
    mostrarTotal()
})

//Pizza
$('#addPizza').click(function () {
    $('#resultado').append('<li>Pizza R$30,00</li>')
    lista.push('Pizza')

    totalCompra = totalCompra + 30.00
    mostrarTotal()
})

function mostrarTotal() {
    $('#totalItens').html(lista.length)
    $('#totalRs').html(`R$${totalCompra},00`)
}

$('#finalizar').on('click', function() {
    alert('Compra finalizada, total: R$' + totalCompra + ',00')
    remove()
})

console.log(lista)