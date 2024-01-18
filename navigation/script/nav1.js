const gnb = document.querySelectorAll('.gnb > li')
const lnb = document.querySelectorAll('.lnb')
const nav_bg = document.querySelector('.nov_bg')
console.log(gnb, lnb)

nav_bg.style.height = 0;
nav_bg.style.transition = '0.3s';
for(let l of lnb){
    l.style.height = '0'
    l.style.overflow = 'hidden'
    l.style.transition = 'height 0.3s'
}
// 1. 메뉴1~3 모두 제어하기 위한 반복 for 문 생성
// 2개 이상 한번에 제어하고싶은 대상이 == gnb 단독 1개 
// 다중 for가 아닌 gnb에 해당하는 for 1개만 생성
/* for(let g of gnb){ 
    for(let l of lnb){
        //2. 이벤트 대상 확인 "g" 이벤트 함수 생성
        g.addEventListener('mouseover',()=>{
            //3. 이벤트 조건 만족시 실행 대상이 이벤트 대상의 상대적인 관계에 해당된다면
            //가족관계 속성을 활용해서 상대적으로 잡아 원하는 속성을 처리한다.
            //가족관계 속성 : parenrElement, parentNode, nextSibling,
            //previousSibling, children,childNode
            l.style.height = '150px'
            nav_bg.style.height = '150px'
        })
        g.addEventListener('mouseout',()=>{
            l.style.height = '0'
        })
    }
} */ //한꺼번에 서브메뉴 나오기

//1.'.gnb > li' 모두 접근하기 위한 for 생성
for(let g of gnb){
     //2. gnb에 마우스 이벤트 시 lnb를 모두 제어하고 싶다면 
    //lnb에 모두 접근하기 위한 for 추가 생성
    //3. 이벤트 대상 확인 후 "g" 이벤트 함수 생성
        g.addEventListener('mouseover',()=>{
            //4. 위 이벤트 조건이 만족되었을때 lnb 모두 출력
            // 모두 출력 하는 변수 대상 확인 'l' 관련 속성 적용
            g.children[1].style.height = '150px'
            nav_bg.style.height = '150px'
        })
        g.addEventListener('mouseout',()=>{
            g.children[1].style.height = '0'
        })
} //차례차례 나오기


for(let g of gnb){
    g.addEventListener('mouseover',()=>{
        g.children[1].style.display = 'block'
    })
    g.addEventListener('mouseout',()=>{
        g.children[1].style.display = 'none'
    })
}