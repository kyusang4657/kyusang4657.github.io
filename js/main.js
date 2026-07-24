// 모바일 메뉴에 필요한 요소를 한 번만 찾아 둡니다.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-navigation");
const navigationLinks = document.querySelectorAll('.primary-navigation a[href^="#"]');
const internalLinks = document.querySelectorAll('a[href^="#"]');
const currentYear = document.querySelector("#current-year");

function closeMenu() {
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "메뉴 열기");
    document.body.classList.remove("menu-open");
}

// 햄버거 버튼을 누를 때 메뉴와 접근성 상태를 함께 변경합니다.
menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    navigation.classList.toggle("is-open", !isOpen);
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "메뉴 열기" : "메뉴 닫기");
    document.body.classList.toggle("menu-open", !isOpen);
});

// 모바일 메뉴에서 항목을 선택하면 열린 메뉴를 닫습니다.
navigationLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

// 페이지 안의 링크를 누르면 고정 헤더 아래의 해당 영역으로 부드럽게 이동합니다.
internalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        const target = document.querySelector(link.getAttribute("href"));

        if (!target) {
            return;
        }

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

// 화면이 데스크톱 크기로 바뀌면 모바일 메뉴 상태를 초기화합니다.
window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
        closeMenu();
    }
});

// Footer 연도가 매년 자동으로 바뀌도록 현재 연도를 입력합니다.
currentYear.textContent = new Date().getFullYear();
