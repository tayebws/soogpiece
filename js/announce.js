//upload and remove Image One
function imageOne(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-upload-wrap-1').hide();

      $('.file-upload-image-1').attr('src', e.target.result);
      $('.file-upload-content-1').show();

      // $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeImageOne();
  }
}

function removeImageOne() {
  $('.file-upload-input-1').replaceWith($('.file-upload-input-1').clone());
  $('.file-upload-content-1').hide();
  $('.image-upload-wrap-1').show();
}
$('.image-upload-wrap-1').bind('dragover', function () {
  $('.image-upload-wrap-1').addClass('image-dropping');
});
$('.image-upload-wrap-1').bind('dragleave', function () {
  $('.image-upload-wrap-1').removeClass('image-dropping');
});

//upload and remove Image Two
function imageTwo(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-upload-wrap-2').hide();

      $('.file-upload-image-2').attr('src', e.target.result);
      $('.file-upload-content-2').show();

      // $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeImageTwo();
  }
}

function removeImageTwo() {
  $('.file-upload-input-2').replaceWith($('.file-upload-input-2').clone());
  $('.file-upload-content-2').hide();
  $('.image-upload-wrap-2').show();
}
$('.image-upload-wrap-2').bind('dragover', function () {
    $('.image-upload-wrap-2').addClass('image-dropping');
  });
  $('.image-upload-wrap-2').bind('dragleave', function () {
    $('.image-upload-wrap-2').removeClass('image-dropping');
});

//upload and remove Image Three
function imageThree(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-upload-wrap-3').hide();

      $('.file-upload-image-3').attr('src', e.target.result);
      $('.file-upload-content-3').show();

      // $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeImageThree();
  }
}

function removeImageThree() {
  $('.file-upload-input-3').replaceWith($('.file-upload-input-3').clone());
  $('.file-upload-content-3').hide();
  $('.image-upload-wrap-3').show();
}
$('.image-upload-wrap-3').bind('dragover', function () {
    $('.image-upload-wrap-3').addClass('image-dropping');
  });
  $('.image-upload-wrap-3').bind('dragleave', function () {
    $('.image-upload-wrap-3').removeClass('image-dropping');
});

//upload and remove Image Four
function imageFour(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-upload-wrap-4').hide();

      $('.file-upload-image-4').attr('src', e.target.result);
      $('.file-upload-content-4').show();

      // $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeImageFour();
  }
}

function removeImageFour() {
  $('.file-upload-input-4').replaceWith($('.file-upload-input-4').clone());
  $('.file-upload-content-4').hide();
  $('.image-upload-wrap-4').show();
}
$('.image-upload-wrap-4').bind('dragover', function () {
    $('.image-upload-wrap-4').addClass('image-dropping');
  });
  $('.image-upload-wrap-4').bind('dragleave', function () {
    $('.image-upload-wrap-4').removeClass('image-dropping');
});

//upload and remove Image Five
function imageFive(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-upload-wrap-5').hide();

      $('.file-upload-image-5').attr('src', e.target.result);
      $('.file-upload-content-5').show();

      // $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeImageFive();
  }
}

function removeImageFive() {
  $('.file-upload-input-5').replaceWith($('.file-upload-input-5').clone());
  $('.file-upload-content-5').hide();
  $('.image-upload-wrap-5').show();
}
$('.image-upload-wrap-5').bind('dragover', function () {
  $('.image-upload-wrap-5').addClass('image-dropping');
});
$('.image-upload-wrap-5').bind('dragleave', function () {
  $('.image-upload-wrap-5').removeClass('image-dropping');
});