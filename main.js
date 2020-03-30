Vue.component('task-list', {

    template: '<li><slot></slot></li>',

    // data() {
    //     return {
    //         message: 'This is the beginning',
    //     }
    // },
})

new Vue({
    el: '#root',
})