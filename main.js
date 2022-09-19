// 떨어져 있는지 offset 값을 계산하기
// 스크롤과 클릭 이벤트 작성하기
const btt = document.querySelector('#back-to-top');
const docElem = document.documentElement; // 문서 자체를 가져오는 것
let offset; // 얼마나 내렸을 때 뜨게할지 설정 document 길이
let scrollPos; // document 자체의 스크롤 양
let docHeight; // document 자체의 길이

// 문서 높이 계산하기
// docHeight = docElem.scrollHeight; // 전체 높이 구해오는 법
//docHeight = docElem.offsetHeight; //도 동일한 기능임
// 브라우저마다 높이 계산 방식이 달라서 다른 숫자가 뜸.
// 두가지 방법중에 높은 값을 쓰기로 한다.

/** 
 * Math.max(100,800) 둘중 큰 거 반환
  Math.min(100,800) 둘중 장은 거 반환
*/

docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);

if (docHeight != 'undefined') {
  /* 0 또는 '' 도 같은 결과나옴*/
    offset = docHeight / 4; // body밑에 남은 공간이 1/4남았을 때 나타나도록.
  }


// 스크롤 이벤트 추가
window.addEventListener('scroll',() => {
  scrollPos = docElem.scrollTop;
  console.log(scrollPos);

  //bbt.className = 'test' 클레스에 뭐가 있든 이름을 바꾸는 것.
  btt.className = (scrollPos > offset) ? 'visible' : '' ;

})

/**
 * 여기까지 했을 때, 주소창에 보면 #이 보인다.
 * 링크가 걸려서 처음으로 돌아간다는 얘기다.
 * 링크로 인해 가는게 아니라 스크롤을 0으로 만들어서 이동해야한다.
 */

btt.addEventListener('click', (ev)=>{ // ev : 기본속성을 물고 들어오기
  ev.preventDefault(); // 링크의 본연의 속성 막아버리기
  // docElem.scrollTop = 0; 너무 확올라감
  scrollToTop();
})

function scrollToTop(){
  // 일정시간마다 할 일
  // let scrollInterval = setInterval(할일, 시간)
  // 0.0015초 = 15
  // 할일 = fonction(){실제로 할 일}
  // 실제로 할일 스크롤이 0이 아닐 떄 window.scrollBy(0,-55);
  // 스크롤이 0이면 setInterval을 멈춰라. clear

  let scrollInterval = setInterval(()=>{
    if(scrollPos != 0){
      window.scrollBy(0,-55);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);

}



