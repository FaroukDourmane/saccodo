$(document).ready(function(){
  var hash = location.hash;
  const ajaxContainer = $(".account-page .content-container");

  var pages = {
    "#home": "pages/edit-portfolio.html",
    "#network": "pages/network.html",
    "#changePassword": "pages/changePassword.html",
    "#verify": "pages/verify.html",
    "#deactivate": "pages/deactivate.html",
  };

  // AJAX Page Changer
  $(document).on("click","#getPage",function(e){
    var url = $(this).attr("href");
    var exists = page_exists(url,pages);
    var button = $(this);

    var data = "";

    if ( typeof $(this).attr("data-json") !== typeof undefined && $(this).attr("data-json") !== false )
    {
      data = $(this).attr("data-json");
      data = $.parseJSON(data);
    }

    if ( exists )
    {
      add_loader();

      $(ajaxContainer).load(pages[url], data,function(){
        remove_loader();
        $("a#getPage").removeClass("active");
        $(button).addClass("active");
      });
    }else{
      pushNotification("Page was not found !","error");
    }

  });

  function add_loader(){
    $(".account-page .content-container").addClass('loading');
    $(".account-page .content-container").prepend("<div class='loadingContainer'></div>");
  }

  function remove_loader(){
    $(".account-page .content-container").removeClass('loading');
  }

  // Menu toggle
  $(".menuToggle").click(function(e){
    e.preventDefault();
    var menu = $(".account-page .menu-container");

    $("body").addClass("disabled");
    $(menu).addClass("active");
  });

  // Close side menu when clicking outside
  $(document).mouseup(function(e)
  {
  var menu = $(".account-page .menu-container");

  // if the target of the click isn't the container nor a descendant of the container
  if ( !menu.is(e.target) && !menu.is(e.target) )
  {
      $(menu).removeClass("active");
      $("body").removeClass("disabled");
  }
  });

  // Initialize Page
  initialize_page(pages);
});

// Push notification to the page
function pushNotification(text,css_class="") {
  $("<div class='notification "+css_class+"'>"+text+"</div>")
        .appendTo('.push-notifications-container')
        .delay(4000)
        .queue(function() {
            $(this).remove();
        });
  // Scroll to bottom of notifications box
  $('.push-notifications-container').scrollTop($('.push-notifications-container')[0].scrollHeight);
}

function initialize_page(pages) {
  var hash = location.hash;
  const ajaxContainer = $(".account-page .content-container");
  var default_hash = "#home";

  // Initialize Page Content
  if ( $.trim(hash).length > 0  && page_exists(hash,pages))
    {
      var load_page = hash;
    }
  else
    {
      location.hash = default_hash;
      hash = location.hash;
    }

    $(ajaxContainer).addClass('loading');
    $(ajaxContainer).load(pages[hash],function(){
      $(ajaxContainer).removeClass('loading');
    });

  var button = $("a[href='"+hash+"']");
  $(button).addClass("active");
}

function page_exists(page,array) {
  var exists = 0;
  if ( page in array )
  {
    exists = 1;
  }
  return exists;
}
