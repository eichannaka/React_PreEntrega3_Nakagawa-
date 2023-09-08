const products=[
    {
        id: '1',
        name: 'Iphone 14 PRO',
        price:1550,
        category:'celular',
        img:'https://cbafederal.net/wp-content/uploads/2022/09/iphone-14-pro-color-morado-oscuro-512-gb-de-apple.jpg',
        stock:20,
        description:'Descripcion del Iphone 14 PRO'
    },
    {
        id: '2',
        name: 'SAMSUNG A04',
        price:1000,
        category:'celular',
        img:'https://cbafederal.net/wp-content/uploads/2023/07/a04-samsung-colores.png',
        stock:10,
        description:'Descripcion del SAMSUNG A04'
    },
    {
        id: '3',
        name: 'Apple iPad 9na',
        price:2000,
        category:'tablet',
        img:'https://cbafederal.net/wp-content/uploads/2021/12/mk2l3lz_a_2_1.jpg',
        stock:5,
        description:'Apple iPad 9na'
    },
]
export const getProducts=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}
export const getProductsById=(productId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod=>prod.id===productId))
        },500)
    })
}
export const getProductsByCategory=(productCategory)=>{
    return new Promise((resolve)=>{
        
        setTimeout(()=>{
                resolve(products.filter(prod=>prod.category===productCategory))
        },500)
    })
}
