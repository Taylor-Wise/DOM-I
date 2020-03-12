const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus sc              elerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img")
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navigation = document.getElementsByTagName("a")
navigation[0].textContent = siteContent["nav"]["nav-item-1"]
navigation[1].textContent = siteContent["nav"]["nav-item-2"]
navigation[2].textContent = siteContent["nav"]["nav-item-3"]
navigation[3].textContent = siteContent["nav"]["nav-item-4"]
navigation[4].textContent = siteContent["nav"]["nav-item-5"]
navigation[5].textContent = siteContent["nav"]["nav-item-6"]

const ctaButton = document.querySelector(".cta-text button")
ctaButton.textContent = siteContent["cta"]["button"]

const ctaHeader = document.querySelector(".cta-text h1")
ctaHeader.textContent = siteContent["cta"]["h1"]

const ctaImg = document.getElementById("cta-img")
ctaImg.setAttribute("src", siteContent["cta"]["img-src"])

const topContent = document.querySelectorAll(".top-content .text-content h4")

topContent[0].textContent = siteContent["main-content"]["features-h4"]

topContent[1].textContent = siteContent["main-content"]["about-h4"]

const topContentP = document.querySelectorAll(".top-content .text-content p")

topContentP[0].textContent = siteContent["main-content"]["features-content"]

topContentP[1].textContent = siteContent["main-content"]["about-content"]

const middleImg = document.getElementById("middle-img")
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"])

const bottomHeader = document.querySelectorAll(".bottom-content .text-content h4")

bottomHeader[0].textContent = siteContent["main-content"]["services-h4"]

bottomHeader[1].textContent = siteContent["main-content"]["product-h4"]

bottomHeader[2].textContent = siteContent["main-content"]["vision-h4"]

const bottomPara = document.querySelectorAll(".bottom-content .text-content p")

bottomPara[0].textContent = siteContent["main-content"]["services-content"]

bottomPara[1].textContent = siteContent["main-content"]["product-content"]

bottomPara[2].textContent = siteContent["main-content"]["vision-content"]

const contactHeader = document.querySelector(".contact h4")

contactHeader.textContent = siteContent["contact"]["contact-h4"]

const contactPara = document.querySelectorAll(".contact p")

contactPara[0].textContent = siteContent["contact"]["address"]

contactPara[1].textContent = siteContent["contact"]["phone"]

contactPara[2].textContent = siteContent["contact"]["email"]

const copyRight = document.querySelector("footer p")

copyRight.textContent = siteContent["footer"]["copyright"]

var a = document.createElement('a');
var node1 = document.createTextNode("Locations");
a.appendChild(node1);
a.href = "#";

const newNav = document.querySelector("nav");
newNav.prepend(a);

var a2 = document.createElement('a');
var node2 = document.createTextNode("Our Goals");
a2.appendChild(node2);
a2.href = "#";
newNav.appendChild(a2);


const greenNav = document.querySelectorAll("a")
greenNav.forEach(function(a) {a.style.color = "green"});