import HttpVueLoader from 'http-vue-loader';
const User = {
    template: '<div>User</div>'
};
const routes = [
    //{path:'/', component: HttpVueLoader('./components/vue-tree-table').template}
    //{path:'/', component: res=>require([HttpVueLoader('./components/vue-tree-table')],res)}
    {path:'/', component: res=>require(['./components/vue-tree-table'],res)}
    //{path:'/', component: res=>require(['./components/ExampleComponent.vue'],res)}
    //{path:'/', component: User}
];
export default routes;