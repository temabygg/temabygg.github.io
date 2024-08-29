function setDate() {
    document.querySelector('.thisdate').valueAsDate = new Date();
}

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


function listen_click_plan() {

    let trs = document.querySelectorAll(`tr`);
    trs.forEach((tr) => {
        tr.addEventListener(`click`, function () {

            if (tr.children[1].classList[0] != undefined) {


                tr.children[3].classList.toggle("chosen");

                if (tr.children[1].classList[0] == "yellowwhite") {
                    tr.children[3].style.backgroundColor = tr.children[3].style.backgroundColor === 'rgb(253, 255, 133)' ? 'rgb(255, 255, 255)' : 'rgb(253, 255, 133)';
                }

                if (tr.children[1].classList[0] == "yellow") {
                    tr.children[3].style.backgroundColor = tr.children[3].style.backgroundColor === 'rgb(251, 255, 10)' ? 'rgb(255, 255, 255)' : 'rgb(251, 255, 10)';
                }

                if (tr.children[1].classList[0] == "orangewhite") {
                    tr.children[3].style.backgroundColor = tr.children[3].style.backgroundColor === 'rgb(245, 169, 122)' ? 'rgb(255, 255, 255)' : 'rgb(245, 169, 122)';
                }

                if (tr.children[1].classList[0] == "orange") {
                    tr.children[3].style.backgroundColor = tr.children[3].style.backgroundColor === 'rgb(228, 98, 17)' ? 'rgb(255, 255, 255)' : 'rgb(228, 98, 17)';
                }

                if (tr.children[1].classList[0] == "greenwhite") {
                    tr.children[3].style.backgroundColor = tr.children[3].style.backgroundColor === 'rgb(162, 205, 183)' ? 'rgb(255, 255, 255)' : 'rgb(162, 205, 183)';
                }

                if (tr.children[1].classList[0] == "green") {
                    tr.children[3].style.backgroundColor = tr.children[3].style.backgroundColor === 'rgb(64, 119, 90)' ? 'rgb(255, 255, 255)' : 'rgb(64, 119, 90)';
                }

                if (tr.children[1].classList[0] == "blue") {
                    tr.children[3].style.backgroundColor = tr.children[3].style.backgroundColor === 'rgb(52, 89, 149)' ? 'rgb(255, 255, 255)' : 'rgb(52, 89, 149)';
                }
                if (tr.children[1].classList[0] == "brown") {
                    tr.children[3].style.backgroundColor = tr.children[3].style.backgroundColor === 'rgb(72, 39, 40)' ? 'rgb(255, 255, 255)' : 'rgb(72, 39, 40)';
                }

                if (tr.children[1].classList[0] == "all") {
                    tr.children[3].style.backgroundColor = tr.children[3].style.backgroundColor === 'rgb(212, 116, 190)' ? 'rgb(255, 255, 255)' : 'rgb(212, 116, 190)';
                }

            }
            ;
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
    let date = document.getElementById("mon_date");
    date = date.value;
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

    let file = new File(["\ufeff" + content], `${group}_${date}.txt`, { type: "text/plain:charset=UTF-8" });

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
                td.style.color = "white";

            }
        }

        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
            } else {
                td.style.color = "white";

            }
        }

        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
            } else {
                td.style.color = "white";

            }
        }

        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
            } else {
                td.style.color = "white";

            }
        }

        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
            } else {
                td.style.color = "white";

            }
        }

        td = tr[i].getElementsByTagName("td")[5];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
            } else {
                td.style.color = "white";

            }
        }
    }
}

function clear_all() {
    let tds = document.getElementsByTagName('td');
    console.log(tds);
    for (let td of tds) {
        td?.classList.remove('chosen');

        if (td.innerHTML != "") {
            td.style.color = "black";
            td.style.backgroundColor = 'rgb(255, 255, 255)';
        }
    }
}

function clear_search() {
    let input = document.getElementById("search_field");
    input.value = "";
    clear_all()
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
    let date = document.getElementById("kuy_date");
    date = date.value;
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

    let file = new File(["\ufeff" + content], `${group}_${date}.txt`, { type: "text/plain:charset=UTF-8" });

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
                td.style.color = "white";
            }
        }

        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
            } else {
                td.style.color = "white";

            }
        }

        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
            } else {
                td.style.color = "white";

            }
        }

        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
            } else {
                td.style.color = "white";

            }
        }

        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
            } else {
                td.style.color = "white";

            }
        }
    }
}

function get_group_statistics() {
    let sel = document.getElementById("stat_group")
    let group = sel.value;

    getgroupstat(group).then(function (reply) {

        fill_result(reply, true);

    });

}

function get_group_statistics_plan() {
    let sel = document.getElementById("stat_group_plan")
    let group = sel.value;

    getgroupstat(group).then(function (reply) {


        const mp = new Map(reply.map(o => [o.teknik, { ...o, count: 0 }]));
        for (const { teknik } of reply) mp.get(teknik).count++;
        let result = Array.from(mp.values());

        console.log(result);


        let trs = document.querySelectorAll(`tr`);

        for (let index = 0; index < result.length; index++) {
            const element = result[index];
            for (let index = 0; index < trs.length; index++) {
                const tr = trs[index];
                console.log(tr.children[1]);

                if (tr.children[1].innerHTML.replace(/\s/g, "") == element.teknik.replace(/\s/g, "")) {
                    tr.children[2].innerHTML = element.count;

                }
            }

        }
    });
}

function fill_result(reply, pass_count) {

    let HTML = `<table style="border-collapse: separate;empty-cells: hide;">`;

    let orange = true
    let green = true
    let blue = true
    let brown = true
    let yellowwhite = true
    let whiteorange = true
    let orangewhite = true
    let whitegreen = true
    let greenwhite = true

    const mp = new Map(reply.map(o => [o.teknik, { ...o, count: 0 }]));
    for (const { teknik } of reply) mp.get(teknik).count++;
    let result = Array.from(mp.values());

    result.sort((a, b) => (a.color < b.color) ? 1 : ((b.color < a.color) ? -1 : 0))

    result.forEach(element => {

        HTML += '<tr>';

        if (element.group == "V2" || element.group == "V1" || element.group == "S1") {

            if (element.color == 'yellow') {
                HTML += '<td style="background-color: rgb(237, 240, 96);color: rgb(237, 240, 96);border: 1px solid #24292e38;">.</td>'
            } else if (element.color == 'orange') {
                if (orange) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    orange = false;
                }
                HTML += '<td style="background-color: rgb(240, 128, 60);color: rgb(240, 128, 60);border: 1px solid #24292e38;">.</td>'
            } else if (element.color == 'green') {
                if (green) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    green = false;
                }
                HTML += '<td style="background-color: rgb(81, 152, 114);color: rgb(81, 152, 114);border: 1px solid #24292e38;">.</td>'
            } else if (element.color == 'blue') {
                if (blue) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    blue = false;
                }
                HTML += '<td style="background-color: rgb(52, 89, 149);color: rgb(52, 89, 149);border: 1px solid #24292e38;">.</td>'
            } else if (element.color == 'brown') {
                if (brown) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    brown = false;
                }
                HTML += '<td style="background-color: rgb(72, 39, 40);color: rgb(72, 39, 40);border: 1px solid #24292e38;">.</td>'
            }

        } else {

            if (element.color == 'yellowwhite') {
                HTML += '<td style="background: repeating-linear-gradient( 180deg, #ffffff, #ffffff 14px, #EDF060 8px, #EDF060 28px);color: #EDF060;border: 1px solid #24292e38;">.</td>'
            } else if (element.color == 'yellow') {
                if (yellowwhite) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    yellowwhite = false;
                }
                HTML += '<td style="background: repeating-linear-gradient( 180deg, #EDF060, #EDF060 14px, #FFffff 8px, #FFffff 28px);color: #ffffff;border: 1px solid #24292e38;">.</td>'
            } else if (element.color == 'orangewhite') {
                if (whiteorange) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    whiteorange = false;
                }
                HTML += '<td style="background: repeating-linear-gradient( 180deg, #ffffff, #ffffff 14px, #F0803C 8px, #F0803C 28px);color: #f0803c;border: 1px solid #24292e38;">.</td>'
            } else if (element.color == 'orange') {
                if (orangewhite) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    orangewhite = false;
                }
                HTML += '<td style="background: repeating-linear-gradient( 180deg, #F0803C, #F0803C 14px, #FFffff 8px, #FFffff 28px);color: #ffffff;border: 1px solid #24292e38;">.</td>'
            } else if (element.color == 'greenwhite') {
                if (whitegreen) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    whitegreen = false;
                }
                HTML += '<td style="background: repeating-linear-gradient( 180deg, #ffffff, #ffffff 14px, #519872 8px, #519872 28px);color: #519872;border: 1px solid #24292e38;">.</td>'
            } else if (element.color == 'green') {
                if (greenwhite) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    greenwhite = false;
                }
                HTML += '<td id="td" style="background: repeating-linear-gradient( 180deg, #519872, #519872 14px, #FFffff 8px, #FFffff 28px);color: #ffffff; border: 1px solid #24292e38;">.</td>'
            }

        }

        if (pass_count) {
            HTML += `<td style="width:50vw;"> ${element.teknik}</td><td style="width:42px;"> ${element.count}</td></tr> `

        } else {
            HTML += `<td style="width:50vw;"> ${element.teknik}</td></tr> `

        }
    });

    HTML += '</table>'

    let results_p = document.getElementById("results");
    results_p.innerHTML = HTML;
}

function find_pass() {

    let start = document.getElementById("stat_pass_date");
    let date = start.value;

    let gr = document.getElementById("stat_pass_group");
    let group = gr.value;

    getpass(date, group).then(function (reply) {

        fill_result(reply, false);

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
    let date = document.getElementById("mon_date");
    date = date.value;
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

    let file = new File(["\ufeff" + content], `${group}_${date}.txt`, { type: "text/plain:charset=UTF-8" });

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
                td.style.color = "white";

            }
        }

        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
            } else {
                td.style.color = "white";

            }
        }

        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
            } else {
                td.style.color = "white";

            }
        }

        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
            } else {
                td.style.color = "white";

            }
        }

        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
            } else {
                td.style.color = "white";

            }
        }

        td = tr[i].getElementsByTagName("td")[5];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
            } else {
                td.style.color = "white";

            }
        }
    }
}

function clear_all() {
    let tds = document.getElementsByTagName('td');
    console.log(tds);
    for (let td of tds) {
        td?.classList.remove('chosen');

        if (td.innerHTML != "") {
            td.style.color = "black";
            td.style.backgroundColor = 'rgb(255, 255, 255)';
        }
    }
}

function clear_all_plan() {
    let tds = document.getElementsByTagName('td');
    console.log(tds);
    for (let td of tds) {

        if (td.classList[0] == 'chosen') {
            td.classList.remove('chosen');
            td.style.backgroundColor = 'rgb(255, 255, 255)';
        }


    }
}



function clear_search() {
    let input = document.getElementById("search_field");
    input.value = "";
    clear_all()
}

function saveplan_mon() {


    let elements = [];

    let trs = document.querySelectorAll(`tr`);
    trs.forEach(element => {
        if (element.children[3].classList[0] == "chosen") {
            elements.push(element.children[1])
        }
    });

    let chosen = [];


    for (let index = 0; index < elements.length; index++) {
        chosen.push({ "class": elements[index].classList[0], "name": elements[index].innerText });
    }

    chosen.sort((a, b) => (a.class < b.class) ? 1 : ((b.class < a.class) ? -1 : 0))

    console.log(chosen);

    let content = "";
    let statistics = "";
    let colors = [];
    let date = document.getElementById("mon_plan_date");
    date = date.value;
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

    let sel = document.getElementById("stat_group_plan")
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


    let file = new File(["\ufeff" + content], `${group}_${date}.txt`, { type: "text/plain:charset=UTF-8" });

    url = window.URL.createObjectURL(file);

    let a = document.createElement("a");
    a.style = "display: none";
    a.href = url;
    a.download = file.name;
    a.click();
    window.URL.revokeObjectURL(url);

}
