$(document).ready(function() {
  setTimeout(function() {
    $(".storm").addClass("alarm");
  }, 3000);
});

$(document).ready(function() {
  console.log("ready");
  $(".storm").click(function() {
    $(".storm").toggleClass("stormblank");
  });
});

