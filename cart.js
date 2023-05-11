const product = [
    {
        id: 0, 
        image: 'images/laptop1.png',
        title: 'ROG STRIX SCAR 15',
        price: '94900',

    },
    {
        id: 1, 
        image: 'images/laptop2.png',
        title: 'Razer Blade 14',
        price: '159900',

    },
    {
        id: 2, 
        image: 'images/laptop3.png',
        title: 'Alienware M15 R7',
        price: '120900',

    },
    {
        id: 3, 
        image: 'images/laptop4.png',
        title: 'HP Victus',
        price: '65900',

    },
    {
        id: 4, 
        image: 'images/desktop1.png',
        title: 'Epimetheus',
        price: '30500',

    },
    {
        id: 5, 
        image: 'images/desktop2.png',
        title: 'Cronus',
        price: '83000',

    },
    {
        id: 6, 
        image: 'images/desktop3.png',
        title: 'Atlas',
        price: '62500',

    },
    {
        id: 7, 
        image: 'images/desktop4.png',
        title: 'Prometheus',
        price: '43000',

    },
    {
        id: 8, 
        image: 'images/desktop5.png',
        title: 'Hyperion',
        price: '75500',

    },
    {
        id: 9, 
        image: 'images/desktop6.png',
        title: 'Oceanus',
        price: '78000',

    },
    {
        id: 10, 
        image: 'images/kb1.png',
        title: 'Adesso AKB-132UY',
        price: '1590',

    },
    {
        id: 11, 
        image: 'images/kb2.png',
        title: 'Logitech G213 Prodigy',
        price: '3380',

    },
    {
        id: 12, 
        image: 'images/kb3.png',
        title: 'EVGA Z12',
        price: '2000',

    },
    {
        id: 13, 
        image: 'images/kb4.png',
        title: 'SteelSeries Apex 3',
        price: '3300',

    },
    {
        id: 14, 
        image: 'images/kb5.png',
        title: 'Rosewill NEON K75 V2',
        price: '4420',

    },
    {
        id: 15, 
        image: 'images/kb6.png',
        title: 'MSI Vigor GK20',
        price: '2100',

    },
    {
        id: 16, 
        image: 'images/m1.png',
        title: 'Logitech G305 LIGHTSPEED',
        price: '3380',

    },
    {
        id: 17, 
        image: 'images/m2.png',
        title: 'Logitech B100',
        price: '675',

    },
    {
        id: 18, 
        image: 'images/m3.png',
        title: 'Logitech M310',
        price: '1200',

    },
    {
        id: 19, 
        image: 'images/m4.png',
        title: 'Logitech G403 Hero',
        price: '2900',

    },
    {
        id: 20, 
        image: 'images/m5.png',
        title: 'Logitech G600',
        price: '3250',

    },
    {
        id: 21, 
        image: 'images/h1.png',
        title: 'HyperX Cloud Core',
        price: '4930',

    },
    {
        id: 22, 
        image: 'images/h2.png',
        title: 'Blackwire 3325',
        price: '4100',

    },
    {
        id: 23, 
        image: 'images/h3.png',
        title: 'Logitech PRO X',
        price: '10950',

    },
    {
        id: 24, 
        image: 'images/h4.png',
        title: 'Rosewill SAROS C740S',
        price: '3400',

    }

];

const categories = [...new Set(product.map((item)=>
    { return item}))]
    let i=0;


document.getElementById('root').innerHTML = categories.map((item) =>
{
    var {image, title, price} = item;
    return(
        `<div class ='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <h5>${title}</h5>
        <h2>₱${price}.00</h2>` +
        "<button onclick='addtocart("+(i++)+")'>Add to Cart</button>" + 
        `</div>
        </div>`
    )
}).join('')

var cart = [];

function delElement(a){
    cart .splice(a, 1);
    displaycart();

}

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function displaycart(a){
    let j = 0, total = 0; 
    document.getElementById("count").innerHTML=cart.length;

    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your Cart is Empty";
        document.getElementById("total").innerHTML ="₱ "+0+".00";
    }else{
        document.getElementById("cartItem").innerHTML = cart.map((items) =>
        {
            var{image, title, price} = items;
            total = Number(total);
            total+= +price;
            document.getElementById("total").innerHTML = "₱ "+total+".00";
            return (
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src='${image}'></img>
                </div>
                <h5 style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>₱${price}.00</h2>` +
                "<i class='fa-solid  fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }
}