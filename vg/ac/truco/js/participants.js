const PARTICIPANTS_HTML = `
<form>
    <input type="text" name="" class="participantname" value="Jumbo"><br>
    <input type="text" name="" class="participantname" value="Bayul"><br>
    <input type="text" name="" class="participantname" value="Rafa"><br>
    <input type="text" name="" class="participantname" value="Mira"><br>
    <input type="text" name="" class="participantname" value="Sprocket"><br>
    <input type="text" name="" class="participantname" value="Big Top"><br>
    <input type="text" name="" class="participantname" value="Savannah"><br>
    <input type="text" name="" class="participantname" value="Flora"><br>
    <input type="text" name="" class="participantname" value="Rolf"><br>
    <input type="text" name="" class="participantname" value="Tiffany"><br>
    <input type="text" name="" class="participantname" value="Sally"><br>
    <input type="text" name="" class="participantname" value="Tom Nook"><br>
    <input type="text" name="" class="participantname" value="Isabelle"><br>
    <input type="text" name="" class="participantname" value="Blathers"><br>
    <input type="text" name="" class="participantname" value="Roger"><br>
    <input type="text" name="" class="participantname" value="Redd"><br>
    <button type="button" name="button" id="tournament_generator">Gerar torneio</button>
</form>
`;

function setupParticipantsList(contentId) {
    document.getElementById(contentId).innerHTML = PARTICIPANTS_HTML;
    document.getElementById('tournament_generator').addEventListener('click', function() {
        let inputNames = document.getElementsByClassName('participantname');
        let participants = [];
        for (var i = 0; i < inputNames.length; i++) {
            participants.push(inputNames[i].value);
        }
        setupTournamentBrackets(contentId, participants);
    });
}
