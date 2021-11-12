// ハンバーガーメニュー
(function ($) {
  let $nav = $(".hamburger");
  let $btn = $(".hamburger__btn");
  let $mask = $(".hamburger__mask");
  let open = "open"; // class
  // menu open close
  $btn.on("click", function () {
    if (!$nav.hasClass(open)) {
      $nav.addClass(open);
    } else {
      $nav.removeClass(open);
    }
  });
  // mask close
  $mask.on("click", function () {
    $nav.removeClass(open);
  });
})(jQuery);

AOS.init({
  offset: 200,
  duration: 500,
  easing: "ease",
  delay: 50,
  once: false,
  anchorPlacement: "top-center",
});

MicroModal.init({
  openClass: "modal-is-open",
  disableScroll: true,
  disableFocus: true,
});

$(document).ready(function () {
  $("#form").submit(function (event) {
    var formData = $("#form").serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdJqEC8i5e2C7j9_equ7zhfBMi50mEBoubQfOeUBgu7beWm2w/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".contact-end-message").slideDown("slow");
          $(".contact-btn").fadeOut("slow");
          //window.location.href = "thanks.html";
        },
      },
    });
    event.preventDefault();
  });
});

$(".burger-btn").on("click", function () {
  $(".burger-btn").toggleClass("close");
  $(".burger").fadeToggle(500);
});

let nav = $(".burger-btn");
$("section").click(function () {
  if (nav.hasClass("close")) {
    $(".burger-btn").removeClass("close");
    $(".burger").fadeToggle(500);
  }
});
