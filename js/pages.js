function listen_click() {
    let tds = document.querySelectorAll(`td`);
    tds.forEach((td) => {
        td.addEventListener(`click`, function () {
            if (td.innerHTML != "") {
                td.classList.toggle("chosen");

                if (td.classList[0].startsWith("ye")) {
                    td.style.backgroundColor = td.style.backgroundColor === 'rgba(237, 240, 96, 0.7)' ? 'rgba(255, 255, 255, 1)' : 'rgba(237, 240, 96, 0.7)';
                }
                if (td.classList[0].startsWith("or")) {
                    td.style.backgroundColor = td.style.backgroundColor === 'rgba(240, 128, 60, 0.7)' ? 'rgba(255, 255, 255, 1)' : 'rgba(240, 128, 60, 0.7)';
                }
                if (td.classList[0].startsWith("gr")) {
                    td.style.backgroundColor = td.style.backgroundColor === 'rgba(81, 152, 114, 0.7)' ? 'rgba(255, 255, 255, 1)' : 'rgba(81, 152, 114, 0.7)';
                }
                if (td.classList[0].startsWith("bl")) {
                    td.style.backgroundColor = td.style.backgroundColor === 'rgba(52, 89, 149, 0.7)' ? 'rgba(255, 255, 255, 1)' : 'rgba(52, 89, 149, 0.7)';
                }
                if (td.classList[0].startsWith("br")) {
                    td.style.backgroundColor = td.style.backgroundColor === 'rgba(72, 39, 40, 0.7)' ? 'rgba(255, 255, 255, 1)' : 'rgba(72, 39, 40, 0.7)';
                }

            };
        });
    });
}


function createFile_mon() {
    let elements = document.getElementsByClassName('chosen');
    let chosen = [];

    let facit = {};
    facit['tab'] = "Tsuri ashi bakåt";
    facit['taf'] = "Tsuri ashi bakåt";
    facit['tlv'] = "Taisabaki lång vänster";
    facit['k'] = "Kawashi";
    facit['tkv'] = "Taisabaki kort vänster";
    facit['m'] = "Maesabaki";
    facit['jcu'] = "Jodan chikai uke";
    facit['ub'] = "Uppgång bakåt";
    facit['tlh'] = "Taisabaki lång höger";
    facit['aa'] = "Ayumi ashi (samma kamae)"


    for (let index = 0; index < elements.length; index++) {
        chosen.push({ "class": elements[index].classList[0], "name": elements[index].innerText });
    }

    chosen.sort((a, b) => (a.class < b.class) ? 1 : ((b.class < a.class) ? -1 : 0))

    let warmup = [];
    for (let index = 0; index < elements.length; index++) {
        let classlist = elements[index].classList;
        classlist.forEach(element => {
            if (facit.hasOwnProperty(element)) {
                if (!warmup.includes(facit[element])) {
                    warmup.push(facit[element]);
                }
            }
        });
    }

    let content = "";
    let statistics = "";
    let colors = [];
    let date = new Date();
    content += date.toISOString().split('T')[0] + "\n\n"
    content += "6:e mon (vit-gult): \n";

    let yellow = true;
    let orangewhite = true;
    let orange = true;
    let greenwhite = true;
    let green = true;

    for (let index = 0; index < chosen.length; index++) {

        if (chosen[index].class == "yellow" && yellow) {
            content += "\n5e mon (gul-vitt): \n";
            yellow = false;
        }

        if (chosen[index].class == "orangewhite" && orangewhite) {
            content += "\n4e mon: (vit-orange): \n";
            orangewhite = false;
        }

        if (chosen[index].class == "orange" && orange) {
            content += "\n3:e mon (orange-vitt): \n";
            orange = false;
        }

        if (chosen[index].class == "greenwhite" && greenwhite) {
            content += "\n2:a mon (vit-grön): \n";
            greenwhite = false;
        }

        if (chosen[index].class == "green" && green) {
            content += "\n2:a mon (grön-vitt): \n";
            green = false;
        }

        content += "" + chosen[index].name + "\n";
        statistics += "" + chosen[index].name + "\n";
        colors.push(chosen[index].class);
    }

    let tekniker = statistics.split('\n');

    let sel = document.getElementById("group")
    let group = sel.value;

    if (group == "") {
        let info = document.getElementById("info");
        info.innerHTML = 'Du behöver välja vilken grupp du vill skapa passet för, om du vill spara statistiken.'

        setTimeout(function () { info.innerHTML = ""; }, 5000);
    }


    let i = 0;

    tekniker.forEach(element => {
        if (element != "") {
            savepass(element, group, colors[i])
            i++;
        }
    });

    content += "\n\nFörslag på uppvärmningar:\n";

    warmup.forEach(element => {
        content += element + "\n"
    });

    let file = new File(["\ufeff" + content], `pass.txt`, { type: "text/plain:charset=UTF-8" });

    url = window.URL.createObjectURL(file);

    let a = document.createElement("a");
    a.style = "display: none";
    a.href = url;
    a.download = file.name;
    a.click();
    window.URL.revokeObjectURL(url);
}

function search_mon() {
    clear_all();
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search_field");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
            } else {
            }
        }

        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
            } else {
            }
        }

        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
            } else {
            }
        }

        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
            } else {
            }
        }

        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
            } else {
            }
        }

        td = tr[i].getElementsByTagName("td")[5];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
            } else {
            }
        }
    }
}

function clear_all() {
    let tds = document.getElementsByTagName('td');
    console.log(tds);
    for (let td of tds) {
        td?.classList.remove('chosen');
        console.log("chosen remove");

        if (td.innerHTML != "") {
            td.style.backgroundColor = 'rgb(255, 255, 255)';
        }
    }
}

function createFile_kuy() {

    let elements = document.getElementsByClassName('chosen');
    let chosen = [];

    let facit = {};
    facit['tab'] = "Tsuri ashi bakåt";
    facit['taf'] = "Tsuri ashi bakåt";
    facit['tlv'] = "Taisabaki lång vänster";
    facit['k'] = "Kawashi";
    facit['tkv'] = "Taisabaki kort vänster";
    facit['m'] = "Maesabaki";
    facit['jcu'] = "Jodan chikai uke";
    facit['ub'] = "Uppgång bakåt";
    facit['tlh'] = "Taisabaki lång höger";
    facit['aa'] = "Ayumi ashi (samma kamae)"


    for (let index = 0; index < elements.length; index++) {
        chosen.push({ "class": elements[index].classList[0], "name": elements[index].innerText });
    }

    chosen.sort((a, b) => (a.class < b.class) ? 1 : ((b.class < a.class) ? -1 : 0))

    console.log(chosen);

    let warmup = [];
    for (let index = 0; index < elements.length; index++) {
        let classlist = elements[index].classList;
        classlist.forEach(element => {
            if (facit.hasOwnProperty(element)) {
                if (!warmup.includes(facit[element])) {
                    warmup.push(facit[element]);
                }
            }
        });
    }

    let content = "";
    let statistics = "";
    let colors = [];
    let date = new Date();
    content += date.toISOString().split('T')[0] + "\n\n"
    content += "5:e kuy: \n";

    let orange = true;
    let green = true;
    let blue = true;
    let brown = true;

    for (let index = 0; index < chosen.length; index++) {

        if (chosen[index].class == "orange" && orange) {
            content += "\n4e kuy: \n";
            orange = false;
        }

        if (chosen[index].class == "green" && green) {
            content += "\n3:e kuy: \n";
            green = false;
        }

        if (chosen[index].class == "blue" && blue) {
            content += "\n2:a kuy: \n";
            blue = false;
        }

        if (chosen[index].class == "brown" && brown) {
            content += "\n1:a kuy: \n";
            brown = false;
        }

        content += "" + chosen[index].name + "\n";
        statistics += "" + chosen[index].name + "\n";

        colors.push(chosen[index].class);
    }

    let tekniker = statistics.split('\n');

    let sel = document.getElementById("group")
    let group = sel.value;

    if (group == "") {
        let info = document.getElementById("info");
        info.innerHTML = 'Du behöver välja vilken grupp du vill skapa passet för, om du vill spara statistiken.'

        setTimeout(function () { info.innerHTML = ""; }, 5000);
    }

    let i = 0;

    tekniker.forEach(element => {
        if (element != "") {
            savepass(element, group, colors[i])
            i++;
        }
    });

    content += "\n\nFörslag på uppvärmningar:\n";

    warmup.forEach(element => {
        content += element + "\n"
    });

    let file = new File(["\ufeff" + content], `pass.txt`, { type: "text/plain:charset=UTF-8" });

    url = window.URL.createObjectURL(file);

    let a = document.createElement("a");
    a.style = "display: none";
    a.href = url;
    a.download = file.name;
    a.click();
    window.URL.revokeObjectURL(url);
}


function search_kuy() {
    clear_all();

    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search_field");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
            } else {
            }
        }

        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
            } else {
            }
        }

        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
            } else {
            }
        }

        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
            } else {
            }
        }

        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
            } else {
            }
        }
    }
}

async function get_statistics() {
    let sel = document.getElementById("group")
    let group = sel.value;

    let start = document.getElementById("start");
    let from = start.value;

    let end = document.getElementById("end");
    let to = end.value;

    try {
        reply = await (await fetch(`/get/${group}/${from}/${to}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })).json();
        console.log(reply);

        let HTML = '';
        HTML += `<h2>${group}</h2> <h3>${from} - ${to}</h3><table style="border-collapse: separate;
;empty-cells: hide;">`

        const mp = new Map(reply.map(o => [o.teknik, { ...o, count: 0 }]));
        for (const { teknik } of reply) mp.get(teknik).count++;
        let result = Array.from(mp.values());

        result.sort((a, b) => (a.color < b.color) ? 1 : ((b.color < a.color) ? -1 : 0))

        console.log(result);

        let orange = true
        let green = true
        let blue = true
        let brown = true
        let yellowwhite = true
        let whiteorange = true
        let orangewhite = true
        let whitegreen = true
        let greenwhite = true

        result.forEach(element => {

            HTML += '<tr>';

            if (element.grupp == "V2" || element.grupp == "V1" || element.grupp == "S1") {

                if (element.color == 'yellow') {
                    HTML += '<td style="width: 20px;background-color: rgb(237, 240, 96);color: rgb(237, 240, 96);border: 1px solid #24292e38;">.</td>'
                } else if (element.color == 'orange') {
                    if (orange) {
                        HTML += '<tr><td></td><td></td><td></td></tr>'
                        orange = false;
                    }
                    HTML += '<td style="width: 20px;background-color: rgb(240, 128, 60);color: rgb(240, 128, 60);border: 1px solid #24292e38;">.</td>'
                } else if (element.color == 'green') {
                    if (green) {
                        HTML += '<tr><td></td><td></td><td></td></tr>'
                        green = false;
                    }
                    HTML += '<td style="width: 20px;background-color: rgb(81, 152, 114);color: rgb(81, 152, 114);border: 1px solid #24292e38;">.</td>'
                } else if (element.color == 'blue') {
                    if (blue) {
                        HTML += '<tr><td></td><td></td><td></td></tr>'
                        blue = false;
                    }
                    HTML += '<td style="width: 20px;background-color: rgb(52, 89, 149);color: rgb(52, 89, 149);border: 1px solid #24292e38;">.</td>'
                } else if (element.color == 'brown') {
                    if (brown) {
                        HTML += '<tr><td></td><td></td><td></td></tr>'
                        brown = false;
                    }
                    HTML += '<td style="width: 20px;background-color: rgb(72, 39, 40);color: rgb(72, 39, 40);border: 1px solid #24292e38;">.</td>'
                }

            } else {

                if (element.color == 'yellowwhite') {
                    HTML += '<td style="width: 20px;background: repeating-linear-gradient( 180deg, #ffffff, #ffffff 14px, #EDF060 8px, #EDF060 28px);color: #EDF060;border: 1px solid #24292e38;">.</td>'
                } else if (element.color == 'yellow') {
                    if (yellowwhite) {
                        HTML += '<tr><td></td><td></td><td></td></tr>'
                        yellowwhite = false;
                    }
                    HTML += '<td style="width: 20px;background: repeating-linear-gradient( 180deg, #EDF060, #EDF060 14px, #FFffff 8px, #FFffff 28px);color: #ffffff;border: 1px solid #24292e38;">.</td>'
                } else if (element.color == 'orangewhite') {
                    if (whiteorange) {
                        HTML += '<tr><td></td><td></td><td></td></tr>'
                        whiteorange = false;
                    }
                    HTML += '<td style="width: 20px;background: repeating-linear-gradient( 180deg, #ffffff, #ffffff 14px, #F0803C 8px, #F0803C 28px);color: #f0803c;border: 1px solid #24292e38;">.</td>'
                } else if (element.color == 'orange') {
                    if (orangewhite) {
                        HTML += '<tr><td></td><td></td><td></td></tr>'
                        orangewhite = false;
                    }
                    HTML += '<td style="width: 20px;background: repeating-linear-gradient( 180deg, #F0803C, #F0803C 14px, #FFffff 8px, #FFffff 28px);color: #ffffff;border: 1px solid #24292e38;">.</td>'
                } else if (element.color == 'greenwhite') {
                    if (whitegreen) {
                        HTML += '<tr><td></td><td></td><td></td></tr>'
                        whitegreen = false;
                    }
                    HTML += '<td style="width: 20px;background: repeating-linear-gradient( 180deg, #ffffff, #ffffff 14px, #519872 8px, #519872 28px);color: #519872;border: 1px solid #24292e38;">.</td>'
                } else if (element.color == 'green') {
                    if (greenwhite) {
                        HTML += '<tr><td></td><td></td><td></td></tr>'
                        greenwhite = false;
                    }
                    HTML += '<td style="width: 20px;background: repeating-linear-gradient( 180deg, #519872, #519872 14px, #FFffff 8px, #FFffff 28px);color: #ffffff; border: 1px solid #24292e38;">.</td>'
                }

            }
            HTML += `<td>${element.teknik}</td><td>${element.count}</td></tr>`
        });

        HTML += '</table>'


        console.log(HTML);

        let results = document.getElementById("results");
        results.innerHTML = HTML;

    } catch (ignore) {
        return ignore.status(400).json({ success: false, errors: errors.array() });
    }

}