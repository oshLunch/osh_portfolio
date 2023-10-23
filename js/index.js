$(function () {

    $(function () {
        // bg 함수
        let bg = $('.bg');

        // 헤더부분 함수
        let header = $('header');
        let navItem = $('header .menu ul li');
        let dateNum = $("header .inner span");
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var date = now.getDate();

        // 헤더 나타내는 애니메이션
        header.animate({
            opacity: 1
        }, 1000);

        // 헤더 년,월,일
        dateNum.eq(0).text(year);
        dateNum.eq(1).text(month);
        dateNum.eq(2).text(date);


        // home 페이지 애니메이션 함수
        let miniTitle = $('.main_visual .title strong');
        let mainTitle = $('.main_visual .title h2');
        let mouse = $('.main_visual .scroll_down');

        // home 페이지 애니메이션 트리거
        miniTitle.addClass('on');
        mainTitle.addClass('on');
        mouse.delay(2000).animate({
            opacity: 1
        }, 1000);


        // about페이지 애니메이션 함수
        let aboutTitle = $('.profile .inner .title');
        let aboutImg = $('.profile .info .about figure');
        let aboutProfile = $('.profile .info .about > div');
        let aboutCareer = $('.profile .info .text .career');
        let aboutSkill = $('.profile .info .text .skill');


        // project 페이지 애니메이션 함수
        let projectTitle = $('.project .title');
        let projectSlide = $('.project .slide');


        // design 페이지 함수 선언
        let designTitle = $('.design .title');
        let designTag = $('.design .tag');
        let tagBtn = $('.design .tag ul li');

        let eventFrame = $('.design .event_frame');
        let detailFrame = $('.design .detail_frame');

        let eventList = $('.design .event_frame .list');

        let cloneList = eventList.clone();
        eventList.attr('id', 'origin');
        cloneList.attr('id', 'clone');


        // contact 페이지 함수 선언
        let contactTitle = $('.contact .title');
        let contactThanks = $('.contact .subject .thanks');
        let contactMail = $('.contact .subject .mail');
        let emailName = $('.contact .subject .mail form .m_name');
        let emailAddress = $('.contact .subject .mail form .m_address');
        let emailTel = $('.contact .subject .mail form .m_tel');
        let emailMessage = $('.contact .subject .mail form .m_text');


        // fullpage 설정, 페이지 넘길 시 애니메이션 트리거 설정
        var myFullpage = new fullpage('#fullpage', {
            navigation: false,
            slidesNavigation: true,
            lazyLoad: true,
            credits: { enabled: false },
            anchors: ['home', 'about', 'project', 'design', 'contact'],
            afterLoad: function (origin, destination, direction) {
                if (destination.index == 0) {            // home 페이지로 이동했을 때
                    // 상단 헤더 네비게이션 표시
                    navItem.removeClass('on');
                    navItem.eq(0).addClass('on');

                    // 배경 애니메이션 트리거
                    bg.removeClass('on');

                    // 배경 색 변경
                    bg.css({
                        'background-color': 'rgba(0, 0, 0, 0.1)'
                    });
                }

                else if (destination.index == 1) {      // about 페이지로 이동했을 때
                    // 상단 헤더 네비게이션 표시
                    navItem.removeClass('on');
                    navItem.eq(1).addClass('on');

                    // 이동하며 나타나는 부분
                    aboutTitle.addClass('show');
                    aboutImg.addClass('show');
                    aboutProfile.addClass('show');
                    aboutCareer.addClass('show');
                    aboutSkill.addClass('show');

                    // 배경 애니메이션 트리거
                    if (bg.hasClass('on') == true) {
                        bg.removeClass('on');
                        setTimeout(function () {
                            bg.addClass('on');
                        }, 500);
                    } else {
                        bg.addClass('on');
                    };

                    // 배경 색 변경
                    bg.css({
                        'background-color': '#FEFCF3'
                    });
                }

                else if (destination.index == 2) {      // project 페이지로 이동했을 때
                    // 상단 헤더 네비게이션 표시
                    navItem.removeClass('on');
                    navItem.eq(2).addClass('on');

                    // 이동하며 나타나는 부분
                    projectTitle.addClass('show');
                    projectSlide.addClass('show');

                    // 배경 애니메이션 트리거
                    if (bg.hasClass('on') == true) {
                        bg.removeClass('on');
                        setTimeout(function () {
                            bg.addClass('on');
                        }, 500);
                    } else {
                        bg.addClass('on');
                    }

                    // 배경 색 변경
                    bg.css({
                        'background-color': '#B4CFB0'
                        /* F5EBE0 */
                    });
                }

                else if (destination.index == 3) {      // design 페이지로 이동했을 때
                    // 상단 헤더 네비게이션 표시
                    navItem.removeClass('on');
                    navItem.eq(3).addClass('on');

                    // 이동하며 나타나는 부분
                    designTitle.addClass('show');
                    designTag.addClass('show');
                    eventFrame.addClass('show');

                    // 슬라이드쇼 트리거
                    setTimeout(function () {
                        eventList.addClass('origin');
                        cloneList.addClass('clone');
                    }, 2400);

                    // 배경 애니메이션 트리거
                    if (bg.hasClass('on') == true) {
                        bg.removeClass('on');
                        setTimeout(function () {
                            bg.addClass('on');
                        }, 500);
                    } else {
                        bg.addClass('on');
                    }

                    // 배경 색 변경
                    bg.css({
                        'background-color': '#F0DBDB'
                    });
                }

                else if (destination.index == 4) {      // contact 페이지로 이동했을 때
                    // 상단 헤더 네비게이션 표시
                    navItem.removeClass('on');
                    navItem.eq(4).addClass('on');

                    // 이동하며 나타나는 부분
                    contactTitle.addClass('show');
                    contactThanks.addClass('show');
                    contactMail.addClass('show');

                    // 배경 애니메이션 트리거
                    if (bg.hasClass('on') == true) {
                        bg.removeClass('on');
                        setTimeout(function () {
                            bg.addClass('on');
                        }, 500);
                    } else {
                        bg.addClass('on');
                    }

                    // 배경 색 변경
                    bg.css({
                        'background-color': '#F5EBE0'
                    });
                }
            }
        });

        // 상단 헤더 네비게이션 클릭시
        navItem.click(function () {
            navItem.removeClass('on');
            $(this).addClass('on');
        });


        // 팬시박스 설정
        Fancybox.bind("[data-fancybox]", {
            // Your custom options
        });


        // design 페이지 리스트 클론 위치설정
        cloneList.appendTo(eventFrame);
        cloneList.css({
            'position': 'absolute',
            'top': '0',
            'left': '6268px'
        })


        // design 페이지 변경버튼
        tagBtn.click(function () {
            if ($(this).index() == 0) {
                tagBtn.removeClass('on');
                $(this).addClass('on');

                detailFrame.removeClass('on');
                eventFrame.addClass('on');

                if (eventFrame.hasClass('move')) {
                    eventFrame.removeClass('move');
                }
            } else {
                tagBtn.removeClass('on');
                $(this).addClass('on');

                eventFrame.removeClass('on');
                detailFrame.addClass('on');
            }
        });


        // design 페이지 슬라이드 정지, 재시작 함수
        function paused() {
            eventList.css({
                'animation-play-state': 'paused'
            })

            cloneList.css({
                'animation-play-state': 'paused'
            })
        };

        function running() {
            eventList.css({
                'animation-play-state': 'running'
            })

            cloneList.css({
                'animation-play-state': 'running'
            })
        };


        // design 페이지 슬라이드 마우스 올릴 시 정지, 재시작 
        eventFrame.mouseenter(function () {
            paused();
        });

        eventFrame.mouseleave(function () {
            running();
        });


        // 디자인 슬라이드 이미지 클릭 시 클론 이미지들은 갤러리에서 제외
        let cloneGallery = $('.design .event_frame #clone .item a');
        cloneGallery.attr('data-fancybox', '');
        

        // 영어, 숫자, ., @만 입력 가능하다
        $('#email').keyup(function () {
            $(this).val($(this).val().replace(/[^a-z A-Z 0-9 @ .]/g, ""));
        });

        // 숫자만 입력 가능, 전화번호 사이에 하이픈('-') 추가
        $('#tel').keyup(function () {
            $(this).val($(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})/,"$1-$2-$3").replace("--", "-") );
        });

        // JSON으로 보내지는 form 데이터를 AJAX 양식으로 변경한다
        // JSON 결과 페이지로 넘어가지 않도록 해준다
        $("#emailForm").submit(function (event) {
            // Prevent the default submit behavior
            event.preventDefault();
            
            emailName.removeClass('error');
            emailAddress.removeClass('error');
            emailTel.removeClass('error');
            emailMessage.removeClass('error');

            let current_html_form = $(this);
            let action_url = current_html_form.attr('action');
            // Grab the form data using the FormData Object
            // Later, we'll use the data in the ajax request.
            let form_data = new FormData(document.getElementById('emailForm'));

            if($("#name").val() != '') {
                if(($("#email").val() != '' && $("#tel").val() != '') |
                    ($("#email").val() != '' | $("#tel").val() != '')) {
                        if($("#message").val() != '') {
                            $.ajax({
                                type: "POST",
                                url: action_url,
                                data: form_data,
                                processData: false,
                                contentType: false,
                                success: function (data) {
                                    alert('메일이 전송되었습니다. 확인 후 회신드리겠습니다.');
                                    $('#name').val('');
                                    $('#email').val('');
                                    $('#tel').val('');
                                    $('#message').val('');
                                },
                                error: function (jQXHR, textStatus, errorMessage) {
                                    alert('메일 전송에 실패하였습니다. 잠시 후 다시 시도해주세요.');
                                    $('#name').val('');
                                    $('#email').val('');
                                    $('#tel').val('');
                                    $('#message').val('');
                                },
                            });
                        } else {
                            event.preventDefault();
                            emailMessage.addClass('error');
                        }

                } else {
                    event.preventDefault();
                    emailAddress.addClass('error');
                    emailTel.addClass('error');
                }

            } else {
                event.preventDefault();
                emailName.addClass('error');
            };
        });
    });
});