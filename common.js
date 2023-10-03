
let count=0;

function itemTotal(e){
    
const itemPriceString=e.target.childNodes[5].childNodes[0];
const itemPrice=parseFloat(itemPriceString.innerText)
const itemName=e.target.childNodes[3].innerText;
const itemAdd=document.getElementById('item-name')
const p=document.createElement('p');

// add the item name and count
count=count+1
p.innerHTML=`${count}. ${itemName}`;
itemAdd.appendChild(p)


// item prices total with discount

const totalPrice=document.getElementById('total-price');
const previousTotalPrice=parseFloat(totalPrice.innerText)
const newTotalPrice=parseFloat(itemPrice+previousTotalPrice);
totalPrice.innerText=newTotalPrice.toFixed(2)

if(newTotalPrice>=200){
    const apply=document.getElementById('apply');
    apply.removeAttribute('disabled');
    apply.addEventListener('click',function(){

        const coupon=document.getElementById('coupon');
        const code=coupon.value;
        if(code==='SELL200'){

            // price total all the items
            const totalPriceString=document.getElementById('total-price');
            const totalPrice=parseFloat(totalPriceString.innerText)
            
            // discount for 200 or above shopping
            const discount=document.getElementById('discount')
            const discountPrice=totalPrice*.2;
            discount.innerText=discountPrice.toFixed(2);

            // total amount with discount
const total=document.getElementById('total')
const newTotal=newTotalPrice-discountPrice
total.innerText=newTotal.toFixed(2)


// make purchase
const purchase=document.getElementById('purchase');
purchase.removeAttribute('disabled')
           
        }
        else{
            alert('Please enter valid discount code')
        }
        
    })
}

}
