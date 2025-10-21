let score = 0;
let elements = ["mushroom", "Clock", "coin", "goomba"];
let hero = {
    name: "Mario",
    hp: 100,
    items: ["hat", "fire flower"]
};


$(document).ready(function () {

    $("#score").text("Score: " + score);

    $("#jumpButton").click(function () {

        score += 10;
        $("#score").text("Score: " + score);

        $("#mario_01").addClass("jump");


        setTimeout(function () {
            $("#mario_01").removeClass("jump");
        }, 500); 
    });
});



$("#output").empty();


$("#output").append(`
  <div class="card"><h3>Hero</h3><p>${hero.name} (HP: ${hero.hp})</p></div>
  <div class="card"><h3>Items</h3><p>${hero.items.join(", ")}</p></div>
  <div class="card"><h3>Environment elements</h3><div class="elements"></div></div>
`);


elements.forEach(e => {
  $(".elements").append(`<span class="tag">${e}</span>`);
});
