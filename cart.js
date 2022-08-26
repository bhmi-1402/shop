let s = `        <div class="carditemCard">
<p>1</p>
<img src="pondsmen.jpg" alt="">
<p>pondsmen</p>R
<p>699</p>
<button class="remove">Remove</button>
</div>

<hr>
`;





function check()
{
let previousdata = localStorage.getItem("Cartlobby");

if(previousdata==null)
document.getElementById("cartitemcontainer").innerHTML = " Nothing in your Cart . Please shop something <br>";
}

function gettingitem()
{


     document.getElementById("cartitemcontainer").innerHTML="";

    console.log("getting item run")
    let items = localStorage.getItem("Cartlobby");
    if(items==null)
    {
        document.getElementById("cartitemcontainer").innerHTML="Nothing in your cart , Please Shop something<hr>"  
    }

    items = JSON.parse(items);
    console.log(items);

    let amount =0;

    for(let i=0 ; i<items.length ; i++)
    {
      
        let itemobj = JSON.parse(items[i]);
        console.log(itemobj);

       


        document.getElementById("cartitemcontainer").innerHTML+=`
    
    <div class="carditemCard">
    <p>${i+1}</p>
   <img src="${itemobj.name}.jpg" alt="">
   <p>${itemobj.name}</p>R
   <p>${itemobj.price}</p>
   <button class="remove" id="${i}">Remove</button>
</div>
<hr>`;
  

  amount += parseInt(itemobj.price);
    }



    document.getElementById("bill").innerHTML=`     <p>
    Total Amount to Pay : 
</p>
<p id="amount">
     ${amount}
</p>`;

removeitem();
}
gettingitem();

function showAlert()
{
   let alert = document.getElementsByClassName("alert");
//    console.log(alert[0]);

   alert[0].style="display:block;"
   alert[0].style="position:absolute;"
}


function removeitem()
{
    let itemtoremove = document.querySelectorAll(".remove");
Array.from(itemtoremove).forEach((title)=>
{
title.addEventListener("click" , (e)=>{
    console.log(e.target.id);
    
  let items = localStorage.getItem("Cartlobby");
  items = JSON.parse(items);
  
  items.splice(e.target.id , 1);
  console.log(items);
  
  items = JSON.stringify(items);

  localStorage.setItem("Cartlobby" , items);
   gettingitem();

})
}
)
}


removeitem();