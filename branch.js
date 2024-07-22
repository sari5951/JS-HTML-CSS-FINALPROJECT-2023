const dom = {
    bdikaForm: document.bdikaForm,
    FormData: {
        firstName: document.getElementById("firstName"),
        lastName: document.getElementById("lastName"),
        email: document.getElementById("email")

    }
}
dom.bdikaForm.onsubmit=(event) => {
    
    const user = {
        f: dom.FormData.firstName.value,
        l: dom.FormData.lastName.value,
        e: dom.FormData.email.value,
        order:{
            Food:[],
            total:0,

        },
    }
   


    event.preventDefault();
    localStorage.setItem(user.e, JSON.stringify(user));
    localStorage.setItem("currentEmail",user.e);
    


    var nameOfUser = user.e;
    alert(nameOfUser);
    window.location.href = "./order.html";  
    dom.bdikaForm.reset();
}
const formUser = document.getElementById('userForm');
const keyEmail = document.getElementById('enterEmail');

formUser.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const currentEmail = keyEmail.value;
  localStorage.setItem("currentEmail", currentEmail);
  
  
  const get_item = localStorage.getItem("currentEmail");
  
  formUser.reset();
  window.location.href = "./order.html";
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
  window.addEventListener("scroll", () => {
    var topNavigation = document.querySelector(".top-navigation");
    if (window.pageYOffset > 0) {
      topNavigation.classList.add("show");
    } else {
      topNavigation.classList.remove("show");
    }
  });
  

   

