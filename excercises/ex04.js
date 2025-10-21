let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"];
$("#needy-button").click(function () {
    let remainder = count % colors.length;
    $("#needy-button").html("Clicks " + count + " " + colors[remainder]);
    $("body").css("background-color", colors[remainder]);
    count = count + 1;
});

