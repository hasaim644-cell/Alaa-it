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

const trainersPage =
    document.getElementById("trainersPage");


// =====================================
// بيانات المدربين
// =====================================

const trainers = [

    {
        id: 1,
        icon: "🏋️",

        nameAr: "أحمد محمد",
        nameEn: "Ahmed Mohammed",

        specialtyAr: "مدرب كمال الأجسام",
        specialtyEn: "Bodybuilding Coach",

        experienceAr: "8 سنوات خبرة",
        experienceEn: "8 Years Experience",

        descriptionAr:
            "متخصص في بناء العضلات وزيادة القوة وتحسين الأداء الرياضي.",

        descriptionEn:
            "Specialized in muscle building, strength development, and improving athletic performance.",

        keywordsAr: [
            "احمد",
            "أحمد",
            "كمال الاجسام",
            "كمال الأجسام",
            "عضلات",
            "بناء العضلات",
            "قوة",
            "تمارين",
            "مدرب"
        ],

        keywordsEn: [
            "ahmed",
            "bodybuilding",
            "muscle",
            "muscles",
            "strength",
            "workout",
            "coach"
        ]
    },


    {
        id: 2,
        icon: "🏃",

        nameAr: "محمد علي",
        nameEn: "Mohammed Ali",

        specialtyAr: "مدرب اللياقة البدنية",
        specialtyEn: "Fitness Coach",

        experienceAr: "6 سنوات خبرة",
        experienceEn: "6 Years Experience",

        descriptionAr:
            "يساعدك على تحسين لياقتك البدنية وخسارة الوزن بطريقة صحية.",

        descriptionEn:
            "Helps you improve your fitness and lose weight in a healthy way.",

        keywordsAr: [
            "محمد",
            "لياقة",
            "لياقة بدنية",
            "خسارة الوزن",
            "وزن",
            "كارديو",
            "تمارين",
            "مدرب"
        ],

        keywordsEn: [
            "mohammed",
            "fitness",
            "fitness coach",
            "weight loss",
            "cardio",
            "workout",
            "coach"
        ]
    },


    {
        id: 3,
        icon: "🥊",

        nameAr: "خالد حسن",
        nameEn: "Khaled Hassan",

        specialtyAr: "مدرب الملاكمة",
        specialtyEn: "Boxing Coach",

        experienceAr: "7 سنوات خبرة",
        experienceEn: "7 Years Experience",

        descriptionAr:
            "متخصص في الملاكمة واللياقة القتالية وتطوير السرعة والتحمل.",

        descriptionEn:
            "Specialized in boxing, combat fitness, speed, and endurance development.",

        keywordsAr: [
            "خالد",
            "ملاكمة",
            "قتال",
            "سرعة",
            "تحمل",
            "لياقة",
            "تمارين",
            "مدرب"
        ],

        keywordsEn: [
            "khaled",
            "boxing",
            "combat",
            "speed",
            "endurance",
            "fitness",
            "coach"
        ]
    },


    {
        id: 4,
        icon: "🧘",

        nameAr: "سارة أحمد",
        nameEn: "Sarah Ahmed",

        specialtyAr: "مدربة اليوغا والمرونة",
        specialtyEn: "Yoga & Flexibility Coach",

        experienceAr: "5 سنوات خبرة",
        experienceEn: "5 Years Experience",

        descriptionAr:
            "متخصصة في تمارين اليوغا والمرونة والاسترخاء وتحسين التوازن.",

        descriptionEn:
            "Specialized in yoga, flexibility, relaxation, and balance improvement.",

        keywordsAr: [
            "سارة",
            "يوغا",
            "مرونة",
            "استرخاء",
            "توازن",
            "تمارين",
            "مدربة"
        ],

        keywordsEn: [
            "sarah",
            "yoga",
            "flexibility",
            "relaxation",
            "balance",
            "workout",
            "coach"
        ]
    },


    {
        id: 5,
        icon: "🏋️‍♀️",

        nameAr: "نورة عبدالله",
        nameEn: "Noura Abdullah",

        specialtyAr: "مدربة اللياقة النسائية",
        specialtyEn: "Women's Fitness Coach",

        experienceAr: "6 سنوات خبرة",
        experienceEn: "6 Years Experience",

        descriptionAr:
            "متخصصة في برامج اللياقة النسائية وتمارين القوة وحرق الدهون.",

        descriptionEn:
            "Specialized in women's fitness programs, strength training, and fat burning.",

        keywordsAr: [
            "نورة",
            "لياقة نسائية",
            "نساء",
            "قوة",
            "حرق الدهون",
            "تمارين",
            "مدربة"
        ],

        keywordsEn: [
            "noura",
            "women",
            "women fitness",
            "strength",
            "fat burning",
            "workout",
            "coach"
        ]
    },


    {
        id: 6,
        icon: "⚡",

        nameAr: "عمر خالد",
        nameEn: "Omar Khaled",

        specialtyAr: "مدرب القوة والتحمل",
        specialtyEn: "Strength & Conditioning Coach",

        experienceAr: "9 سنوات خبرة",
        experienceEn: "9 Years Experience",

        descriptionAr:
            "متخصص في تمارين القوة والتحمل وتطوير الأداء الرياضي.",

        descriptionEn:
            "Specialized in strength, conditioning, endurance, and athletic performance.",

        keywordsAr: [
            "عمر",
            "قوة",
            "تحمل",
            "أداء رياضي",
            "لياقة",
            "تمارين",
            "مدرب"
        ],

        keywordsEn: [
            "omar",
            "strength",
            "conditioning",
            "endurance",
            "athletic",
            "fitness",
            "coach"
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
// محتوى صفحة المدربين
// =====================================

if (trainersPage) {

    trainersPage.innerHTML = `

        <section class="trainers-header">

            <h1
                data-ar="مدربونا 💪"
                data-en="Our Trainers 💪">

                مدربونا 💪

            </h1>

            <p
                data-ar="تعرف على فريقنا من المدربين المحترفين واختر المدرب المناسب لتحقيق أهدافك الرياضية."
                data-en="Meet our professional trainers and choose the right coach to achieve your fitness goals.">

                تعرف على فريقنا من المدربين المحترفين واختر المدرب المناسب لتحقيق أهدافك الرياضية.

            </p>

        </section>


        <!-- =================================
             البحث
        ================================== -->

        <section class="search-section">

            <h2
                data-ar="ابحث عن مدرب 🔍"
                data-en="Search for a Trainer 🔍">

                ابحث عن مدرب 🔍

            </h2>

            <div class="search-box">

                <input
                    type="text"
                    id="trainerSearch"
                    data-ar-placeholder="اكتب اسم المدرب أو التخصص..."
                    data-en-placeholder="Type trainer name or specialty..."
                    placeholder="اكتب اسم المدرب أو التخصص...">

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
             المدربين
        ================================== -->

        <section class="trainers-section">

            <div
                id="trainersContainer"
                class="trainers-container">

            </div>

        </section>


        <!-- =================================
             رسالة الحجز الحديثة
        ================================== -->

        <div
            id="bookingToast"
            class="booking-toast">

            <div class="toast-icon">
                ✓
            </div>

            <div class="toast-content">

                <strong id="toastTitle">
                    تم اختيار المدرب
                </strong>

                <span id="toastTrainer">
                </span>

                <p id="toastMessage">
                    سيتم الانتقال إلى صفحة حجز الموعد.
                </p>

            </div>

            <button
                id="toastClose"
                class="toast-close"
                aria-label="Close">

                ×

            </button>

            <div class="toast-progress"></div>

        </div>

    `;

}


// =====================================
// عناصر المدربين
// =====================================

const trainersContainer =
    document.getElementById(
        "trainersContainer"
    );

const trainerSearch =
    document.getElementById(
        "trainerSearch"
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
// عرض المدربين
// =====================================

function displayTrainers(search = "") {

    if (!trainersContainer) {
        return;
    }

    trainersContainer.innerHTML = "";

    const searchText =
        normalizeText(search);


    const filteredTrainers =
        trainers.filter(trainer => {

            const name =
                currentLanguage === "ar"
                    ? trainer.nameAr
                    : trainer.nameEn;

            const specialty =
                currentLanguage === "ar"
                    ? trainer.specialtyAr
                    : trainer.specialtyEn;

            const experience =
                currentLanguage === "ar"
                    ? trainer.experienceAr
                    : trainer.experienceEn;

            const description =
                currentLanguage === "ar"
                    ? trainer.descriptionAr
                    : trainer.descriptionEn;

            const keywords =
                currentLanguage === "ar"
                    ? trainer.keywordsAr
                    : trainer.keywordsEn;


            const searchableText = [

                name,

                specialty,

                experience,

                description,

                ...keywords

            ]
                .map(normalizeText)
                .join(" ");


            return (
                searchText === "" ||
                searchableText.includes(searchText)
            );

        });


    // =================================
    // لا توجد نتائج
    // =================================

    if (filteredTrainers.length === 0) {

        trainersContainer.innerHTML = `

            <div class="no-results">

                ${
                    currentLanguage === "ar"
                        ? "لم يتم العثور على مدرب مطابق للبحث 🔍"
                        : "No matching trainer was found 🔍"
                }

            </div>

        `;

        return;
    }


    // =================================
    // عرض المدربين
    // =================================

    filteredTrainers.forEach(trainer => {

        const card =
            document.createElement("div");

        card.className =
            "trainer-card";


        const name =
            currentLanguage === "ar"
                ? trainer.nameAr
                : trainer.nameEn;

        const specialty =
            currentLanguage === "ar"
                ? trainer.specialtyAr
                : trainer.specialtyEn;

        const experience =
            currentLanguage === "ar"
                ? trainer.experienceAr
                : trainer.experienceEn;

        const description =
            currentLanguage === "ar"
                ? trainer.descriptionAr
                : trainer.descriptionEn;

        const bookingText =
            currentLanguage === "ar"
                ? "حجز موعد مع المدرب"
                : "Book an Appointment";


        card.innerHTML = `

            <div class="trainer-image">

                ${trainer.icon}

            </div>


            <div class="trainer-info">

                <h2>
                    ${name}
                </h2>

                <div class="specialty">
                    ${specialty}
                </div>

                <div class="experience">
                    ${experience}
                </div>

                <p>
                    ${description}
                </p>

                <button
                    class="booking-btn"
                    data-id="${trainer.id}">

                    ${bookingText}

                </button>

            </div>

        `;


        const button =
            card.querySelector(
                ".booking-btn"
            );


        button.addEventListener(
            "click",
            function () {

                bookTrainer(
                    Number(this.dataset.id)
                );

            }
        );


        trainersContainer.appendChild(card);

    });

}


// =====================================
// البحث
// =====================================

function performSearch() {

    currentSearch =
        trainerSearch
            ? trainerSearch.value
            : "";


    displayTrainers(
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


    const count =
        trainers.filter(trainer => {

            const name =
                currentLanguage === "ar"
                    ? trainer.nameAr
                    : trainer.nameEn;

            const specialty =
                currentLanguage === "ar"
                    ? trainer.specialtyAr
                    : trainer.specialtyEn;

            const experience =
                currentLanguage === "ar"
                    ? trainer.experienceAr
                    : trainer.experienceEn;

            const description =
                currentLanguage === "ar"
                    ? trainer.descriptionAr
                    : trainer.descriptionEn;

            const keywords =
                currentLanguage === "ar"
                    ? trainer.keywordsAr
                    : trainer.keywordsEn;


            const searchableText = [

                name,

                specialty,

                experience,

                description,

                ...keywords

            ]
                .map(normalizeText)
                .join(" ");


            return searchableText.includes(
                searchText
            );

        }).length;


    searchResult.textContent =
        currentLanguage === "ar"
            ? `تم العثور على ${count} مدرب`
            : `${count} trainer(s) found`;

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

if (trainerSearch) {

    trainerSearch.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                performSearch();

            }

        }
    );

}


// =====================================
// حجز المدرب
// =====================================

function bookTrainer(id) {

    const trainer =
        trainers.find(
            item => item.id === id
        );


    if (!trainer) {
        return;
    }


    const trainerName =
        currentLanguage === "ar"
            ? trainer.nameAr
            : trainer.nameEn;


    showBookingToast(
        trainerName
    );

}


// =====================================
// إظهار رسالة الحجز
// =====================================

function showBookingToast(trainerName) {

    const toast =
        document.getElementById(
            "bookingToast"
        );

    const toastTitle =
        document.getElementById(
            "toastTitle"
        );

    const toastTrainer =
        document.getElementById(
            "toastTrainer"
        );

    const toastMessage =
        document.getElementById(
            "toastMessage"
        );


    if (
        !toast ||
        !toastTitle ||
        !toastTrainer ||
        !toastMessage
    ) {

        return;

    }


    toastTitle.textContent =
        currentLanguage === "ar"
            ? "تم اختيار المدرب ✓"
            : "Trainer Selected ✓";


    toastTrainer.textContent =
        trainerName;


    toastMessage.textContent =
        currentLanguage === "ar"
            ? "سيتم الانتقال إلى صفحة حجز الموعد."
            : "You will be redirected to the appointment booking page.";


    toast.classList.remove("show");


    // إعادة تشغيل شريط الوقت
    const progress =
        toast.querySelector(
            ".toast-progress"
        );

    if (progress) {

        progress.style.animation = "none";

        void progress.offsetWidth;

        progress.style.animation = "";

    }


    setTimeout(() => {

        toast.classList.add("show");

    }, 20);


    clearTimeout(
        window.bookingToastTimer
    );


    window.bookingToastTimer =
        setTimeout(
            function() {

                toast.classList.remove(
                    "show"
                );

            },
            4500
        );

}


// =====================================
// إغلاق رسالة الحجز
// =====================================

const toastClose =
    document.getElementById(
        "toastClose"
    );


if (toastClose) {

    toastClose.addEventListener(
        "click",
        function() {

            const toast =
                document.getElementById(
                    "bookingToast"
                );

            if (toast) {

                toast.classList.remove(
                    "show"
                );

            }

            clearTimeout(
                window.bookingToastTimer
            );

        }
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


    document
        .querySelectorAll(
            "[data-ar][data-en]"
        )
        .forEach(element => {

            element.textContent =
                currentLanguage === "ar"
                    ? element.getAttribute("data-ar")
                    : element.getAttribute("data-en");

        });


    if (trainerSearch) {

        trainerSearch.placeholder =
            currentLanguage === "ar"
                ? trainerSearch.getAttribute(
                    "data-ar-placeholder"
                )
                : trainerSearch.getAttribute(
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

    displayTrainers(
        currentSearch
    );

}


// =====================================
// زر تغيير اللغة
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


            updateLanguage();

        }
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

displayTrainers(
    currentSearch
);