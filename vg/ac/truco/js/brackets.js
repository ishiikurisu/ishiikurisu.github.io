const BRACKETS_SVG = `
<svg height="320" width="1008" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <marker id="arrow" markerHeight="7" markerWidth="7" orient="auto-start-reverse" refX="4" refY="2" viewBox="-2 -2 8 8">
            <polygon points="0,0 0,4 4,2 0,0"></polygon>
        </marker>
        <marker id="diamond" markerHeight="7" markerWidth="7" orient="auto-start-reverse" refX="4" refY="2" viewBox="-2 -2 8 8">
            <polygon points="0,2 2,0 4,2 2,4 0,2"></polygon>
        </marker>
        <marker id="circle" markerHeight="7" markerWidth="7" orient="auto-start-reverse" refX="4" refY="4" viewBox="0 0 8 8">
            <circle class="filled" cx="4" cy="4" r="2"></circle>
        </marker>
        <marker id="open_circle" markerHeight="7" markerWidth="7" orient="auto-start-reverse" refX="4" refY="4" viewBox="0 0 8 8">
            <circle class="bg_filled" cx="4" cy="4" r="2"></circle>
        </marker>
        <marker id="big_open_circle" markerHeight="7" markerWidth="7" orient="auto-start-reverse" refX="4" refY="4" viewBox="0 0 8 8">
            <circle class="bg_filled" cx="4" cy="4" r="3"></circle>
        </marker>
    </defs>
    <rect class="backdrop" height="320" width="1008" x="0" y="0"></rect>
    <rect class="solid nofill " height="32" rx="4" width="168" x="4" y="8"></rect>
    <text class="" x="18" y="28" id="part1">$PART1</text>
    <rect class="solid nofill " height="32" rx="4" width="168" x="412" y="8"></rect>
    <text class="" x="426" y="28" id="champ">$CHAMP</text>
    <rect class="solid nofill " height="32" rx="4" width="168" x="828" y="8"></rect>
    <text class="" x="842" y="28" id="part5">$PART5</text>
    <rect class="solid nofill " height="32" rx="4" width="168" x="4" y="104"></rect>
    <text class="" x="18" y="124" id="part2">$PART2</text>
    <rect class="solid nofill " height="32" rx="4" width="168" x="828" y="104"></rect>
    <text class="" x="842" y="124" id="part6">$PART6</text>
    <rect class="solid nofill " height="32" rx="4" width="168" x="4" y="168"></rect>
    <text class="" x="18" y="188" id="part3">$PART3</text>
    <rect class="solid nofill " height="32" rx="4" width="168" x="828" y="168"></rect>
    <text class="" x="842" y="188" id="part7">$PART7</text>
    <rect class="solid nofill " height="32" rx="4" width="168" x="4" y="264"></rect>
    <text class="" x="18" y="284" id="part4">$PART4</text>
    <rect class="solid nofill " height="32" rx="4" width="168" x="828" y="264"></rect>
    <text class="" x="842" y="284" id="part8">$PART8</text>
    <text class="" x="178" y="76" id="semi1">$SEMI1</text>
    <text class="" x="674" y="76" id="semi3">$SEMI3</text>
    <text class="" x="314" y="156" id="final1">$FINAL1</text>
    <text class="" x="546" y="156" id="final2">$FINAL2</text>
    <text class="" x="178" y="236" id="semi2">$SEMI2</text>
    <text class="" x="674" y="236" id="semi4">$SEMI4</text>
    <g id="boxsemi1">
        <line class="solid" x1="92" x2="92" y1="48" y2="96"></line>
        <path class="nofill" d="M 168,56 A 4,4 0,0,0 164,60"></path>
        <line class="solid" x1="164" x2="164" y1="60" y2="84"></line>
        <line class="solid" x1="168" x2="328" y1="56" y2="56"></line>
        <path class="nofill" d="M 328,56 A 4,4 0,0,1 332,60"></path>
        <line class="solid" x1="332" x2="332" y1="60" y2="84"></line>
        <line class="solid" x1="92" x2="164" y1="72" y2="72"></line>
        <path class="nofill" d="M 164,84 A 4,4 0,0,0 168,88"></path>
        <line class="solid" x1="168" x2="328" y1="88" y2="88"></line>
        <path class="nofill" d="M 332,84 A 4,4 0,0,1 328,88"></path>
    </g>
    <g>
        <line class="solid" x1="500" x2="500" y1="48" y2="152"></line>
        <path class="nofill" d="M 536,136 A 4,4 0,0,0 532,140"></path>
        <line class="solid" x1="532" x2="532" y1="140" y2="164"></line>
        <line class="solid" x1="536" x2="696" y1="136" y2="136"></line>
        <path class="nofill" d="M 696,136 A 4,4 0,0,1 700,140"></path>
        <line class="solid" x1="700" x2="700" y1="140" y2="164"></line>
        <line class="solid" x1="468" x2="532" y1="152" y2="152"></line>
        <line class="solid" x1="700" x2="748" y1="152" y2="152"></line>
        <path class="nofill" d="M 532,164 A 4,4 0,0,0 536,168"></path>
        <line class="solid" x1="536" x2="696" y1="168" y2="168"></line>
        <path class="nofill" d="M 700,164 A 4,4 0,0,1 696,168"></path>
        <line class="solid" x1="252" x2="252" y1="96" y2="208"></line>
        <path class="nofill" d="M 304,136 A 4,4 0,0,0 300,140"></path>
        <line class="solid" x1="300" x2="300" y1="140" y2="164"></line>
        <line class="solid" x1="304" x2="464" y1="136" y2="136"></line>
        <path class="nofill" d="M 464,136 A 4,4 0,0,1 468,140"></path>
        <line class="solid" x1="468" x2="468" y1="140" y2="164"></line>
        <line class="solid" x1="252" x2="300" y1="152" y2="152"></line>
        <path class="nofill" d="M 300,164 A 4,4 0,0,0 304,168"></path>
        <line class="solid" x1="304" x2="464" y1="168" y2="168"></line>
        <path class="nofill" d="M 468,164 A 4,4 0,0,1 464,168"></path>
        <line class="solid" x1="748" x2="748" y1="96" y2="208"></line>
    </g>
    <g id="boxsemi3">
        <path class="nofill" d="M 664,56 A 4,4 0,0,0 660,60"></path>
        <line class="solid" x1="660" x2="660" y1="60" y2="84"></line>
        <line class="solid" x1="664" x2="824" y1="56" y2="56"></line>
        <path class="nofill" d="M 824,56 A 4,4 0,0,1 828,60"></path>
        <line class="solid" x1="828" x2="828" y1="60" y2="84"></line>
        <path class="nofill" d="M 660,84 A 4,4 0,0,0 664,88"></path>
        <line class="solid" x1="664" x2="824" y1="88" y2="88"></line>
        <path class="nofill" d="M 828,84 A 4,4 0,0,1 824,88"></path>
        <line class="solid" x1="916" x2="916" y1="48" y2="96"></line>
        <line class="solid" x1="828" x2="916" y1="72" y2="72"></line>
    </g>
    <g id="boxsemi2">
        <line class="solid" x1="92" x2="92" y1="208" y2="256"></line>
        <path class="nofill" d="M 168,216 A 4,4 0,0,0 164,220"></path>
        <line class="solid" x1="164" x2="164" y1="220" y2="244"></line>
        <line class="solid" x1="168" x2="328" y1="216" y2="216"></line>
        <path class="nofill" d="M 328,216 A 4,4 0,0,1 332,220"></path>
        <line class="solid" x1="332" x2="332" y1="220" y2="244"></line>
        <line class="solid" x1="92" x2="164" y1="232" y2="232"></line>
        <path class="nofill" d="M 164,244 A 4,4 0,0,0 168,248"></path>
        <line class="solid" x1="168" x2="328" y1="248" y2="248"></line>
        <path class="nofill" d="M 332,244 A 4,4 0,0,1 328,248"></path>
    </g>
    <g id="boxsemi4">
        <path class="nofill" d="M 664,216 A 4,4 0,0,0 660,220"></path>
        <line class="solid" x1="660" x2="660" y1="220" y2="244"></line>
        <line class="solid" x1="664" x2="824" y1="216" y2="216"></line>
        <path class="nofill" d="M 824,216 A 4,4 0,0,1 828,220"></path>
        <line class="solid" x1="828" x2="828" y1="220" y2="244"></line>
        <path class="nofill" d="M 660,244 A 4,4 0,0,0 664,248"></path>
        <line class="solid" x1="664" x2="824" y1="248" y2="248"></line>
        <path class="nofill" d="M 828,244 A 4,4 0,0,1 824,248"></path>
        <line class="solid" x1="916" x2="916" y1="208" y2="256"></line>
        <line class="solid" x1="828" x2="916" y1="232" y2="232"></line>
    </g>
</svg>
`;

function generateDoublesFromParticipants(participants) {
    var shuffled = shuffle(participants);
    var doubles = [];
    var double = [];

    for (var i = 0; i < participants.length; i++) {
        if (double.length === 0)  {
            double.push(shuffled[i]);
        } else {
            double.push(shuffled[i]);
            doubles.push(double);
            double = [];
        }
    }

    return doubles;
}

function generateDoubleName(double) {
    return `${double[0]} &amp; ${double[1]}`;
}

function generateSemiCallback(i) {
    return function(e) {
        var participant1 = document.getElementById(`part${i * 2 + 1}`).innerHTML;
        var participant2 = document.getElementById(`part${i * 2 + 2}`).innerHTML;
        document.getElementById(`semi${i + 1}`).innerHTML = coinFlip(participant1, participant2);
    };
}

function generateFinalCallback(i) {
    return function(e) {
        var participant1 = document.getElementById(`semi${i * 2 + 1}`).innerHTML;
        var participant2 = document.getElementById(`semi${i * 2 + 2}`).innerHTML;
        document.getElementById(`final${i + 1}`).innerHTML = coinFlip(participant1, participant2);
    };
}

function generateChampCallback() {
    return function(e) {
        // TODO play a sound when this is clicked
        var participant1 = document.getElementById(`final1`).innerHTML;
        var participant2 = document.getElementById(`final2`).innerHTML;
        document.getElementById(`champ`).innerHTML = coinFlip(participant1, participant2);
    };
}

function setupTournamentBrackets(contentId, participants) {
    var i = 0;
    var doubles = generateDoublesFromParticipants(participants);
    var textId, double;

    // setting participants
    document.getElementById(contentId).innerHTML = BRACKETS_SVG;
    for (i = 0; i < doubles.length; i++) {
        textId = `part${i + 1}`;
        double = doubles[i];
        document.getElementById(textId).innerHTML = generateDoubleName(double);
    }

    // setting semis
    for (i = 0; i < doubles.length / 2; i++) {
        var semiText = document.getElementById(`semi${i + 1}`);
        semiText.innerHTML = "JOGAR!";
        semiText.addEventListener('click', generateSemiCallback(i));
    }

    // setting final
    for (i = 0; i < doubles.length / 4; i++) {
        var finalText = document.getElementById(`final${i + 1}`);
        finalText.innerHTML = "JOGAR!";
        finalText.addEventListener('click', generateFinalCallback(i));
    }

    // setting champion
    var champText = document.getElementById('champ');
    champText.innerHTML = "JOGAR!";
    champText.addEventListener('click', generateChampCallback(i));
}
