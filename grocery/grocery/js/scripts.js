
  // slide----------
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        380:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// chat-open-close----------

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }






const navigacia = ["HOME","Categoryes","Our Packages","Contact","Our App","Sign In" ];
const links = ["index.html", "#category", "#popular-bundle-pack", "#contact", "#download-app","form.html" ];

let navigationlength = navigacia.length;
let linkslength = links.length;

let txt = "<ul>";
for(let i=0; i<navigationlength; i++){
    txt += '<li> <a href='+ links[i] + ">" + navigacia[i] + "</a></li>";
}
txt += "</ul>";

document.getElementById("nav").innerHTML = txt;


document.getElementById("marketlogo").innerHTML= '<a href="index.html"><img src="poto/grocery.png" alt="market-logo" class="logo-hover"></a>';