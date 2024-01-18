const gnb = document.querySelectorAll('.gnb > li')
const lnb = document.querySelectorAll('.lnb')
console.log(gnb, lnb)

for(let l of lnb){
    l.style.height = '0'
    l.style.overflow = 'hidden'
    l.style.transition = 'height 0.3s'
}
for(let g of gnb){
    for(let l of lnb){
        g.addEventListener('mouseover',()=>{
            l.style.height = '150px'
        })
        g.addEventListener('mouseout',()=>{
            l.style.height = '0'
        })
    }
} //한꺼번에 서브메뉴 나오기

/* for(let g of gnb){
        g.addEventListener('mouseover',()=>{
            g.children[1].style.height = '150px'
        })
        g.addEventListener('mouseout',()=>{
            g.children[1].style.height = '0'
        })
} */ //차례차례 나오기


/* for(let g of gnb){
    g.addEventListener('mouseover',()=>{
        g.children[1].style.display = 'block'
    })
    g.addEventListener('mouseout',()=>{
        g.children[1].style.display = 'none'
    })
} */