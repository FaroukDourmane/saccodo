$(function(){

  // Like a post
  $(".post-tools .like").click(function(e){
    e.preventDefault();
    $(this).toggleClass("active");
  });

  // Like a comment
  $(".tools .likeComment").click(function(e){
    e.preventDefault();
    $(this).toggleClass("active");
  });

  // Show reactions when hovering the "like" button
  function showReactions (e)
  {
    var id = e.target.attributes.id.nodeValue;
    $(".reactions-container."+id).addClass("active");
  }

  function hideReactions (e)
  {
    $(".reactions-container.active").removeClass("active");
  }

  var config = {
     over: showReactions, // function = onMouseOver callback (REQUIRED)
     timeout: 500, // number = milliseconds delay before onMouseOut
     interval: 300, // number = milliseconds delay before trying to call over
     out: hideReactions // function = onMouseOut callback (REQUIRED)
   };
   $(".post-tools .like-button-container").hoverIntent(config);

});
