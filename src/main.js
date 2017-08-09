import Vue from 'vue';
import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App)
})

/*
Render: h => h(App) is shorthand for:

render (createElement) {
 return createElement(App)
}

which can be shortened to:

render: h => h(App);

h comes from the term 'hyperscript' which is common in virtual DOM implementations.
'Hyperscript' stands for 'script that generates HTML structures'

*/
