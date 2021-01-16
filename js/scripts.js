
window.onload = function(){
    loadTableData(arrHolders);
}
// var arrHolders = [{holder1},{holder2},{holder3}];


var arrHolders = [];
arrHolders.push(new Holder("Barco", 1234, "Camión 2", "ab123cd", "21", 1), new Holder("Depósito", 1234, "depo 23", "ab123cd", "21", 1));
f = new Date();
var day = f.getDate();


function loadTableData(arrHolders/*[{holde},{holde},{holde},....]*/) {
    var table = document.getElementById("holders_table"),
        body = document.getElementById("holders_body"),
        bhtml = '';


    body.innerHTML = '';
    for (let i = 0; i < arrHolders.length; i++) { //recorro todas las instancias de holders
        // debugger
        // alert("hola");
        
        bhtml += `
        <tr>
            <td class = "align-middle">${arrHolders[i].holderType}</td>
            <td class = "align-middle">${arrHolders[i].chasisNumber}</td>
            <td class = "align-middle">${arrHolders[i].holderName}</td>
            <td class = "align-middle">${arrHolders[i].domainName}</td>
            <td class = "align-middle">${arrHolders[i].nextReviewDate}</td>
            <td class = "align-middle">${arrHolders[i].holderStatus}</td>
            <td class = "align-middle">${checkOn(arrHolders[i].nextReviewDate,i,arrHolders[i].holderStatus)}</td>
        </tr>
        `;
    }

    body.innerHTML = bhtml; // "<tr><td>00</td><td>01</td>...</tr>...<tr><td>00</td><td>01</td>...</tr>"
    var bButton = body.querySelectorAll("button");

    for (let i = 0; i < bButton.length; i++) {
        const element = bButton[i];

        element.onclick = function (evt) {
            debugger
            // alert("hola boton");
            evt.toElement.parentElement.parentElement.children[5].innerHTML = "0";
            arrHolders[evt.toElement.id*1].holderStatus = 0;
            evt.toElement.disabled = true;
        }

    }
}

function addHolder() {
    var table = document.getElementById("holders_table");

    var rows = document.getElementsByTagName("tr");

    var h = new Holder(
        document.getElementById("holderType").value,
        document.getElementById("chasisNumber").value,
        document.getElementById("holderName").value,
        document.getElementById("domainName").value,
        randomDate(1, 31),
        document.getElementById("status").value
    );
    arrHolders.push(h);
    loadTableData(arrHolders);
    // alert(arrHolders.length + " elementos en el array");
}

function randomDate(from, to) {
    return Math.round((Math.random() * (to - from) + from));

}

function checkOn(hReviewDate, index, status) { //recibe la fecha del review del holder
    //compara fechas actual con parámetro
    if (day > hReviewDate && status >0) {
        //buttonegar botón chbuttonkon
        return `<button class="btn btn-warning align-middle" id="${index}">Check ON</button>`;
    }
    else {
        return "";
    }
}

// function changeStatus(status) {
//     if (status = 1) {
//         // status = 0;
//         alert("se cambió a 0");
//     } else {
//         // status = 1;
//         alert("se cambió a 1");
//     }

// }


