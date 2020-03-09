$(document).ready(function() {
  setTimeout(function() {
    $(".storm").addClass("alarm");
  }, 5000);
});

$(document).ready(function() {
  console.log("ready");
  $(".storm").click(function() {
    $(".storm").toggleClass("stormblank");
  });
});

