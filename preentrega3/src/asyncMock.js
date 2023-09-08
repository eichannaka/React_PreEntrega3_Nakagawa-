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
    {
        id: '4',
        name: 'XIAOMI 12 LITE 5G',
        price:1600,
        category:'celular',
        img:'https://cbafederal.net/wp-content/uploads/2022/09/fee_786_587_png.webp',
        stock:4,
        description:'XIAOMI 12 LITE 5G 128GB 6GB '
    },
    {
        id: '5',
        name: 'Nokia 1.3',
        price:2500,
        category:'celular',
        img:'https://cbafederal.net/wp-content/uploads/2021/09/Nokia-1-3-16GB-Charcoal-6438409043870-10072020-01-p.png',
        stock:12,
        description:'Nokia 1.3 16gb 1gb Ram'
    },
    {
        id: '6',
        name: 'Tablet Samsung Galaxy TAB A8',
        price:3500,
        category:'tablet',
        img:'https://cbafederal.net/wp-content/uploads/2022/09/images-19.jpg',
        stock:19,
        description:'Tablet Samsung Galaxy TAB A8 64GB 4GB 2022'
    },
    {
        id: '7',
        name: 'Asus X515EA i3-1115G4 4gb',
        price:5500,
        category:'notebook',
        img:'https://cbafederal.net/wp-content/uploads/2021/10/X515EA-2.png',
        stock:3,
        description:'Asus X515EA i3-1115G4 4gb Ssd 256gb 15,6″ WIN 11'
    }
    
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
