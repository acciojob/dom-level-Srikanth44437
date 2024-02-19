//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
  const targetElement = document.getElementById('level');

  if (targetElement) {
    const domLevel = calculateDOMLevel(targetElement);
    alert(`The level of the element is: ${domLevel}`);
  } else {
    alert('Element with id "level" not found.');
  }
});

function calculateDOMLevel(element) {
  let domLevel = 1;

  while (element && element.tagName !== 'HTML') {
    element = element.parentElement;
    domLevel++;
  }

  return domLevel;//
}
