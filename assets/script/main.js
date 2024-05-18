document.getElementById('hamburger').addEventListener('click', function() {
    var sideMenu = document.querySelector('.side-menu');
        sideMenu.classList.toggle('active'); // activeクラスをトグルする

 // サイドメニュー以外の場所をクリックした場合、メニューを閉じる
document.addEventListener('click', function (e) {
    if (!sideMenu.contains(e.target) && !hamburger.contains(e.target) && sideMenu.classList.contains('active')) {
        sideMenu.classList.remove('active');
    }
});
});



// slickの設定

$(document).ready(function(){
    $('.gallery__img').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    });
});


// アコーディオンの設定

// ページの全てのDOM要素が読み込まれて、初期化されてから実行。
$(document).ready(function() {
    // アコーディオン開閉ボタンのDOMを変数に格納。
    const accordionBtn = $(".accordion__head");
    // アコーディオン開閉ボタンがクリックされると、
    // 開閉ボタンの親要素（accordion__item）に、
    // activeというcssのclassが付与される。
    accordionBtn.on("click", function() {
        $(this).parent().toggleClass("active");
    });
});
