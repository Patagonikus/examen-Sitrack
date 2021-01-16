
// window.onload = loadTableData();
var arrHolders = [];

function loadTableData(arrHolders/*[{holde},{holde},{holde},....]*/) {
    var table = document.getElementById("holders_table"),
        body = document.getElementById("holders_body"),
        bhtml = '';
        f = new Date();
        var day = f.getDate();
        var button = document.createElement("button");

    body.innerHTML = '';
    for (let i = 0; i < arrHolders.length; i++) { //recorro todas las instancias de holders
        // debugger
        // alert("hola");
        bhtml += `
        <tr>
            <td>${arrHolders[i].holderType}</td>
            <td>${arrHolders[i].chasisNumber}</td>
            <td>${arrHolders[i].holderName}</td>
            <td>${arrHolders[i].domainName}</td>
            <td>${arrHolders[i].nextReviewDate}</td>
            <td>${arrHolders[i].holderStatus   }</td>
            <td><button></button></td>
        </tr>
        `;
    }
    body.innerHTML = bhtml; // "<tr><td>00</td><td>01</td>...</tr>...<tr><td>00</td><td>01</td>...</tr>"
}
{/* <td>${checkon(arrHolders[i].nextReviewDate)}</td> */}
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

function checkOn(hReviewDate) { //recibe la fecha del review del holder
    //compara fechas actual con parámetro
    if (day > hReviewDate) {
        //buttonegar botón chbuttonkon
        return button;

    }

}

function changeStatus(status) {
    if (status = 1) {
        status = 0;
    } else {
        status = 1;
    }

}


