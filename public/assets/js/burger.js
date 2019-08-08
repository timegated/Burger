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
  setTimeout(() => {
    location.reload()
  }, 500);
   
  })
 
//Removing the burger from the db entirely

$('.delete').on('click', function() {
  let id = $(this).data("id")
  console.log(id)
  $.ajax("/api/burgers/" + id, {
    type:"DELETE"
  }).then((response) => {
    console.log(response)
  })
})
  
  });
 