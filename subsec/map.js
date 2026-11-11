let descs = {
    irid: "123 testing",
    bot: "123. 67",
    avm: "This map has been my most successful in the past 4 years, being initially added as a permanent map in Flood Escape 2 in February of 2023 as part of the first wave of 'highlights' in the game. In 2025, I  "

};

let images = {
    irid: "ii",
    bot: "bot",
    avm: "avm",

};

function updateSec(mapN, mapD, mapArr){

$("#gal").empty();
    $("#mapN").text(mapN);
    $("#desc").text(mapD);
    $("#gal").append(mapArr);

};

$("button").on("click", function(){
    let thi = this
    if (thi != $("#backBtn")) {
        let thID = thi.id
        updateSec($(thi).find("p").text(), descs[thID] , images[thID] );
    }
    
    
});