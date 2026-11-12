let descs = {
    irid: "My most recent map created in FE2 Community Maps; I wanted to experiment more with major visual events during gameplay, the transition depicted below one of those events. I asked a friend to draw various glowing paint splotches to accentuate the intended fantastical nature of the island.",
    bot: "This map was heavily inspired by Deltarune, and serves to parallel its Weird Route, translating its written storytelling to Flood Escape 2's gameplay style.",
    avm: "This map has been my most successful in the past 4 years, being initially added as a permanent map in Flood Escape 2 in February of 2023 as part of the first wave of 'highlights' in the game. In 2025, I did a complete overhaul of the map's design, visuals, and improved on the gameplay experience with new effects and changes. In the fifth image below, you can see the original version I created in 2022, with in-dev screenshots proceeding.  ",
    castle: "Created for the FE2: Rehydrated project, an officially endorsed (though still fan-made) project reimagining the classic, dated maps featured in the base game. ",
    cord: "A shorter map that has gone through many iterations over the years. While creating this latest version, I wanted to experiment more with case-specific asset modeling and creating large-scale environments for relatively small gameplay areas",
    ruin: "By far my most ambitious, detailed and expansive project I've undertaken. The first version was created in 2023 for TRIA's fourth map competition, which it won 11th in. In 2024, I set out to remake it as a grand-scale experience, which took the better half of a year to complete. It features two lighting variants which offer different environment experiences, and was awarded 'Revolutionary' status when reviewed by TRIA's developer team, the highest in a community-led map creation system. It takes heavy inspiration from the game Stray.",
    utts: "My entry for TRIA's fifth map competition; It is currently a finalist along with eleven others, and individual placements are yet to be announced. Heavily based on Tatooine from the Star Wars franchise.",
    av: "Released in wave 2 of TRIA's Onboarding Project (See Solarpunk Sanctuary); Built to be a megastructure where the main mechanics on display are TRIA's orbs and jetstreams, along with simple swimming.",
    ssanc: "Released in wave 1 of TRIA's Onboarding Project, a collection of maps created to assist beginner players in getting acquianted with the game and its complex array of mechanics. This map mainly features simple parkour and low-stakes introductions to the Orb mechanic.",



};

let images = {
    irid: "<img src='../images/ii1.png'><img src='../images/ii2.png'><img src='../images/ii3.png'><img src='../images/ii4.png'><img src='../images/iiEv.gif'>",
    bot: "<img src='../images/bot1.png'><img src='../images/bot2.png'><img src='../images/botEv2.gif'><img src='../images/bot3.png'><img src='../images/bot4.png'><img src='../images/bot5.png'><img src='../images/botEv.gif'>",
    avm: "<img src='../images/avm1.png'><img src='../images/avm2.png'><img src='../images/avm3.png'><img src='../images/avm4.png'><img src='../images/avm5.png'><img src='../images/avm6.png'><img src='../images/avm7.png'>",
    castle: "<img src='../images/ct1.png'><img src='../images/ct2.png'><img src='../images/ct3.png'><img src='../images/ct4.png'><img src='../images/ctSun.gif'>",
    cord: "<img src='../images/sc1.png'><img src='../images/sc2.png'><img src='../images/sc3.png'><img src='../images/sc4.png'>",
    ruin: "<img src='../images/rr2.png'><img src='../images/rrEv2.gif'><img src='../images/rr3.png'><img src='../images/rr4.png'><img src='../images/rrEv.gif'><img src='../images/rr8.png'><img src='../images/rr12.png'>",
    utts: "<img src='../images/utts1.png'><img src='../images/utts2.png'><img src='../images/utts3.png'><img src='../images/utts4.png'>",
    av: "<img src='../images/av1.png'><img src='../images/av2.png'><img src='../images/av3.png'><img src='../images/av4.png'><img src='../images/av5.png'>",
    ssanc: "<img src='../images/ssanc1.png'><img src='../images/ssanc1.png'><img src='../images/ssanc3.png'><img src='../images/ssanc4.png'>",

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