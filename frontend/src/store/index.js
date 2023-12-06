"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vuex_1 = require("vuex");
exports.default = (0, vuex_1.createStore)({
    state: {
        access: '',
        refresh: '',
        username: ''
    },
    mutations: {
        initializeStore: function (state) {
            if (localStorage.getItem("access")) {
                state.access = localStorage.getItem("access");
                state.refresh = localStorage.getItem("refresh");
            }
            else {
                state.access = '';
                state.refresh = '';
            }
        },
        setAccess: function (state, access) {
            state.access = access;
        },
        setRefresh: function (state, refresh) {
            state.refresh = refresh;
        },
        clearAccess: function (state) {
            state.access = '';
        },
        clearRefresh: function (state) {
            state.refresh = '';
        },
        setUserName: function (state, username) {
            state.username = username;
        },
        clearUserName: function (state) {
            state.username = '';
        }
    },
    actions: {},
    modules: {}
});
