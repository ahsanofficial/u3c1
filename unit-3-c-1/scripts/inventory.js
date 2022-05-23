let body = document.getElementById('all_products')

let products = JSON.parse(localStorage.getItem('products')) || []
products.map((ele, ind) => {
    let div = document.createElement('div')
    let type = document.createElement('h4')
    type.innerText = ele.type
    let desc = document.createElement('h4')
    desc.innerText = ele.desc
    let price = document.createElement('h4')
    price.innerText = ele.price
    let btn = document.createElement('button')
    btn.innerText = 'Remove Product'
    btn.addEventListener('click', function () {
        products.splice(ind, 1)
        localStorage.setItem('products', JSON.stringify(products))
        window.location.reload()
    })
    let image = document.createElement('img')
    image.src = ele.image
    div.append(image, type, desc, price, btn)
    body.append(div)






})