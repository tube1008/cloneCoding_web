// 왼쪽 썸네일 이미지 JS
// 1. small_thumnail-a 마우스를 올리면
// 2. big_thumnail-img(src) 값이 변경된다. (ex) big1이 big2 이미지 변경

const item_detail = document.querySelector('.item_detail');
const small_thumnail = item_detail.querySelectorAll('.small_thumnail a');
const big_thumnail = item_detail.querySelector('.big_thumnail img');
console.log(small_thumnail, big_thumnail, item_detail);

small_thumnail[0].addEventListener('mouseover', function(){
    big_thumnail.src = "./dog_immages/bigdog1.jpg"
})
small_thumnail[1].addEventListener('mouseover', function(){
    big_thumnail.src = "./dog_immages/bigdog2.jpg"
})

// 가격 할인 정보 클릭 시 나오는 정보 팝업
// 1. 팝업 숨기기
// 2. i 클릭하면 팝업 보이기 

const price_info = item_detail.querySelector('.price i[class$=info]')
const price_info_open = item_detail.querySelector('.price .open')
console.log(price_info, price_info_open)

price_info_open.style.display = 'none';
// price_info_open.style = 'display:none';

price_info.addEventListener('click', function(){
    price_info_open.style.display = 'block';
})

// 내일 출발 i 클릭 시 팝업 출력하고 팝업 내 x 클릭 시 파업 닫히기 JS
// 1. 팝업 숨기기
// 2. i 클릭시 팝업 출력
// 3. x 클릭 시 팝업 닫히기 

const delivery_info = item_detail.querySelector('.benefit_shipping i[class$=info]');
const delivery_popup = item_detail.querySelector('.benefit_shipping .open')
const delivery_popup_close = delivery_popup.querySelector('.close');
console.log(delivery_info, delivery_popup, delivery_popup_close);

delivery_popup.style.display = 'none';
delivery_info.addEventListener('click', function(){
    delivery_popup.style.display = 'block';
})

delivery_popup_close.addEventListener('click', function(){
    delivery_popup.style.display ='none';
})
