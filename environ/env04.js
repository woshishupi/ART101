let score = 0;
let life = 3;

let elements = ["mushroom", "Clock", "coin", "goomba"];
let hero = {
  name: "Mario",
  hp: 100,
  items: ["hat", "fire flower"]
};


$(document).ready(function () {
  // 初始化 HUD
  $("#score").text("Score: " + score);
  $("#life").text("Life: " + life);

  $("#jumpButton").click(function () {
    score += 10;
    $("#score").text("Score: " + score);

    $("#mario_01").addClass("jump");
    setTimeout(function () {
      $("#mario_01").removeClass("jump");
    }, 500);
  });
  $("#buyLifeButton").on("click", buyLives);
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



function buyLives() {
  const livesToBuy = Math.floor(score / 100);

  life += livesToBuy;
  score -= livesToBuy * 100;

  $("#score").text("Score: " + score);
  $("#life").text("Life: " + life);

  const $msg = $(
    `<div class="card"><p>🛒 Buy ${livesToBuy} 1UP Mushroom → ❤️ Life: ${life}, Remaining score: ${score}</p></div>`
  );
  $("#output").append($msg);
  setTimeout(() => $msg.fadeOut(300, () => $msg.remove()), 1500);

}
