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
      $("#create-burger").val("")
      location.reload()
    })
  })

  $('.change-devour').on('click', () => {
    console.log("button responds to clicks")
  })
  });
 