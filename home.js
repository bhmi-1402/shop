let menu = document.getElementById("hamBurger");
menu.addEventListener("click",()=>{
    document.getElementById("sidebar").style="display:block;"
});
let cross = document.getElementById("cross").addEventListener("click",()=>{
    document.getElementById("sidebar").style="display:none;" 
})
// Cart Functioning::
function generator(name ,  price)
{
    this.name = name;
    this.price = price;
}
let cartitems= [];

let card = document.querySelectorAll(".addtocart");
Array.from(card).forEach((title)=>{

title.addEventListener("click",(e)=>{
    console.log(e.target.id , e.target.innerText);

    let id = e.target.id;
    let pricevalue = e.target.innerText;
   
    let item = new generator(id, pricevalue);
    
    let itemstring = JSON.stringify(item);

    cartitems.push(itemstring);

    let cartitemsstring = JSON.stringify(cartitems);

    localStorage.setItem("Cartlobby" , cartitemsstring);
})
});

let time = 500;
function showloader(time)
{
    document.getElementById("alertcontainer").style="display:flex";

    setTimeout(()=>{
    document.getElementById("alertcontainer").style="display:none";
    },time);
}



//categories working

let gender = document.getElementsByName("gender");

Array.from(gender).forEach((sx)=>{

   sx.addEventListener("click" , ()=>{
   
    for(let i=0 ; i<gender.length ; i++)
   {
   
     if(gender[i].checked == true)
     {
            if(i == 0)
            {
             document.getElementById("maleclothes").style="display:block"
             document.getElementById("pricerange").style="display:block"
             document.getElementById("femaleclothes").style="display:none"
             document.getElementById("kidsclothes").style="display:none"
             document.getElementById("buttongroup").style="display:block"
             
            }
            else if(i==1)
            {
                document.getElementById("buttongroup").style="display:block"
                document.getElementById("maleclothes").style="display:none"
                document.getElementById("femaleclothes").style="display:block"
                document.getElementById("kidsclothes").style="display:none"
                document.getElementById("pricerange").style="display:block"
            }
            else
            {
                document.getElementById("buttongroup").style="display:block"

                document.getElementById("maleclothes").style="display:none"
                document.getElementById("pricerange").style="display:block"
                document.getElementById("femaleclothes").style="display:none"
                document.getElementById("kidsclothes").style="display:block"
            }
        
     }   
    }
   });
})


