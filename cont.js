// =====================================
// صفحة اتصل بنا
// =====================================

const contactPage =
    document.getElementById("contactPage");


// =====================================
// الصفحات
// =====================================

const pages = [

    {
        nameAr: "الرئيسية",
        nameEn: "Home",
        link: "index.html"
    },

    {
        nameAr: "من نحن",
        nameEn: "About Us",
        link: "about.html"
    },

    {
        nameAr: "الخدمات",
        nameEn: "Services",
        link: "services.html"
    },

    {
        nameAr: "الباقات",
        nameEn: "Plans",
        link: "plans.html"
    },

    {
        nameAr: "المدربين",
        nameEn: "Trainers",
        link: "trainers.html"
    },

    {
        nameAr: "التمارين",
        nameEn: "Workouts",
        link: "workouts.html"
    },

    {
        nameAr: "اتصل بنا",
        nameEn: "Contact",
        link: "contact.html"
    },

    {
        nameAr: "تسجيل الدخول",
        nameEn: "Login",
        link: "login.html"
    }

];


// =====================================
// اللغة الحالية
// =====================================

let currentLanguage =
    localStorage.getItem("gymLanguage") || "ar";


// =====================================
// عند تحميل الصفحة
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (!contactPage) {
            return;
        }

        renderContactPage();

        setupContactEvents();

        updateLanguage();

        loadDarkMode();

        setupBackToTop();

    }
);


// =====================================
// بناء صفحة اتصل بنا
// =====================================

function renderContactPage() {

    contactPage.innerHTML = `

        <!-- =================================
             Hero
        ================================== -->

        <section class="contact-header">

            <div class="hero-decoration hero-decoration-1"></div>
            <div class="hero-decoration hero-decoration-2"></div>

            <div class="contact-header-content">

                <span class="hero-badge"
                      data-ar="نحن هنا من أجلك"
                      data-en="We Are Here For You">
                    نحن هنا من أجلك
                </span>

                <h1
                    data-ar="اتصل بنا 📞"
                    data-en="Contact Us 📞">

                    اتصل بنا 📞

                </h1>

                <div class="hero-line"></div>

                <p
                    data-ar="نحن هنا لمساعدتك والإجابة عن جميع استفساراتك."
                    data-en="We are here to help you and answer all your questions.">

                    نحن هنا لمساعدتك والإجابة عن جميع استفساراتك.

                </p>

            </div>

        </section>


        <!-- =================================
             Contact Section
        ================================== -->

        <section class="contact-section">

            <!-- معلومات التواصل -->

            <div class="contact-info-card">

                <div class="section-icon">
                    📞
                </div>

                <h2
                    data-ar="معلومات التواصل"
                    data-en="Contact Information">

                    معلومات التواصل

                </h2>

                <p class="info-intro"
                   data-ar="يمكنك التواصل معنا في أي وقت، وسنسعد بخدمتك."
                   data-en="You can contact us anytime, and we will be happy to help you.">

                    يمكنك التواصل معنا في أي وقت، وسنسعد بخدمتك.

                </p>


                <!-- العنوان -->

                <div class="info-item">

                    <div class="info-icon">
                        📍
                    </div>

                    <div class="info-text">

                        <h3
                            data-ar="العنوان"
                            data-en="Address">

                            العنوان

                        </h3>

                        <p
                            data-ar="صنعاء - اليمن"
                            data-en="Sana'a - Yemen">

                            صنعاء - اليمن

                        </p>

                    </div>

                </div>


                <!-- الهاتف -->

                <div class="info-item">

                    <div class="info-icon">
                        📞
                    </div>

                    <div class="info-text">

                        <h3
                            data-ar="الهاتف"
                            data-en="Phone">

                            الهاتف

                        </h3>

                        <p>
                            777 000 000
                        </p>

                    </div>

                </div>


                <!-- البريد -->

                <div class="info-item">

                    <div class="info-icon">
                        📧
                    </div>

                    <div class="info-text">

                        <h3
                            data-ar="البريد الإلكتروني"
                            data-en="Email">

                            البريد الإلكتروني

                        </h3>

                        <p>
                            info@gym.com
                        </p>

                    </div>

                </div>


                <!-- أوقات العمل -->

                <div class="info-item">

                    <div class="info-icon">
                        🕐
                    </div>

                    <div class="info-text">

                        <h3
                            data-ar="أوقات العمل"
                            data-en="Working Hours">

                            أوقات العمل

                        </h3>

                        <p
                            data-ar="السبت - الخميس<br>6:00 صباحًا - 11:00 مساءً"
                            data-en="Saturday - Thursday<br>6:00 AM - 11:00 PM">

                            السبت - الخميس
                            <br>
                            6:00 صباحًا - 11:00 مساءً

                        </p>

                    </div>

                </div>


                <div class="info-footer">

                    <span>💪</span>

                    <p
                        data-ar="هدفنا أن نساعدك للوصول إلى أفضل نسخة منك."
                        data-en="Our goal is to help you become the best version of yourself.">

                        هدفنا أن نساعدك للوصول إلى أفضل نسخة منك.

                    </p>

                </div>

            </div>


            <!-- =================================
                 نموذج التواصل
            ================================== -->

            <div class="contact-form-card">

                <div class="section-icon">
                    ✉️
                </div>

                <h2
                    data-ar="أرسل لنا رسالة"
                    data-en="Send Us a Message">

                    أرسل لنا رسالة

                </h2>

                <p class="form-intro"
                   data-ar="املأ النموذج التالي وسنتواصل معك في أقرب وقت."
                   data-en="Fill out the form below and we will contact you as soon as possible.">

                    املأ النموذج التالي وسنتواصل معك في أقرب وقت.

                </p>


                <form id="contactForm">


                    <!-- الاسم -->

                    <div class="form-group">

                        <label
                            for="contactName"
                            data-ar="الاسم الكامل"
                            data-en="Full Name">

                            الاسم الكامل

                        </label>

                        <input
                            type="text"
                            id="contactName"
                            placeholder="أدخل اسمك"
                            data-placeholder-ar="أدخل اسمك"
                            data-placeholder-en="Enter your name"
                            required>

                    </div>


                    <!-- البريد -->

                    <div class="form-group">

                        <label
                            for="contactEmail"
                            data-ar="البريد الإلكتروني"
                            data-en="Email Address">

                            البريد الإلكتروني

                        </label>

                        <input
                            type="email"
                            id="contactEmail"
                            placeholder="example@email.com"
                            data-placeholder-ar="example@email.com"
                            data-placeholder-en="example@email.com"
                            required>

                    </div>


                    <!-- الهاتف -->

                    <div class="form-group">

                        <label
                            for="contactPhone"
                            data-ar="رقم الهاتف"
                            data-en="Phone Number">

                            رقم الهاتف

                        </label>

                        <input
                            type="tel"
                            id="contactPhone"
                            placeholder="أدخل رقم الهاتف"
                            data-placeholder-ar="أدخل رقم الهاتف"
                            data-placeholder-en="Enter phone number"
                            required>

                    </div>


                    <!-- الرسالة -->

                    <div class="form-group">

                        <label
                            for="contactMessage"
                            data-ar="الرسالة"
                            data-en="Message">

                            الرسالة

                        </label>

                        <textarea
                            id="contactMessage"
                            placeholder="اكتب رسالتك هنا..."
                            data-placeholder-ar="اكتب رسالتك هنا..."
                            data-placeholder-en="Write your message here..."
                            required></textarea>

                    </div>


                    <!-- زر الإرسال -->

                    <button
                        type="submit"
                        class="submit-btn">

                        <span
                            data-ar="إرسال الرسالة"
                            data-en="Send Message">

                            إرسال الرسالة

                        </span>

                        <span class="send-icon">
                            ➜
                        </span>

                    </button>

                </form>

            </div>

        </section>


        <!-- =================================
             Toast
        ================================== -->

        <div id="contactToast"
             class="contact-toast">

            <div class="toast-icon">
                ✓
            </div>

            <div class="toast-content">

                <strong
                    id="toastTitle">
                    تم الإرسال
                </strong>

                <p
                    id="toastMessage">
                    تم إرسال رسالتك بنجاح.
                </p>

            </div>

            <button
                class="toast-close"
                id="toastClose">

                ×

            </button>

            <div class="toast-progress"></div>

        </div>


        <!-- =================================
             Footer
        ================================== -->

        <footer>

            <h3>

                🏋️

                <span
                    data-ar="نظام إدارة الصالة الرياضية"
                    data-en="Gym Management System">
                </span>

            </h3>


            <p
                data-ar="نظام متكامل لإدارة الصالة الرياضية"
                data-en="An integrated system for managing your gym.">
            </p>


            <div class="footer-links">

                <h4
                    data-ar="صفحات الموقع"
                    data-en="Website Pages">
                </h4>

                <ul id="footerLinks"></ul>

            </div>


            <p class="copyright">

                © 2026

                <span
                    data-ar="جميع الحقوق محفوظة"
                    data-en="All Rights Reserved">
                </span>

            </p>

        </footer>

    `;

    updateFooter();

}


// =====================================
// أحداث الصفحة
// =====================================

function setupContactEvents() {

    const contactForm =
        document.getElementById("contactForm");

    const languageBtn =
        document.getElementById("languageBtn");

    const darkModeBtn =
        document.getElementById("darkModeBtn");

    const toastClose =
        document.getElementById("toastClose");


    // =================================
    // إرسال النموذج
    // =================================

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document
                    .getElementById("contactName")
                    .value
                    .trim();

                const email =
                    document
                    .getElementById("contactEmail")
                    .value
                    .trim();

                const phone =
                    document
                    .getElementById("contactPhone")
                    .value
                    .trim();

                const message =
                    document
                    .getElementById("contactMessage")
                    .value
                    .trim();


                if (
                    name === "" ||
                    email === "" ||
                    phone === "" ||
                    message === ""
                ) {

                    showContactToast(
                        false
                    );

                    return;

                }


                const phonePattern =
                    /^[0-9]{9}$/;

                if (
                    !phonePattern.test(
                        phone
                    )
                ) {

                    showContactToast(
                        false,
                        currentLanguage === "ar"
                            ? "رقم الهاتف يجب أن يتكون من 9 أرقام."
                            : "Phone number must be exactly 9 digits."
                    );

                    return;

                }


                showContactToast(
                    true
                );


                contactForm.reset();

            }
        );

    }


    // =================================
    // اللغة
    // =================================

    if (languageBtn) {

        languageBtn.addEventListener(
            "click",
            toggleLanguage
        );

    }


    // =================================
    // الوضع الليلي
    // =================================

    if (darkModeBtn) {

        darkModeBtn.addEventListener(
            "click",
            toggleDarkMode
        );

    }


    // =================================
    // إغلاق الرسالة
    // =================================

    if (toastClose) {

        toastClose.addEventListener(
            "click",
            hideContactToast
        );

    }

}


// =====================================
// Toast حديث
// =====================================

let toastTimer;


function showContactToast(success, customMessage) {

    const toast =
        document.getElementById(
            "contactToast"
        );

    const title =
        document.getElementById(
            "toastTitle"
        );

    const message =
        document.getElementById(
            "toastMessage"
        );


    if (!toast) {
        return;
    }


    if (success) {

        toast.classList.remove(
            "error"
        );

        title.textContent =
            currentLanguage === "ar"
                ? "تم إرسال الرسالة ✓"
                : "Message Sent ✓";

        message.textContent =
            currentLanguage === "ar"
                ? "تم إرسال رسالتك بنجاح، شكرًا لتواصلك معنا."
                : "Your message has been sent successfully. Thank you for contacting us.";

    }

    else {

        toast.classList.add(
            "error"
        );

        title.textContent =
            currentLanguage === "ar"
                ? "تنبيه"
                : "Attention";

        message.textContent =
            customMessage ||
            (
                currentLanguage === "ar"
                    ? "يرجى تعبئة جميع الحقول المطلوبة."
                    : "Please fill in all required fields."
            );

    }


    toast.classList.remove(
        "show"
    );


    void toast.offsetWidth;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            hideContactToast,
            4500
        );

}


function hideContactToast() {

    const toast =
        document.getElementById(
            "contactToast"
        );

    if (!toast) {
        return;
    }

    toast.classList.remove(
        "show"
    );

}


// =====================================
// تحديث اللغة
// =====================================

function updateLanguage() {

    document.documentElement.lang =
        currentLanguage;

    document.documentElement.dir =
        "rtl";


    // النصوص

    document
        .querySelectorAll(
            "[data-ar][data-en]"
        )
        .forEach(
            function (element) {

                element.innerHTML =
                    currentLanguage === "ar"
                        ? element.dataset.ar
                        : element.dataset.en;

            }
        );


    // الحقول

    document
        .querySelectorAll(
            "[data-placeholder-ar]"
        )
        .forEach(
            function (element) {

                element.placeholder =
                    currentLanguage === "ar"
                        ? element.dataset.placeholderAr
                        : element.dataset.placeholderEn;

            }
        );


    // زر اللغة

    const languageBtn =
        document.getElementById(
            "languageBtn"
        );

    if (languageBtn) {

        languageBtn.textContent =
            currentLanguage === "ar"
                ? "EN"
                : "عربي";

    }


    updateNavigation();

    updateFooter();

}


// =====================================
// تحديث Navigation
// =====================================

function updateNavigation() {

    const navLinks =
        document.getElementById(
            "navLinks"
        );

    if (!navLinks) {
        return;
    }


    navLinks.innerHTML =
        pages.map(
            function (page) {

                const active =
                    page.link ===
                    "contact.html"
                        ? "active"
                        : "";

                const name =
                    currentLanguage === "ar"
                        ? page.nameAr
                        : page.nameEn;

                return `
                    <li>
                        <a
                            href="${page.link}"
                            class="${active}">
                            ${name}
                        </a>
                    </li>
                `;

            }
        ).join("");

}


// =====================================
// تحديث Footer
// =====================================

function updateFooter() {

    const footerLinks =
        document.getElementById(
            "footerLinks"
        );

    if (!footerLinks) {
        return;
    }


    footerLinks.innerHTML =
        pages
        .map(
            function (page) {

                const name =
                    currentLanguage === "ar"
                        ? page.nameAr
                        : page.nameEn;

                return `
                    <li>
                        <a href="${page.link}">
                            ${name}
                        </a>
                    </li>
                `;

            }
        ).join("");

}


// =====================================
// تغيير اللغة
// =====================================

function toggleLanguage() {

    currentLanguage =
        currentLanguage === "ar"
            ? "en"
            : "ar";


    localStorage.setItem(
        "gymLanguage",
        currentLanguage
    );


    updateLanguage();

}


// =====================================
// Dark Mode
// =====================================

function loadDarkMode() {

    const darkMode =
        localStorage.getItem(
            "gymDarkMode"
        );


    if (darkMode === "true") {

        document.body.classList.add(
            "dark-mode"
        );

    }


    updateDarkModeIcon();

}


function toggleDarkMode() {

    document.body.classList.toggle(
        "dark-mode"
    );


    localStorage.setItem(
        "gymDarkMode",
        document.body.classList.contains(
            "dark-mode"
        )
    );


    updateDarkModeIcon();

}


function updateDarkModeIcon() {

    const darkModeBtn =
        document.getElementById(
            "darkModeBtn"
        );

    if (!darkModeBtn) {
        return;
    }


    if (
        document.body.classList.contains(
            "dark-mode"
        )
    ) {

        darkModeBtn.textContent =
            "☀️";

    }

    else {

        darkModeBtn.textContent =
            "🌙";

    }

}


// =====================================
// زر العودة إلى الأعلى
// =====================================

function setupBackToTop() {

    const backToTop =
        document.getElementById(
            "backToTop"
        );


    if (!backToTop) {
        return;
    }


    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 300) {

                backToTop.classList.add(
                    "show"
                );

            }

            else {

                backToTop.classList.remove(
                    "show"
                );

            }

        }
    );


    backToTop.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}