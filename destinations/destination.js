// script.js

const translations = {
    en: {
        "nav-home": "Home",
        "nav-destinations": "Destinations",
        "nav-booking": "Hotel Booking",
        "nav-flight": "Flight",
        "nav-contact": "Contact",
        "hero-title": "Explore the World with Us",
        "hero-subtitle": "Your adventure begins here. Discover new destinations, cultures, and experiences with our personalized travel packages.",
        "hero-button": "Learn More",
        "services-title": "Our Services",
        "service-1-title": "Customized Tours",
        "service-1-text": "Tailor-made tours to suit your preferences and schedule.",
        "service-2-title": "Hotel Bookings",
        "service-2-text": "Comfortable and affordable accommodations worldwide.",
        "service-3-title": "Flight Reservations",
        "service-3-text": "Book flights with ease and at the best prices.",
        "testimonials-title": "Testimonials",
        "testimonial-1-text": "Amazing experience! The tour was perfectly organized and we enjoyed every moment.",
        "testimonial-1-author": "- John Doe",
        "testimonial-2-text": "Highly recommend this agency. Excellent service and great destinations.",
        "testimonial-2-author": "- Jane Smith",
        "testimonial-3-text": "We had a wonderful time. The team took care of everything, making our trip stress-free.",
        "testimonial-3-author": "- Michael Brown",
        "destinations-title": "Popular Destinations",
        "destination-1-title": "Paris, France",
        "destination-1-text": "Experience the romantic city of lights with its stunning architecture and rich culture.",
        "destination-2-title": "Tokyo, Japan",
        "destination-2-text": "Discover the perfect blend of traditional and modern in Japan's vibrant capital.",
        "destination-3-title": "New York, USA",
        "destination-3-text": "Explore the city that never sleeps with its iconic landmarks and bustling streets.",
        "destination-4-title": "Sydney, Australia",
        "destination-4-text": "Enjoy the stunning harbor, beautiful beaches, and vibrant cultural scene.",
        "destination-5-title": "Rome, Italy",
        "destination-5-text": "Step back in time and explore ancient ruins, majestic architecture, and delicious cuisine.",
        "destination-6-title": "Cape Town, South Africa",
        "destination-6-text": "Discover breathtaking landscapes, diverse wildlife, and rich cultural heritage."
    },
    ru: {
        "nav-home": "Главная",
        "nav-destinations": "Туры",
        "nav-services": "Услуги",
        "nav-booking": "Отели",
        "nav-flight": "Авиабилеты",
        "hero-title": "Исследуйте мир с нами",
        "hero-subtitle": "Ваше приключение начинается здесь. Откройте для себя новые направления, культуры и впечатления с нашими персонализированными туристическими пакетами.",
        "hero-button": "Узнать больше",
        "services-title": "Наши услуги",
        "service-1-title": "Индивидуальные туры",
        "service-1-text": "Туры на заказ, соответствующие вашим предпочтениям и расписанию.",
        "service-2-title": "Бронирование отелей",
        "service-2-text": "Комфортное и доступное проживание по всему миру.",
        "service-3-title": "Бронирование авиабилетов",
        "service-3-text": "Бронируйте авиабилеты легко и по лучшим ценам.",
        "testimonials-title": "Отзывы",
        "testimonial-1-text": "Удивительный опыт! Тур был идеально организован, и мы наслаждались каждым моментом.",
        "testimonial-1-author": "- Джон Доу",
        "testimonial-2-text": "Очень рекомендую это агентство. Отличный сервис и отличные направления.",
        "testimonial-2-author": "- Джейн Смит",
        "testimonial-3-text": "Мы замечательно провели время. Команда позаботилась обо всем, что сделало нашу поездку беззаботной.",
        "testimonial-3-author": "- Майкл Браун",
        "destinations-title": "Популярные направления",
        "destination-1-title": "Париж, Франция",
        "destination-1-text": "Испытайте романтический город огней с его потрясающей архитектурой и богатой культурой.",
        "destination-2-title": "Токио, Япония",
        "destination-2-text": "Откройте для себя идеальное сочетание традиционного и современного в оживленной столице Японии.",
        "destination-3-title": "Нью-Йорк, США",
        "destination-3-text": "Исследуйте город, который никогда не спит, с его знаковыми достопримечательностями и оживленными улицами.",
        "destination-4-title": "Сидней, Австралия",
        "destination-4-text": "Наслаждайтесь потрясающей гаванью, красивыми пляжами и оживленной культурной сценой.",
        "destination-5-title": "Рим, Италия",
        "destination-5-text": "Перенеситесь в прошлое и исследуйте древние руины, величественную архитектуру и вкусную кухню.",
        "destination-6-title": "Кейптаун, Южная Африка",
        "destination-6-text": "Откройте для себя захватывающие дух пейзажи, разнообразную дикую природу и богатое культурное наследие."
    }
};

    // Auto collapse navbar on click (for mobile view)
    const navbar = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.nav-link');
    for (const link of navLinks) {
        link.addEventListener('click', function() {
            if (navbar.classList.contains('show')) {
                navbar.classList.remove('show');
            }
        });
    }


function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = translations[lang][key];
    });
}
