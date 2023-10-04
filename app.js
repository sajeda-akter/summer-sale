const items=document.getElementById('kitchenware').children
// console.log(items[])
for(let item of items){
    item.addEventListener('click',function(e){
       
        itemTotal(e)
    })
}



  


    // document.getElementById('kitchenware').addEventListener('click',function(e){
        
    // itemTotal(e)
        
        
    // })

    document.getElementById('sports').addEventListener('click',function(e){
        
    itemTotal(e)
        
        
    })
    document.getElementById('furniture').addEventListener('click',function(e){
        
    itemTotal(e)
        
        
    })
    