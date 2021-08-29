

var plus = document.getElementsByClassName("button-plus")
var minus = document.getElementsByClassName("button-minus")

var count = document.getElementsByClassName("counter")
var price = document.getElementsByClassName("price")
var onePrice = document.getElementsByClassName("first-price")
var total = document.getElementById ("total")
var remove =document.getElementsByClassName("removeButton")
var item = document.getElementsByClassName("cart-item")
var add =document.getElementsByClassName("add-item")
var purchase= document.getElementById("purchase")
console.log(onePrice)


for (let i =0; i <plus.length; i++){
   plus[i].addEventListener("click", function(){
count[i].innerHTML = Number(count[i].innerHTML)+ 1
price [i].innerHTML = Number (price [i].innerHTML)+ Number( onePrice [i].innerHTML)
total.innerHTML = Number(total.innerHTML) + Number( onePrice [i].innerHTML)
}) 
}
for (let i =0; i <plus.length; i++){
minus[i].addEventListener("click", function(){
if (count[i].innerHTML>0){
count[i].innerHTML = Number(count[i].innerHTML)- 1
price [i].innerHTML = Number (price [i].innerHTML)- Number( onePrice [i].innerHTML)
total.innerHTML = Number(total.innerHTML) - Number( onePrice [i].innerHTML)
}})}

/*----------the price and quantity and total are done---------------*/
for(let i =0; i <plus.length; i++) {
    remove[i].addEventListener("click",function(){
        item[i].style.display = "none";
      total.innerHTML = Number(total.innerHTML)- price [i].innerHTML
    })

}

for(let i =0; i <plus.length; i++) {
    add[i].addEventListener("click",function(){
     
        item[i].style.cssText = "display: flex; padding-left: 20px;margin-top: 10px; align-items: center; justify-content: space-around; ";

    })

}

purchase.addEventListener("click",function(){
    if(Number(total.innerHTML)>0){
 alert("thank you for the purchase");}
 else
 alert("your cart is empty");
})

/*------------trying the heart-------------*/

var heart = document.getElementsByClassName("heart")
var heart2 = document.getElementsByClassName("heart2")
var picture = document.getElementsByClassName("item")



for(let i =0; i <heart.length; i++) {
   
    heart[i].addEventListener("click",function(){
        heart[i].style.cssText ="display: none";
        heart2[i].style.cssText= "display: inline";
    })
    
    picture[i].addEventListener("dblclick",function(){
        heart[i].style.cssText ="display: none";
        heart2[i].style.cssText= "display: inline";
    })
   

}
for(let i =0; i <heart2.length; i++) {
   
    heart2[i].addEventListener("click",function(){
         heart2[i].style.cssText= "display: none"; 
          heart[i].style.cssText ="display: inline";
     
    })
   }