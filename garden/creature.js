// JavaScript for Creature Garden
$("#add-creature").click(
    function () {

        let crName = $("#crName").val();

        if (crName == "" || crName.length > 13) {// no empty names
        }
        else { $("#creature-list").append(" " + crName + ","); 
        }


        $("#crName").val("");
    });