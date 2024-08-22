const body = document.querySelector('body')
const sidebar = body.querySelector('nav')
const toggle = body.querySelector('.toggle')
const searchBtn = body.querySelector('.search-box')
const modeSwitch = body.querySelector('.toggle-switch')
const modeText = body.querySelector('.mode-text')
const language = body.querySelector('.language')
const languageSwitch = body.querySelector('.language-switch')
const english = body.querySelector('.english')
const chinese = body.querySelector('.chinese')
const pagelanguage = document.getElementById('page-language')
// 用于响应式网页 
const home = body.querySelector('.home');  
const col = document.getElementsByClassName("col");
const row = document.getElementsByClassName("row");
const homeHeader=document.getElementById('header')
// const menu=body.querySelector('.menu')
// const menuToggle=document.getElementById('menu-toggle')

// menuToggle.addEventListener('click',()=>{
//     menu.classList.toggle('visible');
// })


const search = document.getElementById('search')
const fafu = document.getElementById("fafu")
const chaoxing = document.getElementById("chaoxing")
const yuketang = document.getElementById("yuketang")
const mooc = document.getElementById("mooc")
const baidu = document.getElementById("baidu")
const quark = document.getElementById("quark")
const tencent = document.getElementById("tencent")
const aliyun = document.getElementById("aliyun")
const tongyi = document.getElementById("tongyi")
const bing = document.getElementById("bing")
const kimi = document.getElementById("kimi")
const csdn = document.getElementById("csdn")
const bili = document.getElementById("bili")
const zhihu = document.getElementById("zhihu")
const cnki = document.getElementById("cnki")
const xiezuo = document.getElementById("xiezuo")
const deepl = document.getElementById("deepl")


var regex_fafu = /.*农.*/;
var regex_chaoxing = /.*(学).*/;
var regex_mooc = /.*(慕).*/;
var regex_yuketang = /.*(雨).*/;
var regex_baidu = /.*(百).*/;
var regex_quark = /.*(夸).*/;
var regex_aliyun = /.*(阿).*/;
var regex_tencent = /.*(腾).*/;
var regex_tongyi = /.*(通).*/;
var regex_bing = /.*(必).*/;
var regex_kimi = /.*(k).*/;
var regex_csdn = /.*(c).*/;
var regex_bili = /.*(b).*/;
var regex_zhihu = /.*(知乎).*/;
var regex_cnki = /.*(知网).*/;
var regex_xiezuo = /.*(写).*/;
var regex_deepl = /.*(de).*/;


toggle.addEventListener('click', () => {
    sidebar.classList.toggle('close')
})
searchBtn.addEventListener('click', () => {
    sidebar.classList.remove('close')
})
modeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        modeText.innerText = "Light mode"
    } else {
        modeText.innerText = "Dark mode"
    }
})

language.addEventListener('click', () => {
    language.classList.toggle('close')
})
// 加上if判断后可以在.language-switch上点击选择了当前页面语言时不再多此一举跳转
english.addEventListener('click', function (e) {
    if (pagelanguage.classList.contains('english-page')) {
        e.preventDefault();
    }
    else location.href = "./index-en.html";
    // 这两种写法都行
    // if(!pagelanguage.classList.contains('english-page')){
    //     location.href = "./index-en.html";
    // }

})
chinese.addEventListener('click', function (e) {
    if (!pagelanguage.classList.contains('chinese-page')) {
        location.href = "./index.html";
    }
})

search.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        var value = search.value;
        if (value.trim() === '') {
            // 学trim()方法
            alert("无匹配内容，请输入");
            return;
        }
        e.preventDefault();


        if (regex_fafu.test(value)) {
            var link = document.createElement('a');
            link.href = '#to-school';
            link.click();
            // 学怎么动态跳转及其原理
            fafu.classList.add('search-hover');
            setTimeout(function () {
                fafu.classList.remove('search-hover');
            }, 2000);
            //实现用户输入后触发元素的鼠标悬浮（hover）效果，并在几秒后恢复原效果
        }
        else if (regex_chaoxing.test(value)) {
            var link = document.createElement('a');
            link.href = '#to-school';
            link.click();
            chaoxing.classList.add('search-hover');
            setTimeout(function () {
                chaoxing.classList.remove('search-hover');
            }, 2000);
        }
        else if (regex_yuketang.test(value)) {
            var link = document.createElement('a');
            link.href = '#to-school';
            link.click();
            yuketang.classList.add('search-hover');
            setTimeout(function () {
                yuketang.classList.remove('search-hover');
            }, 2000);
        }
        else if (regex_mooc.test(value)) {
            var link = document.createElement('a');
            link.href = '#to-school';
            link.click();
            mooc.classList.add('search-hover');
            setTimeout(function () {
                mooc.classList.remove('search-hover');
            }, 2000);
        }
        else if (regex_bili.test(value)) {
            var link = document.createElement('a');
            link.href = '#to-school';
            link.click();
            bili.classList.add('search-hover');
            setTimeout(function () {
                bili.classList.remove('search-hover');
            }, 2000);
        }
        else if (regex_zhihu.test(value)) {
            var link = document.createElement('a');
            link.href = '#to-school';
            link.click();
            zhihu.classList.add('search-hover');
            setTimeout(function () {
                zhihu.classList.remove('search-hover');
            }, 2000);
        }
        else if (regex_cnki.test(value)) {
            var link = document.createElement('a');
            link.href = '#to-school';
            link.click();
            cnki.classList.add('search-hover');
            setTimeout(function () {
                cnki.classList.remove('search-hover');
            }, 2000);
        }
        else if (regex_xiezuo.test(value)) {
            var link = document.createElement('a');
            link.href = '#to-school';
            link.click();
            xiezuo.classList.add('search-hover');
            setTimeout(function () {
                xiezuo.classList.remove('search-hover');
            }, 2000);
        }
        else if (regex_deepl.test(value)) {
            var link = document.createElement('a');
            link.href = '#to-school';
            link.click();
            deepl.classList.add('search-hover');
            setTimeout(function () {
                deepl.classList.remove('search-hover');
            }, 2000);
        }
        else if (regex_aliyun.test(value)) {
            var link = document.createElement('a');
            link.href = '#to-cloud';
            link.click();
            aliyun.classList.add('search-hover');
            setTimeout(function () {
                aliyun.classList.remove('search-hover');
            }, 2000);
        }
        else if (regex_baidu.test(value)) {
            var link = document.createElement('a');
            link.href = '#to-cloud';
            link.click();
            baidu.classList.add('search-hover');
            setTimeout(function () {
                baidu.classList.remove('search-hover');
            }, 2000);
        }
        else if (regex_tencent.test(value)) {
            var link = document.createElement('a');
            link.href = '#to-cloud';
            link.click();
            tencent.classList.add('search-hover');
            setTimeout(function () {
                tencent.classList.remove('search-hover');
            }, 2000);
        }
        else if (regex_quark.test(value)) {
            var link = document.createElement('a');
            link.href = '#to-cloud';
            link.click();
            quark.classList.add('search-hover');
            setTimeout(function () {
                quark.classList.remove('search-hover');
            }, 2000);
        }
        else if (regex_tongyi.test(value)) {
            var link = document.createElement('a');
            link.href = '#to-AI';
            link.click();
            tongyi.classList.add('search-hover');
            setTimeout(function () {
                tongyi.classList.remove('search-hover');
            }, 2000);
        }
        else if (regex_kimi.test(value)) {
            var link = document.createElement('a');
            link.href = '#to-AI';
            link.click();
            kimi.classList.add('search-hover');
            setTimeout(function () {
                kimi.classList.remove('search-hover');
            }, 2000);
        }
        else if (regex_bing.test(value)) {
            var link = document.createElement('a');
            link.href = '#to-AI';
            link.click();
            bing.classList.add('search-hover');
            setTimeout(function () {
                bing.classList.remove('search-hover');
            }, 2000);
        }
        else if (regex_csdn.test(value)) {
            var link = document.createElement('a');
            link.href = '#to-tools';
            link.click();
            // window.location.hash='to-school';
            // 这个是通过改变hash值的方法，只要hash值已经改过一次，同样的输入再按下回车
            // 即使这时又滑动页面到其他位置，hash值还是和原来一样就不会再改，
            // 因此就不会页面反复再次跳转，只能一次性跳转
            csdn.classList.add('search-hover');
            setTimeout(function () {
                csdn.classList.remove('search-hover');
            }, 2000);
        }

    }
})



// window.addEventListener('resize', () => {

//     if(window.innerWidth<1100){
//         if(window.innerWidth<768){
//             sidebar.classList.add('small-screen');
//             sidebar.classList.remove('close');
//             home.classList.add('small-screen');
    
//             for(var i=0;i<row.length;i++){
//                 row[i].classList.add('small-screen');
//             }
//             for(var i=0;i<col.length;i++){
//                 col[i].classList.add('small-screen');
//             }
//         }
//         else{
//             sidebar.classList.remove('small-screen');
//             home.classList.remove('small-screen');
//             sidebar.classList.add('close');
//             for(var i=0;i<row.length;i++){
//                 row[i].classList.remove('small-screen');
//             }
//             for(var i=0;i<col.length;i++){
//                 col[i].classList.remove('small-screen');
//             }
//         }
//     }
//     else{
//         sidebar.classList.remove('close');
//     }
//     // 有else分支才能屏幕宽度又>1000时才能恢复原样

// })

// 这种方法代码最简洁，并且能避免在css中代码重复
// 这种用js写响应式网页的方法还需要再css写对应的.close或.small-screen类
// 有一个弊端是逻辑太复杂，而且关闭开发者工具时，明明网页宽度发生了变化，
// 但不会触发这个事件再次调整页面布局,这时就会显示错误的布局



// window.dispatchEvent(new Event('resize'));

// 初始页面加载时也检查一次，以确保正确应用类，如果用css的@media也不用再加这句
// 确保在页面加载时也执行一次检查，这样即使在页面加载时窗口宽度已经小于1000px，.sidebar元素也会正确地应用close类
//dispatchEvent() 方法会向一个指定的事件目标派发一个 Event


window.addEventListener('resize',()=>{
    if (window.innerWidth < 768) {
        sidebar.classList.remove('close');

        sidebar.classList.add('small-screen');
        home.classList.add('small-screen');

        for (var i = 0; i < col.length; i++) {
            col[i].classList.add('small-screen');
        }
    }
    else if (window.innerWidth < 1100) {
        sidebar.classList.add('close');

        sidebar.classList.remove('small-screen');
        home.classList.remove('small-screen');

        for (var i = 0; i < col.length; i++) {
            col[i].classList.remove('small-screen');
        }

        for (var i = 0; i < col.length; i++) {
            col[i].classList.add('close');
        }
    }
    else{
        for (var i = 0; i < col.length; i++) {
            col[i].classList.remove('close');
        }
        sidebar.classList.remove('close');
        // 下面这三个remove是为了防止直接从small-screen变宽为normal的布局
        // 不加这三个remove在这种情况下没办法恢复正确的布局，
        // 因为在small-screen布局下add的这三个class名还在没被remove掉，继续生效
        sidebar.classList.remove('small-screen');
        home.classList.remove('small-screen');

        for (var i = 0; i < col.length; i++) {
            col[i].classList.remove('small-screen');
        }
    }
})

window.dispatchEvent(new Event('resize'));
