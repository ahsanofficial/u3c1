//store the products array in localstorage as "products"
let form = document.querySelector('form')
document.getElementById('add_product').addEventListener('click', SubmitData)

function SubmitData(){
    let products=JSON.parse(localStorage.getItem('products'))||[]
    function data(t,d,p,i){
        this.type=t
        this.desc=d
        this.price=p
        this.image=i
    }


    event.preventDefault()
    let type=form.type.value
    let desc=form.desc.value
    let price=form.price.value
    let image=form.image.value
    let store=new data(type,desc,price,image)

    products.push(store)
    localStorage.setItem('products',JSON.stringify(products))
    form.type.value=null
    form.desc.value=null
    form.price.value=null
    form.image.value=null

}
