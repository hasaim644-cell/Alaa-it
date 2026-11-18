// =====================================
// اللغة
// =====================================

const translations = {

    ar: {

        // ================================
        // شريط التنقل
        // ================================

        home: "الرئيسية",
        about: "من نحن",
        services: "الخدمات",
        plans: "الباقات",
        trainers: "المدربين",
        workouts: "التمارين",
        contact: "اتصل بنا",
        login: "تسجيل الدخول",

        languageButton: "English",

        // ================================
        // صفحة الباقات
        // ================================

        plansTitle: "الباقات والاشتراكات 💳",

        plansSubtitle:
            "اختر الباقة المناسبة لك وابدأ رحلتك الرياضية معنا.",

        searchTitle:
            "ابحث عن الباقة المناسبة",

        searchPlaceholder:
            "اكتب اسم الباقة...",

        searchButton:
            "🔎",

        searchAll:
            "عرض جميع الباقات",

        noResults:
            "لم يتم العثور على باقة بهذا الاسم.",

        noResultsTitle:
            "عذرًا، لم نجد ما تبحث عنه",

        noResultsMessage:
            "حاول كتابة اسم باقة أخرى أو استخدم كلمة بحث مختلفة.",

        plansNote:
            "جميع الأسعار المعروضة هي أسعار تجريبية لمشروع النظام ويمكن تعديلها من لوحة إدارة الصالة.",

        mostPopular:
            "الأكثر طلبًا ⭐",

        currency:
            "ريال",

        subscribe:
            "اشترك الآن",

        // ================================
        // نافذة الاشتراك
        // ================================

        subscriptionIn:
            "الاشتراك في",

        price:
            "السعر:",

        fullName:
            "الاسم الكامل",

        phone:
            "رقم الهاتف",

        email:
            "البريد الإلكتروني",

        confirmSubscription:
            "تأكيد الاشتراك",

        welcome:
            "مرحبًا",

        subscriptionSuccess:
            "تم تسجيل طلب الاشتراك في",

        successEnd:
            "بنجاح.",

        backToTop:
            "العودة إلى الأعلى",

        // ================================
        // الرسالة الحديثة
        // ================================

        successTitle:
            "تم الاشتراك بنجاح",

        successMessage:
            "مرحبًا {name} 👋، تم تسجيل طلبك في {plan} بنجاح.",

        close:
            "إغلاق",

        // ================================
        // الفوتر
        // ================================

        gymDescription:
            "نظام إدارة الصالة الرياضية",

        footerTitle:
            "روابط الصفحات",

        copyright:
            "جميع الحقوق محفوظة © GYM"

    },


    // =====================================
    // English
    // =====================================

    en: {

        // ================================
        // Navigation
        // ================================

        home: "Home",
        about: "About Us",
        services: "Services",
        plans: "Plans",
        trainers: "Trainers",
        workouts: "Workouts",
        contact: "Contact Us",
        login: "Login",

        languageButton:
            "العربية",

        // ================================
        // Plans page
        // ================================

        plansTitle:
            "Plans & Subscriptions 💳",

        plansSubtitle:
            "Choose the plan that suits you and start your fitness journey with us.",

        searchTitle:
            "Find the Right Plan",

        searchPlaceholder:
            "Search for a plan...",

        searchButton:
            "🔎",

        searchAll:
            "Show All Plans",

        noResults:
            "No plan was found with this name.",

        noResultsTitle:
            "Sorry, we couldn't find what you're looking for",

        noResultsMessage:
            "Try another plan name or use a different search word.",

        plansNote:
            "All displayed prices are sample prices for the system project and can be modified from the gym management dashboard.",

        mostPopular:
            "Most Popular ⭐",

        currency:
            "YER",

        subscribe:
            "Subscribe Now",

        // ================================
        // Subscription modal
        // ================================

        subscriptionIn:
            "Subscribe to",

        price:
            "Price:",

        fullName:
            "Full Name",

        phone:
            "Phone Number",

        email:
            "Email Address",

        confirmSubscription:
            "Confirm Subscription",

        welcome:
            "Welcome",

        subscriptionSuccess:
            "Your subscription request for",

        successEnd:
            "has been successfully registered.",

        backToTop:
            "Back to Top",

        // ================================
        // Modern Toast
        // ================================

        successTitle:
            "Subscription Successful",

        successMessage:
            "Welcome {name} 👋, your request for {plan} has been successfully registered.",

        close:
            "Close",

        // ================================
        // Footer
        // ================================

        gymDescription:
            "Gym Management System",

        footerTitle:
            "Page Links",

        copyright:
            "All Rights Reserved © GYM"

    }

};


// =====================================
// اللغة الحالية
// =====================================

let currentLanguage =
    localStorage.getItem("gymLanguage") || "ar";


// =====================================
// بيانات الباقات
// =====================================

const plans = [

    {
        id: 1,

        icon: "🥉",

        name: {
            ar: "الباقة الشهرية",
            en: "Monthly Plan"
        },

        price: "15",

        period: {
            ar: "شهريًا",
            en: "Monthly"
        },

        description: {
            ar: "الباقة المناسبة لمن يريد تجربة النادي والبدء في التدريب.",
            en: "A suitable plan for those who want to try the gym and start training."
        },

        features: {

            ar: [
                "الدخول إلى الصالة",
                "استخدام الأجهزة الرياضية",
                "الاستفادة من المرافق الأساسية",
                "متابعة العضوية"
            ],

            en: [
                "Gym access",
                "Use of fitness equipment",
                "Access to basic facilities",
                "Membership tracking"
            ]

        }

    },


    {
        id: 2,

        icon: "🥈",

        name: {
            ar: "الباقة الذهبية",
            en: "Gold Plan"
        },

        price: "40",

        period: {
            ar: "3 أشهر",
            en: "3 Months"
        },

        description: {
            ar: "خيار مناسب للاستمرار في التدريب وتحقيق نتائج أفضل.",
            en: "A suitable option for continuing training and achieving better results."
        },

        features: {

            ar: [
                "جميع مميزات الباقة الشهرية",
                "متابعة المدرب",
                "حجز مواعيد التدريب",
                "متابعة التقدم",
                "خصومات على بعض الخدمات"
            ],

            en: [
                "All monthly plan features",
                "Trainer follow-up",
                "Training appointment booking",
                "Progress tracking",
                "Discounts on selected services"
            ]

        },

        featured: true

    },


    {
        id: 3,

        icon: "🥇",

        name: {
            ar: "الباقة السنوية",
            en: "Annual Plan"
        },

        price: "120",

        period: {
            ar: "سنويًا",
            en: "Yearly"
        },

        description: {
            ar: "أفضل خيار لمن يريد الالتزام بالتدريب طوال العام.",
            en: "The best option for those who want to stay committed to training throughout the year."
        },

        features: {

            ar: [
                "جميع مميزات الباقة الذهبية",
                "متابعة مستمرة",
                "أولوية في الحجوزات",
                "استشارات تدريبية",
                "خصومات إضافية"
            ],

            en: [
                "All Gold Plan features",
                "Continuous follow-up",
                "Priority booking",
                "Training consultations",
                "Additional discounts"
            ]

        }

    }

];


// =====================================
// عناصر الصفحة
// =====================================

const navLinks =
    document.getElementById("navLinks");

const plansPage =
    document.getElementById("plansPage");

const footerLinks =
    document.getElementById("footerLinks");

const languageBtn =
    document.getElementById("languageBtn");


// =====================================
// روابط الصفحات
// =====================================

const pages = [

    {
        name: {
            ar: "الرئيسية",
            en: "Home"
        },
        link: "index.html"
    },

    {
        name: {
            ar: "من نحن",
            en: "About Us"
        },
        link: "about.html"
    },

    {
        name: {
            ar: "الخدمات",
            en: "Services"
        },
        link: "services.html"
    },

    {
        name: {
            ar: "الباقات",
            en: "Plans"
        },
        link: "plans.html"
    },

    {
        name: {
            ar: "المدربين",
            en: "Trainers"
        },
        link: "trainers.html"
    },

    {
        name: {
            ar: "التمارين",
            en: "Workouts"
        },
        link: "workouts.html"
    },

    {
        name: {
            ar: "اتصل بنا",
            en: "Contact Us"
        },
        link: "contact.html"
    },

    {
        name: {
            ar: "تسجيل الدخول",
            en: "Login"
        },
        link: "login.html"
    }

];


// =====================================
// إنشاء شريط التنقل
// =====================================

function renderNavbar() {

    if (!navLinks) {
        return;
    }

    navLinks.innerHTML = "";

    const currentPage =
        window.location.pathname.split("/").pop()
        || "index.html";


    pages.forEach(page => {

        const li =
            document.createElement("li");

        const a =
            document.createElement("a");

        a.href = page.link;

        a.textContent =
            page.name[currentLanguage];


        if (page.link === currentPage) {

            a.classList.add("active");

        }


        li.appendChild(a);

        navLinks.appendChild(li);

    });

}


// =====================================
// إنشاء روابط الفوتر
// =====================================

function renderFooter() {

    if (!footerLinks) {
        return;
    }

    footerLinks.innerHTML = "";


    pages.forEach(page => {

        const li =
            document.createElement("li");

        const a =
            document.createElement("a");

        a.href = page.link;

        a.textContent =
            page.name[currentLanguage];

        li.appendChild(a);

        footerLinks.appendChild(li);

    });

}


// =====================================
// إنشاء صفحة الباقات
// =====================================

function renderPlansPage() {

    if (!plansPage) {
        return;
    }


    const t =
        translations[currentLanguage];


    plansPage.innerHTML = `

        <!-- ==========================
             Hero
        =========================== -->

        <section class="plans-header">

            <div class="plans-header-content">

                <h1>
                    ${t.plansTitle}
                </h1>

                <p>
                    ${t.plansSubtitle}
                </p>

            </div>

        </section>


        <!-- ==========================
             Search
        =========================== -->

        <section class="plans-search">

            <h2>
                ${t.searchTitle}
            </h2>

            <div class="search-box">

                <input
                    type="text"
                    id="planSearch"
                    placeholder="${t.searchPlaceholder}"
                    autocomplete="off"
                >

                <button
                    id="planSearchBtn"
                    type="button"
                    title="${t.searchTitle}">

                    ${t.searchButton}

                </button>

            </div>

            <p id="searchResult"></p>

        </section>


        <!-- ==========================
             Plans
        =========================== -->

        <section class="plans-section">

            <div
                class="plans-container"
                id="plansContainer">
            </div>

            <p class="plans-note">
                ${t.plansNote}
            </p>

        </section>


        <!-- ==========================
             Subscription Modal
        =========================== -->

        <div
            id="planModal"
            class="plan-modal">

            <div class="plan-modal-content">

                <button
                    class="close-plan"
                    type="button"
                    onclick="closePlanModal()">

                    ✕

                </button>

                <div id="planModalContent"></div>

            </div>

        </div>


        <!-- ==========================
             Modern Toast
        =========================== -->

        <div
            id="planToast"
            class="plan-toast">

            <div class="toast-icon">
                ✓
            </div>

            <div class="toast-content">

                <strong id="toastTitle"></strong>

                <p id="toastMessage"></p>

            </div>

            <button
                type="button"
                id="toastClose"
                class="toast-close">

                ✕

            </button>

        </div>

    `;


    renderPlansCards();

    setupPlanSearch();

}


// =====================================
// عرض بطاقات الباقات
// =====================================

function renderPlansCards(filteredPlans = plans) {

    const plansContainer =
        document.getElementById("plansContainer");


    if (!plansContainer) {
        return;
    }


    const t =
        translations[currentLanguage];


    plansContainer.innerHTML = "";


    if (filteredPlans.length === 0) {

        plansContainer.innerHTML = `

            <div class="no-results">

                <div class="no-results-icon">
                    🔍
                </div>

                <h3>
                    ${t.noResultsTitle}
                </h3>

                <p>
                    ${t.noResultsMessage}
                </p>

            </div>

        `;

        return;

    }


    filteredPlans.forEach(plan => {

        const card =
            document.createElement("div");


        card.className =
            "plan-card";


        if (plan.featured) {

            card.classList.add("featured");

        }


        card.innerHTML = `

            ${
                plan.featured
                    ? `
                        <div class="plan-badge">

                            ${t.mostPopular}

                        </div>
                    `
                    : ""
            }


            <div class="plan-icon">

                ${plan.icon}

            </div>


            <h2>

                ${plan.name[currentLanguage]}

            </h2>


            <div class="price">

                <strong>

                    ${plan.price}

                </strong>

                <span>

                    ${t.currency}

                </span>

                <small>

                    / ${plan.period[currentLanguage]}

                </small>

            </div>


            <p class="plan-description">

                ${plan.description[currentLanguage]}

            </p>


            <ul class="plan-features">

                ${
                    plan.features[currentLanguage]
                        .map(
                            feature =>
                                `<li>${feature}</li>`
                        )
                        .join("")
                }

            </ul>


            <button
                type="button"
                class="subscribe-btn"
                onclick="openPlanModal(${plan.id})">

                ${t.subscribe}

            </button>

        `;


        plansContainer.appendChild(card);

    });

}


// =====================================
// البحث عن الباقات
// =====================================

function setupPlanSearch() {

    const searchInput =
        document.getElementById("planSearch");

    const searchButton =
        document.getElementById("planSearchBtn");

    const searchResult =
        document.getElementById("searchResult");


    if (!searchInput || !searchButton) {
        return;
    }


    function performSearch() {

        const value =
            searchInput.value
                .trim()
                .toLowerCase();


        // =============================
        // إذا كان البحث فارغًا
        // =============================

        if (value === "") {

            renderPlansCards();

            if (searchResult) {

                searchResult.textContent = "";

                searchResult.style.display = "none";

            }

            return;

        }


        const filteredPlans =
            plans.filter(plan => {

                const name =
                    plan.name[currentLanguage]
                        .toLowerCase();

                const description =
                    plan.description[currentLanguage]
                        .toLowerCase();

                return (
                    name.includes(value) ||
                    description.includes(value)
                );

            });


        renderPlansCards(filteredPlans);


        if (searchResult) {

            // =============================
            // توجد نتائج
            // =============================

            if (filteredPlans.length > 0) {

                searchResult.textContent =
                    `${filteredPlans.length} ${
                        currentLanguage === "ar"
                            ? "باقة متاحة"
                            : "plans found"
                    }`;

                searchResult.style.display = "block";

            }

            // =============================
            // لا توجد نتائج
            // =============================

            else {

                // إخفاء الرسالة القديمة
                // لأن الرسالة الحديثة موجودة داخل البطاقة

                searchResult.textContent = "";

                searchResult.style.display = "none";

            }

        }

    }


    searchButton.addEventListener(
        "click",
        performSearch
    );


    searchInput.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                performSearch();

            }

        }
    );

}


// =====================================
// فتح نافذة الاشتراك
// =====================================

window.openPlanModal =
    function(id) {

        const plan =
            plans.find(
                item =>
                    item.id === id
            );


        if (!plan) {
            return;
        }


        const modal =
            document.getElementById(
                "planModal"
            );


        const content =
            document.getElementById(
                "planModalContent"
            );


        const t =
            translations[currentLanguage];


        if (!modal || !content) {
            return;
        }


        content.innerHTML = `

            <div class="plan-modal-icon">

                ${plan.icon}

            </div>


            <h2>

                ${t.subscriptionIn}

                <span>

                    ${plan.name[currentLanguage]}

                </span>

            </h2>


            <p class="modal-price">

                ${t.price}

                <strong>
                    ${plan.price} ${t.currency}
                </strong>

                / ${plan.period[currentLanguage]}

            </p>


            <form
                class="subscription-form"
                id="subscriptionForm">


                <div class="form-group">

                    <label>
                        ${t.fullName}
                    </label>

                    <input
                        type="text"
                        id="memberName"
                        placeholder="${t.fullName}"
                        required
                    >

                </div>


                <div class="form-group">

                    <label>
                        ${t.phone}
                    </label>

                    <input
                        type="tel"
                        id="memberPhone"
                        placeholder="${t.phone}"
                        required
                    >

                </div>


                <div class="form-group">

                    <label>
                        ${t.email}
                    </label>

                    <input
                        type="email"
                        id="memberEmail"
                        placeholder="${t.email}"
                        required
                    >

                </div>


                <button
                    type="submit"
                    class="confirm-subscription">

                    ${t.confirmSubscription}

                </button>


            </form>

        `;


        modal.classList.add("show");

        document.body.style.overflow =
            "hidden";


        // =============================
        // تأكيد الاشتراك
        // =============================

        const subscriptionForm =
            document.getElementById(
                "subscriptionForm"
            );


        if (subscriptionForm) {

            subscriptionForm.addEventListener(
                "submit",
                function(event) {

                    event.preventDefault();


                    const name =
                        document.getElementById(
                            "memberName"
                        ).value.trim();


                    showPlanToast(
                        name,
                        plan.name[currentLanguage]
                    );


                    closePlanModal();

                }
            );

        }

    };


// =====================================
// الرسالة الحديثة Toast
// =====================================

function showPlanToast(name, planName) {

    const toast =
        document.getElementById(
            "planToast"
        );


    const title =
        document.getElementById(
            "toastTitle"
        );


    const message =
        document.getElementById(
            "toastMessage"
        );


    const close =
        document.getElementById(
            "toastClose"
        );


    if (!toast || !title || !message) {
        return;
    }


    const t =
        translations[currentLanguage];


    title.textContent =
        t.successTitle;


    message.textContent =
        t.successMessage
            .replace("{name}", name)
            .replace("{plan}", planName);


    toast.classList.add("show");


    if (close) {

        close.onclick =
            function() {

                toast.classList.remove("show");

            };

    }


    clearTimeout(
        window.planToastTimer
    );


    window.planToastTimer =
        setTimeout(
            function() {

                toast.classList.remove("show");

            },
            4500
        );

}


// =====================================
// إغلاق النافذة
// =====================================

window.closePlanModal =
    function() {

        const modal =
            document.getElementById(
                "planModal"
            );


        if (!modal) {
            return;
        }


        modal.classList.remove(
            "show"
        );


        document.body.style.overflow =
            "";

    };


// =====================================
// الضغط خارج النافذة
// =====================================

document.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById(
                "planModal"
            );


        if (
            modal &&
            event.target === modal
        ) {

            closePlanModal();

        }

    }
);


// =====================================
// تغيير اللغة
// =====================================

function changeLanguage() {

    currentLanguage =
        currentLanguage === "ar"
            ? "en"
            : "ar";


    localStorage.setItem(
        "gymLanguage",
        currentLanguage
    );


    if (currentLanguage === "ar") {

        document.documentElement.lang =
            "ar";

    }

    else {

        document.documentElement.lang =
            "en";

    }

    document.documentElement.dir =
        "rtl";


    if (languageBtn) {

        languageBtn.textContent =
            currentLanguage === "ar"
                ? "EN"
                : "عربي";

    }


    renderNavbar();

    renderFooter();

    renderPlansPage();

}


// =====================================
// زر اللغة
// =====================================

if (languageBtn) {

    languageBtn.addEventListener(
        "click",
        changeLanguage
    );

}


// =====================================
// تطبيق اللغة عند فتح الصفحة
// =====================================

if (currentLanguage === "ar") {

    document.documentElement.lang =
        "ar";

}
else {

    document.documentElement.lang =
        "en";

}

document.documentElement.dir =
    "rtl";


if (languageBtn) {

    languageBtn.textContent =
        currentLanguage === "ar"
            ? "EN"
            : "عربي";

}


// =====================================
// تشغيل الصفحة
// =====================================

renderNavbar();

renderFooter();

renderPlansPage();


// =====================================
// زر الوضع الليلي
// =====================================

const darkModeBtn =
    document.getElementById(
        "darkModeBtn"
    );


// استرجاع الوضع المحفوظ

if (
    localStorage.getItem(
        "gymDarkMode"
    ) === "dark"
) {

    document.body.classList.add(
        "dark-mode"
    );


    if (darkModeBtn) {

        darkModeBtn.textContent =
            "☀️";

    }

}


// =====================================
// تشغيل الوضع الليلي
// =====================================

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

const backToTop =
    document.getElementById(
        "backToTop"
    );


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