function lockedProfile() {
  // In this problem, you should create a JS functionality that shows and hides the additional information about users.

  // When one of the [Show more] buttons is clicked, the hidden information inside the div should
  // be shown, only if the profile is not locked! If the current profile is locked, nothing should happen.

  // If the hidden information is displayed and we lock the profile again, the [Hide it] button should not be working!
  // Otherwise, when the profile is unlocked and we click on the [Hide it] button, the new fields must hide again.

  const checkUnclock = document.querySelectorAll(
    'input[type=radio][value=unlock]'
  );
  const checkLock = document.querySelectorAll('input[type=radio][value=lock]');

  const btn = document.querySelectorAll('button');
  let hiddenDiv = '';
  let currentUser = 0;

  btn.forEach(e =>
    e.addEventListener('click', function (event) {
      currentUser =
        event.target.previousSibling.previousElementSibling.id.slice(4, 5);
      hiddenDiv = document.querySelector(`#user${currentUser}HiddenFields`);

      if (checkUnclock[currentUser - 1].checked) {
        hiddenDiv.style.display = 'block';
        checkLock[currentUser - 1].addEventListener(
          'click',
          () => (hiddenDiv.style.display = 'none')
        );
      }
    })
  );
  console.log('TODO...');
}
