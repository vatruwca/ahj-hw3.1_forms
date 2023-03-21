/**
 * @jest-environment jsdom
*/

import Popover from '../popover';

test('popover should render', () => {
  document.body.innerHTML = '<div class="container" ></div>';
  const container = document.querySelector('.container');
  const popUp = new Popover(container);
  popUp.bindToDOM();

  expect(container.innerHTML).toEqual(Popover.markup);
});

test('popover should add and delete class by click', () => {
  document.body.innerHTML = '<div class="container" ></div>';
  const container = document.querySelector('.container');
  const popUp = new Popover(container);
  popUp.bindToDOM();

  popUp.button.click();
  expect(popUp.popover.classList.contains('active')).toBeTruthy();

  popUp.button.click();
  expect(popUp.popover.classList.contains('active')).toBeFalsy();
});
