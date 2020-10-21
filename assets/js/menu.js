$(function(){

  // Open options menu
  $(".openMenu").click(function(e){
    e.preventDefault();
    var id = $(this).attr("id");
    var menu_container = $(".menu_widget."+id);

    if (menu_container.length)
    {
      var status = $(menu_container).hasClass("active");
      if ( status )
      {
        $(menu_container).removeClass("active");
      }else{
        $(".menu_widget").removeClass('active');
        $(menu_container).addClass("active");
      }
    }
  });

  // Close options menu when clicking outside
  $(document).mouseup(function(e)
  {
  var menu_toggler = $(".openMenu");
  var active_menu = $(".menu_widget.active");

  // if the target of the click isn't the container nor a descendant of the container
  if ( !menu_toggler.is(e.target) && menu_toggler.has(e.target).length === 0 && !active_menu.is(e.target) && active_menu.has(e.target).length === 0 )
  {
      $(".menu_widget.active").removeClass("active");
  }
  });
});
