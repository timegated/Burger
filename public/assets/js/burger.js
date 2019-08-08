$(document).ready(function(){
  
//Adding a new burger to the list
  $('.create-form').on('submit', (event) => {
    event.preventDefault()

    let newBurger = {
      burger_name:$("#create-burger").val().trim()
    }

    $.ajax("/api/burgers", {
      type:"POST",
      data: newBurger
    }).then((response)=>{
      $(".create-form").val("")

      location.reload()
    })
    
  })
//Changing the devour boolean to true (eating the burger)
  $('.eat').on('click', function(event) {
    event.preventDefault
      $('.modal').modal()
    let id = $(this).data("id");
 
    $.ajax("/api/burgers/" + id, {
      type:"PUT"

    }).then((response) => {
    
      console.log(response)
    
    
    })
    location.reload()
  })
 
//Removing the burger from the db entirely


  
  });
 