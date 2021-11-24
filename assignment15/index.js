$(document).ready(function () {
    
    $(".add-items").submit(function(event){
      event.preventDefault();
      var item = $("#todo-list-item").val();
      if(item){
        if(item=="eatcake"){
          $("#list-items").append("<li><a class='remove'>x</a><iframe src='https://giphy.com/embed/3o6Ztpe2hEveO3PPZm' width='480' height='270' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/nickelodeon-nick-jack-griffo-thundermans-3o6Ztpe2hEveO3PPZm'>via GIPHY</a></p><hr></li>");
        }
        else if (item=="dance") {
          $("#list-items").append("<li><a class='remove'>x</a><iframe src='https://giphy.com/embed/xJjs8eGVbjNYY' width='480' height='270' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/banggood-cat-pets-dacing-xJjs8eGVbjNYY'>via GIPHY</a></p><hr></li>");
        }
        else if (item=="laugh") {
          $("#list-items").append("<li><a class='remove'>x</a><iframe src='https://giphy.com/embed/XXvnnrJJnOVl6' width='480' height='270' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/reaction-80s-lol-XXvnnrJJnOVl6'>via GIPHY</a></p><hr></li>");
        }
        else{
          $("#list-items").append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
        }
       
        $("#todo-list-item").val("");
      }
    });

    // $(".checkbox").change(function(){
    //     console.log("Checkbox checked!");
    // });

    $(document).on("change",".checkbox",function(){
        if($(this).attr("checked")){
          $(this).removeAttr("checked");
         }else{
            $(this).attr("checked","checked");
         }
        $(this).parent().toggleClass("completed");
        
    });

    $(document).on("click",".remove",function(){
      $(this).parent().fadeOut( "slow", function() {
            $(this).remove();
            localStorage.setItem("listItems",$("#list-items").html());
    });

  });
});
