document.addEventListener("DOMContentLoaded", function () {

    // Page fade-in
    document.body.classList.add("page-loaded");

    // Highlight the current page in navigation
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // Automatic scrolling
    let isAutoScrolling = true;
    let resumeTimer;

    const scrollSpeed = 0.6;

    function autoScroll() {
        if (isAutoScrolling) {

            const atBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 2;

            if (!atBottom) {
                window.scrollBy(0, scrollSpeed);
            } else {
                isAutoScrolling = false;
            }
        }

        requestAnimationFrame(autoScroll);
    }

    autoScroll();

    // Pause when the user manually scrolls
    window.addEventListener("wheel", function () {
        isAutoScrolling = false;

        clearTimeout(resumeTimer);

        resumeTimer = setTimeout(function () {
            isAutoScrolling = true;
        }, 3000);
    });

    // Pause while using touch scrolling
    window.addEventListener("touchstart", function () {
        isAutoScrolling = false;

        clearTimeout(resumeTimer);

        resumeTimer = setTimeout(function () {
            isAutoScrolling = true;
        }, 3000);
    });

});
