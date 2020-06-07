window.addEventListener("load", function () {
    var artyom = new Artyom();

  

   
    artyom.addCommands({
        indexes: ["Hallo Max"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Hallo Herr x y, wie möchten sie Ihren Café heute?");
        }
    });

    artyom.addCommands({
        indexes: ["Heute nur schwarz Danke"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Ok kommt sofort. Hier sind die aktuellen Zahlen: Heute wurden bereits 1311 Einheiten produziert, der Ausschuss beträgt 186 Stück, es wurden 421 Euro für Verschleißteile ausgegeben und es sind 35 Mitarbeiter krank. Möchtest du noch genaueres Erfahren?");
        }
    });

    artyom.addCommands({
        indexes: ["Wie lautet dein Name"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Mein Name ist Max Musterbot und ich bin der Sprachassistent der Musterfirma GmbH");
        }
    });

    artyom.addCommands({
        indexes: ["Max lese mir die aktuellen Zahlen vor"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Heute wurden bereits 1311 Einheiten produziert, der Ausschuss beträgt 186 Stück, es wurden 421 Euro für Verschleißteile ausgegeben und es sind 35 Mitarbeiter krank");
        }
    });
    artyom.addCommands({
        indexes: ["lese mir die produzierte Stückzahl von letzter Woche vor"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Letzte Woche wurden 63490 Einheiten produziert");
        }
    });


    artyom.addCommands({
        indexes: ["Max sende eine Nachricht mit dem noch verfügbaren Monatsbudget an Herr Müller"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Nachricht wurde an Herr Müller versendet");
        }
    });

    


    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
//# sourceMappingURL=playgroud-artyom-script.js.map