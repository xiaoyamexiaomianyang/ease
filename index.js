window.location.hash="#p1";
let clientHeight= window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
window.onresize=function(){
    hash=window.location.hash.slice(-1);
    if(hash<8){      
        window.location.hash=`#p${hash}`;
    }
}
//翻页
let open=1;
let mouseFun=(e) => {
    if(open==1){
        let ev=e || window.event;
        ev.preventDefault();
        let hash='';
        if(ev.deltaY>0 && open==1){
            open=0;  
            hash=window.location.hash.slice(-1);
            if(hash<8){      
                window.location.hash=`#p${hash-1+2}`;
            }
  }else if(ev.deltaY<0 && open==1){
            open=0;  
            hash=window.location.hash.slice(-1);
            if(1<hash){ 
                window.location.hash=`#p${hash-1}`;
            }
        }
        setTimeout(() => {
            open=1
        },200);   
    }
}
window.addEventListener('wheel',mouseFun,{passive:false});
window.onscroll=() => {
    cglx.style.animation='none';
    wlqz.style.opacity=0;
    cg.style.marginTop='300px';
    cg.style.opacity=0;
    qx.style.opacity=0;
    qxf4.style.opacity=0;
    hebt.style.opacity=0;
    hebtf3.style.marginLeft='-1000px';
    ys.style.opacity=0;
    ysf4.style.marginLeft='-1000px';
    sc.style.marginTop='-700px';
    sc.style.opacity=0;
    p8body.style.opacity=0;
    dt.style.marginLeft='50px';
    let hash=window.location.hash.slice(-1);
if(hash==1){
        cglx.style.animation='arise 2s';
}else if(hash==2){
        wlqz.style.opacity=1;
        cg.style.marginTop='50px';
        cg.style.opacity=1;
    }else if(hash==3){
    }else if(hash==4){
        qx.style.opacity=1;
        qxf4.style.opacity=1;
    }else if(hash==5){
        hebt.style.opacity=1;
        setTimeout(() => {
            hebtf3.style.marginLeft='0px';
        },1000)
    }else if(hash==6){
        ys.style.opacity=1;
        setTimeout(() => {
            ysf4.style.marginLeft='0px';
        },1000)
    }else if(hash==7){
        sc.style.opacity=1;
        sc.style.marginTop='0px';
    }else{
        p8body.style.opacity=1;
        dt.style.marginLeft='0px';
    }
}
//鼠标悬停更换图片
let hover=(e) => {
    let dataSrc=e.target.parentNode.getAttribute('data-src')
    if(dataSrc!=null){
        let replace=document.getElementById('replace');
        replace.src=`./public/imgs/third_sub_${dataSrc}.png`
    }
}

// p3改变背景颜色
let liHover=(e) =>{
    let liEl=e.target
    let siblings=Array.from(liEl.parentNode.children);
    siblings.forEach(item => {
        item.classList.remove('li_hover')
    })
    liEl.classList.add('li_hover')
}

//提交验证
let submit= () => {
    let inputs=Array.from(document.getElementsByTagName('input'));
    let open=0
    inputs.forEach(item => {
        if(item.value=="" && open==0){
            alert(`请填写${item.getAttribute('data-text')}`)
            open=1;
        }
    })
}