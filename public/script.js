

const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const tableSection = document.getElementById('table-section');
const table = document.getElementById('table');
const tbody = document.getElementById('body-table');
const message = document.getElementById('message');


function renderTable(data) {
  const tbody = document.getElementById('body-table');
  console.log(data)
  data.forEach((d) => {
    const card = document.createElement('div');
    card.innerHTML = renderTableTemp(d);
    tbody.appendChild(card);
    
  });

}

function renderTableTemp(data) {
  
  return `
  <div class="container detail-container table table-dark">
  <table>


  <tr>
      <td>${data.id}</td>
      <td >${data.first_name}</td>
      <td >${data.last_name}</td>
  </tr>
  
  </table>
  </div>
  `;
}

enterButton.addEventListener('click', (event) => {
  //Implementar lógica del button submit
  alert('Implementar lógica del button submit');
  const data = getresults(input.value);
  renderTable(data);
  event.preventDefault();
});

/**
 * Llamado al backend con queryParam
 * @param {*} heightRef
 */
async function getresults(heightRef) {
  const resp = await fetch(`api?input=${heightRef}`);
  const data = await resp.json();
  console.log('data from back', data);
  printValues(data);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

