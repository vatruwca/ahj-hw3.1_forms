import Popover from './popover';
import '../css/style.css';

const container = document.querySelector('.container');

const popUp = new Popover(container);
popUp.bindToDOM();
