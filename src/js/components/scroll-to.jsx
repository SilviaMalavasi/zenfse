import $ from "jquery";

export function scrollToTop() {
  window.addEventListener("scroll", scrollFunction);
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      $("#scrollTopBtn").css("opacity", "1");
    } else {
      $("#scrollTopBtn").css("opacity", "0");
    }
  }

  $("body").on("click", "#scrollTopBtn", function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
  $("body").on("click", ".freccia-single img", function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
}

export function scrollToTarget() {
  $('*[class^="from"], *[class*=" from"]').each(function () {
    $(this).on("click", function (event) {
      event.preventDefault();
      var target = "";
      var classList = $(this).attr("class").split(/\s+/);
      $.each(classList, function (index, item) {
        if (item.startsWith("from")) {
          target = item.replace("from-", "");
        }
      });

      var to = "to-" + target;
      $("html, body").animate(
        {
          scrollTop: $("#" + to).offset().top,
        },
        1200
      );
    });
  });
}
