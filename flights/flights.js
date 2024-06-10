document.addEventListener('DOMContentLoaded', () => {
    const langData = {
        "en": {
            "navbar-home": "Home",
            "navbar-destinations": "Tours",
            "navbar-hotel-booking": "Hotel Booking",
            "navbar-flight": "Flight",
            "flight-search-title": "Book Your Flight",
            "flight-search-from": "From",
            "flight-search-to": "To",
            "flight-search-date": "Date",
            "flight-search-button": "Search Flights",
            "flight-listings-title": "Available Flights",
            "flight-listings-ny-title": "Flights to New York",
            "flight-ny-101-title": "Flight 101",
            "flight-ny-101-time": "Depart: 8:00 AM - Arrive: 11:00 AM",
            "flight-ny-101-airline": "Airline: Example Airline",
            "flight-ny-102-title": "Flight 102",
            "flight-ny-102-time": "Depart: 1:00 PM - Arrive: 4:00 PM",
            "flight-ny-102-airline": "Airline: Example Airline",
            "flight-listings-la-title": "Flights to Los Angeles",
            "flight-la-201-title": "Flight 201",
            "flight-la-201-time": "Depart: 9:00 AM - Arrive: 12:00 PM",
            "flight-la-201-airline": "Airline: Example Airline",
            "flight-la-202-title": "Flight 202",
            "flight-la-202-time": "Depart: 3:00 PM - Arrive: 6:00 PM",
            "flight-la-202-airline": "Airline: Example Airline",
            "flight-listings-london-title": "Flights to London",
            "flight-london-301-title": "Flight 301",
            "flight-london-301-time": "Depart: 10:00 AM - Arrive: 8:00 PM",
            "flight-london-301-airline": "Airline: Example Airline",
            "flight-london-302-title": "Flight 302",
            "flight-london-302-time": "Depart: 5:00 PM - Arrive: 3:00 AM",
            "flight-london-302-airline": "Airline: Example Airline",
        },
        "ru": {
            "navbar-home": "Главная",
            "navbar-destinations": "Туры",
            "navbar-hotel-booking": "Отели",
            "navbar-flight": "Рейс",
            "flight-search-title": "Забронируйте свой рейс",
            "flight-search-from": "Откуда",
            "flight-search-to": "Куда",
            "flight-search-date": "Дата",
            "flight-search-button": "Поиск рейсов",
            "flight-listings-title": "Доступные рейсы",
            "flight-listings-ny-title": "Рейсы в Нью-Йорк",
            "flight-ny-101-title": "Рейс 101",
            "flight-ny-101-time": "Вылет: 8:00 - Прибытие: 11:00",
            "flight-ny-101-airline": "Авиакомпания: Примерная авиакомпания",
            "flight-ny-102-title": "Рейс 102",
            "flight-ny-102-time": "Вылет: 13:00 - Прибытие: 16:00",
            "flight-ny-102-airline": "Авиакомпания: Примерная авиакомпания",
            "flight-listings-la-title": "Рейсы в Лос-Анджелес",
            "flight-la-201-title": "Рейс 201",
            "flight-la-201-time": "Вылет: 9:00 - Прибытие: 12:00",
            "flight-la-201-airline": "Авиакомпания: Примерная авиакомпания",
            "flight-la-202-title": "Рейс 202",
            "flight-la-202-time": "Вылет: 15:00 - Прибытие: 18:00",
            "flight-la-202-airline": "Авиакомпания: Примерная авиакомпания",
            "flight-listings-london-title": "Рейсы в Лондон",
            "flight-london-301-title": "Рейс 301",
            "flight-london-301-time": "Вылет: 10:00 - Прибытие: 20:00",
            "flight-london-301-airline": "Авиакомпания: Примерная авиакомпания",
            "flight-london-302-title": "Рейс 302",
            "flight-london-302-time": "Вылет: 17:00 - Прибытие: 03:00",
            "flight-london-302-airline": "Авиакомпания: Примерная авиакомпания",
        }
    };

    function setLanguage(lang) {
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            element.textContent = langData[lang][key];
        });
    }

    document.querySelector('.btn[onclick="setLanguage(\'en\')"]').addEventListener('click', () => setLanguage('en'));
    document.querySelector('.btn[onclick="setLanguage(\'ru\')"]').addEventListener('click', () => setLanguage('ru'));

    // Initial language setup
    setLanguage('en');
});
