let playerScore = 0;
let playerlife = 3;

let elements = ["mushroom", "Clock", "coin", "goomba"];
let hero = {
  name: "Mario",
  hp: 100,
  items: ["hat", "fire flower"]
};
//new change
function updateHUD() {
  $("#score").text("Score: " + playerScore);
  $("#life").text("Life: " + playerlife);
}

$(document).ready(function () {

  // -----------------------
  // HUD 初始化
  // -----------------------
  updateHUD();

  // -----------------------
  // 按钮：跳跃加分
  // -----------------------
  $("#jumpButton").click(function () {
    playerScore += 10;
    updateHUD();

    $("#mario_01").addClass("jump");
    setTimeout(() => $("#mario_01").removeClass("jump"), 500);
  });

  // -----------------------
  // 按钮：购买生命
  // -----------------------
  $("#buyLifeButton").on("click", purchaseExtraLives);

  // -----------------------
  // 星星：跟随鼠标
  // -----------------------
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




$("#output").empty();


$("#output").append(`
  <div class="card"><h3>Hero</h3><p>${hero.name} (HP: ${hero.hp})</p></div>
  <div class="card"><h3>Items</h3><p>${hero.items.join(", ")}</p></div>
  <div class="card"><h3>Environment elements</h3><div class="elements"></div></div>
`);


elements.forEach(e => {
  $(".elements").append(`<span class="tag">${e}</span>`);
});



function purchaseExtraLives() {
  const affordableLives = Math.floor(playerScore / 100);

  if (affordableLives > 0) {

    playerlife += affordableLives;
    playerScore -= affordableLives * 100;

    //$("#score").text("Score: " + score);
    //$("#life").text("Life: " + life);
    //new
    updateHUD();


    const $msg = $(`
      <div class="card">
        <p>🍄 Bought ${affordableLives} × 1UP Mushroom → ❤️ Life: ${playerlife}, Remaining score: ${playerScore}</p>
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


//$(document).ready(function () {


//  const $star = $("<img>", {
//    id: "invincibleStar",
//    src: "images/star.png",
//  }).appendTo("body");
//
//  $(document).on("mousemove", function (event) {
//    $star.css({
//      left: event.pageX,
//      top: event.pageY
//    });
//  });

//});
