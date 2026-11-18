// =====================================
// NAVIGATION PAGES
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
// LANGUAGE
// =====================================

let currentLanguage =
    localStorage.getItem("gymLanguage") || "ar";


// =====================================
// WORKOUT DATA
// =====================================

const workouts = [

    {
        id: 1,

        nameAr: "تمارين كمال الأجسام",
        nameEn: "Bodybuilding",

        icon: "🏋️",

        categoryAr: "قوة",
        categoryEn: "Strength",

        levelAr: "متوسط",
        levelEn: "Intermediate",

        durationAr: "60 دقيقة",
        durationEn: "60 minutes",

        descriptionAr:
            "تمارين تساعد على بناء العضلات وزيادة القوة وتحسين شكل الجسم.",

        descriptionEn:
            "Exercises that help build muscles, increase strength and improve body shape.",

        keywordsAr: [
            "كمال الاجسام",
            "عضلات",
            "قوة",
            "حديد",
            "بناء العضلات"
        ],

        keywordsEn: [
            "bodybuilding",
            "muscle",
            "strength",
            "weights",
            "muscles"
        ]
    },

    {
        id: 2,

        nameAr: "تمارين الكارديو",
        nameEn: "Cardio",

        icon: "🏃",

        categoryAr: "كارديو",
        categoryEn: "Cardio",

        levelAr: "مبتدئ",
        levelEn: "Beginner",

        durationAr: "30 دقيقة",
        durationEn: "30 minutes",

        descriptionAr:
            "تمارين لتحسين صحة القلب وزيادة اللياقة وحرق السعرات الحرارية.",

        descriptionEn:
            "Exercises designed to improve heart health, fitness and burn calories.",

        keywordsAr: [
            "كارديو",
            "جري",
            "لياقة",
            "حرق الدهون",
            "سعرات"
        ],

        keywordsEn: [
            "cardio",
            "running",
            "fitness",
            "fat burning",
            "calories"
        ]
    },

    {
        id: 3,

        nameAr: "تمارين القوة",
        nameEn: "Strength Training",

        icon: "💪",

        categoryAr: "قوة",
        categoryEn: "Strength",

        levelAr: "متقدم",
        levelEn: "Advanced",

        durationAr: "50 دقيقة",
        durationEn: "50 minutes",

        descriptionAr:
            "برنامج تدريبي يركز على زيادة القوة وتحسين القدرة العضلية.",

        descriptionEn:
            "A training program focused on increasing strength and muscular performance.",

        keywordsAr: [
            "قوة",
            "عضلات",
            "تدريب",
            "أوزان",
            "تحمل"
        ],

        keywordsEn: [
            "strength",
            "muscle",
            "training",
            "weights",
            "endurance"
        ]
    },

    {
        id: 4,

        nameAr: "تمارين البطن",
        nameEn: "Abs Workout",

        icon: "🔥",

        categoryAr: "بطن",
        categoryEn: "Abs",

        levelAr: "متوسط",
        levelEn: "Intermediate",

        durationAr: "25 دقيقة",
        durationEn: "25 minutes",

        descriptionAr:
            "تمارين مخصصة لتقوية عضلات البطن وتحسين ثبات الجسم.",

        descriptionEn:
            "Exercises designed to strengthen abdominal muscles and improve body stability.",

        keywordsAr: [
            "بطن",
            "عضلات البطن",
            "كرش",
            "لياقة",
            "تقوية"
        ],

        keywordsEn: [
            "abs",
            "abdominal",
            "core",
            "fitness",
            "strength"
        ]
    },

    {
        id: 5,

        nameAr: "تمارين اليوغا",
        nameEn: "Yoga",

        icon: "🧘",

        categoryAr: "مرونة",
        categoryEn: "Flexibility",

        levelAr: "مبتدئ",
        levelEn: "Beginner",

        durationAr: "40 دقيقة",
        durationEn: "40 minutes",

        descriptionAr:
            "تمارين تساعد على تحسين المرونة والاسترخاء وتقليل التوتر.",

        descriptionEn:
            "Exercises that improve flexibility, relaxation and reduce stress.",

        keywordsAr: [
            "يوغا",
            "مرونة",
            "استرخاء",
            "توازن",
            "تمدد"
        ],

        keywordsEn: [
            "yoga",
            "flexibility",
            "relaxation",
            "balance",
            "stretching"
        ]
    },

    {
        id: 6,

        nameAr: "تمارين HIIT",
        nameEn: "HIIT",

        icon: "⚡",

        categoryAr: "كارديو",
        categoryEn: "Cardio",

        levelAr: "متقدم",
        levelEn: "Advanced",

        durationAr: "20 دقيقة",
        durationEn: "20 minutes",

        descriptionAr:
            "تمارين عالية الشدة تساعد على حرق الدهون وتحسين اللياقة خلال وقت قصير.",

        descriptionEn:
            "High-intensity exercises that help burn fat and improve fitness in a short time.",

        keywordsAr: [
            "هيت",
            "كارديو",
            "حرق الدهون",
            "شدة",
            "لياقة"
        ],

        keywordsEn: [
            "hiit",
            "cardio",
            "fat burning",
            "high intensity",
            "fitness"
        ]
    }

];


// =====================================
// CURRENT SEARCH
// =====================================

let currentSearch = "";


// =====================================
// NORMALIZE TEXT
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
// INITIALIZE PAGE
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    const workoutsPage =
        document.getElementById("workoutsPage");

    if (!workoutsPage) {
        return;
    }

    renderPage();

    setupEvents();

    updateLanguage();

    loadDarkMode();

    setupBackToTop();

});


// =====================================
// RENDER PAGE
// =====================================

function renderPage() {

    const workoutsPage =
        document.getElementById("workoutsPage");

    workoutsPage.innerHTML = `

        <!-- =====================================
             HEADER
        ====================================== -->

        <section class="workouts-header">

            <h1
                data-ar="التمارين"
                data-en="Workouts">
                التمارين
            </h1>

            <p
                data-ar="اختر التمرين المناسب لك وابدأ رحلتك نحو جسم أقوى وصحة أفضل."
                data-en="Choose the right workout for you and start your journey toward a stronger body and better health.">

                اختر التمرين المناسب لك وابدأ رحلتك نحو جسم أقوى وصحة أفضل.

            </p>

        </section>


        <!-- =====================================
             WORKOUT SECTION
        ====================================== -->

        <section class="workouts-section">


            <!-- =====================================
                 SEARCH
            ====================================== -->

            <section class="search-section">

                <h2
                    data-ar="ابحث عن تمرين 🔍"
                    data-en="Search for a Workout 🔍">

                    ابحث عن تمرين 🔍

                </h2>


                <div class="search-box">

                    <input
                        type="text"
                        id="workoutSearch"

                        data-ar-placeholder="اكتب اسم التمرين أو النوع..."
                        data-en-placeholder="Type workout or category..."

                        placeholder="اكتب اسم التمرين أو النوع..."
                    >


                    <button
                        id="searchBtn"

                        data-ar="بحث 🔍"
                        data-en="Search 🔍">

                        بحث 🔍

                    </button>

                </div>


                <p id="searchResult"></p>

            </section>


            <!-- =====================================
                 FILTER
            ====================================== -->

            <div class="workout-filter">

                <button
                    class="active"
                    data-filter="all"

                    data-ar="الكل"
                    data-en="All">

                    الكل

                </button>


                <button
                    data-filter="strength"

                    data-ar="القوة"
                    data-en="Strength">

                    القوة

                </button>


                <button
                    data-filter="cardio"

                    data-ar="الكارديو"
                    data-en="Cardio">

                    الكارديو

                </button>


                <button
                    data-filter="abs"

                    data-ar="البطن"
                    data-en="Abs">

                    البطن

                </button>


                <button
                    data-filter="flexibility"

                    data-ar="المرونة"
                    data-en="Flexibility">

                    المرونة

                </button>

            </div>


            <!-- =====================================
                 WORKOUTS
            ====================================== -->

            <div
                class="workouts-container"
                id="workoutsContainer">

            </div>

        </section>

    `;


    displayWorkouts();

}


// =====================================
// DISPLAY WORKOUTS
// =====================================

function displayWorkouts() {

    const container =
        document.getElementById("workoutsContainer");

    if (!container) {
        return;
    }


    let results = [...workouts];


    // البحث
    if (currentSearch !== "") {

        const search =
            normalizeText(currentSearch);


        results = results.filter(workout => {

            const name =
                currentLanguage === "ar"
                    ? workout.nameAr
                    : workout.nameEn;


            const category =
                currentLanguage === "ar"
                    ? workout.categoryAr
                    : workout.categoryEn;


            const description =
                currentLanguage === "ar"
                    ? workout.descriptionAr
                    : workout.descriptionEn;


            const keywords =
                currentLanguage === "ar"
                    ? workout.keywordsAr
                    : workout.keywordsEn;


            const searchableText =
                normalizeText(
                    name +
                    " " +
                    category +
                    " " +
                    description +
                    " " +
                    keywords.join(" ")
                );


            return searchableText.includes(search);

        });

    }


    // =====================================
    // DISPLAY
    // =====================================

    if (results.length === 0) {

        container.innerHTML = `

            <div
                style="
                    grid-column: 1 / -1;
                    text-align: center;
                    padding: 50px 20px;
                    color: #61717d;
                "
            >

                <div style="font-size:50px;">
                    🔍
                </div>

                <h2 style="margin:15px 0; color:#183b56;">

                    ${
                        currentLanguage === "ar"
                            ? "لم يتم العثور على تمارين"
                            : "No workouts found"
                    }

                </h2>

                <p>

                    ${
                        currentLanguage === "ar"
                            ? "حاول استخدام كلمة بحث أخرى."
                            : "Try using another search term."
                    }

                </p>

            </div>

        `;

        return;
    }


    container.innerHTML =
        results.map(workout => {

            const name =
                currentLanguage === "ar"
                    ? workout.nameAr
                    : workout.nameEn;

            const category =
                currentLanguage === "ar"
                    ? workout.categoryAr
                    : workout.categoryEn;

            const level =
                currentLanguage === "ar"
                    ? workout.levelAr
                    : workout.levelEn;

            const duration =
                currentLanguage === "ar"
                    ? workout.durationAr
                    : workout.durationEn;

            const description =
                currentLanguage === "ar"
                    ? workout.descriptionAr
                    : workout.descriptionEn;


            return `

                <article
                    class="workout-card"
                    data-category="${getFilterCategory(workout)}"
                >


                    <div class="workout-icon">
                        ${workout.icon}
                    </div>


                    <h2>
                        ${name}
                    </h2>


                    <p>
                        ${description}
                    </p>


                    <div class="workout-info">

                        <span>
                            🏷️ ${category}
                        </span>

                        <span>
                            📊 ${level}
                        </span>

                        <span>
                            ⏱️ ${duration}
                        </span>

                    </div>


                    <button
                        class="start-workout"
                        onclick="startWorkout(${workout.id})"

                        data-ar="ابدأ التمرين 🏋️"
                        data-en="Start Workout 🏋️">

                        ${
                            currentLanguage === "ar"
                                ? "ابدأ التمرين 🏋️"
                                : "Start Workout 🏋️"
                        }

                    </button>


                </article>

            `;

        }).join("");

}


// =====================================
// FILTER CATEGORY
// =====================================

function getFilterCategory(workout) {

    const name =
        normalizeText(workout.nameAr);

    if (
        name.includes("بطن")
    ) {
        return "abs";
    }

    if (
        name.includes("يوغا")
    ) {
        return "flexibility";
    }

    if (
        name.includes("كارديو") ||
        name.includes("هيت")
    ) {
        return "cardio";
    }

    if (
        name.includes("قوه") ||
        name.includes("كمال الاجسام")
    ) {
        return "strength";
    }

    return "all";
}


// =====================================
// FILTER WORKOUTS
// =====================================

function filterWorkouts(category) {

    const cards =
        document.querySelectorAll(".workout-card");


    cards.forEach(card => {

        const cardCategory =
            card.getAttribute("data-category");


        if (
            category === "all" ||
            cardCategory === category
        ) {

            card.style.display = "flex";

        } else {

            card.style.display = "none";

        }

    });

}


// =====================================
// SEARCH
// =====================================

function performSearch() {

    const input =
        document.getElementById("workoutSearch");

    const result =
        document.getElementById("searchResult");


    if (!input || !result) {
        return;
    }


    currentSearch =
        input.value.trim();


    displayWorkouts();


    // إعادة الفلتر إلى الكل
    document
        .querySelectorAll(".workout-filter button")
        .forEach(button => {

            button.classList.remove("active");

        });


    const allButton =
        document.querySelector(
            '.workout-filter button[data-filter="all"]'
        );


    if (allButton) {
        allButton.classList.add("active");
    }


    filterWorkouts("all");


    const count =
        document.querySelectorAll(
            ".workout-card"
        ).length;


    if (currentSearch === "") {

        result.textContent = "";

        return;
    }


    if (currentLanguage === "ar") {

        result.textContent =
            `تم العثور على ${count} تمرين`;

    } else {

        result.textContent =
            `${count} workout(s) found`;

    }

}


// =====================================
// START WORKOUT
// =====================================

function startWorkout(id) {

    const workout =
        workouts.find(
            item => item.id === id
        );


    if (!workout) {
        return;
    }


    const workoutName =
        currentLanguage === "ar"
            ? workout.nameAr
            : workout.nameEn;


    showWorkoutToast(workoutName);

}


// =====================================
// MODERN WORKOUT MESSAGE
// =====================================

function showWorkoutToast(workoutName) {

    let toast =
        document.getElementById("workoutToast");


    if (!toast) {

        toast =
            document.createElement("div");

        toast.id = "workoutToast";

        toast.className = "booking-toast";

        document.body.appendChild(toast);

    }


    const title =
        currentLanguage === "ar"
            ? "تم اختيار التمرين ✓"
            : "Workout Selected ✓";


    const message =
        currentLanguage === "ar"
            ? "يمكنك الآن البدء بهذا التمرين والاستفادة من البرنامج."
            : "You can now start this workout and follow the training program.";


    toast.innerHTML = `

        <div class="toast-icon">
            ✓
        </div>


        <div class="toast-content">

            <strong>
                ${title}
            </strong>

            <span>
                ${workoutName}
            </span>

            <p>
                ${message}
            </p>

        </div>


        <button
            class="toast-close"
            aria-label="Close">

            ×

        </button>


        <div class="toast-progress"></div>

    `;


    // إظهار الرسالة
    setTimeout(() => {

        toast.classList.add("show");

    }, 10);


    const closeButton =
        toast.querySelector(".toast-close");


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            () => {

                toast.classList.remove("show");

            }
        );

    }


    clearTimeout(
        window.workoutToastTimer
    );


    window.workoutToastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 4500);

}


// =====================================
// EVENTS
// =====================================

function setupEvents() {

    // البحث
    document.addEventListener(
        "click",
        function (event) {

            if (
                event.target &&
                event.target.id === "searchBtn"
            ) {

                performSearch();

            }

        }
    );


    // Enter في البحث
    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter" &&
                event.target &&
                event.target.id === "workoutSearch"
            ) {

                performSearch();

            }

        }
    );


    // الفلترة
    document.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    ".workout-filter button"
                );


            if (!button) {
                return;
            }


            const category =
                button.getAttribute(
                    "data-filter"
                );


            document
                .querySelectorAll(
                    ".workout-filter button"
                )
                .forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });


            button.classList.add("active");


            filterWorkouts(category);

        }
    );


    // اللغة
    const languageBtn =
        document.getElementById(
            "languageBtn"
        );


    if (languageBtn) {

        languageBtn.addEventListener(
            "click",
            toggleLanguage
        );

    }


    // الوضع الليلي
    const darkModeBtn =
        document.getElementById(
            "darkModeBtn"
        );


    if (darkModeBtn) {

        darkModeBtn.addEventListener(
            "click",
            toggleDarkMode
        );

    }

}


// =====================================
// UPDATE LANGUAGE
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
        .forEach(element => {

            element.textContent =
                currentLanguage === "ar"
                    ? element.getAttribute("data-ar")
                    : element.getAttribute("data-en");

        });


    // Placeholder البحث
    const searchInput =
        document.getElementById(
            "workoutSearch"
        );


    if (searchInput) {

        const placeholder =
            currentLanguage === "ar"
                ? searchInput.getAttribute(
                    "data-ar-placeholder"
                )
                : searchInput.getAttribute(
                    "data-en-placeholder"
                );


        searchInput.placeholder =
            placeholder;
    }


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


    // Navigation
    updateNavigation();


    // Footer
    updateFooter();


    // إعادة عرض التمارين
    displayWorkouts();


    // تحديث نتيجة البحث
    if (currentSearch !== "") {

        const result =
            document.getElementById(
                "searchResult"
            );


        const count =
            document.querySelectorAll(
                ".workout-card"
            ).length;


        if (result) {

            result.textContent =
                currentLanguage === "ar"
                    ? `تم العثور على ${count} تمرين`
                    : `${count} workout(s) found`;

        }

    }

}


// =====================================
// NAVIGATION
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
        pages.map(page => {

            const pageName =
                currentLanguage === "ar"
                    ? page.nameAr
                    : page.nameEn;


            const isActive =
                page.link === "workouts.html";


            return `

                <li>

                    <a
                        href="${page.link}"
                        class="${isActive ? "active" : ""}">

                        ${pageName}

                    </a>

                </li>

            `;

        }).join("");

}


// =====================================
// FOOTER
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
        pages.map(page => {

            const pageName =
                currentLanguage === "ar"
                    ? page.nameAr
                    : page.nameEn;


            return `

                <li>

                    <a href="${page.link}">
                        ${pageName}
                    </a>

                </li>

            `;

        }).join("");

}


// =====================================
// TOGGLE LANGUAGE
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
// DARK MODE
// =====================================

function loadDarkMode() {

    const savedMode =
        localStorage.getItem(
            "gymDarkMode"
        );


    if (savedMode === "enabled") {

        document.body.classList.add(
            "dark-mode"
        );

        updateDarkModeIcon();

    }

}


// =====================================
// TOGGLE DARK MODE
// =====================================

function toggleDarkMode() {

    document.body.classList.toggle(
        "dark-mode"
    );


    if (
        document.body.classList.contains(
            "dark-mode"
        )
    ) {

        localStorage.setItem(
            "gymDarkMode",
            "enabled"
        );

    } else {

        localStorage.setItem(
            "gymDarkMode",
            "disabled"
        );

    }


    updateDarkModeIcon();

}


// =====================================
// DARK MODE ICON
// =====================================

function updateDarkModeIcon() {

    const darkModeBtn =
        document.getElementById(
            "darkModeBtn"
        );


    if (!darkModeBtn) {
        return;
    }


    darkModeBtn.textContent =
        document.body.classList.contains(
            "dark-mode"
        )
            ? "☀️"
            : "🌙";

}


// =====================================
// BACK TO TOP
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

                backToTop.style.display =
                    "flex";

            } else {

                backToTop.style.display =
                    "none";

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