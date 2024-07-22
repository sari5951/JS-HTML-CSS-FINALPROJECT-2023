// הסל של ההזמנות
const myBooton=document.getElementById("myBooton");//ריבוע 
const salButton=document.getElementById("salButton");// כפתור
salButton.addEventListener("mouseover",function(){myBooton.style.display="block";});
salButton.addEventListener("mouseleave",function(){myBooton.style.display="none";});
myBooton.addEventListener("mouseenter",function(){myBooton.style.display="block"})
myBooton.addEventListener("mouseleave",function(){myBooton.style.display="none";});
// 
const meal_brakfast = document.getElementById("meal_brakfast");
const jumpBrakfast = document.getElementById("jumpBrakfast");
const jumpLaunch = document.getElementById("jumpLaunch");
const supper = document.getElementById("supper");
const cooke = document.getElementById("cooke");
const koktail = document.getElementById("koktail");
const exit = document.getElementById("exit");
// בקשר לניתוב העליון
window.addEventListener('scroll', function() {
  var nav = document.getElementById('top_nav');
  var scrollPosition =   document.documentElement.scrollTop;

  if (scrollPosition > 0) {
    nav.classList.add('nav-scrolled');
  } else {
    nav.classList.remove('nav-scrolled');
  }
});
window.addEventListener("scroll", function() {
  var topNavigation = document.querySelector(".top-navigation");
  if (window.pageYOffset > 0) {
    topNavigation.classList.add("show");
  } else {
    topNavigation.classList.remove("show");
  }
});

////////////הצגה של השם משתמש!
// alert("לפני ההצלחה")
const hello = document.getElementById('hello');
const currentUserEmail = localStorage.getItem("currentEmail");
const stringCurrentUser = localStorage.getItem(currentUserEmail);
const currentUser = JSON.parse(stringCurrentUser);
hello.innerHTML = "היי " + currentUser.f + " " + currentUser.l;

// alert("אחרי ההצלחה");
///////////////////////////////

meal_brakfast.addEventListener("click", function () {
  jumpBrakfast.style.display = "flex";
  exit.style.display = "block";
});

supper.addEventListener("click", function () {
  jumpLaunch.style.display = "flex";

  exit.style.display = "block";
});




document.getElementById("koktail");

koktail.addEventListener("click", function () {
  cooke.style.display = "flex";
  exit.style.display = "block";
});
exit.addEventListener("click", function () {
  jumpBrakfast.style.display = "none";
  jumpLaunch.style.display = "none";
  cooke.style.display = "none";
  exit.style.display = "none";


})

// קריאת שרת

let Food = [[], [], []]

$.ajax({

  url: "./product.json",
  success: (result) => {
   
    Food = result;

    drawFood();
  },
  error: function (xhr, status, error) {
    debugger
    console.error('Error:', status, error);
  }
});

const drawFood = () => {
  drawFood1(Food[0]);
  drawFood2(Food[1]);
  drawFood3(Food[2]);

}
const drawFood1 = (breakfast) => {
  breakfast.forEach(i => {
    const li = drawBreakfastOne(i);
    jumpBrakfast.appendChild(li);

  });

}
const drawFood2 = (lunch) => {
  lunch.forEach(i => {
    const li = drawBreakfastOne(i);
    jumpLaunch.appendChild(li);

  });

}
const drawFood3 = (cookies) => {
  cookies.forEach(i => {
    const li = drawBreakfastOne(i);
    cooke.appendChild(li);

  });

}



















// פונקציה שמציירת מוצר בודד
const drawBreakfastOne = (product) => {


  const li = document.createElement('li');
  li.innerHTML = `
    <div id="kindMeal">
      <img src="${product.url}" width="300px" height="400px">
      <span>${product.name}</span>
      <p class="detail">${product.name}</p>
      <p class="price">${product.price}$</p>
      <i id="iCarrage" class="fas fa-cart-plus"></i>
    </div>`;

  const kindMeal = li.querySelector('#kindMeal');
  const iCarrage = kindMeal.querySelector('#iCarrage');
  iCarrage.style.opacity = '0';
  kindMeal.addEventListener('mouseover', () => {
    iCarrage.style.opacity = '1';
  });
  kindMeal.addEventListener('mouseout', () => {
    iCarrage.style.opacity = '0';
  });

  iCarrage.addEventListener("click", function () {
    const sal = document.createElement('li');
    const myBooton = document.getElementById("myBooton");
    //הכנסת מוצרים ללוקל
    currentUser.order.Food.push(product);
    currentUser.order.total += product.price;
    const currentUserUpdated = JSON.stringify(currentUser);
    localStorage.setItem(currentUserEmail, currentUserUpdated);
    alert(" ההזמנה התווספה לסל");

  });






  const prodInSal = document.createElement('div');
  const myOrdersRow = document.createElement('div');
  const paymentRow = document.createElement('div');
  
  myOrdersRow.textContent = "My orders...";
  
  myOrdersRow.style.fontWeight = "bold";
  paymentRow.style.marginTop = "10px";
  
  const products = JSON.parse(localStorage.getItem(currentUserEmail)).order.Food;
  
  products.forEach(product => {
    prodInSal.innerHTML += `
      <div id="g">
        <img src="${product.url}" width="50px">
        <span>${product.name}</span>
        
        <p>${product.price}</p>
        <button class="deleteProduct">delete</button>
      </div>`;
  });
  
  myBooton.addEventListener("click", () => {
    myBooton.innerHTML = "";
    myBooton.appendChild(myOrdersRow);
   
    myBooton.appendChild(prodInSal);
    myBooton.appendChild(paymentRow);
    paymentRow.innerHTML = `<a href="./Pay.html"><button id="ToPay">${currentUser.order.total} amount to pay</button></a>`;


 
  





























    

// //  מחיקה    // 
   const deleteProductButtons = document.querySelectorAll(".deleteProduct");
   deleteProductButtons.forEach((deleteProductButton) => {

  
     deleteProductButton.addEventListener("click", (event) => {
      
     const eventTarget = event.target;
     const productDiv = eventTarget.parentNode;
     const brother = productDiv.querySelector("span");
   
      const productName = brother.innerHTML;
      deleteProduct(productName);
     
      return productName;
    
    }); });
    function deleteProduct(productName) {
      const index = currentUser.order.Food.findIndex(p => p.name === productName);
      currentUser.order.total -= currentUser.order.Food[index].price;
      
      
        currentUser.order.Food.splice(index, 1);
     
    
        const currentUserUpdated = JSON.stringify(currentUser);
        localStorage.setItem(currentUserEmail, currentUserUpdated);
   
      alert("ההזמנה נמחקה בהצלחה!");  
    }
 });
       return li;
     }
















































































































































  