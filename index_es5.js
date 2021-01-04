'use strict';

window.location.hash = "#p1";
var clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
window.onresize = function () {
    var hash = window.location.hash.slice(-1);
    if (hash < 8) {
        window.location.hash = '#p' + hash;
    }
};
//翻页
var open = 1;
var mouseFun = function mouseFun(e) {
    if (open == 1) {
        var ev = e || window.event;
        ev.preventDefault();
        var _hash = '';
        if (ev.deltaY > 0 && open == 1) {
            open = 0;
            _hash = window.location.hash.slice(-1);
            if (_hash < 8) {
                window.location.hash = '#p' + (_hash - 1 + 2);
            }
        } else if (ev.deltaY < 0 && open == 1) {
            open = 0;
            _hash = window.location.hash.slice(-1);
            if (1 < _hash) {
                window.location.hash = '#p' + (_hash - 1);
            }
        }
        setTimeout(function () {
            open = 1;
        }, 200);
    }
};
window.addEventListener('wheel', mouseFun, { passive: false });
window.onscroll = function () {
    cglx.style.animation = 'none';
    wlqz.style.opacity = 0;
    cg.style.marginTop = '300px';
    cg.style.opacity = 0;
    qx.style.opacity = 0;
    qxf4.style.opacity = 0;
    hebt.style.opacity = 0;
    hebtf3.style.marginLeft = '-1000px';
    ys.style.opacity = 0;
    ysf4.style.marginLeft = '-1000px';
    sc.style.marginTop = '-700px';
    sc.style.opacity = 0;
    p8body.style.opacity = 0;
    dt.style.marginLeft = '50px';
    var hash = window.location.hash.slice(-1);
    if (hash == 1) {
        cglx.style.animation = 'arise 2s';
    } else if (hash == 2) {
        wlqz.style.opacity = 1;
        cg.style.marginTop = '50px';
        cg.style.opacity = 1;
    } else if (hash == 3) {} else if (hash == 4) {
        qx.style.opacity = 1;
        qxf4.style.opacity = 1;
    } else if (hash == 5) {
        hebt.style.opacity = 1;
        setTimeout(function () {
            hebtf3.style.marginLeft = '0px';
        }, 1000);
    } else if (hash == 6) {
        ys.style.opacity = 1;
        setTimeout(function () {
            ysf4.style.marginLeft = '0px';
        }, 1000);
    } else if (hash == 7) {
        sc.style.opacity = 1;
        sc.style.marginTop = '0px';
    } else {
        p8body.style.opacity = 1;
        dt.style.marginLeft = '0px';
    }
};
//鼠标悬停更换图片
var hover = function hover(e) {
    var dataSrc = e.target.parentNode.getAttribute('data-src');
    if (dataSrc != null) {
        var replace = document.getElementById('replace');
        replace.src = './public/imgs/third_sub_' + dataSrc + '.png';
    }
};

// p3改变背景颜色
var liHover = function liHover(e) {
    var liEl = e.target;
    var siblings = Array.from(liEl.parentNode.children);
    siblings.forEach(function (item) {
        item.classList.remove('li_hover');
    });
    liEl.classList.add('li_hover');
};

//提交验证
var submit = function submit() {
    var inputs = Array.from(document.getElementsByTagName('input'));
    var open = 0;
    inputs.forEach(function (item) {
        if (item.value == "" && open == 0) {
            alert('\u8BF7\u586B\u5199' + item.getAttribute('data-text'));
            open = 1;
        }
    });
};
