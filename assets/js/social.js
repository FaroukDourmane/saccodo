$(function(){
  $(".me-container .toggler").click(function(){
    $("body").addClass("disabled");
    $("section#profile .profile-container").addClass("active");
  });

  // Close elements when clicking outside
  $(document).mouseup(function(e)
  {
  var profile_container = $("section#profile .profile-container");

  // if the target of the click isn't the container nor a descendant of the container
  if (!profile_container.is(e.target) && profile_container.has(e.target).length === 0)
  {
      profile_container.removeClass("active");
  }
  });

  $(window).scroll(function(e){

    var scrollTop = $(window).scrollTop();

    if ( scrollTop > 400 )
    {
      $(".me-container").addClass("fixed");
    }else{
      $(".me-container.fixed").removeClass("fixed");
    }
  });

  // Slides
  // Skills slider
  var nextButton_ref = $(".recommend-slider-wrapper .buttons-wrapper .right");
  var prevButton_ref = $(".recommend-slider-wrapper .buttons-wrapper .left");

  $(".recommend-slider-wrapper .slide-wrapper").slick({
    centerMode: false,
    slidesToShow: 3,
    arrows: true,
    autoWidth: true,
    prevArrow: $(nextButton_ref),
    nextArrow: $(prevButton_ref)
  });

});
