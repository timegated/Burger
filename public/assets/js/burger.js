$(document).ready(function(){
  $('.change-devour').on("click", () => {

  })

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

  $('.eat').on('click', function(event) {
    event.preventDefault
    let id = $(this).data("id");
    console.log(id)
    $.ajax("/api/burgers/" + id, {
      type:"PUT",

    }).then((response) => {
      location.reload()
    }
    )
  })
  });
 