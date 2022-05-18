import { Accordeon } from '../utils/Accordeon.js';

let accordeon = document.getElementById('chars-accordeon');

if(accordeon) {
    new Accordeon(accordeon, {
        isCollapse: true
    });
}
