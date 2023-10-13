$(function () {
    let open = $('header .inner .menu_open');
    let close = $('header .inner .menu_close');
    let header = $('header');
    let depth01 = $('header .inner .mobile .gnb .depth01');
    let a = $('header .inner .mobile .gnb .depth01 > a');
    let depth02 = $('header .inner .mobile .gnb .depth01 .depth02');

    // 화면 사이즈에 따라 열기, 닫기버튼 보이기
    $(window).resize(function () {
        if ($(window).width() > 1025) {
            open.css({
                'display': 'none'
            })
            close.css({
                'display': 'none'
            })
            header.css({
                'border-bottom': 'none'
            })
        } else {
            if (depth01.css('display') == 'none') {
                open.css({
                    'display': 'block'
                })
            } else {
                close.css({
                    'display': 'block'
                })
                header.css({
                    'border-bottom': '1px solid black'
                })
            }
        }
    })

    // 모바일 버전 메뉴열기 버튼
    open.click(function () {
        open.css({
            'display': 'none'
        })
        close.css({
            'display': 'block'
        })
        header.css({
            'border-bottom': '1px solid black'
        })
        depth01.slideDown();
    })

    // 모바일 버전 메뉴닫기 버튼
    close.click(function () {
        close.css({
            'display': 'none'
        })
        open.css({
            'display': 'block'
        })
        header.css({
            'border-bottom': 'none'
        })
        depth02.slideUp();
        depth01.slideUp();
    })

    // 모바일 버전 아코디언 메뉴
    a.click(function () {
        if ($(this).next().css('display') == 'none') {
            depth02.slideUp();
            $(this).next().slideDown();
            a.css({
                'color': 'black'
            })
            $(this).css({
                'color': 'red'
            })
        } else {
            $(this).next().slideUp();
            $(this).css({
                'color': 'black'
            })
        }
    })
})