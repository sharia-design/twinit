
// ======== Table ======== //

// --- Scroll:
const tableBasic = document.getElementById('table-basic')
const stickyColumns = document.querySelectorAll('.sticky-col')
const endFix = document.querySelectorAll('.end-fix')

tableBasic.addEventListener('scroll', (e) => {
  if (tableBasic.scrollLeft > 40) {
    stickyColumns.forEach(col => {
      col.classList.add('fix')
    });
    endFix.forEach(col => {
      col.classList.add('fix')
    });
  } else {
    stickyColumns.forEach(col => {
      col.classList.remove('fix')
    });
  }
})

// --- Drag & Scroll:
let isDown = false;
let startX;
let scrollLeft;

tableBasic.addEventListener('mousedown', (e) => {
  isDown = true;
  tableBasic.classList.add('dragging');
  startX = e.pageX - tableBasic.offsetLeft;
  scrollLeft = tableBasic.scrollLeft;
});
tableBasic.addEventListener('mouseleave', () => {
  isDown = false;
  tableBasic.classList.remove('dragging');
});
tableBasic.addEventListener('mouseup', () => {
  isDown = false;
  tableBasic.classList.remove('dragging');
});
tableBasic.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - tableBasic.offsetLeft;
  const walk = (x - startX) * 1.5; //scroll-[Speed]
  tableBasic.scrollLeft = scrollLeft - walk;
});


// --- Drag order column:



// Custom dragging
let draggedColumn;
let countPrevCols = 0
let countCurrentCols = 1

const dragable = document.querySelectorAll('.dragable')

dragable.forEach((th, i) => {
  th.addEventListener('mousedown', (e) => {
    countPrevCols = 0
    countCurrentCols = parseInt(th.getAttribute('colspan'))
    let currentCol = e.target.closest('th')
    // let countPrevColss = 

    for (let x = 0; x < i; x++) {
      countPrevCols = countPrevCols + parseInt(dragable[x].getAttribute('colspan'))
      
    }
    
    console.log(countPrevCols, countCurrentCols);
    
    
  })
});