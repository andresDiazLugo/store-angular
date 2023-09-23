export interface Iproduct{
    id: number;
    name: string;
    description: string;
    price: number;
    img: string;
    quantity:number;
}

export const listProduct = [
    {
        id:0,
        name:"Mouse logitech",
        description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 5000,
        img:"https://s3-sa-east-1.amazonaws.com/saasargentina/yV6tzfHRvfeJ0KFtX08r/imagen",
        quantity:1
    },
    {
        id:1,
        name:"Monitor gamer",
        description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        price: 45000,
        img:"https://axa.com.ar/webaxa/24794/monitor-gamer-curvo-samsung-c24f390fh-led-24-black-high-glossy-100v-240v.jpg",
        quantity:1
    },
    {
        id:2,
        name:"Teclado gamer",
        description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 5000,
        img:"https://smarts.com.ar/media/catalog/product/cache/e2fffb2b85fe85187f9dedbb6434d061/k/5/k552rgb-1-sp-blue_ok.jpg",
        quantity:1
    },
    {
        id:3,
        name:"Mousepad",
        description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 8000,
        img:"https://http2.mlstatic.com/D_NQ_NP_991484-MLA44791669889_022021-O.webp",
        quantity:1
    },
    {
        id:4,
        name:"Gabinete",
        description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 2000,
        img:"https://www.soscomputacion.com.ar/25908-thickbox_default/gabinete-gamer-game-km-bestia-de-guerra-con-vidrio-templado-no-incluye-cooler.jpg",
        quantity:1
    }
]