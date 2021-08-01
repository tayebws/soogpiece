//search toggle button
$('.search-toggle').addClass('closed');

$('.search-toggle .search-icon').click(function (e) {
  if ($('.search-toggle').hasClass('closed')) {
    $('.dropdown1').css({ "display": "inline-block" });
    $('.search-toggle').removeClass('closed').addClass('opened');
    $('.search-toggle, .search-container').addClass('opened');
    // $('#search-terms').focus();
  } else {
    $('.search-toggle').removeClass('opened').addClass('closed');
    $('.search-toggle, .search-container').removeClass('opened');
  }
});

//cat toggle button
$('.cat-toggle').addClass('closed');

$('.cat-toggle-btn').click(function (e) {
  if ($('.cat-toggle').hasClass('closed')) {
    $('.cat-toggle').css({ "display": "block", "z-index": "10", "position": "absolute" });
    $('.cat-toggle-sub-menu').css({ "display": "block" });
    $('.cat-toggle').removeClass('closed').addClass('opened');
    $('.cat-toggle').addClass('opened');
    // $('#cat-terms').focus();
  } else {

    $('.cat-toggle').removeClass('opened').addClass('closed');
    $('.cat-toggle').css({ "display": "none" });
    // $('.cat-toggle').removeClass('opened');
  }
});

//mobile menu toggle button
$('.msubparent').click(function (e) {
  $('.msubchild1').css({ "display": "none" });
  $('.msubchild').css({ "display": "block" });
});
$('.msubparent1').click(function (e) {
  $('.msubchild').css({ "display": "none" });
  $('.msubchild1').css({ "display": "block" });
});

$(document).on("pagecreate", "#pageone", function () {
  $("body").on("swipe", function () {
    $('#open-sidebar').css({ "display": "block" });
    $('#close-sidebar').css({ "display": "none" });
    $('.ui-page').css({ "height": "100%", "overflow-y": "auto" });
    document.getElementById("mySidebar").style.display = "none";
    $('.header-mobile-main').css({ "position": "relative", "left": "0px" });
    $('#content').css({ "position": "relative", "left": "0px" });
  });
});

$(document).ready(function () {
  var id = '';
  var src = '';
  $('.dropdown .dropdown').hover(function () {
    id = $(this).attr('id');
    src = $("#" + id + "-img").attr('src');
    var res = src.replace("imgs/gray", "imgs/gcolor");
    // alert(id);
    $("#" + id + "-img").attr('src', res);
  }, function () {
    id = $(this).attr('id');
    src = $("#" + id + "-img").attr('src');
    var res = src.replace("imgs/gcolor", "imgs/gray");
    $("#" + id + "-img").attr('src', res);
  });
});

$('a[data-slide]').click(function (e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.slider-nav').slick('slickGoTo', slideno - 1);
});
$("#filter").click(function () {
  $(".filter-div").show();
});
$("#mobile-filter").click(function () {
  $(".dropdown1").show();
});
$(".dropdown1").mouseleave(function () {
  $(".dropdown1").hide();
});
$(".filter-div").mouseleave(function () {
  $(".filter-div").hide();
});

$('.slider-for').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  asNavFor: '.slider-nav',
  autoplay: true,
  autoplaySpeed: 2000,
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  focusOnSelect: true,
  arrows: false,
  centerMode: true,
  autoplaySpeed: 2000,
});

/******start-Big-Slider******/
$('#carouselExampleControls').carousel({
  interval: 4000,
  pause: false
})
// var slickopts = {
//   slidesToShow: 5, //change rows when slide move

//   // rows: 4,
//   // Removes the linear order. Would expect card 5 to be on next row, not stacked in groups.
//   responsive: [{
//     breakpoint: 1930,
//     settings: {
//       slidesToShow: 5,
//       slidesToScroll: 3,
//       rows: 8,
//       slidesToScroll: 3,
//     }
//   },
//   {
//     breakpoint: 992,
//     settings: {
//       slidesToShow: 4
//     }
//   },
//   {
//     breakpoint: 776,
//     settings: {
//       slidesToShow: 3,
//       infinite: true,
//       rows: 1 // This doesn't appear to work in responsive (Mac/Chrome)
//     }
//   }]
// };
// $('.carousel').slick(slickopts);
/******End-Big-Slider******/

$(document).ready(function () {
  $('#mySidebar').slideAndSwipe();
});

// $(document).ready(function() {
//   var pageWidth = $(window).width();
//   var body= document.getElementsByTagName("head")[0];
//   var script= document.createElement("script");
//   script.type= "text/javascript";
//   script.id = 'myjQuery';
//   if (pageWidth < 768) {
//     script.src= "http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js";
//   } else {};
//   body.appendChild(script);
// });

// function w3_open() {
//   document.getElementById("mySidebar").style.display = "block";
//   document.getElementById("close-sidebar").style.opacity = "1 !important";
//   $('#open-sidebar').css({ "display": "none" });
//   $('#close-sidebar').css({ "display": "block" });
//   $('.ui-page').css({ "height": "100%","overflow-y":"hidden" });
//   $('.header-mobile-main').css({ "position": "relative", "left": "260px" });
//   $('#content').css({ "position": "relative", "left": "260px" });
// }

// function w3_close() {
//   document.getElementById("mySidebar").style.display = "none";
//   document.getElementById("close-sidebar").style.opacity = "0 !important";
//   $('#open-sidebar').css({ "display": "block" });
//   $('#close-sidebar').css({ "display": "none" });
//   $('.ui-page').css({ "height": "100%","overflow-y":"auto" });
//   $('.header-mobile-main').css({ "position": "relative", "left": "0px" });
//   $('#content').css({ "position": "relative", "left": "0px" });
// }

// $('.open-sidebar').click(function () {
//   $("body").css('overflow', 'hidden')
// });

$(document).ready(function () {
  $('.customer-logos').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });
});

//filter button animation
$('.secondary-menu .dropdown a').click(function (e) {
  $('.secondary-menu .dfilter').addClass('dfilter-animate');
  setInterval(function () { $('.secondary-menu .dfilter').removeClass('dfilter-animate'); }, 3500);
});

//make phone number visible
$('.num-display').click(function (e) {
  $('.tele a').removeClass('blur');
  $('.tele span').css({ "display": "none" });
  $('.tele .num-holder').css({ "display": "none" });
});

// show singup form
$('.create').click(function (e) {
  $('.tele a').removeClass('blur');
  $('#signup').css({ "display": "block" });
  $('html,body').animate({
    scrollTop: $("#signup").offset().top
  }, 1200
  );
});

// show part market onclick
$('.pt-link').click(function (e) {
  $('.dropdown-menu-right').removeClass('dn');
});

$('.displayInfo').click(function (e) {
  if ($('.valid-display').hasClass('d-none')) {
    $('.valid-display').removeClass('d-none');
  } else {
    $('.valid-display').addClass('d-none');
  }
});


/***** Show password *****/
$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});


/***** profile menu active link *****/
let profileLinks = document.querySelectorAll('.profile-link');
function selectLink(e) {
  removeBorder();
  this.classList.add('menu-active');
}
function removeBorder() {
  profileLinks.forEach(item => item.classList.remove('menu-active'));
}
profileLinks.forEach(item => item.addEventListener('click', selectLink));



/***** Profile Main Category *****/
var maincat = [];
$('#main-cat option').each(function(){
  var maincat_img = $(this).attr("data-thumbnail");
  var maincat_text = this.innerText;
  var maincat_value = $(this).val();
  var maincat_item = '<li><img src="'+ maincat_img +'" alt="" value="'+maincat_value+'"/><span>'+ maincat_text +'</span></li>';
  maincat.push(maincat_item);
})

$('.main-cat-a').html(maincat);

//Set the button value to the first el of the array
$('#main-cat-select').html(maincat[0]);
$('#main-cat-select').attr('value', 'main-cat');

//change button stuff on click
$('.main-cat-a li').click(function(){
   var maincat_img = $(this).find('img').attr("src");
   var maincat_value = $(this).find('img').attr('value');
   var maincat_text = this.innerText;
   var maincat_item = '<li><img src="'+ maincat_img +'" alt="" /><span>'+ maincat_text +'</span></li>';
  $('#main-cat-select').html(maincat_item);
  $('#main-cat-select').attr('value', maincat_value);
  $("#main-cat-b").toggle();
  //console.log(value);
});

$("#main-cat-select").click(function(){
  $("#main-cat-b").toggle();
});

//check local storage for the lang
var maincat_sessionLang = localStorage.getItem('maincatlang');
if (maincat_sessionLang){
  //find an item with value of maincat_sessionLang
  var maincat_langIndex = maincat.indexOf(maincat_sessionLang);
  $('#main-cat-select').html(maincat[maincat_langIndex]);
  $('#main-cat-select').attr('value', maincat_sessionLang);
} else {
  var maincat_langIndex = maincat.indexOf('ch');
  // console.log(maincat_langIndex);
  $('#main-cat-select').html(maincat[maincat_langIndex]);
}


/***** Profile Sub Category *****/
var subcat = [];
$('#sub-cat option').each(function(){
  var subcat_img = $(this).attr("data-thumbnail");
  var subcat_text = this.innerText;
  var subcat_value = $(this).val();
  var subcat_item = '<li><img src="'+ subcat_img +'" alt="" value="'+subcat_value+'"/><span>'+ subcat_text +'</span></li>';
  subcat.push(subcat_item);
})

$('.sub-cat-a').html(subcat);

//Set the button value to the first el of the array
$('#sub-cat-select').html(subcat[0]);
$('#sub-cat-select').attr('value', 'sub-cat');

//change button stuff on click
$('.sub-cat-a li').click(function(){
  var subcat_img = $(this).find('img').attr("src");
  var subcat_value = $(this).find('img').attr('value');
  var subcat_text = this.innerText;
  var subcat_item = '<li><img src="'+ subcat_img +'" alt="" /><span>'+ subcat_text +'</span></li>';
  $('#sub-cat-select').html(subcat_item);
  $('#sub-cat-select').attr('value', subcat_value);
  $("#sub-cat-b").toggle();
  //console.log(value);
});

$("#sub-cat-select").click(function(){
  $("#sub-cat-b").toggle();
});

//check local storage for the lang
var subcat_sessionLang = localStorage.getItem('subcatlang');
if (subcat_sessionLang){
  //find an item with value of subcat_sessionLang
  var subcat_langIndex = subcat.indexOf(subcat_sessionLang);
  $('#sub-cat-select').html(subcat[subcat_langIndex]);
  $('#sub-cat-select').attr('value', subcat_sessionLang);
} else {
  var subcat_langIndex = subcat.indexOf('ch');
  // console.log(subcat_langIndex);
  $('#sub-cat-select').html(subcat[subcat_langIndex]);
}

/***** Profile Secondary Brand *****/
var secband = [];
$('#secband-cat option').each(function(){
  var secband_img = $(this).attr("data-thumbnail");
  var secband_text = this.innerText;
  var secband_value = $(this).val();
  var secband_item = '<li><img src="'+ secband_img +'" alt="" value="'+secband_value+'"/><span>'+ secband_text +'</span></li>';
  secband.push(secband_item);
})

$('.secband-cat-a').html(secband);

//Set the button value to the first el of the array
$('#secband-cat-select').html(secband[0]);
$('#secband-cat-select').attr('value', 'secband-cat');

//change button stuff on click
$('.secband-cat-a li').click(function(){
  var secband_img = $(this).find('img').attr("src");
  var secband_value = $(this).find('img').attr('value');
  var secband_text = this.innerText;
  var secband_item = '<li><img src="'+ secband_img +'" alt="" /><span>'+ secband_text +'</span></li>';
  $('#secband-cat-select').html(secband_item);
  $('#secband-cat-select').attr('value', secband_value);
  $("#secband-cat-b").toggle();
  //console.log(value);
});

$("#secband-cat-select").click(function(){
  $("#secband-cat-b").toggle();
});

//check local storage for the lang
var secband_sessionLang = localStorage.getItem('secbandlang');
if (secband_sessionLang){
  //find an item with value of secband_sessionLang
  var secband_langIndex = secband.indexOf(secband_sessionLang);
  $('#secband-cat-select').html(secband[secband_langIndex]);
  $('#secband-cat-select').attr('value', secband_sessionLang);
} else {
  var secband_langIndex = secband.indexOf('ch');
  // console.log(secband_langIndex);
  $('#secband-cat-select').html(secband[secband_langIndex]);
}

/***** Profile Secondary Category *****/
var sec = [];
$('#sec-cat option').each(function(){
  var sec_img = $(this).attr("data-thumbnail");
  var sec_text = this.innerText;
  var sec_value = $(this).val();
  var sec_item = '<li><img src="'+ sec_img +'" alt="" value="'+sec_value+'"/><span>'+ sec_text +'</span></li>';
  sec.push(sec_item);
})

$('.sec-cat-a').html(sec);

//Set the button value to the first el of the array
$('#sec-cat-select').html(sec[0]);
$('#sec-cat-select').attr('value', 'sec-cat');

//change button stuff on click
$('.sec-cat-a li').click(function(){
  var sec_img = $(this).find('img').attr("src");
  var sec_value = $(this).find('img').attr('value');
  var sec_text = this.innerText;
  var sec_item = '<li><img src="'+ sec_img +'" alt="" /><span>'+ sec_text +'</span></li>';
  $('#sec-cat-select').html(sec_item);
  $('#sec-cat-select').attr('value', sec_value);
  $("#sec-cat-b").toggle();
  //console.log(value);
});

$("#sec-cat-select").click(function(){
  $("#sec-cat-b").toggle();
});

//check local storage for the lang
var sec_sessionLang = localStorage.getItem('seclang');
if (sec_sessionLang){
  //find an item with value of sec_sessionLang
  var sec_langIndex = sec.indexOf(sec_sessionLang);
  $('#sec-cat-select').html(sec[sec_langIndex]);
  $('#sec-cat-select').attr('value', sec_sessionLang);
} else {
  var sec_langIndex = sec.indexOf('ch');
  // console.log(sec_langIndex);
  $('#sec-cat-select').html(sec[sec_langIndex]);
}


/***** Profile State *****/
var state = [];
$('#profile-state option').each(function(){
  var state_img = $(this).attr("data-thumbnail");
  var state_text = this.innerText;
  var state_value = $(this).val();
  var state_item = '<li><span class="ml-5">'+ state_text +'</span></li>';
  state.push(state_item);
})

$('.profile-state-a').html(state);

//Set the button value to the first el of the array
$('#profile-state-select').html(state[0]);
$('#profile-state-select').attr('value', 'profile-state');

//change button stuff on click
$('.profile-state-a li').click(function(){
  var state_img = $(this).find('img').attr("src");
  var state_value = $(this).find('img').attr('value');
  var state_text = this.innerText;
  var state_item = '<li><span class="ml-5">'+ state_text +'</span></li>';
  $('#profile-state-select').html(state_item);
  $('#profile-state-select').attr('value', state_value);
  $("#profile-state-b").toggle();
  //console.log(value);
});

$("#profile-state-select").click(function(){
  $("#profile-state-b").toggle();
});

//check local storage for the lang
var state_sessionLang = localStorage.getItem('statelang');
if (state_sessionLang){
  //find an item with value of state_sessionLang
  var state_langIndex = state.indexOf(state_sessionLang);
  $('#profile-state-select').html(state[state_langIndex]);
  $('#profile-state-select').attr('value', state_sessionLang);
} else {
   var state_langIndex = state.indexOf('ch');
  // console.log(state_langIndex);
  $('#profile-state-select').html(state[state_langIndex]);
}

/***** Profile City *****/
var city = [];
$('#profile-city option').each(function(){
  var city_img = $(this).attr("data-thumbnail");
  var city_text = this.innerText;
  var city_value = $(this).val();
  var city_item = '<li><span class="ml-5">'+ city_text +'</span></li>';
  city.push(city_item);
})

$('.profile-city-a').html(city);

//Set the button value to the first el of the array
$('#profile-city-select').html(city[0]);
$('#profile-city-select').attr('value', 'profile-city');

//change button stuff on click
$('.profile-city-a li').click(function(){
  var city_img = $(this).find('img').attr("src");
  var city_value = $(this).find('img').attr('value');
  var city_text = this.innerText;
  var city_item = '<li><span class="ml-5">'+ city_text +'</span></li>';
  $('#profile-city-select').html(city_item);
  $('#profile-city-select').attr('value', city_value);
  $("#profile-city-b").toggle();
  //console.log(value);
});

$("#profile-city-select").click(function(){
  $("#profile-city-b").toggle();
});

//check local storage for the lang
var city_sessionLang = localStorage.getItem('citylang');
if (city_sessionLang){
  //find an item with value of city_sessionLang
  var city_langIndex = city.indexOf(city_sessionLang);
  $('#profile-city-select').html(city[city_langIndex]);
  $('#profile-city-select').attr('value', city_sessionLang);
} else {
  var city_langIndex = city.indexOf('ch');
  // console.log(city_langIndex);
  $('#profile-city-select').html(city[city_langIndex]);
}