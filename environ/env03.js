let score = 0;
let elements = ["mushroom", "Clock", "coin", "goomba"];
let hero = {
    name: "Mario",
    hp: 100,
    items: ["hat", "fire flower"]
};

// 页面加载完成后执行
$(document).ready(function () {
    // 初始化分数显示
    $("#score").text("Score: " + score);

    // 给按钮绑定点击事件
    $("#jumpButton").click(function () {
        // ① 分数 +10
        score += 10;
        $("#score").text("Score: " + score);

        // ② 马里奥跳起来（加上 class 动画）
        $("#mario_01").addClass("jump");

        // ③ 一定时间后移除 class，准备下一次跳
        setTimeout(function () {
            $("#mario_01").removeClass("jump");
        }, 500); // 0.5秒
    });
});


// 清空旧内容
$("#output").empty();

// 3 张卡片：Hero / Items / Environment elements
$("#output").append(`
  <div class="card"><h3>Hero</h3><p>${hero.name} (HP: ${hero.hp})</p></div>
  <div class="card"><h3>Items</h3><p>${hero.items.join(", ")}</p></div>
  <div class="card"><h3>Environment elements</h3><div class="elements"></div></div>
`);

// 把 elements 作为小标签塞进第三张卡片
elements.forEach(e => {
  $(".elements").append(`<span class="tag">${e}</span>`);
});
