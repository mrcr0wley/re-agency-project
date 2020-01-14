window.onload = function  () {
    initSlider();
    initFilters();
    fillContent();
    updateFilters();
};

function initSlider(){
    let slides = document.querySelectorAll('#header__slides .slide');
    let currentSlide = 0;
    setInterval(nextSlide, 10000);

    function nextSlide() {
        slides[currentSlide].className = "slide";
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].className = "slide showing";
    }
}

function initFilters(){
    let filterButtons = document.querySelectorAll(".filter-control");
    for (let i = 0; i < filterButtons.length; i++){
        filterButtons[i].addEventListener('click', function(event){
            let dropdown = document.querySelectorAll('.dropdown.open');
            for(let i=0; i < dropdown.length; i++){
                dropdown[i].className = "dropdown";
            }
            let parent = event.target.parentNode;


            if (event.target.className === 'filter-control') {

                let activeButtons = document.querySelectorAll(".filter-control.open");
                for (let i = 0; i < activeButtons.length; i++){
                    activeButtons[i].className = "filter-control";
                }
                event.target.className = 'filter-control open';
                parent.querySelector(".dropdown").className = "dropdown open";

            } else {
                event.target.className = 'filter-control';
                parent.querySelector(".dropdown").className = "dropdown";

            }
        });
    }
}

let filters = [];

function updateFilters(){
    let filterElems = document.getElementsByClassName("filter");
    let newFilters = [];

    for (let i = 0; i < filterElems.length; i++) {

        let filterElem = filterElems[i];

        if(filterElem.tagName.toLowerCase() == "select"){
            newFilters[filterElem.getAttribute("data-param")] = filterElem.value;
        // } else if(filterElem.type == "checkbox" && filterElem.checked) {
        //     filters[filterElem.getAttribute("data-param")] = filterElem.value;
        } else if(filterElem.type == "radio" && filterElem.checked){
            newFilters[filterElem.getAttribute("data-param")] = filterElem.value;
        }

    }
    filters = newFilters;

    // построить по готовой функции сетку
    fillContent(getFilteredApartments());



}
function getFilteredApartments(){
        let filteredAps = apartments.filter(function(apartment) {
            return filterApartment(apartment, filters);
        });
        return filteredAps;

}
function filterApartment(apartment, filter) {
    if (apartment.rooms != filter['room']) {
        return false;
    } else if(apartment.price > 4000000){


        //реализовать дальше сравнение
    }
}



function fillContent(){
    clearContent();
    apartments.forEach(function (elem) {
        let newApartment = createApartment(elem);
        document.getElementById("apartments").appendChild(newApartment);
    } );
}



function clearContent(){
    let apartments = document.getElementById("apartments");
        apartments.textContent = "";
}


//
function createApartment(data){
    // console.log(data);/////////////////////////
    // console.log(data.rooms); //////////////////

    let newApartmentContent = createElement("div", "apartment");
    let gallery = createElement("img", "apartment__image");
    let apartmentRooms = createElement("div", "apartment__rooms");
    let apartmentPrice = createElement("div", "apartment__price");

    newApartmentContent.appendChild(gallery);
    newApartmentContent.appendChild(apartmentRooms);
    newApartmentContent.appendChild(apartmentPrice);

    return newApartmentContent;
}


let apartments = [
    {
        id: 1,
        city: "Kyiv",
        type: "buy",
        rooms: 1,
        price: 1000000,
        description: "Крутая квартира",
        gallery: "https://placeholder.it/100x100"
    },
    {
        id: 2,
        city: "Odessa",
        type: "buy",
        rooms: 1,
        price: 1000000,
        description: "Крутая квартира",
        gallery: "https://placeholder.it/100x100"
    },
    {
        id: 3,
        city: "Kharkov",
        type: "buy",
        rooms: 1,
        price: 1000000,
        description: "Крутая квартира",
        gallery: "https://placeholder.it/100x100"
    },
    {
        id: 4,
        city: "Kyiv",
        type: "buy",
        rooms: 2,
        price: 2000000,
        description: "Крутая квартира",
        gallery: "https://placeholder.it/100x100"
    },
    {
        id: 5,
        city: "Odessa",
        type: "buy",
        rooms: 2,
        price: 2000000,
        description: "Крутая квартира",
        gallery: "https://placeholder.it/100x100"
    },
    {
        id: 6,
        city: "Kharkov",
        type: "buy",
        rooms: 2,
        price: 2000000,
        description: "Крутая квартира",
        gallery: "https://placeholder.it/100x100"
    },
    {
        id: 7,
        city: "Kyiv",
        type: "buy",
        rooms: 3,
        price: 3000000,
        description: "Крутая квартира",
        gallery: "https://placeholder.it/100x100"
    },
    {
        id: 8,
        city: "Odessa",
        type: "buy",
        rooms: 3,
        price: 3000000,
        description: "Крутая квартира",
        gallery: "https://placeholder.it/100x100"
    },
    {
        id: 9,
        city: "Kharkov",
        type: "buy",
        rooms: 3,
        price: 3000000,
        description: "Крутая квартира",
        gallery: "https://placeholder.it/100x100"
    },
    {
        id: 10,
        city: "Kyiv",
        type: "buy",
        rooms: 4,
        price: 4000000,
        description: "Крутая квартира",
        gallery: "https://placeholder.it/100x100"
    },
    {
        id: 11,
        city: "Odessa",
        type: "buy",
        rooms: 4,
        price: 4000000,
        description: "Крутая квартира",
        gallery: "https://placeholder.it/100x100"
    },
    {
        id: 12,
        city: "Kharkov",
        type: "buy",
        rooms: 4,
        price: 4000000,
        description: "Крутая квартира",
        gallery: "https://placeholder.it/100x100"
    },
    {
        id: 13,
        city: "Kyiv",
        type: "buy",
        rooms: 1,
        price: 1100000,
        description: "Крутая квартира",
        gallery: "https://placeholder.it/100x100"
    },
    {
        id: 14,
        city: "Odessa",
        type: "buy",
        rooms: 1,
        price: 1100000,
        description: "Крутая квартира",
        gallery: "https://placeholder.it/100x100"
    },
    {
        id: 15,
        city: "Kharkov",
        type: "buy",
        rooms: 1,
        price: 1100000,
        description: "Крутая квартира",
        gallery: "https://placeholder.it/100x100"
    },
    {
        id: 16,
        city: "Kyiv",
        type: "buy",
        rooms: 2,
        price: 2100000,
        description: "Крутая квартира",
        gallery: "https://placeholder.it/100x100"
    },
    {
        id: 17,
        city: "Odessa",
        type: "buy",
        rooms: 2,
        price: 2100000,
        description: "Крутая квартира",
        gallery: "https://placeholder.it/100x100"
    },
    {
        id: 18,
        city: "Kharkov",
        type: "buy",
        rooms: 2,
        price: 2100000,
        description: "Крутая квартира",
        gallery: "https://placeholder.it/100x100"
    },
    {
        id: 19,
        city: "Kyiv",
        type: "buy",
        rooms: 3,
        price: 3100000,
        description: "Крутая квартира",
        gallery: "https://placeholder.it/100x100"
    },
    {
        id: 20,
        city: "Odessa",
        type: "buy",
        rooms: 3,
        price: 3100000,
        description: "Крутая квартира",
        gallery: "https://placeholder.it/100x100"
    },
    {
        id: 21,
        city: "Kharkov",
        type: "buy",
        rooms: 3,
        price: 3100000,
        description: "Крутая квартира",
        gallery: "https://placeholder.it/100x100"
    },
    {
        id: 22,
        city: "Kyiv",
        type: "buy",
        rooms: 4,
        price: 4100000,
        description: "Крутая квартира",
        gallery: "https://placeholder.it/100x100"
    },
    {
        id: 23,
        city: "Odessa",
        type: "buy",
        rooms: 4,
        price: 4100000,
        description: "Крутая квартира",
        gallery: "https://placeholder.it/100x100"
    },
    {
        id: 24,
        city: "Kharkov",
        type: "buy",
        rooms: 4,
        price: 4100000,
        description: "Крутая квартира",
        gallery: "https://placeholder.it/100x100"
    },

    ];




function createElement(type, className){
    let elem = document.createElement(type);
    elem.className = className;
    return elem;
}


//
//     apartments.sort(function(a, b){ return b.city < a.city ? 1 : b.city > a.city ? -1 : 0;  })







// const items = [
//     ...Array(77)
// ].map( ( item, index ) => {
//     return {
//         id: index,
//         content: item-${ index },
//     }
// } );
//
// console.log( items );
//
// const filterItems = (items, pageId, itemsPerPage = 8) =>
//     items.filter( (item, index) => {
//         const page = Math.floor(index / itemsPerPage);
//         return page === pageId;
//     } );
//
// console.log( filterItems(items, 10) );
//
// // first prev i-2 i-1 i i+1 i+2 next last
// const params = new URLSearchParams( location.search )
// console.log( location );
// console.log( +params.get('page') );
// console.log( String(params) );
//
// const pagesList = (items, pageId, itemsPerPage = 8, variance = 2) => {
//     pageId = Math.max(0, +pageId || 0);
//     itemsPerPage = Math.max(1, +itemsPerPage || 0);
//     const pagesAmount = Math.ceil(items.length / itemsPerPage);
//     const pageIdFirst = 0;
//     const pageIdLast = Math.max(pageIdFirst, pagesAmount - 1);
//     const pageIdNext = Math.min(pageId + 1, pageIdLast);
//     const pageIdPrev = Math.max(pageId - 1, pageIdFirst);
//     const pages = [ ...Array( 1 + 2*variance ) ].map( (item, index) => {
//         return index - variance + pageId;
//     } ).filter( (page) => {
//         return pageIdFirst <= page && page <= pageIdLast;
//     } ).map( page => {
//         const params = new URLSearchParams( location.search );
//         params.set('page', page);
//         return {
//             ...page===pageId ? { current: true } : {},
//             link: ${ location.pathname }?${ params },
//             text: ${ page + 1 },
//         }
//     } );
//     const result = [];
//     if (pageIdFirst < pageId) {
//         const page = pageIdFirst;
//         const params = new URLSearchParams( location.search );
//         params.set('page', page);
//         result.push({
//             first: true,
//             link: ${ location.pathname }?${ params },
//             text: ${ page + 1 }, // ???
//         });
//     }
//     if (pageIdFirst < pageIdPrev) {
//         const page = pageIdPrev;
//         const params = new URLSearchParams( location.search );
//         params.set('page', page);
//         result.push({
//             prev: true,
//             link: ${ location.pathname }?${ params },
//             text: ${ page + 1 }, // ???
//         });
//     }
//     result.push(...pages);
//     if (pageIdNext < pageIdLast) {
//         const page = pageIdNext;
//         const params = new URLSearchParams( location.search );
//         params.set('page', page);
//         result.push({
//             next: true,
//             link: ${ location.pathname }?${ params },
//             text: ${ page + 1 }, // ???
//         });
//     }
//     if (pageId < pageIdLast) {
//         const page = pageIdLast;
//         const params = new URLSearchParams( location.search );
//         params.set('page', page);
//         result.push({
//             last: true,
//             link: ${ location.pathname }?${ params },
//             text: ${ page + 1 }, // ???
//         });
//     }
//     return result;
// }
// console.log( pagesList( items, 8 ) );