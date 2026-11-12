let descs = {
    irid: "My most recent map created in FE2 Community Maps; I wanted to experiment more with major visual events during gameplay, the transition depicted below one of those events. I asked a friend to draw various glowing paint splotches to accentuate the intended fantastical nature of the island.",
    bot: "This map was heavily inspired by Deltarune, and serves to parallel its Weird Route, translating its written storytelling to Flood Escape 2's gameplay style.",
    avm: "This map has been my most successful in the past 4 years, being initially added as a permanent map in Flood Escape 2 in February of 2023 as part of the first wave of 'highlights' in the game. In 2025, I did a complete overhaul of the map's design, visuals, and improved on the gameplay experience with new effects and changes. In the fifth image below, you can see the original version I created in 2022, with in-dev screenshots proceeding.  ",
    castle: "Created for the FE2: Rehydrated project, an officially endorsed (though still fan-made) project reimagining the classic, dated maps featured in the base game. ",
    cord: "A shorter map that has gone through many iterations over the years. While creating this latest version, I wanted to experiment more with case-specific asset modeling and creating large-scale environments for relatively small gameplay areas",
    ruin: "",
    utts: "",
    av: "",
    ssanc: "",



};

let images = {
    irid: "<img src='../images/ii1.png'><img src='../images/ii2.png'><img src='../images/ii3.png'><img src='../images/ii4.png'><img src='../images/iiEv.gif'>",
    bot: "<img src='../images/bot1.png'><img src='../images/bot2.png'><img src='../images/botEv2.gif'><img src='../images/bot3.png'><img src='../images/bot4.png'><img src='../images/bot5.png'><img src='../images/botEv.gif'>",
    avm: "<img src='../images/avm1.png'><img src='../images/avm2.png'><img src='../images/avm3.png'><img src='../images/avm4.png'><img src='../images/avm5.png'><img src='../images/avm6.png'><img src='../images/avm7.png'>",
    castle: "<img src='../images/ct1.png'><img src='../images/ct2.png'><img src='../images/ct3.png'><img src='../images/ct4.png'><img src='../images/ctSun.gif'>",
    cord: "<img src='../images/sc1.png'><img src='../images/sc2.png'><img src='../images/sc3.png'><img src='../images/sc4.png'>",
    ruin: "",
    utts: "",
    av: "",
    ssanc: "",

};

function updateSec(mapN, mapD, mapArr) {

    $("#gal").empty();
    $("#mapN").text(mapN);
    $("#desc").text(mapD);
    $("#gal").append(mapArr);

};

$("button").on("click", function () {
    let thi = this
    if (thi != $("#backBtn")) {
        let thID = thi.id
        updateSec($(thi).find("p").text(), descs[thID], images[thID]);
    }


});