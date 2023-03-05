'use strict';
let inputText = document.querySelector('input[type=text]');
const ulElements = document.querySelector('body > main > ul');
const buttons = document.querySelectorAll('button');

buttons.forEach(element => {
  element.addEventListener('click', function (event) {
    if (element.textContent == 'Add') {
      //liElements.insertAdjacentHTML(
      //  'afterbegin',
      //  `<li><input type="checkbox" /><span>${inputText.value}</span><button name="Remove">Remove</button></li>`
      //);
      const liElement = document.createElement('li');
      const checkboxElement = document.createElement('input');
      checkboxElement.setAttribute('type', 'checkbox');
      liElement.appendChild(checkboxElement);
      const spanElement = document.createElement('span');
      spanElement.textContent = inputText.value;
      liElement.appendChild(spanElement);
      const removeButton = document.createElement('button');
      removeButton.setAttribute('name', 'Remove');
      removeButton.textContent = 'Remove';
      liElement.appendChild(removeButton);
      ulElements.appendChild(liElement);
      inputText.value = '';
      removeButton.addEventListener('click', function () {
        liElement.remove();
      });
    }

    if (event.target.textContent == 'Remove') {
      console.log(event.target);
      console.log(event.target.closest('li'));
      event.target.closest('li').remove();
    }
  });
});

//addButton.addEventListener('click', function () {
//  liElements.insertAdjacentHTML(
//    'afterbegin',
//    `<li><input type="checkbox" /><span>${textContent.value}</span><button name="Remove">Remove</button></li>`
//  );
//  textContent.value = '';
//});
