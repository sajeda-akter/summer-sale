// get items price by id
function getPriceValueById(elementId){
    const element=document.getElementById(elementId);
    const elementStringValue=element.innerText;
    const elementValue=parseFloat(elementStringValue);
    return elementValue;
}


function getInputValueById(inputId){
    const inputField=document.getElementById(inputId)
    const inputStringValue=inputField.value;
    const inputValue=parseFloat(inputStringValue);
    return inputValue
}

function setValueById(id,newValue){
    const idField=document.getElementById(id);
    idField.innerText=newValue.toFixed(2)
}
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
const previousTotalPrice=getPriceValueById('total-price')
console.log(previousTotalPrice)
const newTotalPrice=parseFloat(itemPrice+previousTotalPrice);
totalPrice.innerText=newTotalPrice.toFixed(2);
if(newTotalPrice>0){
    
// make purchase
const purchase=document.getElementById('purchase');
purchase.removeAttribute('disabled')
}

if(newTotalPrice>=200){
    const apply=document.getElementById('apply');
    apply.removeAttribute('disabled');
    apply.addEventListener('click',function(){

        const coupon=document.getElementById('coupon');
        const code=coupon.value;
        if(code==='SELL200'){

            const totalPrice=getPriceValueById('total-price');
            setValueById('total-price',totalPrice)
 
            const discountPrice=totalPrice*.2;
            setValueById('discount',discountPrice)

            // total amount with discount

const newTotal=newTotalPrice-discountPrice
setValueById('total',newTotal)


           
        }
        else{
            alert('Please enter valid discount code')
        }
        
    })
}

}
