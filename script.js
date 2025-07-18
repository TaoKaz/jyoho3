document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainMenu = document.getElementById('main-menu');
    const globalNav = document.getElementById('global-nav');
    const backToTopButton = document.getElementById('back-to-top');

    // ハンバーガーメニューの開閉機能
    if (menuToggle && mainMenu) {
        menuToggle.addEventListener('click', function() {
            mainMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
            const isExpanded = menuToggle.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });

        // メニューアイテムがクリックされたらメニューを閉じる
        mainMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                if (mainMenu.classList.contains('active')) {
                    mainMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', false);
                }
            });
        });
    }

    // スクロール時の「トップへ戻る」ボタンの表示/非表示
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) { // 300pxスクロールしたら表示
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // スムーズスクロール
            });
        });
    }
});