let apartments = [];
let defaultApartments = [
    {
        id: 1,
        city: "Kyiv",
        type: "buy",
        rooms: 1,
        price: 1000000,
        description: "Крутая квартира",
        gallery: "img/gallery-1.jpg"
    },
    {
        id: 2,
        city: "Odessa",
        type: "buy",
        rooms: 1,
        price: 1000000,
        description: "Крутая квартира",
        gallery: "img/gallery-2.jpg"
    },
    {
        id: 3,
        city: "Kharkov",
        type: "buy",
        rooms: 1,
        price: 1000000,
        description: "Крутая квартира",
        gallery: "img/gallery-3.jpg"
    },
    {
        id: 4,
        city: "Kyiv",
        type: "buy",
        rooms: 2,
        price: 2000000,
        description: "Крутая квартира",
        gallery: "img/gallery-4.jpg"
    },
    {
        id: 5,
        city: "Odessa",
        type: "buy",
        rooms: 2,
        price: 2000000,
        description: "Крутая квартира",
        gallery: "img/gallery-5.jpg"
    },
    {
        id: 6,
        city: "Kharkov",
        type: "buy",
        rooms: 2,
        price: 2000000,
        description: "Крутая квартира",
        gallery: "img/gallery-6.jpg"
    },
    {
        id: 7,
        city: "Kyiv",
        type: "buy",
        rooms: 3,
        price: 3000000,
        description: "Крутая квартира",
        gallery: "img/gallery-1.jpg"
    },
    {
        id: 8,
        city: "Odessa",
        type: "buy",
        rooms: 3,
        price: 3000000,
        description: "Крутая квартира",
        gallery: "img/gallery-2.jpg"
    },
    {
        id: 9,
        city: "Kharkov",
        type: "buy",
        rooms: 3,
        price: 3000000,
        description: "Крутая квартира",
        gallery: "img/gallery-3.jpg"
    },
    {
        id: 10,
        city: "Kyiv",
        type: "buy",
        rooms: 4,
        price: 4000000,
        description: "Крутая квартира",
        gallery: "img/gallery-4.jpg"
    },
    {
        id: 11,
        city: "Odessa",
        type: "buy",
        rooms: 4,
        price: 4000000,
        description: "Крутая квартира",
        gallery: "img/gallery-5.jpg"
    },
    {
        id: 12,
        city: "Kharkov",
        type: "buy",
        rooms: 4,
        price: 4000000,
        description: "Крутая квартира",
        gallery: "img/gallery-6.jpg"
    },
    {
        id: 13,
        city: "Kyiv",
        type: "buy",
        rooms: 1,
        price: 1100000,
        description: "Крутая квартира",
        gallery: "img/gallery-1.jpg"
    },
    {
        id: 14,
        city: "Odessa",
        type: "buy",
        rooms: 1,
        price: 1100000,
        description: "Крутая квартира",
        gallery: "img/gallery-2.jpg"
    },
    {
        id: 15,
        city: "Kharkov",
        type: "buy",
        rooms: 1,
        price: 1100000,
        description: "Крутая квартира",
        gallery: "img/gallery-3.jpg"
    },
    {
        id: 16,
        city: "Kyiv",
        type: "buy",
        rooms: 2,
        price: 2100000,
        description: "Крутая квартира",
        gallery: "img/gallery-4.jpg"
    },
    {
        id: 17,
        city: "Odessa",
        type: "buy",
        rooms: 2,
        price: 2100000,
        description: "Крутая квартира",
        gallery: "img/gallery-5.jpg"
    },
    {
        id: 18,
        city: "Kharkov",
        type: "buy",
        rooms: 2,
        price: 2100000,
        description: "Крутая квартира",
        gallery: "img/gallery-6.jpg"
    },
    {
        id: 19,
        city: "Kyiv",
        type: "buy",
        rooms: 3,
        price: 3100000,
        description: "Крутая квартира",
        gallery: "img/gallery-1.jpg"
    },
    {
        id: 20,
        city: "Odessa",
        type: "buy",
        rooms: 3,
        price: 3100000,
        description: "Крутая квартира",
        gallery: "img/gallery-2.jpg"
    },
    {
        id: 21,
        city: "Kharkov",
        type: "buy",
        rooms: 3,
        price: 3100000,
        description: "Крутая квартира",
        gallery: "img/gallery-3.jpg"
    },
    {
        id: 22,
        city: "Kyiv",
        type: "buy",
        rooms: 4,
        price: 4100000,
        description: "Крутая квартира",
        gallery: "img/gallery-4.jpg"
    },
    {
        id: 23,
        city: "Odessa",
        type: "buy",
        rooms: 4,
        price: 4100000,
        description: "Крутая квартира",
        gallery: "img/gallery-5.jpg"
    },
    {
        id: 24,
        city: "Kharkov",
        type: "buy",
        rooms: 4,
        price: 4100000,
        description: "Крутая квартира",
        gallery: "img/gallery-6.jpg"
    },
    {
        id: 25,
        city: "Kharkov",
        type: "rent",
        rooms: 4,
        price: 4000,
        description: "Крутая квартира",
        gallery: "img/gallery-1.jpg"
    },
    {
        id: 26,
        city: "Kyiv",
        type: "buy",
        rooms: 1,
        price: 1100010,
        description: "Крутая квартира",
        gallery: "img/gallery-2.jpg"
    },
    {
        id: 27,
        city: "Kyiv",
        type: "buy",
        rooms: 1,
        price: 1102000,
        description: "Крутая квартира",
        gallery: "img/gallery-3.jpg"
    },
    {
        id: 28,
        city: "Kyiv",
        type: "buy",
        rooms: 1,
        price: 1102000,
        description: "Крутая квартира",
        gallery: "img/gallery-4.jpg"
    },
    {
        id: 29,
        city: "Kyiv",
        type: "buy",
        rooms: 1,
        price: 1103000,
        description: "Крутая квартира",
        gallery: "img/gallery-5.jpg"
    },
    {
        id: 30,
        city: "Kyiv",
        type: "buy",
        rooms: 1,
        price: 1100011,
        description: "Крутая квартира",
        gallery: "img/gallery-6.jpg"
    },
    {
        id: 31,
        city: "Kyiv",
        type: "rent",
        rooms: 1,
        price: 5000,
        description: "Крутая квартира",
        gallery: "img/gallery-1.jpg"
    },

];


const list_element = document.getElementById('apartments');
const pagination_element = document.getElementById('pagination');

let current_page = 1;
let rows = 2;
let sortingParam = 'price';
let sortingOrder = 'asc';
let comments = [];
let bookedData = [];

window.onload = function  () {
    initSlider();
    initFilters();
    loadAddedApartment();
    SetupPagination(apartments, pagination_element, rows);
    DisplayList(sorting(apartments), list_element, rows, current_page);
    updateFilters();
    loadComments();
    loadBookedData();
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
        } else if(filterElem.type == "radio" && filterElem.checked){
            newFilters[filterElem.getAttribute("data-param")] = filterElem.value;
        }
    }
    filters = newFilters;

    let filteredApartments = getFilteredApartments();
    current_page = 1;
    SetupPagination(filteredApartments, pagination_element, rows);

    DisplayList(sorting(filteredApartments), list_element, rows, current_page);
}


function getFilteredApartments(){
    if(filters.price == "option_1"){
        filters.min_price = 0;
        filters.max_price = 1000000;
    } else if(filters.price == "option_2"){
        filters.min_price = 1000000;
        filters.max_price = 2000000;
    } else if(filters.price == "option_3"){
        filters.min_price = 2000000;
        filters.max_price = 3000000;
    } else if(filters.price == "option_4"){
            filters.min_price = 3000000;
            filters.max_price = 4000000;
    }

    return apartments.filter(function(apartment) {
        return filterApartment(apartment, filters);
    });
}

function filterApartment(apartment, filter) {
    if (apartment.rooms != filter['rooms'] && filter['rooms'] != -1) {
        return false;
    } else if(apartment.price > filters["max_price"]){
        return false;
    } else if(apartment.price < filters["min_price"]){
        return false;
    } else if(apartment.city != filter['city']) {
        return false;
    } else if(apartment.type != filter['type']) {
        return false;
    } else {
        return true;
    }

}

function createApartment(apartment){
    let newApartmentContent = createElement("div", "apartment");
    newApartmentContent.setAttribute('data-id', apartment.id);

    let galleryData = createElement("img", "apartment__image");
    let cityData  = createElement("div", "apartment__city");
    let typeData = createElement("div", "apartment__type");
    let roomsData = createElement("div", "apartment__rooms");
    let priceData = createElement("div", "apartment__price");
    let descriptionData = createElement("div", "apartment__description");
    let bookingBtn = createElement("input", "booking-btn");
    bookingBtn.type = "button";
    bookingBtn.value = "Бронировать";

    galleryData.src = apartment.gallery;
    let cityDataNode = document.createTextNode("City: " + apartment.city);
    let typeDataNode = document.createTextNode("Service type: " + apartment.type);
    let roomsDataNode = document.createTextNode("Rooms: " + apartment.rooms);
    let priceDataNode = document.createTextNode("Price: " + apartment.price);
    let descriptionDataNode = document.createTextNode("Description: " + apartment.description);

    newApartmentContent.appendChild(galleryData);
    newApartmentContent.appendChild(cityData);
    newApartmentContent.appendChild(typeData);
    newApartmentContent.appendChild(roomsData);
    newApartmentContent.appendChild(priceData);
    newApartmentContent.appendChild(descriptionData);

    cityData.appendChild(cityDataNode);
    typeData.appendChild(typeDataNode);
    roomsData.appendChild(roomsDataNode);
    priceData.appendChild(priceDataNode);
    descriptionData.appendChild(descriptionDataNode);


//booking
    if(apartment.type == 'rent'){
        newApartmentContent.appendChild(bookingBtn);
    }


    let bookingBlock = createElement("div", "booking");
    let bookingBlockForm = createElement("form", "booking-form");
    let bookingBlockFormLabelFrom = document.createElement("label");
    let bookingBlockFormLabelFromInput  = createElement("input", "booking-from");
    bookingBlockFormLabelFromInput.type = "date";
    bookingBlockFormLabelFromInput.name = "from";
    let bookingBlockFormLabelTo = document.createElement("label");
    let bookingBlockFormLabelToInput  = createElement("input", "booking-to");
    bookingBlockFormLabelToInput.type = "date";
    bookingBlockFormLabelToInput.name = "to";
    let bookingBlockFormLabelButton = document.createElement("label");
    let bookingBlockFormLabelButtonSubmit  = document.createElement("input");
    bookingBlockFormLabelButtonSubmit.type = "submit";


    newApartmentContent.appendChild(bookingBlock);
    bookingBlock.appendChild(bookingBlockForm);
    bookingBlockForm.appendChild(bookingBlockFormLabelFrom);
    bookingBlockFormLabelFrom.appendChild(bookingBlockFormLabelFromInput);
    bookingBlockForm.appendChild(bookingBlockFormLabelTo);
    bookingBlockFormLabelTo.appendChild(bookingBlockFormLabelToInput);
    bookingBlockForm.appendChild(bookingBlockFormLabelButton);
    bookingBlockFormLabelButton.appendChild(bookingBlockFormLabelButtonSubmit);

    bookingBtn.addEventListener('click', function () {
        bookingBlock.style.display = "block";
        fillDates();
    });

    bookingBlockFormLabelButtonSubmit.addEventListener('click', function (event) {
        event.preventDefault();
        let bookedDataPeriodFrom = this.closest('.apartment').getElementsByClassName("booking-from")[0];
        let bookedDataPeriodTo = this.closest('.apartment').getElementsByClassName("booking-to")[0];



        let bookedApartment = {
            From: bookedDataPeriodFrom.value,
            To: bookedDataPeriodTo.value,
            id: this.closest('.apartment').getAttribute('data-id')
        };

        bookedData.push(bookedApartment);
        saveBookedData();

        alert("Вы успешно збронировали квартиру");
    });

return newApartmentContent;
}

function saveBookedData(){
    localStorage.setItem("bookedData", JSON.stringify(bookedData));
}

function loadBookedData(){
    if(localStorage.getItem("bookedData")) bookedData = JSON.parse(localStorage.getItem("bookedData"));
}

function fillDates() {
    const dateFrom = document.getElementsByClassName('booking-from');
    const dateTo = document.getElementsByClassName('booking-to');
    const today = new Date().toISOString().substr(0, 10);
    console.log(dateFrom);
    for(let elem of dateFrom){
        console.log(elem);
        elem.value = today;
        elem.setAttribute('min',today);
        elem.addEventListener('change',function(e){
            dateValidator(e);
        });
    }
    for(let elem of dateTo){
        elem.value = today;
        elem.setAttribute('max','2025-12-12');
        elem.addEventListener('change',function(e){
            dateValidator(e);
        });
    }

}

function dateValidator(e) {
    const dateFrom = e.target.closest('.booking').getElementsByClassName('booking-from')[0];
    const dateTo = e.target.closest('.booking').getElementsByClassName('booking-to')[0];
    const today = new Date().toISOString().substr(0, 10);
    dateTo.setAttribute('min', dateFrom.value);
    if (Date.parse(dateFrom.value) < Date.parse(today)) {
        dateFrom.value = today;
    }
    if (Date.parse(dateTo.value) < Date.parse(dateFrom.value)) {
        dateTo.value = dateFrom.value;
    }

}

// Сортировка
function updateSorting(param, order) {
   sortingParam = param;
   sortingOrder = order;
   DisplayList(sorting(getFilteredApartments()), list_element, rows, current_page);
}

function sorting(apartments){
    apartments.sort(function (a, b) {
        return sortingOrder == 'asc' ? a[sortingParam] - b[sortingParam] : b[sortingParam] - a[sortingParam];
    });
    return apartments;
}

// Comments
document.getElementById("comment-add").onclick = function(event){
        event.preventDefault();
        let commentName = document.getElementById("comment-name");
        let commentBody = document.getElementById("comment-body");

        let comment = {
            name: commentName.value,
            body: commentBody.value,
            time: Math.floor(Date.now() / 1000)
        };
        commentName.value = "";
        commentBody.value = "";

        comments.push(comment);
        saveComments();
        showComments();
    };

function saveComments(){
    localStorage.setItem("comments", JSON.stringify(comments));
}

function loadComments(){
    if(localStorage.getItem("comments")) comments = JSON.parse(localStorage.getItem("comments"));
    showComments();
}

function createCommentBlock(item) {

    let commentBlock = createElement('div', 'comment-block');
    let timeDisplay = createElement('p', 'time-display');
    let commentName = createElement('p', 'comment-name');
    let commentBody = createElement('p', 'comment-body');

    let timeDisplayData = document.createTextNode(timeConverter(item.time));
    let commentNameData = document.createTextNode('Имя: ' + item.name);
    let commentBodyData = document.createTextNode('Комментарий: ' + item.body);

    commentBlock.appendChild(timeDisplay);
    commentBlock.appendChild(commentName);
    commentBlock.appendChild(commentBody);

    timeDisplay.appendChild(timeDisplayData);
    commentName.appendChild(commentNameData);
    commentBody.appendChild(commentBodyData);

    return commentBlock;
}

function showComments(){
    let commentField = document.getElementById("comment-field");

    comments.forEach((item) =>{
        commentField.appendChild(createCommentBlock(item));
        });
}


function timeConverter(UNIX_timestamp){
    let months = ['Янв', 'Фев', 'Mар', "Апр", "Май", 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
    let a = new Date(UNIX_timestamp * 1000);
    let month = months[a.getMonth()];
    let years = a.getFullYear();
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time = `${date} ${month} ${years} ${hour} : ${min} : ${sec}`;

    return time;
}





//pagination

//Выводим объекты конкретной страницы
function DisplayList(items, listBlock, rows_per_page, page){
    listBlock.innerHTML= "";
    page--;

    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);

        for (let i = 0; i < paginatedItems.length; i++) {
            let item = paginatedItems[i];

            let itemElement = createApartment(item);

        listBlock.appendChild(itemElement);
    }
}


// Добавить свой объект
let addObjectBlock = document.getElementById('add-object');
let addObjectVisible = document.getElementById('add_object-visible');
addObjectVisible.addEventListener('click', function () {
    addObjectBlock.style.display = 'block';
});


let addObjectBtn = document.getElementById('add-object_btn');
addObjectBtn.addEventListener('click', function (event) {
    event.preventDefault();
    addObjectBlock.style.display = 'none';


    let addedCity = document.getElementById('add-object__city');
    let addedType = document.getElementById('add-object__type');
    let addedRooms = document.getElementById('add-object__rooms');
    let addedPrice = document.getElementById('add-object__price');
    let addedDescription = document.getElementById('add-object__description');
    let addedGallery = document.getElementById('add-object__image');

    let apartment = {
        id: apartments.length +1,
        city: addedCity.value,
        type: addedType.value,
        rooms: Number(addedRooms.value),
        price: Number(addedPrice.value),
        description: addedDescription.value,
        gallery: addedGallery.value
    };
    console.log(apartments);

    apartments.push(apartment);
    saveAddedApartment();
    console.log(apartments);


    let filteredApartments = getFilteredApartments();
    current_page = 1;
    SetupPagination(filteredApartments, pagination_element, rows);

    DisplayList(sorting(filteredApartments), list_element, rows, current_page);


});

let closeModalWindow = document.getElementById('closeModalWindow');
closeModalWindow.addEventListener('click', function(event){
    event.preventDefault();
    addObjectBlock.style.display = "none";
});


function saveAddedApartment() {
    localStorage.setItem('addedApartment', JSON.stringify(apartments));
}

function loadAddedApartment(){
    if(localStorage.getItem("addedApartment")){
        apartments = JSON.parse(localStorage.getItem("addedApartment"));
    } else {
        apartments = defaultApartments;
        saveAddedApartment();
    }
}




//Инициализация пагинации, построение кнопок пагинации
function SetupPagination(items, paginationBlock, rows_per_page) {
    paginationBlock.innerHTML = "";

    let page_count = Math.ceil(items.length / rows_per_page);
    for (let i = 1; i < page_count + 1; i++) {
        let btn = PaginationButton(i, sorting(items));
        paginationBlock.appendChild(btn);
    }
}

function PaginationButton (page, items) {
    let button = document.createElement('button');
    button.innerText = page;

    if (current_page == page) button.classList.add('active');

    button.addEventListener('click', function () {
       current_page = page;
       DisplayList(items, list_element, rows, current_page);

       let current_btn = document.querySelector('.page-numbers button.active');
       current_btn.classList.remove('active');

       button.classList.add('active');
    });

    return button;
}



//create Element
function createElement(type, className){
    let elem = document.createElement(type);
    elem.className = className;
    return elem;
}