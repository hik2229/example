var scrollBody = $('.fix_motion');
var scrollHeight; //스크롤의 높이
var sectionOffsetTop;
var sectionScrollTop;
var scrollRealHeight; // 스크롤 실제 움직이는 높이
var winScrollTop;
var scrollPercent;
var percent;

function scrollFunc() {
  scrollHeight = scrollBody.height(); //.fixmotion 높이값
  sectionOffsetTop = scrollBody.offset().top; //.fixmotion이 화면위에 닿는지점
  scrollRealHeight = scrollHeight - $(window).height(); //.fixmotion 중 마지막 100vh 뺀 높이
  sectionScrollTop = $(window).scrollTop() - sectionOffsetTop; //.fixmotion에서 0%로 시작 위해
  scrollPercent = sectionScrollTop / scrollRealHeight;//실제가동범위에서 스크롤 이동값 계산(소수)
  percent = scrollPercent * 100;
  console.log(percent);

  var deviceImg = $('.device_fix .slide_wrap .slide .child');
  var imgWidth = deviceImg.width();

  if(percent >= 0 && percent < 25){
    slideChange(imgWidth * 0);
    $('.device_fix .slide_wrap .slide .child1').addClass('active');
  }else if(percent >= 25 && percent < 50){
    slideChange(imgWidth * 1);
    $('.device_fix .slide_wrap .slide .child2').addClass('active');

  }else if(percent >= 50 && percent < 75){
    slideChange(imgWidth * 2);
    $('.device_fix .slide_wrap .slide .child3').addClass('active');

  }else if(percent >= 75){
    slideChange(imgWidth * 3);
    $('.device_fix .slide_wrap .slide .child4').addClass('active');
  }

  if(percent < 0){
    $('.device_fix .slide_wrap .slide .child').removeClass('active');
  }
}


function slideChange(moveX) {
  var slide = $('.device_fix .slide_wrap .slide');
  slide.css({transform:'translateX(' + -moveX + 'px)'});
}

$(window).scroll(function(){
  scrollFunc();
});

scrollFunc();