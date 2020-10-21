$(function(){

    // Clicking on a conversation
    $(".conversations .convo").click(function(e){
        $(".conversations .convo.active").removeClass('active');
        $(this).addClass("active");
    });
    
    
    // Scroll chat messages to the latest message
    $(".messages-container").animate({ scrollTop: $(".messages-container")[0].scrollHeight}, 1000);


    // Toggle (show/hide) message time
    $(document).on("click",".messages-container .message",function(e){
        let time = $(this).find(".time");
        $(time).slideToggle();
    });

    // Open user info side bar
    $(".open-user-info").click(function(e){
        $(".chat-container").addClass("disabled");
        $(".chat-container .chat-options").addClass("active");
    });    

    // close user info side bar
    $(".close-user-info").click(function(e){        
        $(".chat-container .chat-options").removeClass("active");
        $(".chat-container").removeClass("disabled");
    });

    // Open conversations list
    $(".open-convos-bar").click(function(e){
        $(".chat-container").addClass("disabled");
        $(".conversations-wrapper").addClass("active");
    });

    // Close conversations list
    $(".close-convos-bar").click(function(e){        
        $(".conversations-wrapper").removeClass("active");
        $(".chat-container").removeClass("disabled");
    });

    // Close elements when clicking outside
    $(document).mouseup(function(e) 
    {
    var conversations_container = $(".conversations-wrapper.active");
    var chat_options = $(".chat-container .chat-options.active");

    // if the target of the click isn't the container nor a descendant of the container
    if (!conversations_container.is(e.target) && conversations_container.has(e.target).length === 0) 
    {
        conversations_container.removeClass("active");
        $(".chat-container").removeClass("disabled");
    }

    if (!chat_options.is(e.target) && chat_options.has(e.target).length === 0) 
    {
        chat_options.removeClass("active");
        $(".chat-container").removeClass("disabled");
    }
    });
})