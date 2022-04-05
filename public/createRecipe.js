document.getElementById("submitRecipe").addEventListener("click", submitRec);

function submitRec() {
  const recipe = new XMLHttpRequest();

  recipe.open("post", "api/recipes");

  recipe.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  recipe.onload = () => console.log(recipe.responseText);

  // let email = document.getElementById("email").value;
  // let password = document.getElementById("password").value;

  // let data = "email=" + email + "&password=" + password;

  let dataRec = $("form").serialize();

  console.log(dataRec);
  recipe.send(dataRec);

  recipe.addEventListener("load", function (event) {
    const test = JSON.stringify(event.target.responseText);
    console.log(test);
    if (test.length > 2000) {
      alert("Error: Enter a valid email address.");
    }
    else {
      alert("Recipe Successfully Submitted!");
    }

  });
}