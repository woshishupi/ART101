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

  if (livesToBuy > 0) {

    life += livesToBuy;
    score -= livesToBuy * 100;

    $("#score").text("Score: " + score);
    $("#life").text("Life: " + life);


    const $msg = $(`
      <div class="card">
        <p>🍄 Bought ${livesToBuy} × 1UP Mushroom → ❤️ Life: ${life}, Remaining score: ${score}</p>
      </div>
    `);
    $("#output").append($msg);
    setTimeout(() => $msg.fadeOut(300, () => $msg.remove()), 1500);


    const $mushroom = $("<img src='images/1up_Mushroom_-_2D_art.webp' class='mushroom-anim'>");
    $("body").append($mushroom);

    $mushroom.css({
      position: "absolute",
      left: "50%",
      top: "60%",
      width: "300px",
      opacity: 0,
      transform: "translateX(-50%)",
      zIndex: 9999,
      pointerEvents: "none"
    });

    $mushroom
      .animate({ opacity: 1, top: "50%" }, 500)
      .animate({ top: "55%" }, 200)
      .animate({ top: "52%" }, 200)
      .delay(600)
      .animate({ opacity: 0, top: "40%" }, 800, function () {
        $(this).remove();
      });

  } else {

    const $msg = $('<div class="card"><p>❌ Not enough score to buy a life!</p></div>');
    $("#output").append($msg);
    setTimeout(() => $msg.fadeOut(300, () => $msg.remove()), 1500);
  }
}

$(document).on("keydown", function (event) {
  if (event.code === "ArrowUp") {

    $("#jumpButton").click();

    event.preventDefault();
  }
});


$(document).ready(function () {


  const $star = $("<img>", {
    id: "invincibleStar",
    src: "images/star.png",
  }).appendTo("body");

  $(document).on("mousemove", function (event) {
    $star.css({
      left: event.pageX,
      top: event.pageY
    });
  });

});
