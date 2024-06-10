document.addEventListener('DOMContentLoaded', () => {
    const langData = {
        "en": {
            "navbar-home": "Home",
            "navbar-destinations": "Tours",
            "navbar-hotel-booking": "Hotel Booking",
            "navbar-flight": "Flight",
            "carousel-eiffel-tower": "Eiffel Tower",
            "carousel-louvre-museum": "Louvre Museum",
            "carousel-notre-dame-cathedral": "Notre-Dame Cathedral",
            "paris-description-title": "Welcome to Paris",
            "paris-description-text": "Paris, the capital city of France, is one of the most popular tourist destinations in the world. Known for its art, culture, and history, Paris offers an array of attractions including the Eiffel Tower, Louvre Museum, Notre-Dame Cathedral, and many more. Enjoy exquisite French cuisine and the charming atmosphere of Parisian streets.",
            "available-flights-title": "Available Flights to Paris",
            "available-flights-flight1-title": "Flight 401",
            "available-flights-flight1-time": "Depart: 8:00 AM - Arrive: 12:00 PM",
            "available-flights-flight1-airline": "Airline: Example Airline",
            "available-flights-flight2-title": "Flight 402",
            "available-flights-flight2-time": "Depart: 2:00 PM - Arrive: 6:00 PM",
            "available-flights-flight2-airline": "Airline: Example Airline",
            "available-flights-flight3-title": "Flight 403",
            "available-flights-flight3-time": "Depart: 6:00 PM - Arrive: 10:00 PM",
            "available-flights-flight3-airline": "Airline: Example Airline",
            "available-hotels-title": "Available Hotels in Paris",
            "available-hotels-hotel1-title": "Hotel Paris 1",
            "available-hotels-hotel1-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "available-hotels-hotel2-title": "Hotel Paris 2",
            "available-hotels-hotel2-description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "available-hotels-hotel3-title": "Hotel Paris 3",
            "available-hotels-hotel3-description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        "ru": {
            "navbar-home": "Главная",
            "navbar-destinations": "Туры",
            "navbar-hotel-booking": "Отели",
            "navbar-flight": "Авиабилеты",
            "carousel-eiffel-tower": "Эйфелева башня",
            "carousel-louvre-museum": "Лувр",
            "carousel-notre-dame-cathedral": "Собор Парижской Богоматери",
            "paris-description-title": "Добро пожаловать в Париж",
            "paris-description-text": "Париж, столица Франции, является одним из самых популярных туристических направлений в мире. Известный своим искусством, культурой и историей, Париж предлагает множество достопримечательностей, включая Эйфелеву башню, Лувр, Собор Парижской Богоматери и многие другие. Наслаждайтесь изысканной французской кухней и очаровательной атмосферой парижских улиц.",
            "available-flights-title": "Доступные рейсы в Париж",
            "available-flights-flight1-title": "Рейс 401",
            "available-flights-flight1-time": "Вылет: 8:00 AM - Прибытие: 12:00 PM",
            "available-flights-flight1-airline": "Авиакомпания: Example Airline",
            "available-flights-flight2-title": "Рейс 402",
            "available-flights-flight2-time": "Вылет: 2:00 PM - Прибытие: 6:00 PM",
            "available-flights-flight2-airline": "Авиакомпания: Example Airline",
            "available-flights-flight3-title": "Рейс 403",
            "available-flights-flight3-time": "Вылет: 6:00 PM - Прибытие: 10:00 PM",
            "available-flights-flight3-airline": "Авиакомпания: Example Airline",
            "available-hotels-title": "Доступные отели в Париже",
            "available-hotels-hotel1-title": "Отель Париж 1",
            "available-hotels-hotel1-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "available-hotels-hotel2-title": "Отель Париж 2",
            "available-hotels-hotel2-description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "available-hotels-hotel3-title": "Отель Париж 3",
            "available-hotels-hotel3-description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        }
    };

    function setLanguage(lang) {
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (langData[lang] && langData[lang][key]) {
                element.textContent = langData[lang][key];
            }
        });
    }

    // Language switching buttons
    document.querySelector('.btn[onclick="setLanguage(\'en\')"]').addEventListener('click', () => setLanguage('en'));
    document.querySelector('.btn[onclick="setLanguage(\'ru\')"]').addEventListener('click', () => setLanguage('ru'));

    // Initial language setup
    setLanguage('en');
});
