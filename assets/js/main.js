const products = [
{id:"strawberry-cloud-cake",name:"Strawberry Cloud Cake",category:"cakes",price:48,image:"https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=85",short:"Vanilla sponge, fresh strawberries and cloud-soft cream.",description:"A celebration cake made with tender vanilla sponge, layers of lightly whipped cream and fresh seasonal strawberries. Finished by hand for a delicate, joyful centrepiece.",ingredients:"Flour, eggs, butter, sugar, cream, vanilla, fresh strawberries.",serves:"6–8 slices",tag:"Bestseller"},
{id:"almond-croissant",name:"Honey Almond Croissant",category:"pastries",price:7,image:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=85",short:"Flaky, buttery layers with almond cream and a honey finish.",description:"Our classic croissant is baked until deeply golden, filled with silky almond cream and finished with toasted almonds and a delicate honey glaze.",ingredients:"Wheat flour, butter, milk, eggs, almonds, honey, yeast.",serves:"1 pastry",tag:"Fresh daily"},
{id:"country-sourdough",name:"Country Sourdough Loaf",category:"breads",price:12,image:"https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&w=1000&q=85",short:"Slow-fermented loaf with a crisp crust and open crumb.",description:"Naturally leavened and slowly fermented for a gentle tang, crisp crust and soft, open crumb. Made in small batches every morning.",ingredients:"Stone-ground wheat flour, water, sea salt, sourdough starter.",serves:"One 750g loaf",tag:"Small batch"},
{id:"chocolate-fudge-cake",name:"Midnight Chocolate Cake",category:"cakes",price:52,image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85",short:"Deep cocoa sponge with glossy chocolate ganache.",description:"A rich cocoa sponge layered with whipped chocolate ganache and finished with a smooth, glossy coat. A timeless celebration favourite.",ingredients:"Flour, cocoa, eggs, butter, sugar, cream, dark chocolate.",serves:"8–10 slices",tag:"Signature"},
{id:"pistachio-danish",name:"Pistachio Rose Danish",category:"pastries",price:9,image:"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85",short:"Laminated pastry with pistachio frangipane and rose.",description:"Delicate laminated pastry folded around pistachio frangipane, with a whisper of rose and a scattering of crushed pistachios.",ingredients:"Wheat flour, butter, pistachio, eggs, sugar, rose water.",serves:"1 pastry",tag:"Seasonal"},
{id:"cinnamon-morning-bun",name:"Cinnamon Morning Bun",category:"pastries",price:6,image:"https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=1000&q=85",short:"Soft, buttery bun rolled in fragrant cinnamon sugar.",description:"A tender, buttery morning bun rolled in fragrant cinnamon sugar and baked until its edges turn beautifully caramelised.",ingredients:"Flour, butter, milk, eggs, cinnamon, sugar, yeast.",serves:"1 bun",tag:"Customer favourite"}
];
const articles = [
{id:"slow-mornings-and-warm-bread",title:"The Art of a Slow Morning",date:"May 18, 2026",category:"Behind the bake",image:"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",excerpt:"Why the best mornings begin with warm bread, good butter and a little time.",body:["There is a particular kind of comfort in a bakery before the day begins. The ovens are warm, the first trays are just coming out, and the room carries the gentle scent of butter and toasted flour.","At Buttercup Bakehouse, we believe a slower morning is worth making space for. Our breads begin long before sunrise, with patient fermentation and careful hands. The result is simple: a crust that crackles, a crumb that stays tender, and a reason to pause.","Bring home a loaf, warm a slice, add a little butter and let the morning take its time."]},
{id:"choosing-the-perfect-celebration-cake",title:"A Little Guide to Choosing Your Celebration Cake",date:"May 10, 2026",category:"Cake notes",image:"https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=85",excerpt:"Flavours, finishes and thoughtful details to make your cake feel like yours.",body:["A celebration cake should feel like part of the occasion, not simply the final course. Start with the people around the table and the flavours they love.","Choose a sponge that suits the mood: vanilla for a timeless favourite, chocolate for a richer moment, or a seasonal fruit filling for something bright. Then think about the finish. A softly textured buttercream, fresh flowers or a simple piped border can make the cake feel personal without feeling overdone.","Our custom cake team is happy to help you bring the little details together."]},
{id:"inside-our-small-batch-bakery",title:"Why We Bake in Small Batches",date:"April 26, 2026",category:"Our craft",image:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=85",excerpt:"Freshness is not a feature we add later. It is where every recipe begins.",body:["Small-batch baking gives us room to pay attention. Dough can be checked by feel, pastry can be watched as it colours, and each finish can be done with care.","It also means our shelves change with the day. Some things sell quickly; others arrive warm in the afternoon. We would rather bake thoughtfully and often than make more than we need.","Thank you for making space for independent, considered baking. Every visit helps keep that kind of craft alive."]}
];
function initShellControls(){
 const menu=document.getElementById("menuToggle"),nav=document.getElementById("mainNav");
 menu?.addEventListener("click",()=>{const open=nav?.classList.toggle("open");menu.setAttribute("aria-expanded",String(!!open));});
 const path=location.pathname.split("/").pop()||"index.html";
 const active=path==="index.html"?"home":path==="about.html"?"about":path==="products.html"||path==="product-detail.html"?"products":path==="custom-orders.html"?"custom":path.startsWith("blog")?"blog":path==="contact.html"?"contact":"";
 document.querySelectorAll("[data-nav]").forEach(a=>{if(a.dataset.nav===active){a.classList.add("active");a.setAttribute("aria-current","page");}});
 const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();
}
function initPreferences(){
 const body=document.body, saved=localStorage.getItem("bb-theme");
 if(saved==="dark")body.classList.add("dark");
 const dir=localStorage.getItem("bb-dir")||"ltr";document.documentElement.dir=dir;document.documentElement.lang="en";
 const themeBtn=document.getElementById("themeToggle"),rtlBtn=document.getElementById("rtlToggle");
 const paint=()=>{if(themeBtn)themeBtn.textContent=body.classList.contains("dark")?"☀":"☾";if(rtlBtn){rtlBtn.textContent=document.documentElement.dir==="rtl"?"LTR":"RTL";rtlBtn.setAttribute("aria-label",document.documentElement.dir==="rtl"?"Switch to left-to-right layout":"Switch to right-to-left layout");}};
 themeBtn?.addEventListener("click",()=>{body.classList.toggle("dark");localStorage.setItem("bb-theme",body.classList.contains("dark")?"dark":"light");paint()});
 rtlBtn?.addEventListener("click",()=>{const next=document.documentElement.dir==="rtl"?"ltr":"rtl";document.documentElement.dir=next;localStorage.setItem("bb-dir",next);paint()});paint();
}
function initReveal(){const els=document.querySelectorAll(".reveal");if(!("IntersectionObserver"in window)){els.forEach(e=>e.classList.add("visible"));return}const ob=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");ob.unobserve(e.target)}}),{threshold:.12});els.forEach(e=>ob.observe(e))}
function productCard(p){return `<article class="card product-card"><a class="product-image" href="product-detail.html?item=${p.id}"><img src="${p.image}" alt="${p.name}" loading="lazy"></a><div class="card-body"><div class="product-meta"><h3>${p.name}</h3><span class="price">$${p.price}</span></div><p class="description">${p.short}</p><a class="text-link" href="product-detail.html?item=${p.id}">View product <span>↗</span></a></div></article>`}
function articleCard(a){return `<article class="card article-card"><a class="article-image" href="blog-detail.html?article=${a.id}"><img src="${a.image}" alt="${a.title}" loading="lazy"></a><div class="card-body"><div class="article-date">${a.date} · ${a.category}</div><h3>${a.title}</h3><p>${a.excerpt}</p><a class="text-link" href="blog-detail.html?article=${a.id}">Read article <span>↗</span></a></div></article>`}
document.addEventListener("DOMContentLoaded",()=>{initShellControls();initPreferences();initReveal();});
const homeDropdown = document.querySelector(".home-dropdown");
const homeDropdownToggle = document.getElementById("homeDropdownToggle");

if (homeDropdown && homeDropdownToggle) {

    homeDropdownToggle.addEventListener("click", () => {
        const isOpen = homeDropdown.classList.toggle("is-open");

        homeDropdownToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });

    document.addEventListener("click", (event) => {
        if (!homeDropdown.contains(event.target)) {
            homeDropdown.classList.remove("is-open");
            homeDropdownToggle.setAttribute("aria-expanded", "false");
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            homeDropdown.classList.remove("is-open");
            homeDropdownToggle.setAttribute("aria-expanded", "false");
        }
    });
}
/* =========================================
   NAVBAR - AUTOMATIC ACTIVE PAGE
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const mainNav = document.querySelector("#mainNav");
    const homeButton = document.querySelector("#homeDropdownToggle");

    if (!mainNav) return;

    const currentPage = document.body.dataset.active;

    // Remove active state from all navigation links
    mainNav.querySelectorAll("a[data-nav]").forEach(function (link) {
        link.classList.remove("active");
    });

    // Remove Home active state first
    homeButton?.classList.remove("active");

    // Apply active state to the current page
    if (currentPage === "home") {
        homeButton?.classList.add("active");
    } else {
        const activeLink = mainNav.querySelector(
            `[data-nav="${currentPage}"]`
        );

        activeLink?.classList.add("active");
    }

});
/* ==========================================
   BUTTERCUP - WEBSITE SCROLL ANIMATIONS
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    if (!("IntersectionObserver" in window)) return;

    const textElements = document.querySelectorAll(
        "main section h1, " +
        "main section h2, " +
        "main section h3, " +
        "main section p"
    );

    const imageElements = document.querySelectorAll(
        "main section img:not(.brand-logo)"
    );

    const cardElements = document.querySelectorAll(
        "main section article, " +
        "main section [class*='card']"
    );

    textElements.forEach(element => {
        element.classList.add("scroll-reveal");
    });

    imageElements.forEach(element => {
        element.classList.add("scroll-image-reveal");
    });

    cardElements.forEach(element => {
        element.classList.add("scroll-card-reveal");
    });

    const animationObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                entry.target.classList.add("is-visible");

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    document.querySelectorAll(
        ".scroll-reveal, .scroll-image-reveal, .scroll-card-reveal"
    ).forEach(element => {
        animationObserver.observe(element);
    });

});