

// פונקציה של הטיימר
const PopUp=document.getElementById("PopUp");
PopUp.style.display="none";
const ShowPopup=()=>{
  PopUp.style.display="block";
  
}
setTimeout(ShowPopup,100000);

const RollPopUp=()=>{
  PopUp.style.display="none";
  setTimeout(ShowPopup,100000);

}
document.addEventListener("scroll",RollPopUp);
//פונקציה שגוללת קצת את העמוד
document.getElementById('scroll_on_video').addEventListener('click', scrollDown);

function scrollDown() {
  const scrollAmount = 730; 


  const scrollIcon = document.getElementById('scroll_on_video');
  scrollIcon.style.animation = 'none';

  setTimeout(function() {
    window.scrollBy({
      top: scrollAmount,
      behavior: 'smooth'
    });

   
    scrollIcon.style.animation = '';
  }, 100);
}
// /////פונקציית חיפוש!!!!!!!
// פונקציה של החיפוש

// const searchProducts = (searchTerm) => {
//   searchTerm = searchTerm.toLowerCase();

//   // Clear previous search results
//   document.getElementById("searchResults").innerHTML = "";

//   // Make an AJAX request to fetch the JSON data
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "./product.json", true);
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const data = JSON.parse(xhr.responseText);
//       processJSONData(data, searchTerm);
//     }
//   };
//   xhr.send();
// }
// const urlParams = new URLSearchParams(window.location.search);
//   const productId = urlParams.get('product.id');

//   // Scroll to the corresponding object
//   if (productId) {
//     const element = document.getElementById(productId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   }


// const processJSONData = (data, searchTerm) => {
//   let productExists = false;
//   let product;

//   data.forEach((category) => {
//     category.forEach((productItem) => {
//       if (productItem.name.toLowerCase().includes(searchTerm)) {
//         productExists = true;
//         product = productItem;
//         return;
//       }
//     });
//   });

//   if (productExists) {
//     // Redirect the user to the order.html page with the product information
//     window.location.href = `order.html?productId=${product.url}`;
    
//   } else {
//     const messageParagraph = document.createElement("p");
//     if (!searchTerm) {
//       messageParagraph.textContent = "Please enter a search term.";
//     } else {
//       messageParagraph.textContent = "No such product exists.";
//     }
//     document.getElementById("searchResults").appendChild(messageParagraph);
//   }
// }
const searchProducts = (searchTerm) => {
  searchTerm = searchTerm.toLowerCase();

  // Clear previous search results
  document.getElementById("searchResults").innerHTML = "";

  // Make an AJAX request to fetch the JSON data
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./product.json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      processJSONData(data, searchTerm);
    }
  };
  xhr.send();
}

const processJSONData = (data, searchTerm) => {
  let productExists = false;
  let product;

  data.forEach((category) => {
    category.forEach((productItem) => {
      if (productItem.name.toLowerCase().includes(searchTerm)) {
        productExists = true;
        product = productItem;
        return;
      }
    });
  });

  if (productExists) {
    // Redirect the user to the product page
    document.getElementById("searchResults").innerHTML=   `<div id="kindMeal">
    <img src="${product.url}" width="300px" height="200px">
    <span>${product.name}</span>
    <p class="detail text_center">${product.description}<p>
   
</div>`;

  } else {
    const messageParagraph = document.createElement("p");
    if (!searchTerm) {
      messageParagraph.textContent = "Please enter a search term.";
    } else {
      messageParagraph.textContent = "No such product exists.";
    }
    document.getElementById("searchResults").appendChild(messageParagraph);
  }
}
//  iCarrage.addEventListener("click", function () {
//   // const sal = document.createElement('li');
//   const myBooton = document.getElementById("myBooton");
//   //הכנסת מוצרים ללוקל
//   currentUser.order.Food.push(product);
//   currentUser.order.total += product.price;
//   const currentUserUpdated = JSON.stringify(currentUser);
//   localStorage.setItem(currentUserEmail, currentUserUpdated);
//   alert(" ההזמנה התווספה לסל");

// });





















// בקשר לרספונסביות
const listIcon = document.getElementById('list_icon');
const topNav = document.getElementById('top_nav_left');

listIcon.addEventListener('click', function() {
  listIcon.classList.toggle('open');
});
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
