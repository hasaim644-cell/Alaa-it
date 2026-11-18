// =====================================
// صفحة تسجيل الدخول
// =====================================

const loginPage =
    document.getElementById("loginPage");


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

        if (!loginPage) {
            return;
        }

        renderLoginPage();

        setupLoginEvents();

        updateLanguage();

        loadDarkMode();

        setupBackToTop();

    }
);


// =====================================
// بناء صفحة تسجيل الدخول
// =====================================

function renderLoginPage() {

    loginPage.innerHTML = `

        <section class="login-section">

            <div class="login-decoration login-decoration-1"></div>
            <div class="login-decoration login-decoration-2"></div>


            <div class="login-card">


                <!-- =================================
                     عنوان تسجيل الدخول
                ================================== -->

                <div class="login-title">

                    <div class="login-icon">
                        🏋️
                    </div>

                    <span
                        class="login-badge"
                        data-ar="مرحبًا بك من جديد"
                        data-en="Welcome Back">

                        مرحبًا بك من جديد

                    </span>

                    <h1
                        data-ar="تسجيل الدخول"
                        data-en="Login">

                        تسجيل الدخول

                    </h1>

                    <div class="login-line"></div>

                    <p
                        data-ar="سجل دخولك إلى حسابك في GYM"
                        data-en="Sign in to your GYM account">

                        سجل دخولك إلى حسابك في GYM

                    </p>

                </div>


                <!-- =================================
                     النموذج
                ================================== -->

                <form id="loginForm">


                    <!-- البريد الإلكتروني -->

                    <div class="form-group">

                        <label
                            for="loginEmail"
                            data-ar="البريد الإلكتروني"
                            data-en="Email Address">

                            البريد الإلكتروني

                        </label>

                        <div class="input-wrapper">

                            <span class="input-icon">
                                📧
                            </span>

                            <input
                                type="email"
                                id="loginEmail"
                                placeholder="example@email.com"
                                data-placeholder-ar="example@email.com"
                                data-placeholder-en="example@email.com"
                                required>

                        </div>

                    </div>


                    <!-- كلمة المرور -->

                    <div class="form-group">

                        <label
                            for="loginPassword"
                            data-ar="كلمة المرور"
                            data-en="Password">

                            كلمة المرور

                        </label>

                        <div class="password-wrapper">

                            <span class="input-icon">
                                🔒
                            </span>

                            <input
                                type="password"
                                id="loginPassword"
                                placeholder="أدخل كلمة المرور"
                                data-placeholder-ar="أدخل كلمة المرور"
                                data-placeholder-en="Enter your password"
                                required>

                            <button
                                type="button"
                                class="show-password"
                                id="showPassword"
                                title="إظهار كلمة المرور">

                                👁️

                            </button>

                        </div>

                    </div>


                    <!-- =================================
                         الخيارات
                    ================================== -->

                    <div class="login-options">

                        <label class="remember">

                            <input
                                type="checkbox"
                                id="rememberMe">

                            <span
                                data-ar="تذكرني"
                                data-en="Remember me">

                                تذكرني

                            </span>

                        </label>


                        <a
                            href="#"
                            class="forgot-password"
                            id="forgotPassword"
                            data-ar="نسيت كلمة المرور؟"
                            data-en="Forgot password?">

                            نسيت كلمة المرور؟

                        </a>

                    </div>


                    <!-- =================================
                         زر تسجيل الدخول
                    ================================== -->

                    <button
                        type="submit"
                        class="login-btn">

                        <span
                            data-ar="تسجيل الدخول"
                            data-en="Login">

                            تسجيل الدخول

                        </span>

                        <span class="login-arrow">
                            ➜
                        </span>

                    </button>


                </form>


                <!-- =================================
                     أسفل البطاقة
                ================================== -->

                <div class="login-footer-text">

                    <span
                        data-ar="نظام إدارة الصالات الرياضية"
                        data-en="Gym Management System">

                        نظام إدارة الصالات الرياضية

                    </span>

                    <span class="footer-dot">
                        •
                    </span>

                    <span>
                        GYM 🏋️
                    </span>

                </div>


            </div>

        </section>


        <!-- =================================
             Toast
        ================================== -->

        <div id="loginToast"
             class="login-toast">

            <div class="toast-icon">
                ✓
            </div>

            <div class="toast-content">

                <strong id="toastTitle">
                    تم تسجيل الدخول
                </strong>

                <p id="toastMessage">
                    تم تسجيل الدخول بنجاح.
                </p>

            </div>

            <button
                id="toastClose"
                class="toast-close">

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
// أحداث تسجيل الدخول
// =====================================

function setupLoginEvents() {

    const loginForm =
        document.getElementById("loginForm");

    const showPassword =
        document.getElementById("showPassword");

    const loginPassword =
        document.getElementById("loginPassword");

    const languageBtn =
        document.getElementById("languageBtn");

    const darkModeBtn =
        document.getElementById("darkModeBtn");

    const toastClose =
        document.getElementById("toastClose");

    const forgotPassword =
        document.getElementById("forgotPassword");


    // =================================
    // إظهار وإخفاء كلمة المرور
    // =================================

    if (showPassword && loginPassword) {

        showPassword.addEventListener(
            "click",
            function () {

                if (
                    loginPassword.type ===
                    "password"
                ) {

                    loginPassword.type =
                        "text";

                    showPassword.textContent =
                        "🙈";

                }

                else {

                    loginPassword.type =
                        "password";

                    showPassword.textContent =
                        "👁️";

                }

            }
        );

    }


    // =================================
    // تسجيل الدخول
    // =================================

    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const email =
                    document
                    .getElementById("loginEmail")
                    .value
                    .trim();


                const password =
                    document
                    .getElementById("loginPassword")
                    .value
                    .trim();


                // التحقق

                if (
                    email === "" ||
                    password === ""
                ) {

                    showLoginToast(false);

                    return;

                }


                // كلمة المرور يجب أن تحتوي أحرف + أرقام + رموز

                const hasLetter =
                    /[A-Za-z\u0600-\u06FF]/.test(
                        password
                    );

                const hasNumber =
                    /[0-9]/.test(
                        password
                    );

                const hasSymbol =
                    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(
                        password
                    );

                if (
                    !hasLetter ||
                    !hasNumber ||
                    !hasSymbol
                ) {

                    showLoginToast(
                        false,
                        currentLanguage === "ar"
                            ? "كلمة المرور يجب أن تحتوي على أحرف وأرقام ورموز."
                            : "Password must contain letters, numbers, and symbols."
                    );

                    return;

                }


                // حفظ حالة الدخول

                localStorage.setItem(
                    "gymLoggedIn",
                    "true"
                );


                localStorage.setItem(
                    "gymUserEmail",
                    email
                );


                // حفظ تذكرني

                const rememberMe =
                    document.getElementById(
                        "rememberMe"
                    );


                if (
                    rememberMe &&
                    rememberMe.checked
                ) {

                    localStorage.setItem(
                        "gymRememberMe",
                        "true"
                    );

                }

                else {

                    localStorage.removeItem(
                        "gymRememberMe"
                    );

                }


                // إظهار الرسالة

                showLoginToast(true);

            }
        );

    }


    // =================================
    // نسيت كلمة المرور
    // =================================

    if (forgotPassword) {

        forgotPassword.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                showForgotPasswordToast();

            }
        );

    }


    // =================================
    // زر اللغة
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
    // إغلاق Toast
    // =================================

    if (toastClose) {

        toastClose.addEventListener(
            "click",
            hideLoginToast
        );

    }

}


// =====================================
// Toast تسجيل الدخول
// =====================================

let loginToastTimer;


function showLoginToast(success, customMessage) {

    const toast =
        document.getElementById(
            "loginToast"
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
                ? "تم تسجيل الدخول ✓"
                : "Login Successful ✓";

        message.textContent =
            currentLanguage === "ar"
                ? "مرحبًا بك، تم تسجيل دخولك بنجاح."
                : "Welcome back, you have logged in successfully.";

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
                    ? "يرجى إدخال البريد الإلكتروني وكلمة المرور."
                    : "Please enter your email and password."
            );

    }


    toast.classList.remove("show");

    void toast.offsetWidth;

    toast.classList.add("show");


    clearTimeout(
        loginToastTimer
    );


    loginToastTimer =
        setTimeout(
            hideLoginToast,
            4500
        );

}


function showForgotPasswordToast() {

    const toast =
        document.getElementById(
            "loginToast"
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


    toast.classList.remove(
        "error"
    );


    title.textContent =
        currentLanguage === "ar"
            ? "استعادة كلمة المرور"
            : "Password Recovery";


    message.textContent =
        currentLanguage === "ar"
            ? "سيتم إضافة خدمة استعادة كلمة المرور لاحقًا."
            : "Password recovery will be added later.";


    toast.classList.remove("show");

    void toast.offsetWidth;

    toast.classList.add("show");


    clearTimeout(
        loginToastTimer
    );


    loginToastTimer =
        setTimeout(
            hideLoginToast,
            4500
        );

}


function hideLoginToast() {

    const toast =
        document.getElementById(
            "loginToast"
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


    // Placeholders

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
// Navigation
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
                    "login.html"
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
// Footer
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