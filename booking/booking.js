document.addEventListener('DOMContentLoaded', () => {
    const langData = {
        "en": {
            "navbar-home": "Home",
            "navbar-destinations": "Tours",
            "navbar-hotel-booking": "Hotel Booking",
            "navbar-flight": "Flight",
            "hotel-search-title": "Find Your Perfect Hotel",
            "hotel-search-destination-placeholder": "Destination",
            "hotel-search-checkin-label": "Check-In Date",
            "hotel-search-checkout-label": "Check-Out Date",
            "hotel-search-guests-label": "Number of Guests",
            "hotel-search-room-type-label": "Room Type",
            "hotel-search-search-btn": "Search",
            "hotel-listings-title": "Available Hotels",
            "recommendations-title": "Recommended Hotels",
        },
        "ru": {
            "navbar-home": "Главная",
            "navbar-destinations": "Туры",
            "navbar-hotel-booking": "Отели",
            "navbar-flight": "Авиабилеты",
            "hotel-search-title": "Найдите идеальный отель",
            "hotel-search-destination-placeholder": "Место назначения",
            "hotel-search-checkin-label": "Дата заезда",
            "hotel-search-checkout-label": "Дата выезда",
            "hotel-search-guests-label": "Количество гостей",
            "hotel-search-room-type-label": "Тип номера",
            "hotel-search-search-btn": "Поиск",
            "hotel-listings-title": "Доступные отели",
            "recommendations-title": "Рекомендованные отели",
            "footer-copyright": "&copy; 2024 GlobeTravel. Все права защищены.",
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
