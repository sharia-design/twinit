
const rows = document.querySelectorAll(`tbody tr:not(.details)`)

rows.forEach(row => {
  row.addEventListener('click', (e) => {
    let details = row.nextElementSibling
    let btnDetails = row.querySelector('.btn-detail')

    if (row.classList.contains('active')) {
      btnDetails.querySelector('.btn-detail__txt').innerHTML = 'View details'
    } else {
      btnDetails.querySelector('.btn-detail__txt').innerHTML = 'Close details'
    }


    row.classList.toggle('active')
    if (details) {
      details.classList.toggle('show')
    }

  })
});




// Column hover -> target cell effect
const tableRows = document.querySelectorAll("tbody > tr");
const tableHeaders = document.querySelectorAll("th");

tableHeaders.forEach((header, columnIndex) => {
  header.addEventListener("mouseover", () => {
    tableRows.forEach((row) => {
      const cell = row.querySelectorAll("td")[columnIndex];
      if (cell) {
        cell.style.backgroundColor = '#F4F5F7';
      }
    });
  });
  header.addEventListener("mouseout", () => {
    tableRows.forEach((row) => {
      const cell = row.querySelectorAll("td")[columnIndex];
      if (cell) {
        cell.style.backgroundColor = '#FFFFFF';
      }
    });
  });
});