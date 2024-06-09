// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

const translations = {
    "en": {
        "nav-home": "Home",
        "nav-destinations": "Tours",
        "nav-services": "Services",
        "nav-testimonials": "Testimonials",
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
        "consultation-title": "Consultation",
        "consultation-subtitle": "Ready to plan your next adventure? Schedule a consultation with us!",
        "consultation-button": "Schedule Now",
        "consultation-modal-title": "Schedule Consultation",
        "consultation-form-name": "Your Name",
        "consultation-form-email": "Your Email Address",
        "consultation-form-phone": "Your Phone Number",
        "consultation-form-message": "Your Message",
        "consultation-form-submit": "Schedule",
        "testimonials-title": "Testimonials",
        "testimonials-subtitle": "What our customers say about us",
        "testimonial-1-name": "Mary Johnson",
        "testimonial-1-text": "\"The trip organized by GlobeTravel was beyond my expectations. They took care of every detail, and the experience was seamless. I highly recommend them.\"",
        "testimonial-2-name": "John Smith",
        "testimonial-2-text": "\"Thanks to GlobeTravel, my family and I had the most memorable vacation ever. From accommodation to activities, everything was perfectly planned. We can't wait to book with them again!\"",
        "testimonial-3-name": "Sarah Wilson",
        "testimonial-3-text": "\"I've traveled with several agencies before, but none have provided the level of service and personal attention that GlobeTravel did. They truly go above and beyond to ensure their clients have a fantastic experience.\""
    },
    "ru": {
        "nav-home": "Главная",
        "nav-destinations": "Туры",
        "nav-services": "Услуги",
        "nav-testimonials": "Отзывы",
        "nav-contact": "Контакты",
        "hero-title": "Исследуйте мир с нами",
        "hero-subtitle": "Ваше приключение начинается здесь. Откройте для себя новые направления, культуры и впечатления с нашими персонализированными туристическими пакетами.",
        "hero-button": "Узнать больше",
        "services-title": "Наши услуги",
        "service-1-title": "Индивидуальные туры",
        "service-1-text": "Туры на заказ, соответствующие вашим предпочтениям и расписанию.",
        "service-2-title": "Бронирование отелей",
        "service-2-text": "Комфортное и доступное проживание по всему миру.",
        "service-3-title": "Бронирование авиабилетов",
        "service-3-text": "Бронируйте рейсы с легкостью и по лучшим ценам.",
        "consultation-title": "Консультация",
        "consultation-subtitle": "Готовы спланировать ваше следующее приключение? Запланируйте консультацию с нами!",
        "consultation-button": "Записаться",
        "consultation-modal-title": "Записаться на консультацию",
        "consultation-form-name": "Ваше имя",
        "consultation-form-email": "Ваш адрес электронной почты",
        "consultation-form-phone": "Ваш номер телефона",
        "consultation-form-message": "Ваше сообщение",
        "consultation-form-submit": "Записаться",
        "testimonials-title": "Отзывы",
        "testimonials-subtitle": "Что о нас говорят наши клиенты",
        "testimonial-1-name": "Мэри Джонсон",
        "testimonial-1-text": "\"Путешествие, организованное GlobeTravel, превзошло мои ожидания. Они позаботились о каждой детали, и все прошло гладко. Я настоятельно рекомендую их.\"",
        "testimonial-2-name": "Джон Смит",
        "testimonial-2-text": "\"Благодаря GlobeTravel моя семья и я провели самые запоминающиеся каникулы. От проживания до мероприятий все было идеально спланировано. Мы не можем дождаться, чтобы снова воспользоваться их услугами!\"",
        "testimonial-3-name": "Сара Уилсон",
        "testimonial-3-text": "\"Я путешествовал с несколькими агентствами, но ни одно из них не предоставило такого уровня обслуживания и личного внимания, как GlobeTravel. Они действительно идут на все, чтобы их клиенты получили фантастический опыт.\""
    }
}

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = translations[lang][key];
    });
}

// Animation on hover for cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transition = 'transform 0.3s';
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transition = 'transform 0.3s';
        card.style.transform = 'scale(1)';
    });
});


// Get the modal
var modal = document.getElementById("consultationModal");

// Get the button that opens the modal
var btn = document.getElementById("openConsultationModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle form submission
document.getElementById("consultationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission
  // You can add your form submission logic here
  alert("Consultation scheduled!"); // Example: show alert
  modal.style.display = "none"; // Close modal after form submission
});
