import './style.scss';

import MainInfo from './components/main-info/index';
import Home from './templates/home/index';
import Popup from './components/popup/popup';

document.addEventListener('DOMContentLoaded', () => {
        new MainInfo();
        new Home();
        new Popup();
});