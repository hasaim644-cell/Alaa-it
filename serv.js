
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
// المتغيرات
// =====================================

let currentFilter = "all";

let currentSearch = "";


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

const servicesPage =
    document.getElementById("servicesPage");


// =====================================
// بيانات الخدمات
// =====================================

const services = [

    // =================================
    // خدمات التدريب
    // =================================

    {
        id: 1,

        icon: "🏋️",

        category: "training",

        titleAr: "التدريب الشخصي",

        titleEn: "Personal Training",

        descriptionAr:
            "برنامج تدريبي خاص يتم تصميمه حسب أهدافك الرياضية.",

        descriptionEn:
            "A personalized training program designed according to your fitness goals.",

        keywordsAr: [
            "تدريب",
            "التدريب",
            "تدريب شخصي",
            "رياضة",
            "لياقة",
            "مدرب",
            "تمرين",
            "تمارين"
        ],

        keywordsEn: [
            "training",
            "personal",
            "personal training",
            "fitness",
            "coach",
            "workout",
            "exercise"
        ],

        detailsAr: [

            "برنامج تدريبي مناسب لمستواك",

            "متابعة المدرب أثناء التمرين",

            "تحديد أهداف رياضية واضحة",

            "تقييم مستوى اللياقة"

        ],

        detailsEn: [

            "Training program suitable for your fitness level",

            "Coach supervision during workouts",

            "Setting clear fitness goals",

            "Fitness level assessment"

        ]

    },


    {
        id: 2,

        icon: "👥",

        category: "training",

        titleAr: "التدريب الجماعي",

        titleEn: "Group Training",

        descriptionAr:
            "تمارين جماعية تساعدك على تحسين اللياقة والاستمرار.",

        descriptionEn:
            "Group workouts that help improve fitness and motivation.",

        keywordsAr: [
            "تدريب",
            "التدريب",
            "تدريب جماعي",
            "جماعي",
            "تمارين جماعية",
            "رياضة",
            "لياقة",
            "تمارين"
        ],

        keywordsEn: [
            "training",
            "group",
            "group training",
            "fitness",
            "workout",
            "exercise"
        ],

        detailsAr: [

            "تمارين جماعية متنوعة",

            "بيئة تدريب ممتعة",

            "زيادة الحماس والاستمرارية",

            "مناسبة لمختلف المستويات"

        ],

        detailsEn: [

            "Various group workouts",

            "Fun training environment",

            "Improved motivation and consistency",

            "Suitable for different fitness levels"

        ]

    },


    // =================================
    // خدمات الإدارة
    // =================================

    {
        id: 3,

        icon: "📋",

        category: "management",

        titleAr: "إدارة الاشتراكات",

        titleEn: "Membership Management",

        descriptionAr:
            "إدارة اشتراكك ومعرفة حالة العضوية وتاريخ الانتهاء.",

        descriptionEn:
            "Manage your membership and check its status and expiration date.",

        keywordsAr: [
            "إدارة",
            "الادارة",
            "الإدارة",
            "اشتراك",
            "الاشتراكات",
            "إدارة الاشتراكات",
            "عضوية",
            "العضوية",
            "تجديد",
            "انتهاء"
        ],

        keywordsEn: [
            "management",
            "membership",
            "memberships",
            "membership management",
            "subscription",
            "renewal",
            "expiration"
        ],

        detailsAr: [

            "معرفة نوع الاشتراك",

            "تاريخ بداية الاشتراك",

            "تاريخ انتهاء الاشتراك",

            "متابعة حالة العضوية"

        ],

        detailsEn: [

            "View membership type",

            "Membership start date",

            "Membership expiration date",

            "Track membership status"

        ]

    },


    {
        id: 4,

        icon: "📅",

        category: "management",

        titleAr: "حجز المواعيد",

        titleEn: "Appointment Booking",

        descriptionAr:
            "حجز موعد التدريب مع المدرب المناسب بسهولة.",

        descriptionEn:
            "Easily book a training appointment with the right coach.",

        keywordsAr: [
            "إدارة",
            "الادارة",
            "الإدارة",
            "حجز",
            "حجوزات",
            "حجز موعد",
            "المواعيد",
            "موعد",
            "مدرب",
            "تدريب"
        ],

        keywordsEn: [
            "management",
            "booking",
            "appointment",
            "appointments",
            "appointment booking",
            "reservation",
            "coach",
            "training"
        ],

        detailsAr: [

            "اختيار المدرب",

            "اختيار نوع التدريب",

            "اختيار التاريخ",

            "اختيار الوقت",

            "تأكيد الحجز"

        ],

        detailsEn: [

            "Choose a coach",

            "Choose training type",

            "Choose a date",

            "Choose a time",

            "Confirm booking"

        ]

    },


    // =================================
    // خدمات الصحة
    // =================================

    {
        id: 5,

        icon: "📊",

        category: "health",

        titleAr: "متابعة الأداء",

        titleEn: "Performance Tracking",

        descriptionAr:
            "متابعة الوزن والقياسات والتطور الرياضي بشكل مستمر.",

        descriptionEn:
            "Track your weight, measurements, and fitness progress continuously.",

        keywordsAr: [
            "الصحة",
            "صحة",
            "الأداء",
            "متابعة",
            "متابعة الأداء",
            "الوزن",
            "القياسات",
            "التطور",
            "اللياقة"
        ],

        keywordsEn: [
            "health",
            "performance",
            "tracking",
            "performance tracking",
            "weight",
            "measurements",
            "progress",
            "fitness"
        ],

        detailsAr: [

            "متابعة الوزن",

            "متابعة القياسات",

            "متابعة عدد التمارين",

            "معرفة مستوى التطور"

        ],

        detailsEn: [

            "Track weight",

            "Track measurements",

            "Track workout sessions",

            "Monitor progress level"

        ]

    },


    {
        id: 6,

        icon: "🥗",

        category: "health",

        titleAr: "الاستشارات الغذائية",

        titleEn: "Nutrition Consultation",

        descriptionAr:
            "إرشادات غذائية تساعدك على تحقيق أهدافك الرياضية.",

        descriptionEn:
            "Nutrition guidance that helps you achieve your fitness goals.",

        keywordsAr: [
            "الصحة",
            "صحة",
            "غذاء",
            "غذائية",
            "تغذية",
            "استشارات",
            "الاستشارات الغذائية",
            "طعام",
            "وجبات",
            "سعرات"
        ],

        keywordsEn: [
            "health",
            "nutrition",
            "nutrition consultation",
            "food",
            "meal",
            "meals",
            "calories",
            "diet"
        ],

        detailsAr: [

            "إرشادات غذائية",

            "تنظيم الوجبات",

            "اختيار الأطعمة المناسبة",

            "دعم أهدافك الرياضية"

        ],

        detailsEn: [

            "Nutrition guidance",

            "Meal planning",

            "Choosing suitable foods",

            "Supporting your fitness goals"

        ]

    }

];


// =====================================
// بناء شريط التنقل
// =====================================

function createNavigation() {

    if (!navLinks) {
        return;
    }

    const currentPage =
        window.location.pathname
            .split("/")
            .pop();

    navLinks.innerHTML = "";

    pages.forEach(page => {

        const li =
            document.createElement("li");

        const link =
            document.createElement("a");

        link.href =
            page.link;

        link.textContent =
            currentLanguage === "ar"
                ? page.ar
                : page.en;

        if (
            page.link === currentPage ||
            (
                currentPage === "" &&
                page.link === "index.html"
            )
        ) {

            link.classList.add("active");

        }

        li.appendChild(link);

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

    pages.forEach(page => {

        const li =
            document.createElement("li");

        const link =
            document.createElement("a");

        link.href =
            page.link;

        link.textContent =
            currentLanguage === "ar"
                ? page.ar
                : page.en;

        li.appendChild(link);

        footerLinks.appendChild(li);

    });

}


// =====================================
// تحديث اللغة
// =====================================

function updateLanguage() {

    document.documentElement.lang =
        currentLanguage;

    document.documentElement.dir =
        "rtl";


    document
        .querySelectorAll("[data-ar][data-en]")
        .forEach(element => {

            element.textContent =
                currentLanguage === "ar"
                    ? element.getAttribute("data-ar")
                    : element.getAttribute("data-en");

        });


    const searchInput =
        document.getElementById("serviceSearch");


    if (searchInput) {

        searchInput.placeholder =
            currentLanguage === "ar"
                ? searchInput.getAttribute(
                    "data-ar-placeholder"
                )
                : searchInput.getAttribute(
                    "data-en-placeholder"
                );

    }


    if (languageBtn) {

        languageBtn.textContent =
            currentLanguage === "ar"
                ? "EN"
                : "عربي";

    }


    createNavigation();

    createFooterLinks();

    displayServices(
        currentFilter,
        currentSearch
    );

}


// =====================================
// زر تغيير اللغة
// =====================================

if (languageBtn) {

    languageBtn.addEventListener(
        "click",
        function () {

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
    );

}


// =====================================
// محتوى صفحة الخدمات
// =====================================

if (servicesPage) {

    servicesPage.innerHTML = `

        <!-- =================================
             رأس الصفحة
        ================================== -->

        <section class="services-header">

            <h1
                data-ar="خدماتنا 🏋️"
                data-en="Our Services 🏋️">

                خدماتنا 🏋️

            </h1>


            <p
                data-ar="نقدم مجموعة متكاملة من الخدمات الرياضية والإدارية والصحية لمساعدتك على تحقيق أهدافك."
                data-en="We provide a complete range of fitness, management, and health services to help you achieve your goals.">

                نقدم مجموعة متكاملة من الخدمات الرياضية والإدارية والصحية لمساعدتك على تحقيق أهدافك.

            </p>

        </section>


        <!-- =================================
             البحث
        ================================== -->

        <section class="search-section">

            <h2
                data-ar="ابحث عن خدمة 🔍"
                data-en="Search for a Service 🔍">

                ابحث عن خدمة 🔍

            </h2>


            <div class="search-box">

                <input
                    type="text"
                    id="serviceSearch"
                    data-ar-placeholder="اكتب اسم الخدمة أو القسم..."
                    data-en-placeholder="Type service or category..."
                    placeholder="اكتب اسم الخدمة أو القسم...">


                <button
                    id="searchBtn"
                    data-ar="بحث 🔍"
                    data-en="Search 🔍">

                    بحث 🔍

                </button>

            </div>


            <p id="searchResult"></p>

        </section>


        <!-- =================================
             الخدمات
        ================================== -->

        <section class="services-section">

            <div class="services-filter">

                <button
                    class="filter-btn active"
                    data-filter="all"
                    data-ar="جميع الخدمات"
                    data-en="All Services">

                    جميع الخدمات

                </button>


                <button
                    class="filter-btn"
                    data-filter="training"
                    data-ar="التدريب"
                    data-en="Training">

                    التدريب

                </button>


                <button
                    class="filter-btn"
                    data-filter="management"
                    data-ar="الإدارة"
                    data-en="Management">

                    الإدارة

                </button>


                <button
                    class="filter-btn"
                    data-filter="health"
                    data-ar="الصحة"
                    data-en="Health">

                    الصحة

                </button>

            </div>


            <div
                id="servicesContainer"
                class="services-container">

            </div>

        </section>


        <!-- =================================
             نافذة التفاصيل
        ================================== -->

        <div
            id="serviceModal"
            class="service-modal">

            <div class="service-modal-content">

                <button
                    class="close-service"
                    id="closeServiceBtn"
                    aria-label="Close">

                    ✕

                </button>


                <div
                    id="serviceModalContent">

                </div>

            </div>

        </div>

    `;

}


// =====================================
// عناصر الخدمات
// =====================================

const servicesContainer =
    document.getElementById(
        "servicesContainer"
    );

const serviceSearch =
    document.getElementById(
        "serviceSearch"
    );

const searchBtn =
    document.getElementById(
        "searchBtn"
    );

const searchResult =
    document.getElementById(
        "searchResult"
    );


// =====================================
// تنظيف النص للبحث
// =====================================

function normalizeText(text) {

    return text
        .toLowerCase()
        .trim()
        .replace(/[أإآ]/g, "ا")
        .replace(/ة/g, "ه")
        .replace(/ى/g, "ي");

}


// =====================================
// الحصول على اسم القسم
// =====================================

function getCategoryName(service) {

    if (currentLanguage === "ar") {

        if (service.category === "training") {
            return "التدريب";
        }

        if (service.category === "management") {
            return "الإدارة";
        }

        if (service.category === "health") {
            return "الصحة";
        }

    }

    else {

        if (service.category === "training") {
            return "Training";
        }

        if (service.category === "management") {
            return "Management";
        }

        if (service.category === "health") {
            return "Health";
        }

    }

    return "";

}


// =====================================
// عرض الخدمات
// =====================================

function displayServices(
    filter = "all",
    search = ""
) {

    if (!servicesContainer) {
        return;
    }

    servicesContainer.innerHTML = "";


    const searchText =
        normalizeText(search);


    const filteredServices =
        services.filter(service => {

            // -----------------------------
            // الفلتر
            // -----------------------------

            const matchesFilter =
                filter === "all" ||
                service.category === filter;


            // -----------------------------
            // بيانات الخدمة
            // -----------------------------

            const title =
                currentLanguage === "ar"
                    ? service.titleAr
                    : service.titleEn;


            const description =
                currentLanguage === "ar"
                    ? service.descriptionAr
                    : service.descriptionEn;


            const details =
                currentLanguage === "ar"
                    ? service.detailsAr
                    : service.detailsEn;


            const keywords =
                currentLanguage === "ar"
                    ? service.keywordsAr
                    : service.keywordsEn;


            const categoryName =
                getCategoryName(service);


            // -----------------------------
            // كل الكلمات التي يبحث فيها
            // -----------------------------

            const searchableText = [

                title,

                description,

                ...details,

                ...keywords,

                categoryName

            ]
                .map(normalizeText)
                .join(" ");


            // -----------------------------
            // البحث
            // -----------------------------

            const matchesSearch =
                searchText === "" ||
                searchableText.includes(
                    searchText
                );


            return (
                matchesFilter &&
                matchesSearch
            );

        });


    // =================================
    // لا توجد نتائج
    // =================================

    if (filteredServices.length === 0) {

        servicesContainer.innerHTML = `

            <div class="no-results">

                ${
                    currentLanguage === "ar"
                        ? "لم يتم العثور على خدمة مطابقة للبحث 🔍"
                        : "No matching service was found 🔍"
                }

            </div>

        `;

        return;
    }


    // =================================
    // عرض الخدمات
    // =================================

    filteredServices.forEach(service => {

        const card =
            document.createElement("div");


        card.className =
            "service-card";


        const title =
            currentLanguage === "ar"
                ? service.titleAr
                : service.titleEn;


        const description =
            currentLanguage === "ar"
                ? service.descriptionAr
                : service.descriptionEn;


        const buttonText =
            currentLanguage === "ar"
                ? "عرض التفاصيل"
                : "View Details";


        card.innerHTML = `

            <div class="service-icon">

                ${service.icon}

            </div>


            <h3>

                ${title}

            </h3>


            <p>

                ${description}

            </p>


            <button
                class="service-btn"
                data-id="${service.id}">

                ${buttonText}

            </button>

        `;


        const button =
            card.querySelector(
                ".service-btn"
            );


        button.addEventListener(
            "click",
            function () {

                openService(
                    Number(this.dataset.id)
                );

            }
        );


        servicesContainer.appendChild(card);

    });

}


// =====================================
// البحث
// =====================================

function performSearch() {

    currentSearch =
        serviceSearch
            ? serviceSearch.value
            : "";


    displayServices(
        currentFilter,
        currentSearch
    );


    if (!searchResult) {
        return;
    }


    const searchText =
        normalizeText(currentSearch);


    if (searchText === "") {

        searchResult.textContent = "";

        return;

    }


    // =================================
    // حساب عدد النتائج
    // =================================

    const count =
        services.filter(service => {

            const title =
                currentLanguage === "ar"
                    ? service.titleAr
                    : service.titleEn;


            const description =
                currentLanguage === "ar"
                    ? service.descriptionAr
                    : service.descriptionEn;


            const details =
                currentLanguage === "ar"
                    ? service.detailsAr
                    : service.detailsEn;


            const keywords =
                currentLanguage === "ar"
                    ? service.keywordsAr
                    : service.keywordsEn;


            const categoryName =
                getCategoryName(service);


            const searchableText = [

                title,

                description,

                ...details,

                ...keywords,

                categoryName

            ]
                .map(normalizeText)
                .join(" ");


            return searchableText.includes(
                searchText
            );

        }).length;


    searchResult.textContent =
        currentLanguage === "ar"
            ? `تم العثور على ${count} خدمة`
            : `${count} service(s) found`;

}


// =====================================
// زر البحث
// =====================================

if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        performSearch
    );

}


// =====================================
// البحث عند Enter
// =====================================

if (serviceSearch) {

    serviceSearch.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                performSearch();

            }

        }
    );

}


// =====================================
// الفلترة
// =====================================

document
    .querySelectorAll(".filter-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            function () {

                document
                    .querySelectorAll(".filter-btn")
                    .forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );

                    });


                this.classList.add(
                    "active"
                );


                currentFilter =
                    this.dataset.filter;


                displayServices(
                    currentFilter,
                    currentSearch
                );

            }
        );

    });


// =====================================
// فتح تفاصيل الخدمة
// =====================================

function openService(id) {

    const service =
        services.find(
            item => item.id === id
        );


    const modal =
        document.getElementById(
            "serviceModal"
        );


    const content =
        document.getElementById(
            "serviceModalContent"
        );


    if (
        !service ||
        !modal ||
        !content
    ) {

        return;

    }


    const title =
        currentLanguage === "ar"
            ? service.titleAr
            : service.titleEn;


    const description =
        currentLanguage === "ar"
            ? service.descriptionAr
            : service.descriptionEn;


    const details =
        currentLanguage === "ar"
            ? service.detailsAr
            : service.detailsEn;


    const detailsTitle =
        currentLanguage === "ar"
            ? "ماذا تشمل الخدمة؟"
            : "What does this service include?";


    let detailsHTML = "";


    details.forEach(detail => {

        detailsHTML += `

            <div class="modal-detail">

                <span>✓</span>

                ${detail}

            </div>

        `;

    });


    content.innerHTML = `

        <div class="modal-icon">

            ${service.icon}

        </div>


        <h2>

            ${title}

        </h2>


        <p>

            ${description}

        </p>


        <h3 class="modal-details-title">

            ${detailsTitle}

        </h3>


        <div class="modal-details">

            ${detailsHTML}

        </div>

    `;


    modal.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";

}


// =====================================
// إغلاق التفاصيل
// =====================================

function closeService() {

    const modal =
        document.getElementById(
            "serviceModal"
        );


    if (!modal) {
        return;
    }


    modal.classList.remove(
        "show"
    );


    document.body.style.overflow =
        "";

}


// =====================================
// زر إغلاق النافذة
// =====================================

const closeServiceBtn =
    document.getElementById(
        "closeServiceBtn"
    );


if (closeServiceBtn) {

    closeServiceBtn.addEventListener(
        "click",
        closeService
    );

}


// =====================================
// الضغط خارج النافذة
// =====================================

const serviceModal =
    document.getElementById(
        "serviceModal"
    );


if (serviceModal) {

    serviceModal.addEventListener(
        "click",
        function(event) {

            if (
                event.target ===
                serviceModal
            ) {

                closeService();

            }

        }
    );

}


// =====================================
// زر ESC
// =====================================

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeService();

        }

    }
);


// =====================================
// استقبال البحث من صفحة أخرى
// =====================================

const savedSearch =
    localStorage.getItem(
        "gymServiceSearch"
    );


if (savedSearch) {

    currentSearch =
        savedSearch;


    if (serviceSearch) {

        serviceSearch.value =
            savedSearch;

    }


    localStorage.removeItem(
        "gymServiceSearch"
    );

}


// =====================================
// الوضع الليلي
// =====================================

const savedMode =
    localStorage.getItem(
        "gymDarkMode"
    );


if (savedMode === "dark") {

    document.body.classList.add(
        "dark-mode"
    );


    if (darkModeBtn) {

        darkModeBtn.textContent =
            "☀️";

    }

}

else {

    if (darkModeBtn) {

        darkModeBtn.textContent =
            "🌙";

    }

}


if (darkModeBtn) {

    darkModeBtn.addEventListener(
        "click",
        function() {

            document.body.classList.toggle(
                "dark-mode"
            );


            if (
                document.body.classList.contains(
                    "dark-mode"
                )
            ) {

                darkModeBtn.textContent =
                    "☀️";


                localStorage.setItem(
                    "gymDarkMode",
                    "dark"
                );

            }

            else {

                darkModeBtn.textContent =
                    "🌙";


                localStorage.setItem(
                    "gymDarkMode",
                    "light"
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

            if (window.scrollY > 300) {

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
// تشغيل الصفحة
// =====================================

createNavigation();

createFooterLinks();

updateLanguage();

displayServices(
    currentFilter,
    currentSearch
);