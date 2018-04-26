import './style.scss';

import MainInfo from './components/main-info/index';
import Home from './templates/home/index';

document.addEventListener('DOMContentLoaded', () => {
        new MainInfo();
        new Home();
});