import $ from 'jquery'

$(function(){
//  각각 미디어 작업 
let windowW = $(window).width();
if(windowW > 1160 ){
nav()
}
else if(windowW < 1159 && windowW > 980){
nav()
}
else if(windowW < 979 && windowW > 580){
  gallery();
  // tnav()
}
else if(windowW < 579){
  gallery();
  formData();
  // tnav();
}
//  포트폴리오: reset
$(window).on('resize',function(e){
  window.location.reload();
})

})

//  함수
function gallery(){
// 준비하기
const figureW = $('#all>figure').width();
console.log(figureW)
$('#all>figure:last').prependTo('#all')
$('#all').css('margin-left','-'+figureW+'px')
// evnet
$('#gallery>p.prev').on('click',function(e){
$('#all').animate({marginLeft:'+='+figureW+'px'},600,function(){
  $('#all>figure:last').prependTo('#all')
  $('#all').css('margin-left','-'+figureW+'px')
})
})
 $('#gallery>p.next').on('click',function(e){
$('#all').animate({marginLeft:'-='+figureW+'px'},600,function(){
  $('#all>figure:first').appendTo('#all')
  $('#all').css('margin-left','-'+figureW+'px')
})
  
 })
}

function formData(){
const $liForm = $('#box04 form ul>li>input,#box04 form ul>li>textarea');
$liForm.removeAttr('placeholder')
$liForm.on('focus',function(e){
  $(this).prev('label').fadeOut(400)
})
$liForm.on('blur',function(e){
 let str = $(this).val()
 if(str === ''){
  $(this).prev('label').fadeIn(400)
 }
})
}
// nav
// wnav
function nav(){
  $('nav li>a').on('click',function(e){
    const navA = $(this).attr('href');
    const aPos = $(navA).offset().top;
    const headerHeight = $('header').innerHeight();
    $('html,body').animate({scrollTop:aPos-headerHeight},800)
  })
}

// tnav,mobild

// aside

// top



//  modal
const H5 = document.querySelector('#modal h5')
const Img = document.querySelector('#modal figure>img')
const Figcaption = document.querySelector('#modal figure>figcaption')
const Year = document.querySelector('#modal dl>.year')
const Program = document.querySelector('#modal .program')
const Url = document.querySelector('#modal .url')
const Text = document.querySelector('#modal .text')
// 생성자 함수
function Modal(title,pic,year,program,url,text){
  this.title = title;
  this.pic = pic;
  this.year = year;
  this.program = program;
  this.url = url;
  this.text = text;
}
// prototype
Modal.Prototype.action = function(){
  H5.innerHTML = this.title;
  Img.setAttribute('src',this.pic);
  Figcaption.innerHTML = this.title;
  Year.innerHTML = this.year;
  Program.innerHTML = this.program;
  Url.innerHTML = this.url;
  Text.innerHTML = this.text;
}

// 인스턴스
let modal = [
  new Modal('title01','./images/pic01.png','2001','프로그램1','http://aaa1.com','text01'),
  new Modal('title02','./images/pic02.png','2002','프로그램1','http://aaa2.com','text02'),
  new Modal('title03','./images/pic03.png','2003','프로그램1','http://aaa3.com','text03'),
  new Modal('title04','./images/pic04.png','2004','프로그램1','http://aaa4.com','text04'),
  new Modal('title05','./images/pic01.png','2005','프로그램1','http://aaa5.com','text05'),
  new Modal('title06','./images/pic02.png','2006','프로그램1','http://aaa6.com','text06')
]
//  이벤트: figure-> click, #modal>.close
const btn = document.querySelectorAll('#box03 #all>figure')
const close = document.querySelector('#modal p.close')
//  이벤트 함수
btn.forEach(function(item){
  item.addEventListener('click',play)
})

close.addEventListener('click',stop)

function play(){
// #modal -> display 변경
// figure name

document.querySelector('#modal').style.display = 'block'
let num = this.getAttribute('name');
console.log(num)
modal[num-1].action;
}
function stop(){
  document.querySelector('modal').style.display = 'none'
// #modal -> display 정리
}
