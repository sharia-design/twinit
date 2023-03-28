
const toggleRow = (el) => {
  el.classList.toggle('active')
  el.getElementsByClassName('details')[0].classList.toggle('hide-row');

  let rowWidth = el.offsetWidth
  let detailContainer = el.children[6]
  let detailHeight = el.children[6].offsetHeight

  console.log(detailContainer);
  
  console.log(`height: ${detailHeight}`);
  

  el.children[6].children[0].style.width = `${rowWidth-32}px`
  // console.log(event);
}