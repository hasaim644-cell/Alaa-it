
// =====================================
// الصفحات الموجودة في المشروع
// =====================================

const pages = [

    {
        ar: "الرئيسية",
        en: "Home",
        link: "index.html"
    },

    {
        ar: "من نحن",
        en: "About Us",
        link: "about.html"
    },

    {
        ar: "الخدمات",
        en: "Services",
        link: "services.html"
    },

    {
        ar: "الباقات",
        en: "Plans",
        link: "plans.html"
    },

    {
        ar: "المدربين",
        en: "Trainers",
        link: "trainers.html"
    },

    {
        ar: "التمارين",
        en: "Workouts",
        link: "workouts.html"
    },

    {
        ar: "اتصل بنا",
        en: "Contact Us",
        link: "contact.html"
    },

    {
        ar: "تسجيل الدخول",
        en: "Login",
        link: "login.html"
    }

];


// =====================================
// اللغة الحالية
// =====================================

let currentLanguage =
    localStorage.getItem("gymLanguage") || "ar";


// =====================================
// عناصر الصفحة
// =====================================

const navLinks =
    document.getElementById("navLinks");

const footerLinks =
    document.getElementById("footerLinks");

const languageBtn =
    document.getElementById("languageBtn");

const darkModeBtn =
    document.getElementById("darkModeBtn");

const backToTop =
    document.getElementById("backToTop");

const hero =
    document.getElementById("hero");

const welcome =
    document.getElementById("welcome");

const startBtn =
    document.getElementById("startBtn");

const clock =
    document.getElementById("clock");


// =====================================
// النصوص
// =====================================

const translations = {

    ar: {

        logo:
            "نظام إدارة الصالة الرياضية",

        searchTitle:
            "ابحث في الصالة الرياضية 🔍",

        searchPlaceholder:
            "ابحث عن خدمة، باقة، مدرب أو تمرين...",

        searchButton:
            "بحث 🔍",

        searchEmpty:
            "اكتب كلمة للبحث أولاً 🔍",

        searchNotFound:
            "لم يتم العثور على نتيجة 🔍",

        heroTitle:
            "ابدأ رحلتك نحو جسم أقوى 💪",

        heroText:
            "أفضل مكان لتطوير لياقتك وتحقيق أهدافك الرياضية.",

        welcomeTitle:
            "مرحباً بك في الصالة الرياضية",

        welcomeText:
            "اكتشف أفضل التمارين والبرامج التدريبية وابدأ رحلتك نحو جسم أقوى وصحة أفضل.",

        start:
            "ابدأ الآن",

        currentTime:
            "الوقت الحالي",

        footerDescription:
            "نظام متكامل لإدارة الصالة الرياضية",

        footerPages:
            "صفحات الموقع",

        copyright:
            "جميع الحقوق محفوظة",

        darkTitle:
            "الوضع الليلي",

        topTitle:
            "العودة إلى الأعلى"

    },


    en: {

        logo:
            "Gym Management System",

        searchTitle:
            "Search the Gym 🔍",

        searchPlaceholder:
            "Search for a service, plan, trainer or workout...",

        searchButton:
            "Search 🔍",

        searchEmpty:
            "Please enter a search word first 🔍",

        searchNotFound:
            "No results found 🔍",

        heroTitle:
            "Start Your Journey Toward a Stronger Body 💪",

        heroText:
            "The best place to improve your fitness and achieve your goals.",

        welcomeTitle:
            "Welcome to Our Gym",

        welcomeText:
            "Discover the best workouts and training programs and start your journey toward a stronger body and better health.",

        start:
            "Start Now",

        currentTime:
            "Current Time",

        footerDescription:
            "An integrated system for managing your gym.",

        footerPages:
            "Website Pages",

        copyright:
            "All Rights Reserved",

        darkTitle:
            "Dark Mode",

        topTitle:
            "Back to Top"

    }

};


// =====================================
// بناء شريط التنقل
// =====================================

function createNavigation() {

    if (!navLinks) {
        return;
    }


    navLinks.innerHTML = "";


    let currentPage =
        window.location.pathname
            .split("/")
            .pop();


    if (
        currentPage === "" ||
        currentPage === "/"
    ) {

        currentPage =
            "index.html";

    }


    pages.forEach(function(page) {

        const li =
            document.createElement("li");

        const a =
            document.createElement("a");

        a.href =
            page.link;

        a.textContent =
            currentLanguage === "ar"
                ? page.ar
                : page.en;


        if (
            page.link === currentPage
        ) {

            a.classList.add(
                "active"
            );

        }


        li.appendChild(a);

        navLinks.appendChild(li);

    });

}


// =====================================
// بناء Footer
// =====================================

function createFooterLinks() {

    if (!footerLinks) {
        return;
    }


    footerLinks.innerHTML = "";


    pages.forEach(function(page) {

        const li =
            document.createElement("li");

        const a =
            document.createElement("a");

        a.href =
            page.link;

        a.textContent =
            currentLanguage === "ar"
                ? page.ar
                : page.en;

        li.appendChild(a);

        footerLinks.appendChild(li);

    });

}


// =====================================
// إنشاء محتوى Hero
// =====================================

function createHero() {

    if (!hero) {
        return;
    }


    hero.innerHTML = `

        <div class="search-section">

            <h2>
                ${translations[currentLanguage].searchTitle}
            </h2>

            <div class="search-box">

                <input
                    type="text"
                    id="searchInput"
                    placeholder="${translations[currentLanguage].searchPlaceholder}"
                >

                <button id="searchBtn">
                    ${translations[currentLanguage].searchButton}
                </button>

            </div>

            <p id="searchResult"></p>

        </div>


        <div class="hero-content">

            <h2>
                ${translations[currentLanguage].heroTitle}
            </h2>

            <p>
                ${translations[currentLanguage].heroText}
            </p>

        </div>

    `;

}


// =====================================
// تحديث النصوص الثابتة
// =====================================

function updateStaticTexts() {

    const dataElements =
        document.querySelectorAll(
            "[data-ar][data-en]"
        );


    dataElements.forEach(
        function(element) {

            element.textContent =
                element.getAttribute(
                    `data-${currentLanguage}`
                );

        }
    );


   


    // عنوان الوقت

    const clockTitle =
        document.querySelector(
            ".clock-section h2"
        );


    if (clockTitle) {

        clockTitle.textContent =
            translations[currentLanguage]
                .currentTime;

    }


    // اللغة

    document.documentElement.lang =
        currentLanguage;

    document.documentElement.dir =
        "rtl";


    if (languageBtn) {

        languageBtn.textContent =
            currentLanguage === "ar"
                ? "EN"
                : "عربي";

    }


    if (darkModeBtn) {

        darkModeBtn.title =
            translations[currentLanguage]
                .darkTitle;

    }


    if (backToTop) {

        backToTop.title =
            translations[currentLanguage]
                .topTitle;

    }


    // Footer

    const footerDescription =
        document.querySelector(
            "footer > p"
        );


    if (footerDescription) {

        footerDescription.textContent =
            translations[currentLanguage]
                .footerDescription;

    }


    const footerTitle =
        document.querySelector(
            ".footer-links h4"
        );


    if (footerTitle) {

        footerTitle.textContent =
            translations[currentLanguage]
                .footerPages;

    }


    const copyrightText =
        document.querySelector(
            ".copyright span"
        );


    if (copyrightText) {

        copyrightText.textContent =
            translations[currentLanguage]
                .copyright;

    }


    // الترحيب

    if (welcome) {

        welcome.textContent =
            translations[currentLanguage]
                .welcomeTitle;

    }


    const welcomeParagraph =
        document.querySelector(
            ".welcome-section p"
        );


    if (welcomeParagraph) {

        welcomeParagraph.textContent =
            translations[currentLanguage]
                .welcomeText;

    }


    // زر ابدأ الآن

    if (startBtn) {

        const startText =
            startBtn.querySelector(
                "span"
            );


        if (startText) {

            startText.textContent =
                translations[currentLanguage]
                    .start;

        }

    }

}


// =====================================
// اللغة
// =====================================

function applyLanguage() {

    createHero();

    createNavigation();

    createFooterLinks();

    updateStaticTexts();

    setupSearch();

}


// =====================================
// زر اللغة
// =====================================

if (languageBtn) {

    languageBtn.addEventListener(
        "click",
        function() {

            currentLanguage =
                currentLanguage === "ar"
                    ? "en"
                    : "ar";


            localStorage.setItem(
                "gymLanguage",
                currentLanguage
            );


            applyLanguage();

        }
    );

}


// =====================================
// البحث
// =====================================

function setupSearch() {

    const searchInput =
        document.getElementById(
            "searchInput"
        );

    const searchBtn =
        document.getElementById(
            "searchBtn"
        );

    const searchResult =
        document.getElementById(
            "searchResult"
        );


    if (
        !searchInput ||
        !searchBtn ||
        !searchResult
    ) {

        return;

    }


    searchBtn.addEventListener(
        "click",
        function() {

            const searchText =
                searchInput.value
                    .trim()
                    .toLowerCase();


            if (
                searchText === ""
            ) {

                searchResult.textContent =
                    translations[
                        currentLanguage
                    ].searchEmpty;

                return;

            }


            // الخدمات

            if (
                searchText.includes("خدمة") ||
                searchText.includes("خدمات") ||
                searchText.includes("service") ||
                searchText.includes("services")
            ) {

                window.location.href =
                    "services.html";

                return;

            }


            // الباقات

            if (
                searchText.includes("باقة") ||
                searchText.includes("باقات") ||
                searchText.includes("plan") ||
                searchText.includes("plans")
            ) {

                window.location.href =
                    "plans.html";

                return;

            }


            // المدربين

            if (
                searchText.includes("مدرب") ||
                searchText.includes("مدربين") ||
                searchText.includes("trainer") ||
                searchText.includes("trainers")
            ) {

                window.location.href =
                    "trainers.html";

                return;

            }


            // التمارين

            if (
                searchText.includes("تمرين") ||
                searchText.includes("تمارين") ||
                searchText.includes("workout") ||
                searchText.includes("workouts")
            ) {

                window.location.href =
                    "workouts.html";

                return;

            }


            // من نحن

            if (
                searchText.includes("من نحن") ||
                searchText.includes("about")
            ) {

                window.location.href =
                    "about.html";

                return;

            }


            // اتصل بنا

            if (
                searchText.includes("اتصل") ||
                searchText.includes("contact")
            ) {

                window.location.href =
                    "contact.html";

                return;

            }


            // الرئيسية

            if (
                searchText.includes("الرئيسية") ||
                searchText.includes("home")
            ) {

                window.location.href =
                    "index.html";

                return;

            }


            // تسجيل الدخول

            if (
                searchText.includes("تسجيل") ||
                searchText.includes("login")
            ) {

                window.location.href =
                    "login.html";

                return;

            }


            searchResult.textContent =
                translations[
                    currentLanguage
                ].searchNotFound;

        }
    );


    searchInput.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                searchBtn.click();

            }

        }
    );

}


// =====================================
// زر ابدأ الآن
// =====================================

if (startBtn) {

    startBtn.addEventListener(
        "click",
        function() {

            window.location.href =
                "plans.html";

        }
    );

}


// =====================================
// الساعة
// =====================================

function showTime() {

    if (!clock) {
        return;
    }


    const now =
        new Date();


    if (currentLanguage === "ar") {

        clock.textContent =
            now.toLocaleString(
                "ar-YE"
            );

    }

    else {

        clock.textContent =
            now.toLocaleString(
                "en-US"
            );

    }

}


showTime();


setInterval(
    showTime,
    1000
);


// =====================================
// الوضع الليلي
// =====================================

function applyDarkMode() {

    const savedMode =
        localStorage.getItem(
            "darkMode"
        );


    if (
        savedMode === "enabled"
    ) {

        document.body.classList.add(
            "dark-mode"
        );

        if (darkModeBtn) {

            darkModeBtn.textContent =
                "☀️";

        }

    }

    else {

        document.body.classList.remove(
            "dark-mode"
        );

        if (darkModeBtn) {

            darkModeBtn.textContent =
                "🌙";

        }

    }

}


applyDarkMode();


if (darkModeBtn) {

    darkModeBtn.addEventListener(
        "click",
        function() {

            const isDark =
                document.body.classList.toggle(
                    "dark-mode"
                );


            if (isDark) {

                darkModeBtn.textContent =
                    "☀️";

                localStorage.setItem(
                    "darkMode",
                    "enabled"
                );

            }

            else {

                darkModeBtn.textContent =
                    "🌙";

                localStorage.setItem(
                    "darkMode",
                    "disabled"
                );

            }

        }
    );

}


// =====================================
// زر العودة إلى الأعلى
// =====================================

if (backToTop) {

    window.addEventListener(
        "scroll",
        function() {

            if (
                window.scrollY > 300
            ) {

                backToTop.style.display =
                    "flex";

            }

            else {

                backToTop.style.display =
                    "none";

            }

        }
    );


    backToTop.addEventListener(
        "click",
        function() {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


// =====================================
// أمثلة JavaScript المطلوبة
// =====================================

const exercises = [

    "Bench Press",
    "Squat",
    "Deadlift",
    "Push Ups",
    "Pull Ups"

];

console.log(exercises);


// =====================================
// Object
// =====================================

const trainer = {

    name: "أحمد محمد",

    specialty: "كمال الأجسام",

    experience: 7

};

console.log(
    trainer.name
);

console.log(
    trainer.specialty
);


// =====================================
// Loop
// =====================================

for (
    let i = 0;
    i < exercises.length;
    i++
) {

    console.log(
        exercises[i]
    );

}


// =====================================
// forEach
// =====================================

exercises.forEach(
    function(exercise) {

        console.log(
            "التمرين: " +
            exercise
        );

    }
);


// =====================================
// Condition
// =====================================

let subscriptionDays =
    20;


if (
    subscriptionDays > 30
) {

    console.log(
        "الاشتراك فعال"
    );

}

else if (
    subscriptionDays > 0
) {

    console.log(
        "الاشتراك سينتهي قريباً"
    );

}

else {

    console.log(
        "الاشتراك منتهي"
    );

}


// =====================================
// Search Exercise
// =====================================

function searchExercise(name) {

    const result =
        exercises.filter(
            function(exercise) {

                return exercise
                    .toLowerCase()
                    .includes(
                        name.toLowerCase()
                    );

            }
        );


    console.log(result);

}


searchExercise(
    "press"
);


// =====================================
// حساب الاشتراك
// =====================================

function calculatePrice(plan) {

    let price;


    if (
        plan === "monthly"
    ) {

        price = 30;

    }

    else if (
        plan === "quarterly"
    ) {

        price = 75;

    }

    else if (
        plan === "yearly"
    ) {

        price = 250;

    }

    else {

        price = 0;

    }


    return price;

}


console.log(
    calculatePrice("monthly")
);


// =====================================
// Local Storage
// =====================================

localStorage.setItem(
    "gymName",
    "Gym Management System"
);


const gymName =
    localStorage.getItem(
        "gymName"
    );


console.log(gymName);


// =====================================
// تشغيل الصفحة
// =====================================

applyLanguage();

showTime();

applyDarkMode();
