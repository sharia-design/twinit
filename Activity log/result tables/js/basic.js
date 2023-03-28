
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



