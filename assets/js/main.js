const bundeslandInput = document.body.querySelector("div input:nth-of-type(1)");
const infoOutput = document.body.querySelector("#bundeslandInfoErgebnis");


function check() {
    event.preventDefault();
    let bundesland = bundeslandInput.value.toLowerCase();
    let output = infoOutput;
    console.log(bundesland)
    switch (bundesland) {
        case "baden-württemberg":
            output.textContent = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
        case "bayern":
            output.textContent = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt"
        case "berlin":
            output.textContent = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt"
        case "brandenburg":
            output.textContent = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt"
        case "bremen":
            output.textContent = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt"
        case "hamburg":
            output.textContent = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt"
        case "hessen":
            output.textContent = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt"
        case "mecklenburg-Vorpommern":
            output.textContent = "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt"
        case "niedersachsen":
            output.textContent = "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt"
        case "rheinland-pfalz":
            output.textContent = "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt"
        case "saarland":
            output.textContent = "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt"
        case "sachsen":
            output.textContent = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt"
        case "sachsen-anhalt":
            output.textContent = "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt"
        case "schleswig-holstein":
            output.textContent = "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt"
        case "thüringen":
            output.textContent = "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt"
            break;
    
        default:
            output.textContent = "Ein solches Bundesland gibt es in Deutschland nicht."
            console.log(output)
            break;
    }

}