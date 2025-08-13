
function setDate() {
    let dates = document.getElementsByClassName('thisdate');


    for (let index = 0; index < dates.length; index++) {
        dates[index].valueAsDate = new Date();

    }

}

function listen_click() {

    let tds = document.querySelectorAll(`td`);
    tds.forEach((td) => {
        td.addEventListener(`click`, function () {
            if (td.innerHTML != "") {
                td.classList.toggle("chosen");

                if (td.classList[0].startsWith("yellow")) {
                    td.style.backgroundColor = td.style.backgroundColor === 'rgba(237, 240, 96, 0.7)' ? 'rgba(255, 255, 255, 1)' : 'rgba(237, 240, 96, 0.7)';
                }
                if (td.classList[0].startsWith("orange")) {
                    td.style.backgroundColor = td.style.backgroundColor === 'rgba(240, 128, 60, 0.7)' ? 'rgba(255, 255, 255, 1)' : 'rgba(240, 128, 60, 0.7)';
                }
                if (td.classList[0].startsWith("green")) {
                    td.style.backgroundColor = td.style.backgroundColor === 'rgba(81, 152, 114, 0.7)' ? 'rgba(255, 255, 255, 1)' : 'rgba(81, 152, 114, 0.7)';
                }
                if (td.classList[0].startsWith("blue")) {
                    td.style.backgroundColor = td.style.backgroundColor === 'rgba(52, 89, 149, 0.7)' ? 'rgba(255, 255, 255, 1)' : 'rgba(52, 89, 149, 0.7)';
                }
                if (td.classList[0].startsWith("brown")) {
                    td.style.backgroundColor = td.style.backgroundColor === 'rgba(72, 39, 40, 0.7)' ? 'rgba(255, 255, 255, 1)' : 'rgba(72, 39, 40, 0.7)';
                }
                if (td.classList[0].startsWith("black")) {
                    td.style.backgroundColor = td.style.backgroundColor === 'rgba(0, 0, 0, 0.7)' ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 0.7)';
                }
                if (td.classList[0].startsWith("al")) {
                    td.style.backgroundColor = td.style.backgroundColor === 'rgba(212, 116, 190, 0.7)' ? 'rgba(255, 255, 255, 1)' : 'rgba(212, 116, 190, 0.7)';
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
                if (tr.children[1].classList[0].startsWith("black")) {
                    tr.children[3].style.backgroundColor = tr.children[3].style.backgroundColor === 'rgb(0, 0, 0)' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)';
                }
                if (tr.children[1].classList[0] == "all") {
                    tr.children[3].style.backgroundColor = tr.children[3].style.backgroundColor === 'rgb(212, 116, 190)' ? 'rgb(255, 255, 255)' : 'rgb(212, 116, 190)';
                }

            }
            ;
        });
    });
}

function listen_click_old_pass() {
    let trs = document.querySelectorAll(`tr`);
    console.log(trs);

    trs.forEach((tr) => {
        tr.addEventListener(`click`, function () {
            console.log(tr);

            if (tr.innerHTML != '') {

                tr.children[2].classList.toggle("chosen");
            }
            ;
        });
    });
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

function createFile_kuy() {

    let modal = document.getElementsByClassName("modal")[0];
    let modal_content = document.getElementsByClassName("modal-content")[0];


    modal.style.display = "block";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    let elements = document.getElementsByClassName('chosen');
    let chosen = [];


    for (let index = 0; index < elements.length; index++) {
        chosen.push({ "class": elements[index].classList[0], "name": elements[index].innerText });
    }

    chosen.sort((a, b) => (a.class < b.class) ? 1 : ((b.class < a.class) ? -1 : 0))

    let modal_cont = "<h4>Förhandsgranska ditt pass</h4><h6>Lägg till fritext och flytta runt teknikerna och texten i den ordning du vill ha det i.</h6><h6>När du är nöjd klickar du på knappen <span 'style=font-style: italic;'>Spara pass</span>, för att få upp en utskriftsprompt och spara passet i historiken.</h6><br>";

    let statistics = "";
    let colors = [];
    let date = document.getElementById("kuy_date");
    date = date.value;

    for (let index = 0; index < chosen.length; index++) {

        modal_cont += `
        <div class="draggable" draggable="true">
        <p>
            <span class="circle ${chosen[index].class}"></span>
                ${chosen[index].name}
            </p>
        </div>`;

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

    // Add a text field for adding new items dynamically
    modal_cont += `
    <div id="new-text-container">
        <input type="text" id="new-text" placeholder="Lägg till fritext" />
        <button id="add-text">Lägg till</button>
    </div>`;

    modal_cont += `<button class="close">Spara pass</button>`;

    // Set the modal content
    modal_content.innerHTML = modal_cont;

    let dragSrcEl = null;

    // Add drag-and-drop listeners
    function addDragAndDropListeners(element) {
        element.addEventListener('dragstart', (e) => {
            dragSrcEl = element;
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', element.outerHTML);
            element.classList.add('dragging');
        });

        element.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        });

        element.addEventListener('drop', (e) => {
            e.stopPropagation(); // Prevent browser redirection
            const draggingElement = document.querySelector('.dragging');

            if (draggingElement && draggingElement !== element) {
                element.insertAdjacentElement('beforebegin', draggingElement);
            }
            draggingElement?.classList?.remove('dragging');
        });

        element.addEventListener('dragend', () => {
            element.classList?.remove('dragging');
        });
    }

    // Attach listeners to all draggable elements
    document.querySelectorAll('.draggable').forEach(addDragAndDropListeners);

    let addButton = modal_content.querySelector('#add-text');

    addButton.onclick = function () {
        let freeTextInput = document.getElementById('new-text');
        let textValue = freeTextInput.value.trim(); // Get and trim the value of the text box

        if (textValue) {
            // Create a new draggable <p> element
            let newParagraph = document.createElement('div');
            newParagraph.classList.add('draggable');
            newParagraph.setAttribute('draggable', 'true');
            newParagraph.innerHTML = `
            <p>
                <span class="circle text"></span> ${textValue}
            </p>
        `;

            // Append the new <p> to the modal
            modal_content.appendChild(newParagraph);

            // Clear the text box
            freeTextInput.value = '';

            // Make the newly added element draggable
            document.querySelectorAll('.draggable').forEach(addDragAndDropListeners);
        }
    };

    let span = document.getElementsByClassName("close")[0];
    span.onclick = function () {

        const div = document.querySelector('.modal-content');
        for (let i = div.children.length - 1; i >= 0; i--) {
            const child = div.children[i];
            if (child.className.toLowerCase() !== 'draggable') {
                div.removeChild(child);
            }
        }

        window.print()

        modal.style.display = "none";

        // Collect reordered content
        content = "";
        const allTexts = modal_content.querySelectorAll("p");
        allTexts.forEach(el => {
            content += el.innerText + "\n";
        });

        let i = 0;

        tekniker.forEach(element => {
            if (element != "") {
                savepass(element, group, date, colors[i])
                i++;
            }
        });

    };
}

function search_kuy() {
    clear_all();

    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search_field");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    let trs = table.getElementsByTagName("tr");

    for (i = 0; i < trs.length; i++) {
        let intr = false;
        td = trs[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
                intr = true;
            } else {
                td.style.color = "white";
            }
        }

        td = trs[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
                intr = true;

            } else {
                td.style.color = "white";

            }
        }

        td = trs[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
                intr = true;

            } else {
                td.style.color = "white";

            }
        }

        td = trs[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
                intr = true;

            } else {
                td.style.color = "white";

            }
        }

        td = trs[i].getElementsByTagName("td")[4];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
                intr = true;

            } else {
                td.style.color = "white";

            }
        }
    }
}

function search_plan() {
    clear_all_plan();

    let input, filter, tr, td, i, txtValue;
    input = document.getElementById("search_field");
    filter = input.value.toUpperCase();
    let trs = document.getElementsByTagName("tr");


    for (i = 0; i < trs.length; i++) {
        td = trs[i].children[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                trs[i].children[3].click();
            } else {
                trs[i].style.display = "none";
            }
        }
    }

    let search = document.getElementById("search_field");
    search.value = "";

}

function get_group_statistics() {
    let sel = document.getElementById("stat_group")
    let group = sel.value;

    if (group == "") {
        let info = document.getElementById("info");
        info.innerHTML = 'Du behöver välja grupp om du vill hämta statistiken.'

        setTimeout(function () { info.innerHTML = ""; }, 5000);
    } else {

        getgroupstat(group).then(function (reply) {

            fill_result(reply, true);

        });
    }

}
function get_group_overview() {
    let sel = document.getElementById("overview_group")
    let group = sel.value;

    if (group == "") {
        let info = document.getElementById("info");
        info.innerHTML = 'Du behöver välja grupp om du vill hämta statistiken.'

        setTimeout(function () { info.innerHTML = ""; }, 5000);
    } else {

        if (group == "V2" || group == "V1" || group == "S1" || group == "Test") {
            let HTML = `
<table id="plan_table" class="overview-table">
    <tr>
        <th></th>
        <th colspan="2">KIHON WAZA</th>
        <th></th>
    </tr>
    <tr>
        <th></th>
        <th>ATEMI WAZA</th>
        <th>TOTALT</th>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>

        <td class="yellow">1. Shotei uchi, jodan, rak stöt med främre och bakre handen</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>

        <td class="yellow">2. Shotei uchi, chudan, rak stöt med främre och bakre handen</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>

        <td class="yellow ">3. Gedan geri, rak spark med främre och bakre benet</td>
        <td></td>
    </tr>


    <tr>
        <td style="background-color: #FD7521;"></td>

        <td class="orange">1. Mawashi shotei uchi, jodan, cirkulär stöt med bakre handen</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FD7521;"></td>

        <td class="orange">2. Chudan tski, stöt snett uppåt med bakre handen</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FD7521;"></td>

        <td class="orange">3. Hiza geri, chudan, rak knästöt med bakre benet</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color:#40775A;"></td>
        <td class="green">1. Mawashi seiken tski, jodan, cirkulärt slag med främre och bakre handen</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color:#40775A;"></td>
        <td class="green">2. Kin geri, gedan, spark snett uppåt med främre och bakre benet</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color:#40775A;"></td>
        <td class="green">3. Mae geri, chudan, rak spark med främre och bakre benet</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color:#345995;"></td>
        <td class="blue">1. Seiken tski, jodan, rakt slag med främre och bakre handen</td>
        <td></td>
    </tr>


    <tr>
        <td style="background-color:#345995;"></td>
        <td class="blue">2. Seiken tski, chudan, rakt slag med främre och bakre handen</td>
        <td></td>
    </tr>


    <tr>
        <td style="background-color:#345995;"></td>
        <td class="blue">3. Mawashi geri, gedan, cirkulär spark med främre och bakre benet</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color:#345995;"></td>
        <td class="blue">4. Mawashi geri, chudan, cirkulär spark med främre och bakre benet</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color:#482728;"></td>
        <td class="brown">1. Empi uchi, jodan, cirkulär stöt med främre och bakre armen</td>
        <td></td>
    </tr>
    <tr>
        <td style="background-color:#482728;"></td>
        <td class="brown">2. Empi uchi, chudan, rak stöt åt sidan med närmaste armen</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color:#482728;"></td>
        <td class="brown">3. Kakato geri, chudan, rak spark med bakre benet</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color:#482728;"></td>
        <td class="brown">4. Yoko geri, chudan, rak spark åt sidan med närmaste benet</td>
        <td></td>
    </tr>

    <tr>
        <th></th>
        <th>KANSETSU WAZA</th>
        <th>TOTALT</th>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>
        <td class="yellow">1. O soto osae, utan grepp, nedläggning snett bakåt</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FD7521;"></td>
        <td class="orange">1. Kote gaeshi, grepp i handleden, nedläggning snett framåt
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FD7521;"></td>
        <td class="orange">1. Kote gaeshi, grepp i handleden, nedläggning snett bakåt
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #40775A;"></td>
        <td class="green">1. Ude osae, grepp i kragen med tryck, nedläggning framåt</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color:#40775A;"></td>
        <td class="green">2. Ude osae, i rörelse, cirkulär nedläggning</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #345995;"></td>
        <td class="blue">1. Irimi nage, grepp i handleden, nedläggning snett bakåt</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color:#345995;"></td>
        <td class="blue">2. Irimi nage, i rörelse, nedläggning snett framåt</td>
        <td></td>
    </tr>


    <tr>
        <td style="background-color: #482728;"></td>
        <td class="brown">1. Waki gatame, grepp i handleden, nedläggning snett bakåt</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color:#482728;"></td>
        <td class="brown">2. Kote mawashi, grepp i kragen med tryck, nedläggning snett framåt</td>
        <td></td>
    </tr>
    <tr>

        <th></th>
        <th>NAGE WAZA</th>
        <th>TOTALT</th>
    </tr>

    <tr>

        <td style="background-color: #FFEB0A;"></td>
        <td class="yellow">1. Koshi otoshi, utan grepp, nedläggning snett bakåt
        </td>
        <td></td>

    </tr>

    <tr>
        <td style="background-color: #FD7521;"></td>
        <td class="orange">1. Uki otoshi, i rörelse, nedläggning snett framåt</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color:#40775A;"></td>
        <td class="green">1. O soto otoshi, utan grepp, nedläggning snett bakåt</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #40775A;"></td>
        <td class="green">2. O soto otoshi, grepp i kragen med drag, nedläggning snett bakåt</td>
        <td></td>
    </tr>


    <tr>
        <td style="background-color: #345995;"></td>
        <td class="blue">1. O goshi, utan grepp, kast snett framåt</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #345995;"></td>
        <td class="blue">2. Tai guruma, utan grepp, nedläggning snett framåt</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #482728;"></td>
        <td class="brown">1. Harai goshi, utan grepp, kast snett framåt</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #482728;"></td>
        <td class="brown">2. Harai goshi, i rörelse, kast snett framåt</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #482728;"></td>
        <td class="brown">3. Sukui nage, utan grepp, kast snett framåt</td>
        <td></td>
    </tr>


    <tr>
        <td style="background-color: #482728;"></td>
        <td class="brown">4. Ko uchi gari, utan grepp, kast snett bakåt</td>
        <td></td>
    </tr>

    <tr>
        <th></th>
        <th>JIGO WAZA</th>
        <th>TOTALT</th>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>

        <td class="yellow">1. Grepp i två handleder framifrån - Frigöring</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>

        <td class="yellow">2. Grepp i två handleder bakifrån - Frigöring</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>

        <td class="yellow">3. Grepp i håret bakifrån - Tettsui uchi, frigöring</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>

        <td class="yellow">4. Försök till stryptag framifrån - Jodan soto uke</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>

        <td class="yellow">5. Stryptag framifrån - Kawashi, frigöring</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>

        <td class="yellow">6. Stryptag bakifrån - Maesabaki, kawashi, frigöring</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>

        <td class="yellow">7. Stryptag med armen - Maesabaki, kuzure ude osae, ude henkan gatame</td>
        <td></td>
    </tr>


    <tr>
        <td style="background-color: #FFEB0A;"></td>

        <td class="yellow">8. Försök till kravattgrepp från sidan - Jodan chikai uke, kawashi, koshi otoshi, ude
            henkan gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>
        <td class="yellow">9. Grepp i ärmen med drag - O soto osae, ude henkan gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>
        <td class="yellow">10. Livtag under armarna framifrån - Tate hishigi, ude henkan gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>
        <td class="yellow">11. Stryptag mot liggande sittande vid sidan - Frigöring, ude henkan gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>
        <td class="yellow">12. Hotfullt närmande mot liggande - Uppgång bakåt</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>
        <td class="yellow">13. Hotfullt närmande - Hejda med tryck
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>
        <td class="yellow">14. Kort svingslag - Jodan chikai uke, kawashi, koshi otoshi, ude henkan gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>
        <td class="yellow">15. Långt svingslag - Morote jodan uke, o soto osae, ude henkan gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>
        <td class="yellow">16. Påkslag mot huvudet - Ju morote jodan uke</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>
        <td class="yellow">17. Påkslag mot huvudet, backhand - Ju morote jodan uke</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>
        <td class="yellow">18. Knivhot mot magen - Grepp, shotei uchi jodan</td>
        <td></td>
    </tr>




    <tr>
        <td style="background-color: #FD7521;"></td>
        <td class="orange">1. Grepp i en handled framifrån
            med två händer med drag - Frigöring</td>
        <td></td>
    </tr>


    <tr>
        <td style="background-color: #FD7521;"></td>
        <td class="orange">2. Grepp i två handleder
            bakifrån - Kote gaeshi, ude hishigi hiza gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FD7521;"></td>
        <td class="orange">3. Grepp i håret framifrån - Frigöring</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FD7521;"></td>
        <td class="orange">4. Försök till stryptag framifrån - Uki otoshi, ude henkan gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FD7521;"></td>
        <td class="orange">5. Stryptag framifrån mot vägg - Tsuri komi</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FD7521;"></td>
        <td class="orange">6. Kravattgrepp från sidan - Ushiro osae, ude henkan gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FD7521;"></td>
        <td class="orange">7. Grepp om nacken och en knästöt - Gedan juji uke, kawashi, frigöring</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color:#FD7521;"></td>
        <td class="orange">8. Försök till grepp i kläderna - Chudan soto uke, koshi otoshi, ude henkan gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color:#FD7521;"></td>
        <td class="orange">9. Grepp i kläderna med tryck - Kuzure ude garami, ushiro osae, ude henkan gatame</td>
        <td></td>
    </tr>


    <tr>
        <td style="background-color:#FD7521;"></td>
        <td class="orange">10. Stryptag mot liggande sittande mellan benen - Frigöring, ude henkan gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color:#FD7521;"></td>
        <td class="orange">11. Långt svingslag - Ju jodan uchi uke, uki otoshi, ude henkan gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color:#FD7521;"></td>
        <td class="orange">12. Rak spark mot magen - Gedan uchi uke, koshi otoshi, ude henkan gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color:#FD7521;"></td>
        <td class="orange">13. Påkslag mot huvudet - Ju jodan uchi uke, uki otoshi, ude hishigi hiza gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color:#FD7521;"></td>
        <td class="orange">14. Påkslag mot huvudet, backhand - Ju morote jodan uke, kote gaeshi, ude hishigi hiza gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color:#FD7521;"></td>
        <td class="orange">15. Knivhot mot magen - Grepp, shotei uchi jodan, kote gaeshi, ude hishigi hiza gatame
        </td>
        <td></td>
    </tr>


    <tr>
        <td style="background-color: #40775A;"></td>
        <td class="green">1. Grepp i två handleder
            framifrån - Shiho nage, shiho nage gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #40775A;"></td>
        <td class="green">2. Stryptag framifrån - O soto
            otoshi, ude hishigi hiza gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #40775A;"></td>
        <td class="green">3. Stryptag bakifrån med vänster arm - Maesabaki, kuzure ude gatami, kote gaeshi, ude hishigi
            hiza gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #40775A;"></td>
        <td class="green">4. Grepp i kläderna med tryck - Ude osae, ude osae gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #40775A;"></td>
        <td class="green">5. Grepp i kläderna med drag - O soto otoshi, ude hishigi hiza gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #40775A;"></td>
        <td class="green">6. Grepp om nacken och en knästöt - Gedan juji uke, kawashi, koshi otoshi, ude henkan gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #40775A;"></td>
        <td class="green">7. Livtag under armarna bakifrån - Ude osae, ude osae gatame
        </td>
        <td></td>
    </tr>
    <tr>
        <td style="background-color: #40775A;"></td>
        <td class="green">8. Högt livtag över armarna bakifrån - Maesabaki, kuzure ude osae, ude henkan gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #40775A;"></td>
        <td class="green">9. Stryptag mot liggande sittande mellan benen - Frigöring
        </td>
        <td></td>
    </tr>


    <tr>
        <td style="background-color: #40775A;"></td>
        <td class="green">10. Svingslag mot liggande mot huvudet - Jodan chikai uke, hiza kansetsu waza
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #40775A;"></td>
        <td class="green">11. Rakt slag mot huvudet - Jodan soto uke, o soto otoshi, ude hishigi hiza gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #40775A;"></td>
        <td class="green">12. Cirkulär spark mot benen - San ren uke, o soto osae, ude henkan gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #40775A;"></td>
        <td class="green">13. Påkslag mot huvudet, backhand - Ju morote jodan uke, ude osae, ude osae gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #40775A;"></td>
        <td class="green">14. Knivhot mot halsen, vänster sida - Grepp, kin geri
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #40775A;"></td>
        <td class="green">15. Knivhot mot halsen, höger sida - Grepp, kin geri
        </td>
        <td></td>
    </tr>


    <tr>
        <td style="background-color: #345995;"></td>
        <td class="blue">1. Stryptag från sidan med tryck - Kote hineri, ude henkan gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #345995;"></td>
        <td class="blue">2. Stryptag bakifrån - O soto otoshi, ude hishigi hiza gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #345995;"></td>
        <td class="blue">3. Grepp i kläderna mot vägg - Tate hishigi, ude henkan gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #345995;"></td>
        <td class="blue">4 Försök till livtag över armarna framifrån - Uki otoshi, ude henkan gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #345995;"></td>
        <td class="blue">5. Livtag över armarna framifrån - O goshi, ude hishigi hiza gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #345995;"></td>
        <td class="blue">6. Försök till grepp om båda benen framifrån - Tai guruma, ude henkan gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #345995;"></td>
        <td class="blue">7. Stryptag mot liggande med armen - Frigöring, ude henkan gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #345995;"></td>
        <td class="blue">8. Spark mot liggande mot huvudet - San ren uke, hiza kansetsu waza
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #345995;"></td>
        <td class="blue">9. Hotfullt uppträdande - Ude hishigi
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #345995;"></td>
        <td class="blue">10. Kort svingslag - Jodan chikai uke, o soto otoshi, ude hishigi hiza gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #345995;"></td>
        <td class="blue">11. Långt svingslag - Morote jodan uke, hiza geri, tai guruma, ude henkan gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #345995;"></td>
        <td class="blue">12. Svingslag, backhand - Morote jodan uke, irimi nage, ude henkan gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #345995;"></td>
        <td class="blue">13. Påkslag mot huvudet, backhand - Ju jodan uchi uke, irimi nage, ude hishigi hiza gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #345995;"></td>
        <td class="blue">14. Grepp och knivhot mot magen - Grepp, kin geri, kote gaeshi, ude hishigi hiza gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #345995;"></td>
        <td class="blue">15. Två motståndare, grepp i kläderna - Ude osae
        </td>
        <td></td>
    </tr>


    <tr>
        <td style="background-color: #482728;"></td>
        <td class="brown">1. Grepp i håret med två händer och knästöt - Gedan juji uke, waki gatame, ude osae gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #482728;"></td>
        <td class="brown">2. Stryptag från sidan - Harai goshi, ude hishigi hiza gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #482728;"></td>
        <td class="brown">3. Stryptag bakifrån - Jodan chikai uke, sukui nage, ude hishigi hiza gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #482728;"></td>
        <td class="brown">4. Stryptag med armen med drag - O soto otoshi, ude hishigi hiza gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #482728;"></td>
        <td class="brown">5. Kravattgrepp framifrån - Chudan tski, kote hineri, ude henkan gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #482728;"></td>
        <td class="brown">6. Kravattgrepp med nedbrytning i sidled - Frigöring, ude henkan gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #482728;"></td>
        <td class="brown">7. Grepp i kläderna med tryck - Kote mawashi, ude osae gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #482728;"></td>
        <td class="brown">8. Flera svingslag mot liggande sittande på magen - Jodan chikai uke, frigöring
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #482728;"></td>
        <td class="brown">9. Hotfullt närmande mot liggande - Uppgång framåt, jodan chikai uke, hiza kansetsu waza
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #482728;"></td>
        <td class="brown">10. Hotfullt uppträdande - Hara osae, ude henkan gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #482728;"></td>
        <td class="brown">11. Kort svingslag - Jodan chikai uke, uki otoshi, ude henkan gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #482728;"></td>
        <td class="brown">12. Kort svingslag - Jodan chikai uke, ko uchi gari
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #482728;"></td>
        <td class="brown">13. Rak spark mot magen - Gedan uchi uke, irimi nage, ude henkan gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #482728;"></td>
        <td class="brown">14. Påkslag mot huvudet forehand och backhand - Tsuri ashi, ayumi ashi, ju jodan uchi uke,
            irimi nage, ude hishigi hiza
            gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #482728;"></td>
        <td class="brown">15. Påkslag mot huvudet backhand och forehand - Tsuri ashi, ayumi ashi, morote jodan uke, o
            soto osae, ude hishigi hiza
            gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #482728;"></td>
        <td class="brown">16. Grepp och knivhot mot halsen, höger sida - Grepp waki gatame, ude hiza osae gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #482728;"></td>
        <td class="brown">17. Knivhot mot halsen bakifrån med höger arm - Maesabaki, kuzure ude osae, ude hiza osae
            gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #482728;"></td>
        <td class="brown">18. Knivhot mot halsen bakifrån med vänster arm - Maesabaki, kuzure ude garami, kote gaeshi,
            ude hishigi hiza gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #482728;"></td>
        <td class="brown">19. Två motståndare, svingslag och svingslag - Morote jodan uke, hiza geri, tai guruma morote
            jodan uke, hiza geri, tai
            guruma
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black linear-gradient(yellow, yellow) no-repeat center 50% / 100% 2px;"></td>
        <td class="blackone">1. Grepp i håret framifrån - Kote mawashi, ude osae gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black linear-gradient(yellow, yellow) no-repeat center 50% / 100% 2px;"></td>
        <td class="blackone">2. Stryptag framifrån - Koshi guruma, ude hishigi hiza gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black linear-gradient(yellow, yellow) no-repeat center 50% / 100% 2px;"></td>
        <td class="blackone">3. Styptag med armen med neddrag - Ura makikomi, ude henkan gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black linear-gradient(yellow, yellow) no-repeat center 50% / 100% 2px;"></td>
        <td class="blackone">4. Stryptag med armen med neddrag - Hiza kansetsu waza
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black linear-gradient(yellow, yellow) no-repeat center 50% / 100% 2px;"></td>
        <td class="blackone">5. Kravattgrepp med nedbrytning i sidled - Frigöring, ude henkan gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black linear-gradient(yellow, yellow) no-repeat center 50% / 100% 2px;"></td>
        <td class="blackone">6. Dubbelnelson med nedbrytning - Frigöring, ude henkan gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black linear-gradient(yellow, yellow) no-repeat center 50% / 100% 2px;"></td>
        <td class="blackone">7. Grepp i en ärm - Ude hishigi, ude henkan gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black linear-gradient(yellow, yellow) no-repeat center 50% / 100% 2px;"></td>
        <td class="blackone">8. Grepp i kragen med neddrag - Hiza kansetsu waza
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black linear-gradient(yellow, yellow) no-repeat center 50% / 100% 2px;"></td>
        <td class="blackone">9. Högt livtag över armarna bakifrån
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black linear-gradient(yellow, yellow) no-repeat center 50% / 100% 2px;"></td>
        <td class="blackone">10. Grepp i håret för att dunka huvudet mot underlaget - Frigöring, ude henkan gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black linear-gradient(yellow, yellow) no-repeat center 50% / 100% 2px;"></td>
        <td class="blackone">11. Flera svingslag mot liggande mot huvudet - Jodan chikai uke, frigöring, ude henkan
            gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black linear-gradient(yellow, yellow) no-repeat center 50% / 100% 2px;"></td>
        <td class="blackone">12. Hotfullt närmande mot liggande - Uppgång framåt, jodan chikai uke, koshi otoshi, ude
            henkan gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black linear-gradient(yellow, yellow) no-repeat center 50% / 100% 2px;"></td>
        <td class="blackone">13. Hotfullt uppträdande - Kuzure ude guruma
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black linear-gradient(yellow, yellow) no-repeat center 50% / 100% 2px;"></td>
        <td class="blackone">14. Svingslag backhand - Morote jodan uke, waki gatame, ude osae gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black linear-gradient(yellow, yellow) no-repeat center 50% / 100% 2px;"></td>
        <td class="blackone">15. Påkslag mot huvudet - Morote jodan uke, hiza geri, tai guruma, ude hishigi hiza gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black linear-gradient(yellow, yellow) no-repeat center 50% / 100% 2px;"></td>
        <td class="blackone">16. Knivskärning forehand och backhand - Tsuri ashi, ju jodan uchi uke, irimi nage, ude
            hishigi hiza gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black linear-gradient(yellow, yellow) no-repeat center 50% / 100% 2px;"></td>
        <td class="blackone">17. Knivskärning backhand och forehand - Tsuri ashi, morote jodan uke, hiza geri, kuzure
            ude guruma
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black linear-gradient(yellow, yellow) no-repeat center 50% / 100% 2px;"></td>
        <td class="blackone">18. Pistolhot framifrån - Grepp, kin geri
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black linear-gradient(yellow, yellow) no-repeat center 50% / 100% 2px;"></td>
        <td class="blackone">19. Två motståndare, knivhot och svingslag - Grepp, shotei uchi jodan, morote jodan uke,
            hiza geri, tai guruma
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat; background-position: center 30%, center 70%;
            background-size: 100% 2px, 100% 2px;"></td>
        <td class="blacktwo">1. Grepp i håret bakifrån med neddrag - Shiho nage, ude henkan gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat; background-position: center 30%, center 70%;
            background-size: 100% 2px, 100% 2px;"></td>
        <td class="blacktwo">2. Kravattgrepp från sidan - Tani otoshi, ude henkan gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat; background-position: center 30%, center 70%;
            background-size: 100% 2px, 100% 2px;"></td>
        <td class="blacktwo">3. Grepp om nacken och flera knästötar - Gedan juji uke, kawashi, iriminage, ude henkan
            gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat; background-position: center 30%, center 70%;
            background-size: 100% 2px, 100% 2px;"></td>
        <td class="blacktwo">4. Grepp i en ärm och svingslag - Jodan chikai uke, kuzure ude guruma
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat; background-position: center 30%, center 70%;
            background-size: 100% 2px, 100% 2px;"></td>
        <td class="blacktwo">5. Grepp bakifrån med vänster hand och svingslag - Jodan chikai uke, o soto otoshi, ude
            hishigi hiza gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat; background-position: center 30%, center 70%;
            background-size: 100% 2px, 100% 2px;"></td>
        <td class="blacktwo">6. Nedtryckning mot liggande sittande mellan benen - Frigöring, ude henkan gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat; background-position: center 30%, center 70%;
            background-size: 100% 2px, 100% 2px;"></td>
        <td class="blacktwo">7. Strypag mot liggande sittande ovanför huvudet - Frigöring, ude henkan gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat; background-position: center 30%, center 70%;
            background-size: 100% 2px, 100% 2px;"></td>
        <td class="blacktwo">8. Svingslag mot liggande mot huvudet - Kuzure kibisu gaeshi
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat; background-position: center 30%, center 70%;
            background-size: 100% 2px, 100% 2px;"></td>
        <td class="blacktwo">9. Spark mot liggande mot kroppen - San ren uke, kuzure hiza kansetsu waza
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat; background-position: center 30%, center 70%;
            background-size: 100% 2px, 100% 2px;"></td>
        <td class="blacktwo">10. Hotfullt uppträdande - Hiji gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat; background-position: center 30%, center 70%;
            background-size: 100% 2px, 100% 2px;"></td>
        <td class="blacktwo">11. Rakt slag mot huvudet - Jodan soto uke, te guruma, ude hishigi hiza gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat; background-position: center 30%, center 70%;
            background-size: 100% 2px, 100% 2px;"></td>
        <td class="blacktwo">12. Cirkulär spark mot sidan - Gedan uchi uke, o uchi gari
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat; background-position: center 30%, center 70%;
            background-size: 100% 2px, 100% 2px;"></td>
        <td class="blacktwo">13. Påkslag mot huvudet med lång påk - Tsuri ashi, ayumi ashi, koshi otoshi, ude hishigi
            hiza gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat; background-position: center 30%, center 70%;
            background-size: 100% 2px, 100% 2px;"></td>
        <td class="blacktwo">14. Påkslag mot benen med lång påk - San ren uke, o soto osae, ude hishigi hiza gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat; background-position: center 30%, center 70%;
            background-size: 100% 2px, 100% 2px;"></td>
        <td class="blacktwo">15. Grepp om nacken och flera knivhugg underifrån - Chudan barai, hara osae, ude hiza osae
            gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat; background-position: center 30%, center 70%;
            background-size: 100% 2px, 100% 2px;"></td>
        <td class="blacktwo">16. Flera knivhugg underifrån - Chudan barai, seiken tski jodan, hiza
            geri chudan, kuzure ude guruma
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat; background-position: center 30%, center 70%;
            background-size: 100% 2px, 100% 2px;"></td>
        <td class="blacktwo">17. Pistolhot bakifrån - Grepp, kin geri
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat; background-position: center 30%, center 70%;
            background-size: 100% 2px, 100% 2px;"></td>
        <td class="blacktwo">18. Två motståndare, svingslag och svingslag - Jodan chikai uke, yoko geri chudan, o soto
            otoshi
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat; background-position: center 30%, center 70%;
            background-size: 100% 2px, 100% 2px;"></td>
        <td class="blacktwo">Två motståndare, påkslag forehand, backhand och svingslag - Tsuri ashi, ayumi ashi, ju
            jodan uchi uke, irimi nage, påkslag
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: center 25%, center 50%, center 75%;
            background-size: 100% 2px, 100% 2px, 100% 2px; "></td>
        <td class="blackthree">1. Stryptag framifrån med tryck - Tsuri komi, tai otoshi, ude hishigi hiza gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: center 25%, center 50%, center 75%;
            background-size: 100% 2px, 100% 2px, 100% 2px; "></td>
        <td class="blackthree">2. Kravattgrepp med nedbrytning framåt - Yoko guruma
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: center 25%, center 50%, center 75%;
            background-size: 100% 2px, 100% 2px, 100% 2px; "></td>
        <td class="blackthree">3. Grepp i kläderna med tryck - Tomoe nage
            hiza gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: center 25%, center 50%, center 75%;
            background-size: 100% 2px, 100% 2px, 100% 2px; "></td>
        <td class="blackthree">4. Grepp i kläderna och flera svingslag - Jodan chikai uke, o soto otoshi, ude hishigi
            hiza gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: center 25%, center 50%, center 75%;
            background-size: 100% 2px, 100% 2px, 100% 2px; "></td>
        <td class="blackthree">5. Grepp bakifrån med höger hand och svingslag - Jodan chikai uke, ude gatame, ude osae
            gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: center 25%, center 50%, center 75%;
            background-size: 100% 2px, 100% 2px, 100% 2px; "></td>
        <td class="blackthree">6. Försök till grepp om båda benen framifrån - Sumi gaeshi
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: center 25%, center 50%, center 75%;
            background-size: 100% 2px, 100% 2px, 100% 2px; "></td>
        <td class="blackthree">7. Livtag under armarna framifrån med upplyft - Tate hishigi, o soto osae, ude henkan
            gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: center 25%, center 50%, center 75%;
            background-size: 100% 2px, 100% 2px, 100% 2px; "></td>
        <td class="blackthree">8. Livtag under armarma bakifrån med upplyft - Hiza kansetsu waza
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: center 25%, center 50%, center 75%;
            background-size: 100% 2px, 100% 2px, 100% 2px; "></td>
        <td class="blackthree">9. Spark mot liggande mot benen - Morote gedan uke, hiza kansetsu waza
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: center 25%, center 50%, center 75%;
            background-size: 100% 2px, 100% 2px, 100% 2px; "></td>
        <td class="blackthree">10. Knivhot mot liggande sittande mellan benen - Frigöring, ude hiza osae gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: center 25%, center 50%, center 75%;
            background-size: 100% 2px, 100% 2px, 100% 2px; "></td>
        <td class="blackthree">11. Hotfullt uppträdande - Kuzure kote gaeshi gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: center 25%, center 50%, center 75%;
            background-size: 100% 2px, 100% 2px, 100% 2px; "></td>
        <td class="blackthree">12. Påkslag mot huvudet forehand och backhand - Blockering med påk, påkslag
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: center 25%, center 50%, center 75%;
            background-size: 100% 2px, 100% 2px, 100% 2px; "></td>
        <td class="blackthree">13. Påkstöt mot magen med lång påk - Tsuri ashi, grepp, kote gaeshi, ude hishigi hiza
            gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: center 25%, center 50%, center 75%;
            background-size: 100% 2px, 100% 2px, 100% 2px; "></td>
        <td class="blackthree">14. Påkstöt mot magen med lång påk - Tsuri ashi, grepp, o soto otoshi, ude hishigi hiza
            gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: center 25%, center 50%, center 75%;
            background-size: 100% 2px, 100% 2px, 100% 2px; "></td>
        <td class="blackthree">15. Flera knivstick mot magen - Chudan barai, seiken tski jodan, kote gaeshi, ude hishigi
            hiza gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: center 25%, center 50%, center 75%;
            background-size: 100% 2px, 100% 2px, 100% 2px; "></td>
        <td class="blackthree">16. Flera knivstick mot magen - Chudan barai, seiken tski jodan, waki gatame, ude hiza
            osae gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: center 25%, center 50%, center 75%;
            background-size: 100% 2px, 100% 2px, 100% 2px; "></td>
        <td class="blackthree">17. Knivskärning forehand och backhand - Blockering med påk, påkslag
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: center 25%, center 50%, center 75%;
            background-size: 100% 2px, 100% 2px, 100% 2px; "></td>
        <td class="blackthree">18. Pistolhot mot huvudet - Grepp, kin geri
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: center 25%, center 50%, center 75%;
            background-size: 100% 2px, 100% 2px, 100% 2px; "></td>
        <td class="blackthree">19. Ingripa mot flera svingslag - Irimi nage, ude hishigi hiza gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: center 25%, center 50%, center 75%;
            background-size: 100% 2px, 100% 2px, 100% 2px; "></td>
        <td class="blackthree">20. Två motståndare, svingslag och försök till stryptag - Mae geri, harai goshi
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: center 25%, center 50%, center 75%;
            background-size: 100% 2px, 100% 2px, 100% 2px; "></td>
        <td class="blackthree">21. Två motståndare, svingslag och stryptag med armen med neddrag - Mae geri, ura
            makikomi
        </td>
        <td></td>
    </tr>






    <tr>
        <th></th>
        <th>RENRAKU WAZA</th>
        <th>TOTALT</th>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>

        <td class="yellow">1. Försök till stryptag framifrån - Försök till kravattgrepp från sidan = Jodan soto uke -
            Jodan chikai uke, kawashi,
            koshi otoshi, ude henkan gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FD7521;"></td>
        <td class="orange">1. Grepp i två handleder framifrån - Kort svingslag = Frigöring - Jodan chikai uke, kawashi,
            koshi otoshi, ude henkan
            gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FD7521;"></td>
        <td class="orange">2. Hotfullt närmande - Långt svingslag = Morote jodan uke, o soto osae, ude henkan gatame
        </td>
        <td></td>
    </tr>


    <tr>
        <td style="background-color: #40775A;"></td>
        <td class="green">1. Grepp i två handleder bakifrån - Rak spark mot magen = Frigöring - Gedan uchi uke, koshi
            otoshi, ude henkan gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #40775A;"></td>
        <td class="green">2. Hotfullt närmande mot liggande - Långt svingslag = Uppgång bakåt - Ju jodan uchi uke, uki
            otoshi, ude henkan gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #345995;"></td>
        <td class="blue">1. Försök till grepp i kläderna - Chudan soto uke. koshi otoshi, ude henkan gatame = Valfri
            jigo waza anpassade efter
            ukes agerande</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #345995;"></td>
        <td class="blue">2. Grepp i kläderna med drag - O soto otosho, ude hishigi hiza gatame = Valfri jigo waza
            anpassade efter ukes agerande</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #345995;"></td>
        <td class="blue">3. Cirkulär spark mot benen - San ren uke, o soto osae, ude henkan gatame = Valfri jigo waza
            anpassad efter ukes
            agerande</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #482728;"></td>
        <td class="brown">1. Stryptag bakifrån - O soto otoshi, ude hishigi hiza gatame = Valfri jigo waza anpassad
            efter ukes agerande</td>
        <td></td>
    </tr>
    <tr>
        <td style="background-color: #482728;"></td>
        <td class="brown">2. Grepp om nacken och en knästöt - Gedan juji uke, frigöring = Valfri jigo waza anpassad
            efter ukes agerande</td>
        <td></td>
    </tr>
    <tr>
        <td style="background-color: #482728;"></td>
        <td class="brown">3. Livtag över armara framifrån - O goshi, ude hishigi hiza gatame = Valfri jigo waza anpassad
            efter ukes agerande</td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black linear-gradient(yellow, yellow) no-repeat center 50% / 100% 2px;"></td>
        <td class="blackone">1. Stryptag bakifrån - Sukui nage, udehishigi hiza gatame = Valfri jigo waza anpassad efter
            ukes agerande
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black linear-gradient(yellow, yellow) no-repeat center 50% / 100% 2px;
"></td>
        <td class="blackone">2. Stryptag med armen - Maesabaki, kuzure ude osae, ude henkan gatame = Valfri jigo waza
            anpassad efter ukes agerande
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black linear-gradient(yellow, yellow) no-repeat center 50% / 100% 2px;"></td>
        <td class="blackone">3. Svingslag, backhand - Morote jodan uke, irimi nage, ude henkan gatame = Valfri jigo waza
            anpassad efter ukes agerande
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat; background-position: center 30%, center 70%;
            background-size: 100% 2px, 100% 2px;">
        </td>
        <td class="blacktwo">1. Grepp i håret framifrån - Kote mawashi, ude osae gatame = Valfri jigo anpassad efter
            ukes agerande</td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat; background-position: center 30%, center 70%;
            background-size: 100% 2px, 100% 2px;"></td>
        <td class="blacktwo">2. Kravattgrepp framifrån - Chudan tski, kote hineri, ude henkan gatame = Valfri jigo
            anpassad efter
            ukes agerande
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat; background-position: center 30%, center 70%;
            background-size: 100% 2px, 100% 2px;">
        </td>
        <td class="blacktwo">3. Högt livtag över armarna bakifrån - Hiza kansetsu waza = Valfri jigo anpassad efter
            ukes agerande
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat; background-position: center 30%, center 70%;
            background-size: 100% 2px, 100% 2px;"></td>
        <td class="blacktwo">4. Hotfullt närmande - Ude hishigi = Valfri jigo anpassad efter
            ukes agerande
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: center 25%, center 50%, center 75%;
            background-size: 100% 2px, 100% 2px, 100% 2px; "></td>
        <td class="blackthree">1. Kravattgrepp - Tani otoshi = Valfri jigo anpassad efter
            ukes agerande
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: center 25%, center 50%, center 75%;
            background-size: 100% 2px, 100% 2px, 100% 2px; "></td>
        <td class="blackthree">2. Flera slag mot liggande sittande på magen - Jodan chikai uke, frigöring = Valfri jigo
            anpassad efter
            ukes agerande
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: center 25%, center 50%, center 75%;
            background-size: 100% 2px, 100% 2px, 100% 2px; "></td>
        <td class="blackthree">3. Spark mot liggande mot huvudet - San ren uke, hiza kansetsu waza = Valfri jigo
            anpassad efter
            ukes agerande
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: center 25%, center 50%, center 75%;
            background-size: 100% 2px, 100% 2px, 100% 2px; "></td>
        <td class="blackthree">4. Hotfullt uppträdande - Hiji gatame = Valfri jigo anpassad efter
            ukes agerande
        </td>
        <td></td>
    </tr>




    <tr>
        <th></th>
        <th>YAKOSUKO GEIKO</th>
        <th>TOTALT</th>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>

        <td class="yellow">1. Försvar
            mot en motståndare</td>
        <td></td>
    </tr>


    <tr>
        <td style="background-color: #FD7521;"></td>

        <td class="orange">1. Försvar
            mot en motståndare</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #40775A;"></td>

        <td class="green">1. Försvar
            mot en motståndare</td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black linear-gradient(yellow, yellow) no-repeat center 50% / 100% 2px;"></td>
        <td class="blackone">1. Försvar mot två motståndare
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black linear-gradient(yellow, yellow) no-repeat center 50% / 100% 2px;"></td>
        <td class="blackone">2. Försvar mot en motståndare som angriper med påk
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat; background-position: center 30%, center 70%;
            background-size: 100% 2px, 100% 2px;"></td>
        <td class="blacktwo">1. Försvar mot en motståndare som angriper med påk
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat; background-position: center 30%, center 70%;
            background-size: 100% 2px, 100% 2px;"></td>
        <td class="blacktwo">2. Försvar mot en motståndare som angriper med kniv
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: center 25%, center 50%, center 75%;
            background-size: 100% 2px, 100% 2px, 100% 2px; "></td>
        <td class="blackthree">1. Försvar mot en motståndare som angriper med kniv
        </td>
        <td></td>
    </tr>

    <tr>
        <th></th>
        <th>RANDORI</th>
        <th>TOTALT</th>
    </tr>


    <tr>
        <td style="background-color: #345995;"></td>

        <td class="blue">1. Försvar
            mot en motståndare</td>
        <td></td>
    </tr>


    <tr>
        <td style="background-color: #482728;"></td>

        <td class="brown">1. Försvar
            mot en motståndare</td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black linear-gradient(yellow, yellow) no-repeat center 50% / 100% 2px;"></td>
        <td class="blackone">1. Försvar mot en motståndare
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat; background-position: center 30%, center 70%;
            background-size: 100% 2px, 100% 2px;"></td>
        <td class="blackone">1. Försvar mot en motståndare
        </td>
        <td></td>
    </tr>


    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat; background-position: center 30%, center 70%;
            background-size: 100% 2px, 100% 2px;"></td>
        <td class="blackone">2. Försvar mot två motståndare
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: center 25%, center 50%, center 75%;
            background-size: 100% 2px, 100% 2px, 100% 2px; "></td>
        <td class="blackone">1. Försvar mot en motståndare
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: center 25%, center 50%, center 75%;
            background-size: 100% 2px, 100% 2px, 100% 2px; "></td>
        <td class="blackone">2. Försvar mot två motståndare
        </td>
        <td></td>
    </tr>


    <tr>
        <td style="background: black;
            background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: center 25%, center 50%, center 75%;
            background-size: 100% 2px, 100% 2px, 100% 2px; "></td>
        <td class="blackone">3. Försvar mot två motståndare som angriper med påk
        </td>
        <td></td>
    </tr>

    <tr>
        <th></th>
        <th>GRUNDLÄGGANDE TEKNIKER</th>
        <th>TOTALT</th>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Kamae neutral</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Kamae beredd</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Kamae med gard</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Tsuri ashi, framåt</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Tsuri ashi, bakåt</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Ayumi ashi, samma kamae</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Ayumi ashi, växlande kamae</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Taisabaki kort, vänster</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Taisabakai kort, höger</td>
        <td></td>
    </tr>
    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Taisabaki lång vänster</td>
        <td></td>
    </tr>
    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Taisabaki lång, höger</td>
        <td></td>
    </tr>
    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Maesabaki</td>
        <td></td>
    </tr>
    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Uppgång bakåt</td>
        <td></td>
    </tr>
    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Uppgång framåt</td>
        <td></td>
    </tr>
    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Kawashi</td>
        <td></td>
    </tr>
    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Ushiro ukemi, med dämpning</td>
        <td></td>
    </tr>
    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Mae ukemi</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Ushiro ukemi</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Mae ukemi, med dämpning</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Otoshi ukemi</td>
        <td></td>
    </tr>


    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Jodan chikai uke</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Morote jodan uke</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Ju morote jodan uke</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Gedan juji uke</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Soto uke, jodan</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Soto uke, chudan</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Soto uke, gedan</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Uchi uke, jodan</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Uchi uke, chudan</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Uchi uke, gedan</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Ju jodan uchi uke</td>
        <td></td>
    </tr>
    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">San ren uke</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Chudan barai</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Ude henkan gatame</td>
        <td></td>
    </tr>


    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Ude osae gatame</td>
        <td></td>
    </tr>


    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Ude hishigi hiza gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Ude hiza osae gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Kote gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Kata osae</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Kuzure kata osae</td>
        <td></td>
    </tr>
</table>`
            document.getElementById("results").innerHTML = HTML;
        }
        else {
            let HTML = `<table id="plan_table" class="overview-table">
    <tr>
        <th></th>
        <th colspan="2">KIHON WAZA</th>
        <th></th>
        <th></th>
    </tr>
    <tr>
        <th></th>
        <th>ATEMI WAZA</th>
        <th>TOTALT</th>
    </tr>

    <tr>
        <td style="background-color: #FFF370;"></td>

        <td class="yellowwhite">1. Gedan geri, rak spark med främre och bakre benet</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>

        <td class="yellow ">1. Shotei uchi, chudan, rak stöt med främre och bakre handen</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FEB486;"></td>

        <td class="orangewhite">1. Chudan tski, stöt snett uppåt med bakre handen</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FD7521;"></td>

        <td class="orange">1. Hiza geri, chudan, rak knästöt med bakre benet</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color:#A2CDB7;"></td>
        <td class="greenwhite">1. Kin geri, gedan, spark snett uppåt med främre och
            bakre benet</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #40775A;"></td>
        <td class="green">1. Mae geri, chudan, rak spark med främre och bakre benet</td>
        <td></td>
    </tr>

    <tr>
        <th></th>
        <th>KANSETSU WAZA</th>
        <th>TOTALT</th>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>
        <td class="yellow">1. O soto osae, utan grepp, nedläggning snett bakåt</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FD7521;"></td>
        <td class="orange">1. Kote gaeshi, grepp i handleden, nedläggning snett bakåt
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color:#A2CDB7;"></td>
        <td class="greenwhite">1. Ude osae, i rörelse, cirkulär nedläggning</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #40775A;"></td>
        <td class="green">1. Ude osae, grepp i kragen med tryck, nedläggning framåt</td>
        <td></td>
    </tr>

    <tr>

        <th></th>
        <th>NAGE WAZA</th>
        <th>TOTALT</th>
    </tr>

    <tr>

        <td style="background-color: #FFF370;"></td>
        <td class="yellowwhite">1. Koshi otoshi, utan grepp, nedläggning snett bakåt
        </td>
        <td></td>

    </tr>

    <tr>
        <td style="background-color: #FEB486;"></td>
        <td class="orangewhite">1. Uki otoshi, i rörelse, nedläggning snett framåt</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color:#A2CDB7;"></td>
        <td class="greenwhite">1. O soto otoshi, utan grepp, nedläggning snett bakåt</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #40775A;"></td>
        <td class="green">1. O soto otoshi, grepp i kragen med drag, nedläggning snett bakåt</td>
        <td></td>
    </tr>

    <tr>
        <th></th>
        <th>JIGO WAZA</th>
        <th>TOTALT</th>
    </tr>

    <tr>
        <td style="background-color: #FFF370;"></td>

        <td class="yellowwhite">1. Grepp i två handleder framifrån - Frigöring</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFF370;"></td>

        <td class="yellowwhite">2. Grepp i två handleder bakifrån - Frigöring</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFF370;"></td>

        <td class="yellowwhite">3. Försök till stryptag framifrån - Jodan soto uke</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFF370;"></td>

        <td class="yellowwhite">4. Stryptag framifrån - Kawashi, frigöring</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFF370;"></td>

        <td class="yellowwhite">5. Stryptag bakifrån - Maesabaki, kawashi, frigöring</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFF370;"></td>

        <td class="yellowwhite">6. Försök till kravattgrepp från sidan - Jodan chikai uke, kawashi, koshi otoshi, ude
            henkan gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFF370;"></td>
        <td class="yellowwhite">7. Stryptag mot liggande sittande vid sidan - Frigöring, ude henkan gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFF370;"></td>
        <td class="yellowwhite">8. Hotfullt närmande - Hejda med tryck</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>
        <td class="yellow">1. Grepp i håret bakifrån - Tettsui uchi, frigöring</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>
        <td class="yellow">2.
            Stryptag med armen - Maesabaki, kuzure ude osae, ude henkan gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>
        <td class="yellow">3. Grepp i ärmen med drag - O soto osae, ude henkan gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>
        <td class="yellow">4. Hotfullt närmande mot liggande - Uppgång bakåt</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>
        <td class="yellow">5. Kort svingslag - Jodan chikai uke, kawashi, koshi otoshi,
            ude
            henkan gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>
        <td class="yellow">6.
            Långt svingslag - Morote jodan uke, o soto osae, ude henkan gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>
        <td class="yellow">7. Påkslag mot huvudet - Ju morote jodan uke</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FEB486;"></td>
        <td class="orangewhite">1. Grepp i håret framifrån -
            Frigöring</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FEB486;"></td>
        <td class="orangewhite">2. Försök till
            stryptag framifrån - Uki otoshi, ude henkan gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FEB486;"></td>
        <td class="orangewhite">3. Stryptag framifrån mot vägg
            Tsuri komi</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FEB486;"></td>
        <td class="orangewhite">4. Kravattgrepp
            från sidan - Ushiro osae, ude henkan gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FEB486;"></td>
        <td class="orangewhite">5. Grepp i kläderna med tryck - Kuzure ude garami,
            ushiro osae, ude henkan
            gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FEB486;"></td>
        <td class="orangewhite">6. Stryptag mot
            liggande sittande mellan benen - Frigöring, ude henkan gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FEB486;"></td>
        <td class="orangewhite">7. Långt svingslag - Ju jodan uchi uke, uki otoshi, ude
            henkan gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FD7521;"></td>
        <td class="orange">1. Grepp i en handled framifrån
            med två händer med drag - Frigöring</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FD7521;"></td>
        <td class="orange">2. Grepp i två handleder
            bakifrån - Kote gaeshi, ude hishigi hiza gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FD7521;"></td>
        <td class="orange">4. Försök till grepp i kläderna
            - Chudan soto uke, koshi otoshi, ude henkan gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FD7521;"></td>
        <td class="orange">3. Grepp om
            nacken och en knästöt - Gedan juji uke, kawashi, frigöring</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FD7521;"></td>
        <td class="orange">5. Rak spark
            mot magen - Gedan uchi uke, koshi otoshi, ude henkan gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FD7521;"></td>
        <td class="orange">6. Påkslag mot huvudet - Ju jodan uchi uke, uki otoshi, ude
            hishigi hiza gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FD7521;"></td>
        <td class="orange">7. Påkslag mot huvudet, backhand - Ju morote jodan uke, kote
            gaeshi, ude hishigi
            hiza
            gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color:#A2CDB7;"></td>
        <td class="greenwhite">1. Stryptag bakifrån med vänster arm - Maesabaki, kuzure
            ude garami, kote
            gaeshi,
            ude
            hishigi
            hiza gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color:#A2CDB7;"></td>
        <td class="greenwhite">2. Grepp om nacken och en knästöt - Gedan juji uke,
            kawashi, koshi otoshi,
            ude
            henkan
            gatame</td>
        <td></td>
    </tr>


    <tr>
        <td style="background-color:#A2CDB7;"></td>
        <td class="greenwhite">3. Grepp i
            kläderna med drag - O soto otoshi, ude hishigi hiza gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color:#A2CDB7;"></td>
        <td class="greenwhite">4. Livtag under
            armarna bakifrån - Ude osae, ude osae gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color:#A2CDB7;"></td>
        <td class="greenwhite">5. Stryptag mot liggande sittande mellan benen -
            Frigöring</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color:#A2CDB7;"></td>
        <td class="greenwhite">6. Påkslag mot huvudet, backhand - Ju morote jodan uke,
            ude osae, ude osae
            gatame</td>
        <td></td>
    </tr>


    <tr>
        <td style="background-color: #40775A;"></td>
        <td class="green">1. Grepp i två handleder
            framifrån - Shiho nage, shiho nage gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #40775A;"></td>
        <td class="green">2. Stryptag framifrån - O soto
            otoshi, ude hishigi hiza gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #40775A;"></td>
        <td class="green">3. Grepp i kläderna med tryck
            - Ude osae, ude osae gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #40775A;"></td>
        <td class="green">4. Högt livtag över armarna
            bakifrån - Maesabaki, kuzure ude osae, ude henkan gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #40775A;"></td>
        <td class="green">5. Svingslag mot liggande mot huvudet - Jodan chikai uke,
            hiza kansetsu waza</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #40775A;"></td>
        <td class="green">6. Rakt slag mot huvudet - Jodan soto uke, o soto otoshi, ude
            hishigi hiza
            gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <th></th>
        <th>RENRAKU WAZA</th>
        <th>TOTALT</th>
    </tr>

    <tr>
        <td style="background-color: #FFEB0A;"></td>

        <td class="yellow">1. Försök till stryptag framifrån - Försök till kravattgrepp
            från sidan = Jodan
            soto uke
            - Jodan chikai uke, kawashi.
            koshi otoshi, ude henkan gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FEB486;"></td>
        <td class="orangewhite">1. Grepp i två handleder framifrån - Kort svingslag =
            Frigöring - Jodan
            chikai uke,
            kawashi, koshi otoshi, ude henkan
            gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #FD7521;"></td>
        <td class="orange">2. Hotfullt närmande - Långt svingslag = Hejda med tryck -
            Morote jodan uke, o
            soto
            osae, ude henkan gatame
        </td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color:#A2CDB7;"></td>
        <td class="greenwhite">2. Hotfull närmande mot liggande - Långt svingslag =
            Uppgång bakåt - Ju
            jodan uchi
            uke, uki otoshi, ude henkan gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #40775A;"></td>
        <td class="green">1. Grepp i två handleder bakifrån - Rak spark mot magen =
            Frigöring - Gedan uchi
            uke, koshi
            otoshi, ude henkan gatame</td>
        <td></td>
    </tr>

    <tr>
        <th></th>
        <th>YAKOSUKO GEIKO</th>
        <th>TOTALT</th>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>

        <td class="all">1. Försvar
            mot en motståndare
        </td>
        <td></td>
    </tr>

    <tr>
        <th></th>
        <th>GRUNDLÄGGANDE TEKNIKER</th>
        <th>TOTALT</th>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Tsuri ashi, framåt</td>
        <td></td>
    </tr>
    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Ushiro ukemi, med dämpning</td>
        <td></td>
    </tr>
    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Jodan chikai uke</td>
        <td></td>
    </tr>
    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Ude henkan gatame</td>
        <td></td>
    </tr>
    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Kamae neutral</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Tsuri ashi, bakåt</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Mae ukemi</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Morote jodan uke</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Ude osae gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Kamae beredd</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Ayumi ashi, samma kamae</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Ushiro ukemi</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Ju morote jodan uke</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Ude hishigi hiza gatame</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Kamae med gard</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Ayumi ashi, växlande kamae</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Mae ukemi, med dämpning</td>
        <td></td>
    </tr>

    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Gedan juji uke</td>
        <td></td>

    </tr>
    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Taisabakai kort, höger</td>
        <td></td>
    </tr>
    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Otoshi ukemi</td>
        <td></td>
    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Soto uke, jodan</td>
        <td></td>
    </tr>
    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Taisabaki kort, vänster</td>
        <td></td>
    </tr>
    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Soto uke, chudan</td>
        <td></td>
    </tr>
    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Taisabaki lång, höger</td>
        <td></td>
    </tr>
    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Uchi uke, gedan</td>
        <td></td>
    </tr>
    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Taisabaki lång vänster</td>
        <td></td>
    </tr>
    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Ju jodan uchi uke</td>
        <td></td>
    </tr>
    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Maesabaki</td>
        <td></td>
    </tr>
    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Uppgång bakåt</td>
        <td></td>
    </tr>
    <tr>
        <td style="background-color: #D474BE;"></td>
        <td class="all">Kawashi</td>
        <td></td>
    </tr>

</table>`
            document.getElementById("results").innerHTML = HTML;

        }

        getgroupstat(group).then(function (reply) {

            fill_overview(reply, true);

        });
    }

}

function get_group_statistics_plan() {
    let sel = document.getElementById("stat_group_plan")
    let group = sel.value;
    if (group == "") {
        let info = document.getElementById("info");
        info.innerHTML = 'Du behöver välja vilken grupp du vill skapa passet för, om du vill spara statistiken.'

        setTimeout(function () { info.innerHTML = ""; }, 5000);
    } else {

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
}

function fill_overview(reply, pass_count) {

    const uniqueDates = [...new Set(reply.map(o => o.date))].sort();

    // 2. Map each teknik to the dates it appears in
    const teknikMap = new Map();
    reply.forEach(({ teknik, color, group, date }) => {
        if (!teknikMap.has(teknik)) {
            teknikMap.set(teknik, { color, dates: new Set() });
        }
        teknikMap.get(teknik).dates.add(date);
    });

    console.log(teknikMap);


    // 3. Add <th> for each unique date to the header row
    const table = document.getElementById("plan_table");
    const headerRow = table.rows[0];

    uniqueDates.forEach(date => {
        const th = document.createElement("th");
        headerRow.appendChild(th);
    });

    // 4. For each data row, match teknik and add <td> for each date
    const expectedTdCount = 3 + uniqueDates.length; // 3 base columns (name, group, total) + dates

    // Loop through all rows except the first one (header row)
    for (let i = 1; i < table.rows.length; i++) {
        const row = table.rows[i];

        // Skip header rows (those that contain <th>)
        const isHeaderRow = row.querySelectorAll("th").length > 0;
        if (isHeaderRow) continue;

        const teknikCell = row.querySelector("td:nth-child(2)");
        const teknikName = teknikCell?.textContent.trim() || "";

        console.log(`Processing teknik: ${teknikName}`); // Log the technique name

        const teknikData = teknikMap.get(teknikName);
        console.log(teknikData); // Log the fetched technique data

        if (!teknikData) {
            console.log(`No data found for teknik: ${teknikName}`);

            // Add empty <td>s for all unique dates
            uniqueDates.forEach(() => {
                const emptyTd = document.createElement("td");
                row.appendChild(emptyTd);
            });
        } else {
            // Loop over unique dates to append <td> for each date
            uniqueDates.forEach(date => {
                const td = document.createElement("td");

                // If the technique was performed on that date, mark it with a check
                if (teknikData.dates.has(date)) {
                    td.style.backgroundColor = "black";  // Add background color
                    td.style.textAlign = "center";  // Center the text
                }

                // Append the new <td> to the row
                row.appendChild(td);
            });
        }

        // Now check if the row has the correct number of <td>s
        const currentTdCount = row.querySelectorAll("td").length;

        // If the row has fewer <td>s than expected, append empty <td>s
        while (currentTdCount < expectedTdCount) {
            const emptyTd = document.createElement("td");
            row.appendChild(emptyTd);  // Append empty <td> until the row matches expectedTdCount
        }
    }
}


// Helper function for color styles
function getColorStyle(color) {
    const colorMap = {
        yellow: 'background-color: #FFEB0A; color: #FFEB0A; border: 1px solid #24292E;',
        orange: 'background-color: #FD7521; color: #FD7521; border: 1px solid #24292E;',
        green: 'background-color: #40775A; color: #40775A; border: 1px solid #24292E;',
        blue: 'background-color: rgb(52, 89, 149); color: rgb(52, 89, 149); border: 1px solid #24292E;',
        brown: 'background-color: rgb(72, 39, 40); color: rgb(72, 39, 40); border: 1px solid #24292E;',
        blackone: 'background: black; background-image: linear-gradient(yellow, yellow); background-repeat: no-repeat; background-position: center 50%; background-size: 100% 5px; border: 1px solid #24292E;',
        blacktwo: 'background: black; background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow); background-repeat: no-repeat; background-position: center 30%, center 70%; background-size: 100% 5px, 100% 5px; border: 1px solid #24292E;',
        blackthree: 'background: black; background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow); background-repeat: no-repeat; background-position: center 25%, center 50%, center 75%; background-size: 100% 5px, 100% 5px, 100% 5px; border: 1px solid #24292E;',
        yellowwhite: 'background-color: #FFF370; color: #FFF370; border: 1px solid #24292E;',
        orangewhite: 'background-color: #FEB486; color: #FEB486; border: 1px solid #24292E;',
        greenwhite: 'background-color: #A2CDB7; color: #A2CDB7; border: 1px solid #24292E;',
        all: 'background-color: #D474BE; color: #D474BE; border: 1px solid #24292E;',
    };

    return colorMap[color] || '';
}

function fill_result(reply, pass_count) {

    let HTML = `<table style="border-collapse: separate;empty-cells: hide;">`;

    let orange = true
    let green = true
    let blue = true
    let brown = true
    let blackone = true
    let blacktwo = true
    let blackthree = true
    let yellowwhite = true
    let whiteorange = true
    let orangewhite = true
    let whitegreen = true
    let greenwhite = true
    let all = true;

    const mp = new Map(reply.map(o => [o.teknik, { ...o, count: 0 }]));
    for (const { teknik } of reply) mp.get(teknik).count++;
    let result = Array.from(mp.values());

    result.sort((a, b) => (a.color < b.color) ? 1 : ((b.color < a.color) ? -1 : 0))

    result.forEach(element => {

        HTML += '<tr>';

        if (element.group == "V2" || element.group == "V1" || element.group == "S1" || element.group == "Test") {

            console.log(element.color);


            if (element.color == 'yellow') {
                HTML += '<td style="background-color: rgb(255, 235, 10);color: rgb(255, 235, 10);border: 1px solid #24292e38;">.</td>'
            } else if (element.color == 'orange') {
                if (orange) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    orange = false;
                }
                HTML += '<td style="background-color: rgb(253, 117, 33);color: rgb(253, 117, 33);border: 1px solid #24292e38;">.</td>'
            } else if (element.color == 'green') {
                if (green) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    green = false;
                }
                HTML += '<td style="background-color: rgb(64, 119, 90);color: rgb(64, 119, 90);border: 1px solid #24292e38;">.</td>'
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
            } else if (element.color == 'blackone') {
                if (blackone) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    blackone = false;
                }
                HTML += '<td style="background: black; background-image: linear-gradient(yellow, yellow); background-repeat: no-repeat; background-position: center 50%; background-size: 100% 5px;">.</td>'
            } else if (element.color == 'blacktwo') {
                if (blacktwo) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    blacktwo = false;
                }
                HTML += '<td style="background: black; background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);background-repeat: no-repeat, no-repeat; background-position: center 30%, center 70%; background-size: 100% 5px, 100% 5px;">.</td>'
            } else if (element.color == 'blackthree') {
                if (blackthree) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    blackthree = false;
                }
                HTML += '<td style="background: black; background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow); background-repeat: no-repeat, no-repeat, no-repeat; background-position: center 25%, center 50%, center 75%; background-size: 100% 5px, 100% 5px, 100% 5px; ">.</td>'
            }

        } else {

            if (element.color == 'yellowwhite') {
                HTML += '<td style="background-color: #FFF370; color: #FFF370; border: 1px solid #24292e38;">.</td>'
            } else if (element.color == 'yellow') {
                if (yellowwhite) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    yellowwhite = false;
                }
                HTML += '<td style="background-color: #FFEB0A;color: #FFEB0A;border: 1px solid #24292e38;">.</td>'
            } else if (element.color == 'orangewhite') {
                if (whiteorange) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    whiteorange = false;
                }
                HTML += '<td style="background-color: #FEB486;color: #FEB486;border: 1px solid #24292e38;">.</td>'
            } else if (element.color == 'orange') {
                if (orangewhite) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    orangewhite = false;
                }
                HTML += '<td style="background-color: #FD7521 ;color: #FD7521;border: 1px solid #24292e38;">.</td>'
            } else if (element.color == 'greenwhite') {
                if (whitegreen) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    whitegreen = false;
                }
                HTML += '<td style="background-color: #A2CDB7;color: #A2CDB7;border: 1px solid #24292e38;">.</td>'
            } else if (element.color == 'green') {
                if (greenwhite) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    greenwhite = false;
                }
                HTML += '<td id="td" style="background-color: #40775A;color: #40775A; border: 1px solid #24292e38;">.</td>'
            }
            else if (element.color == 'all') {
                if (all) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    all = false;
                }
                HTML += '<td id="td" style="background-color: #D474BE;color: #D474BE; border: 1px solid #24292e38;">.</td>'
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

function fill_result_old_pass(reply, pass_count) {

    let HTML = `<table style="border-collapse: separate;empty-cells: hide;">`;

    let orange = true
    let green = true
    let blue = true
    let brown = true
    let blackone = true
    let blacktwo = true
    let blackthree = true
    let yellowwhite = true
    let whiteorange = true
    let orangewhite = true
    let whitegreen = true
    let greenwhite = true
    let all = true;

    const mp = new Map(reply.map(o => [o.teknik, { ...o, count: 0 }]));
    for (const { teknik } of reply) mp.get(teknik).count++;
    let result = Array.from(mp.values());

    result.sort((a, b) => (a.color < b.color) ? 1 : ((b.color < a.color) ? -1 : 0))

    result.forEach(element => {

        HTML += '<tr>';

        if (element.group == "V2" || element.group == "V1" || element.group == "S1" || element.group == "Test") {

            if (element.color == 'yellow') {
                HTML += '<td style="background-color: rgb(255, 235, 10);color: rgb(255, 235, 10);border: 1px solid #24292e38;">.</td>'
            } else if (element.color == 'orange') {
                if (orange) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    orange = false;
                }
                HTML += '<td style="background-color: rgb(253, 117, 33);color: rgb(253, 117, 33);border: 1px solid #24292e38;">.</td>'
            } else if (element.color == 'green') {
                if (green) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    green = false;
                }
                HTML += '<td style="background-color: rgb(64, 119, 90);color: rgb(64, 119, 90);border: 1px solid #24292e38;">.</td>'
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
            else if (element.color == 'blackone') {
                if (blackone) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    blackone = false;
                }
                HTML += '<td style="background: black; background-image: linear-gradient(yellow, yellow); background-repeat: no-repeat; background-position: center 50%; background-size: 100% 5px;">.</td>'
            } else if (element.color == 'blacktwo') {
                if (blacktwo) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    blacktwo = false;
                }
                HTML += '<td style="background: black; background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow);background-repeat: no-repeat, no-repeat; background-position: center 30%, center 70%; background-size: 100% 5px, 100% 5px;">.</td>'
            } else if (element.color == 'blackthree') {
                if (blackthree) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    blackthree = false;
                }
                HTML += '<td style="background: black; background-image: linear-gradient(yellow, yellow), linear-gradient(yellow, yellow), linear-gradient(yellow, yellow); background-repeat: no-repeat, no-repeat, no-repeat; background-position: center 25%, center 50%, center 75%; background-size: 100% 5px, 100% 5px, 100% 5px; ">.</td>'
            }
            else if (element.color == 'all') {
                if (all) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    all = false;
                }
                HTML += '<td style="background-color: rgb(212, 116, 190);color: rgb(212, 116, 190);border: 1px solid #24292e38;">.</td>'
            }

        } else {

            if (element.color == 'yellowwhite') {
                HTML += '<td style="background-color: #FFF370; color: #FFF370; border: 1px solid #24292e38;">.</td>'
            } else if (element.color == 'yellow') {
                if (yellowwhite) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    yellowwhite = false;
                }
                HTML += '<td style="background-color: #FFEB0A;color: #FFEB0A;border: 1px solid #24292e38;">.</td>'
            } else if (element.color == 'orangewhite') {
                if (whiteorange) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    whiteorange = false;
                }
                HTML += '<td style="background-color: #FEB486;color: #FEB486;border: 1px solid #24292e38;">.</td>'
            } else if (element.color == 'orange') {
                if (orangewhite) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    orangewhite = false;
                }
                HTML += '<td style="background-color: #FD7521 ;color: #FD7521;border: 1px solid #24292e38;">.</td>'
            } else if (element.color == 'greenwhite') {
                if (whitegreen) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    whitegreen = false;
                }
                HTML += '<td style="background-color: #A2CDB7;color: #A2CDB7;border: 1px solid #24292e38;">.</td>'
            } else if (element.color == 'green') {
                if (greenwhite) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    greenwhite = false;
                }
                HTML += '<td id="td" style="background-color: #40775A;color: #40775A; border: 1px solid #24292e38;">.</td>'
            }

            else if (element.color == 'all') {
                if (all) {
                    HTML += '<tr><td></td><td></td><td></td></tr>'
                    all = false;
                }
                HTML += '<td id="td" style="background-color: #D474BE;color: #D474BE; border: 1px solid #24292e38;">.</td>'
            }

        }

        if (pass_count) {
            HTML += `<td style="width:50vw;">${element.teknik}</td><td style="width:42px;"> ${element.count}</td></tr> `

        } else {
            HTML += `<td style="width:50vw;">${element.teknik}</td><td style="width:30px"><input type="checkbox" name="select"></td></tr> `

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

    if (group == "") {
        let info = document.getElementById("info");
        info.innerHTML = 'Du behöver välja grupp om du vill hämta statistiken.'

        setTimeout(function () { info.innerHTML = ""; }, 5000);
    } else {

        getpass(date, group).then(function (reply) {

            fill_result_old_pass(reply, false);
            listen_click_old_pass();

        });

    }

}

function createFile_mon() {

    let modal = document.getElementsByClassName("modal")[0];
    let modal_content = document.getElementsByClassName("modal-content")[0];


    modal.style.display = "block";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    let elements = document.getElementsByClassName('chosen');
    let chosen = [];

    for (let index = 0; index < elements.length; index++) {
        chosen.push({ "class": elements[index].classList[0], "name": elements[index].innerText });
    }

    chosen.sort((a, b) => (a.class < b.class) ? 1 : ((b.class < a.class) ? -1 : 0))

    let modal_cont = "<h4>Förhandsgranska ditt pass</h4><h6>Lägg till fritext och flytta runt teknikerna och texten i den ordning du vill ha det i.</h6><h6>När du är nöjd klickar du på knappen <span 'style=font-style: italic;'>Spara pass</span>, för att få upp en utskriftsprompt och spara passet i historiken.</h6><br>";
    let statistics = "";
    let colors = [];
    let date = document.getElementById("mon_date");
    date = date.value;


    for (let index = 0; index < chosen.length; index++) {

        modal_cont += `
        <div class="draggable" draggable="true">
        <p>
            <span class="circle ${chosen[index].class}"></span>
                ${chosen[index].name}
            </p>
        </div>`;

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
    // Add a text field for adding new items dynamically
    modal_cont += `
    <div id="new-text-container">
        <input type="text" id="new-text" placeholder="Lägg till fritext" />
        <button id="add-text">Lägg till</button>
    </div>`;

    modal_cont += `<button class="close">Spara pass</button>`;

    // Set the modal content
    modal_content.innerHTML = modal_cont;

    let dragSrcEl = null;

    // Add drag-and-drop listeners
    function addDragAndDropListeners(element) {
        element.addEventListener('dragstart', (e) => {
            dragSrcEl = element;
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', element.outerHTML);
            element.classList.add('dragging');
        });

        element.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        });

        element.addEventListener('drop', (e) => {
            e.stopPropagation(); // Prevent browser redirection
            const draggingElement = document.querySelector('.dragging');

            if (draggingElement && draggingElement !== element) {
                element.insertAdjacentElement('beforebegin', draggingElement);
            }
            draggingElement?.classList?.remove('dragging');
        });

        element.addEventListener('dragend', () => {
            element.classList?.remove('dragging');
        });
    }

    // Attach listeners to all draggable elements
    document.querySelectorAll('.draggable').forEach(addDragAndDropListeners);

    let addButton = modal_content.querySelector('#add-text');

    addButton.onclick = function () {
        let freeTextInput = document.getElementById('new-text');
        let textValue = freeTextInput.value.trim(); // Get and trim the value of the text box

        if (textValue) {
            // Create a new draggable <p> element
            let newParagraph = document.createElement('div');
            newParagraph.classList.add('draggable');
            newParagraph.setAttribute('draggable', 'true');
            newParagraph.innerHTML = `
            <p>
                <span class="circle text"></span> ${textValue}
            </p>
        `;

            // Append the new <p> to the modal
            modal_content.appendChild(newParagraph);

            // Clear the text box
            freeTextInput.value = '';

            // Make the newly added element draggable
            document.querySelectorAll('.draggable').forEach(addDragAndDropListeners);
        }
    };

    let span = document.getElementsByClassName("close")[0];
    span.onclick = function () {

        const div = document.querySelector('.modal-content');
        for (let i = div.children.length - 1; i >= 0; i--) {
            const child = div.children[i];
            if (child.className.toLowerCase() !== 'draggable') {
                div.removeChild(child);
            }
        }

        window.print()

        modal.style.display = "none";

        // Collect reordered content
        content = "";
        const allTexts = modal_content.querySelectorAll("p");
        allTexts.forEach(el => {
            content += el.innerText + "\n";
        });

        let i = 0;

        tekniker.forEach(element => {
            if (element != "") {
                savepass(element, group, date, colors[i])
                i++;
            }
        });

    };

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
    for (let td of tds) {
        td?.classList.remove('chosen');

        if (td.innerHTML != "") {
            td.style.color = "black";
            td.style.backgroundColor = 'rgb(255, 255, 255)';
        }
    }

    let ths = document.getElementsByTagName('th');

    for (let th of ths) {
        th.style.color = "black";
    }
}

function clear_all_plan() {

    let tds = document.getElementsByTagName('td');
    for (let td of tds) {

        if (td.classList[0] == 'chosen') {
            td.classList.remove('chosen');
            td.style.backgroundColor = 'rgb(255, 255, 255)';
            td.style.display = "";
        }
    }

    let trs = document.getElementsByTagName('tr');
    for (let tr of trs) {
        tr.style.display = "table";
    }
}



function clear_search() {
    let input = document.getElementById("search_field");
    input.value = "";
    clear_all()
}

function saveplan_mon() {

    let modal = document.getElementsByClassName("modal")[0];
    let modal_content = document.getElementsByClassName("modal-content")[0];


    modal.style.display = "block";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

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

    let modal_cont = "<h4>Förhandsgranska ditt pass</h4><h6>Lägg till fritext och flytta runt teknikerna och texten i den ordning du vill ha det i.</h6><h6>När du är nöjd klickar du på knappen <span 'style=font-style: italic;'>Spara pass</span>, för att få upp en utskriftsprompt och spara passet i historiken.</h6><br>";

    let statistics = "";
    let colors = [];
    let date = document.getElementById("mon_plan_date");
    date = date.value;

    for (let index = 0; index < chosen.length; index++) {

        modal_cont += `
        <div class="draggable" draggable="true">
        <p>
            <span class="circle ${chosen[index].class}"></span>
                ${chosen[index].name}
            </p>
        </div>`;

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

    // Add a text field for adding new items dynamically
    modal_cont += `
    <div id="new-text-container">
        <input type="text" id="new-text" placeholder="Lägg till fritext" />
        <button id="add-text">Lägg till</button>
    </div>`;

    modal_cont += `<button class="close">Spara pass</button>`;

    // Set the modal content
    modal_content.innerHTML = modal_cont;

    let dragSrcEl = null;
    let touchStartY = 0;
    let isTouchDragging = false;

    // Add drag-and-drop listeners
    function addDragAndDropListeners(element) {
        element.addEventListener('dragstart', (e) => {
            dragSrcEl = element;
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', element.outerHTML);
            element.classList.add('dragging');
        });

        element.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        });

        element.addEventListener('drop', (e) => {
            e.stopPropagation(); // Prevent browser redirection
            const draggingElement = document.querySelector('.dragging');

            if (draggingElement && draggingElement !== element) {
                element.insertAdjacentElement('beforebegin', draggingElement);
            }
            draggingElement?.classList?.remove('dragging');
        });

        element.addEventListener('dragend', () => {
            element.classList?.remove('dragging');
        });

        element.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
            dragSrcEl = element;
            isTouchDragging = true;

            // Add a visual dragging indicator
            element.classList.add('dragging');
        });

        element.addEventListener('touchmove', (e) => {
            if (!isTouchDragging) return;

            const touchCurrentY = e.touches[0].clientY;

            // Detect the element the finger is over
            const elementBelow = document.elementFromPoint(
                e.touches[0].clientX,
                e.touches[0].clientY
            );

            const targetDraggable = elementBelow?.closest('.draggable');

            if (
                targetDraggable &&
                targetDraggable !== dragSrcEl &&
                targetDraggable !== dragSrcEl.nextSibling
            ) {
                // Move the dragged element above the target element
                targetDraggable.insertAdjacentElement('beforebegin', dragSrcEl);
            }

            e.preventDefault(); // Prevent scrolling while dragging
        });

        element.addEventListener('touchend', () => {
            if (isTouchDragging) {
                isTouchDragging = false;
                dragSrcEl?.classList?.remove('dragging');
            }
        });
    }

    // Attach listeners to all draggable elements
    document.querySelectorAll('.draggable').forEach(addDragAndDropListeners);


    let addButton = modal_content.querySelector('#add-text');

    addButton.onclick = function () {
        let freeTextInput = document.getElementById('new-text');
        let textValue = freeTextInput.value.trim(); // Get and trim the value of the text box

        if (textValue) {
            // Create a new draggable <p> element
            let newParagraph = document.createElement('div');
            newParagraph.classList.add('draggable');
            newParagraph.setAttribute('draggable', 'true');
            newParagraph.innerHTML = `
            <p>
                <span class="circle text"></span> ${textValue}
            </p>
        `;

            // Append the new <p> to the modal
            modal_content.appendChild(newParagraph);

            // Clear the text box
            freeTextInput.value = '';

            // Make the newly added element draggable
            document.querySelectorAll('.draggable').forEach(addDragAndDropListeners);
        }
    };

    let span = document.getElementsByClassName("close")[0];
    span.onclick = function () {

        const div = document.querySelector('.modal-content');
        for (let i = div.children.length - 1; i >= 0; i--) {
            const child = div.children[i];
            if (child.className.toLowerCase() !== 'draggable') {
                div.removeChild(child);
            }
        }

        window.print()

        modal.style.display = "none";

        // Collect reordered content
        content = "";
        const allTexts = modal_content.querySelectorAll("p");
        allTexts.forEach(el => {
            content += el.innerText + "\n";
        });

        let i = 0;

        tekniker.forEach(element => {
            if (element != "") {
                savepass(element, group, date, colors[i])
                i++;
            }
        });
    };
}


function saveplan_kuy() {

    let modal = document.getElementsByClassName("modal")[0];
    let modal_content = document.getElementsByClassName("modal-content")[0];


    modal.style.display = "block";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

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

    let modal_cont = "<h4>Förhandsgranska ditt pass</h4><h6>Lägg till fritext och flytta runt teknikerna och texten i den ordning du vill ha det i.</h6><h6>När du är nöjd klickar du på knappen <span 'style=font-style: italic;'>Spara pass</span>, för att få upp en utskriftsprompt och spara passet i historiken.</h6><br>";

    let statistics = "";
    let colors = [];
    let date = document.getElementById("kuy_plan_date");
    date = date.value;

    for (let index = 0; index < chosen.length; index++) {

        let num = "";
        if (chosen[index].class == "blackone") {
            num = "1"
        }
        if (chosen[index].class == "blacktwo") {
            num = "2"
        }
        if (chosen[index].class == "blackthree") {
            num = "3"
        }

        modal_cont += `
        <div class="draggable" draggable="true">
        <p>
            <span class="circle ${chosen[index].class}">${num}</span>
                ${chosen[index].name}
            </p>
        </div>`;

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

    // Add a text field for adding new items dynamically
    modal_cont += `
    <div id="new-text-container">
        <input type="text" id="new-text" placeholder="Lägg till fritext" />
        <button id="add-text">Lägg till</button>
    </div>`;

    modal_cont += `<button class="close">Spara pass</button>`;

    // Set the modal content
    modal_content.innerHTML = modal_cont;

    let dragSrcEl = null;

    // Add drag-and-drop listeners
    function addDragAndDropListeners(element) {
        element.addEventListener('dragstart', (e) => {
            dragSrcEl = element;
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', element.outerHTML);
            element.classList.add('dragging');
        });

        element.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        });

        element.addEventListener('drop', (e) => {
            e.stopPropagation(); // Prevent browser redirection
            const draggingElement = document.querySelector('.dragging');

            if (draggingElement && draggingElement !== element) {
                element.insertAdjacentElement('beforebegin', draggingElement);
            }
            draggingElement?.classList?.remove('dragging');
        });

        element.addEventListener('dragend', () => {
            element.classList?.remove('dragging');
        });
    }

    // Attach listeners to all draggable elements
    document.querySelectorAll('.draggable').forEach(addDragAndDropListeners);

    let addButton = modal_content.querySelector('#add-text');

    addButton.onclick = function () {
        let freeTextInput = document.getElementById('new-text');
        let textValue = freeTextInput.value.trim(); // Get and trim the value of the text box

        if (textValue) {
            // Create a new draggable <p> element
            let newParagraph = document.createElement('div');
            newParagraph.classList.add('draggable');
            newParagraph.setAttribute('draggable', 'true');
            newParagraph.innerHTML = `
            <p>
                <span class="circle text"></span> ${textValue}
            </p>
        `;

            // Append the new <p> to the modal
            modal_content.appendChild(newParagraph);

            // Clear the text box
            freeTextInput.value = '';

            // Make the newly added element draggable
            document.querySelectorAll('.draggable').forEach(addDragAndDropListeners);
        }
    };

    let span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        const div = document.querySelector('.modal-content');
        for (let i = div.children.length - 1; i >= 0; i--) {
            const child = div.children[i];
            if (child.className.toLowerCase() !== 'draggable') {
                div.removeChild(child);
            }
        }

        window.print();

        modal.style.display = "none";

        // Collect reordered content
        content = "";
        const allTexts = modal_content.querySelectorAll("p");
        allTexts.forEach(el => {
            content += el.innerText + "\n";
        });

        let i = 0;

        tekniker.forEach(element => {
            if (element != "") {
                savepass(element, group, date, colors[i])
                i++;
            }
        });
    };
}




function delete_old_pass() {
    let trs = document.querySelectorAll('tr');

    console.log(trs);


    let chosen = [];

    trs.forEach(tr => {
        if (tr.innerHTML != "") {

            if (tr.children[2]?.classList[0] == 'chosen') {
                chosen.push(tr);
            }
        }
    });


    if (chosen.length == 0) {
        let info = document.getElementById('info');
        info.innerHTML = "Du måste först hitta ett gammalt pass och välja vilka tekniker från det du vill radera."
    } else {

        let start = document.getElementById("stat_pass_date");
        let date = start.value;

        let gr = document.getElementById("stat_pass_group");
        let group = gr.value;

        chosen.forEach(element => {
            delete_from_pass(date, group, element.children[1].innerHTML)
            element.style.display = "none";
        });



    }
}

function recreate_old_pass() {

    let start = document.getElementById("stat_pass_date");
    let finddate = start.value;

    let date = document.getElementById("recreate_pass_date");
    date = date.value;

    let gr = document.getElementById("stat_pass_group");
    let group = gr.value;

    getpass(finddate, group).then(function (reply) {

        const mp = new Map(reply.map(o => [o.teknik, { ...o, count: 0 }]));
        for (const { teknik } of reply) mp.get(teknik).count++;
        let result = Array.from(mp.values());

        console.log(result);


        result.sort((a, b) => (a.color < b.color) ? 1 : ((b.color < a.color) ? -1 : 0))

        let modal = document.getElementsByClassName("modal")[0];
        let modal_content = document.getElementsByClassName("modal-content")[0];
        modal.style.display = "block";

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        let modal_cont = "<h4>Förhandsgranska ditt pass</h4><h6>Lägg till fritext och flytta runt teknikerna och texten i den ordning du vill ha det i.</h6><h6>När du är nöjd klickar du på knappen <span 'style=font-style: italic;'>Spara pass</span>, för att få upp en utskriftsprompt och spara passet i historiken.</h6><br>";
        let statistics = "";
        let colors = [];

        for (let index = 0; index < result.length; index++) {

            modal_cont += `
        <div class="draggable" draggable="true">
        <p>
            <span class="circle ${result[index].color}"></span>
                ${result[index].teknik}
            </p>
        </div>`;

            statistics += "" + result[index].teknik + "\n";
            colors.push(result[index].color);
        }

        let tekniker = statistics.split('\n');

        // Add a text field for adding new items dynamically
        modal_cont += `
    <div id="new-text-container">
        <input type="text" id="new-text" placeholder="Lägg till fritext" />
        <button id="add-text">Lägg till</button>
    </div>`;

        modal_cont += `<button class="close">Spara pass</button>`;

        // Set the modal content
        modal_content.innerHTML = modal_cont;

        let dragSrcEl = null;

        // Add drag-and-drop listeners
        function addDragAndDropListeners(element) {
            element.addEventListener('dragstart', (e) => {
                dragSrcEl = element;
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('text/html', element.outerHTML);
                element.classList.add('dragging');
            });

            element.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
            });

            element.addEventListener('drop', (e) => {
                e.stopPropagation(); // Prevent browser redirection
                const draggingElement = document.querySelector('.dragging');

                if (draggingElement && draggingElement !== element) {
                    element.insertAdjacentElement('beforebegin', draggingElement);
                }
                draggingElement?.classList?.remove('dragging');
            });

            element.addEventListener('dragend', () => {
                element.classList?.remove('dragging');
            });
        }

        // Attach listeners to all draggable elements
        document.querySelectorAll('.draggable').forEach(addDragAndDropListeners);

        let addButton = modal_content.querySelector('#add-text');

        addButton.onclick = function () {
            let freeTextInput = document.getElementById('new-text');
            let textValue = freeTextInput.value.trim(); // Get and trim the value of the text box

            if (textValue) {
                // Create a new draggable <p> element
                let newParagraph = document.createElement('div');
                newParagraph.classList.add('draggable');
                newParagraph.setAttribute('draggable', 'true');
                newParagraph.innerHTML = `
            <p>
                <span class="circle text"></span> ${textValue}
            </p>
        `;

                // Append the new <p> to the modal
                modal_content.appendChild(newParagraph);

                // Clear the text box
                freeTextInput.value = '';

                // Make the newly added element draggable
                document.querySelectorAll('.draggable').forEach(addDragAndDropListeners);
            }
        };

        let span = document.getElementsByClassName("close")[0];
        span.onclick = function () {

            const div = document.querySelector('.modal-content');
            for (let i = div.children.length - 1; i >= 0; i--) {
                const child = div.children[i];
                if (child.className.toLowerCase() !== 'draggable') {
                    div.removeChild(child);
                }
            }

            window.print()

            modal.style.display = "none";

            let i = 0;

            tekniker.forEach(element => {
                if (element != "") {
                    savepass(element, group, date, colors[i])
                    i++;
                }
            });

        };

    });

}

function print_pass() {

    let start = document.getElementById("stat_pass_date");
    let finddate = start.value;

    let date = document.getElementById("recreate_pass_date");
    date = date.value;

    let gr = document.getElementById("stat_pass_group");
    let group = gr.value;

    getpass(finddate, group).then(function (reply) {

        const mp = new Map(reply.map(o => [o.teknik, { ...o, count: 0 }]));
        for (const { teknik } of reply) mp.get(teknik).count++;
        let result = Array.from(mp.values());

        console.log(result);


        result.sort((a, b) => (a.color < b.color) ? 1 : ((b.color < a.color) ? -1 : 0))

        let modal = document.getElementsByClassName("modal")[0];
        let modal_content = document.getElementsByClassName("modal-content")[0];
        modal.style.display = "block";

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        let modal_cont = "<h4>Förhandsgranska ditt pass</h4><h6>Lägg till fritext och flytta runt teknikerna och texten i den ordning du vill ha det i.</h6><h6>När du är nöjd klickar du på knappen <span 'style=font-style: italic;'>Spara pass</span>, för att få upp en utskriftsprompt och spara passet i historiken.</h6><br>";
        let statistics = "";
        let colors = [];

        for (let index = 0; index < result.length; index++) {

            modal_cont += `
        <div class="draggable" draggable="true">
        <p>
            <span class="circle ${result[index].color}"></span>
                ${result[index].teknik}
            </p>
        </div>`;

            statistics += "" + result[index].teknik + "\n";
            colors.push(result[index].color);
        }

        let tekniker = statistics.split('\n');

        // Add a text field for adding new items dynamically
        modal_cont += `
    <div id="new-text-container">
        <input type="text" id="new-text" placeholder="Lägg till fritext" />
        <button id="add-text">Lägg till</button>
    </div>`;

        modal_cont += `<button class="close">Skriv ut</button>`;

        // Set the modal content
        modal_content.innerHTML = modal_cont;

        let dragSrcEl = null;

        // Add drag-and-drop listeners
        function addDragAndDropListeners(element) {
            element.addEventListener('dragstart', (e) => {
                dragSrcEl = element;
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('text/html', element.outerHTML);
                element.classList.add('dragging');
            });

            element.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
            });

            element.addEventListener('drop', (e) => {
                e.stopPropagation(); // Prevent browser redirection
                const draggingElement = document.querySelector('.dragging');

                if (draggingElement && draggingElement !== element) {
                    element.insertAdjacentElement('beforebegin', draggingElement);
                }
                draggingElement?.classList?.remove('dragging');
            });

            element.addEventListener('dragend', () => {
                element.classList?.remove('dragging');
            });
        }

        // Attach listeners to all draggable elements
        document.querySelectorAll('.draggable').forEach(addDragAndDropListeners);

        let addButton = modal_content.querySelector('#add-text');

        addButton.onclick = function () {
            let freeTextInput = document.getElementById('new-text');
            let textValue = freeTextInput.value.trim(); // Get and trim the value of the text box

            if (textValue) {
                // Create a new draggable <p> element
                let newParagraph = document.createElement('div');
                newParagraph.classList.add('draggable');
                newParagraph.setAttribute('draggable', 'true');
                newParagraph.innerHTML = `
            <p>
                <span class="circle text"></span> ${textValue}
            </p>
        `;

                // Append the new <p> to the modal
                modal_content.appendChild(newParagraph);

                // Clear the text box
                freeTextInput.value = '';

                // Make the newly added element draggable
                document.querySelectorAll('.draggable').forEach(addDragAndDropListeners);
            }
        };

        let span = document.getElementsByClassName("close")[0];
        span.onclick = function () {

            const div = document.querySelector('.modal-content');
            for (let i = div.children.length - 1; i >= 0; i--) {
                const child = div.children[i];
                if (child.className.toLowerCase() !== 'draggable') {
                    div.removeChild(child);
                }
            }

            window.print()

            modal.style.display = "none";
        };

    });

}

const toggle = document?.getElementById("menu-toggle");
const links = document?.getElementById("menu-links");

toggle?.addEventListener("click", () => {
    links.classList.toggle("show");
});

