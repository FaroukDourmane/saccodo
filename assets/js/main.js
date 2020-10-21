$(function(){
    $(".toggle-side-menu").click(function(e){
        e.preventDefault();
        $("body").toggleClass("disabled");
        $(".side-list").toggleClass("active");

        $(".chat-container.disabled").removeClass("disabled");
        $(".conversations-wrapper.active").removeClass("active");
        $(".chat-container .chat-options.active").removeClass("active");
    });

    // Close side menu when clicking outside
    $(document).mouseup(function(e)
    {
    var container = $(".side-list.active");
    var toggler = $(".toggle-side-menu");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && !toggler.is(e.target) && container.has(e.target).length === 0 && toggler.has(e.target).length === 0)
    {
        container.removeClass("active");
        $("body").removeClass("disabled");
    }
    });

    // Scroll to specified elements
    function scrollto(id){
      var elem = $("#"+id);

      if (elem.length > 0) {

        var offset = $(elem).offset(); // Contains .top and .left

        $('html, body').animate({
            scrollTop: offset.top,
            scrollLeft: offset.left
        });
      }
    }

    $(".scrollTo").click(function(e){
      e.preventDefault();
      var id = $(this).attr("id");
      scrollto(id);
    });
});
