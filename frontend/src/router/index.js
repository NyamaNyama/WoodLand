"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_router_1 = require("vue-router");
var SignUp_vue_1 = require("../views/SignUp.vue");
var LogIn_vue_1 = require("../views/LogIn.vue");
var HomeView_vue_1 = require("../views/HomeView.vue");
var Scores_vue_1 = require("../views/Scores.vue");
var StartGame_vue_1 = require("../views/StartGame.vue");
var ExitPage_vue_1 = require("../views/ExitPage.vue");
var routes = [
    {
        path: '/start-game',
        name: 'StartGame',
        component: StartGame_vue_1.default
    },
    {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp_vue_1.default
    },
    {
        path: '/log-in',
        name: 'LogIn',
        component: LogIn_vue_1.default
    },
    {
        path: '/game-control',
        name: 'GameControl',
        component: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: "about" */ '../views/GameControl.vue'); }); }
    },
    {
        path: '/exit-page',
        name: 'ExitPage',
        component: ExitPage_vue_1.default
    },
    {
        path: '/',
        name: 'HomeView',
        component: HomeView_vue_1.default,
    },
    {
        path: '/scores',
        name: 'ScoresList',
        component: Scores_vue_1.default
    },
    {
        path: '/game-run',
        name: 'GameRun',
        component: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: "about" */ '../views/GameRun.vue'); }); }
    }
];
var router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(process.env.BASE_URL),
    routes: routes
});
router.beforeEach(function (to, from, next) {
    var isExitPage = from.path === '/exit-page';
    if (isExitPage && to.path !== '/game-run') {
        var canvasElement = document.querySelector('#runner-canvas');
        if (canvasElement) {
            canvasElement.remove();
        }
    }
    next();
});
exports.default = router;
