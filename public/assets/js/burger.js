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
    }).then(()=>{
      $(".create-form").val("")
      location.reload()
    })
    
  })
//Changing the devour boolean to true (eating the burger)
  $('.eat').on('click', function(event) {
    event.preventDefault()
      
    let id = $(this).data("id");
 
    $.ajax("/api/burgers/" + id, {
      type:"PUT"

    }).then(function() {
    location.reload()
    
    })
   
  })

 
//Change the boolean value of devour back to false.
//Attempted to add button that would move the burger back into uneaten category
$('.uneat').on('click', function (event) {
  event.preventDefault()
  let id = $(this).data("id")
  console.log(id)
  $.ajax("/api/burgers/" + id, {
    type:"PUT"
  }).then(function(){
    location.reload()
  })
  
});


  
  });
 