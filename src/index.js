import Template from './templates/Template.js';
import '@styles/main.css';
import '@styles/styles.scss';
console.warn('slava Stalin');

(async function App() {
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
})();
