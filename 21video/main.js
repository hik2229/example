var allVideos = $('.video');
var allplay = $('#play-all');
var video;


// ----- video 썸넬 커서 반응
/* allVideos.hover(
  function(){
    마우스 진입시
  }, function(){
    마우스 이탈시
  }
) */
allVideos.hover(
  function(){
    video = $(this).find('video'); //8개 비디오중 내가 클릭한 그것 中 tag이름 video
    console.log(video.get(0));
    /* html요소(body, header, div, h1, em...)
    get() => html요소의 첫번째 불러온다는 의미
    .eq(index번호) -> jquery객체의 순서 의미 */

  video.get(0).play(); //커서진입시 재생
  }, function(){
  video.get(0).pause(); //커서 벗어나면 정지
  }
);

// ----- 우상단 play/pause 버튼
allplay.click(function(){
  if(allplay.hasClass('on')){
    var vd = $('video'); //중괄호 안에 변수를 적는경우, 밖에서는 해당 변수가 사용안됨.
    allplay.removeClass('on');
    $('#play-all .play-all').text('Pause All');
    for(var i=0; i < vd.length; i++){ //비디오 갯수 = vd.length
      vd.get(i).play();
    }
  }else{
    var vd = $('video'); //위 if문의 변수가 중괄호 안에 있기 때문에 별도로 한번 더 적어줌
    allplay.addClass('on');
    $('#play-all .play-all').text('Play All');
    for(var i=0; i < vd.length; i++){ //비디오 갯수 = vd.length
      vd.get(i).pause();
    }
  }
});

