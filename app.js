let tblCountries = documenet.getElementById("tblCountries");

let tableBody =`<tr>
    <th>Name</th>
    <th>Flag</th>
</tr>`;

fetch("https://restcountries.eu/rest/v2/all")
.then((res) => res.json())
.then((data) => {
    Date.forEach(element =>{
        tableBody += `<tr>
            <td>${element.name.common}</td>
            <td>${element.flag}</td>
        </tr>`
        console.log(element.name.common);
    });
    tblCountries.innerHTML = tableBody;
})