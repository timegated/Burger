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
      console.log(response)
      $(".create-form").val("")
      location.reload()
    })
  })

  $('.change-devour').on('click', () => {
    let id = $(this).data("id");
    console.log(id)
    $.ajax("/api/burgers/" + id, {
      type:"PUT",

    }).then((response) => {
      console.log(response)
      location.reload()
    }
    )
  })
  });
 