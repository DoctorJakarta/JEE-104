(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<a routerLink=\"/jee101/\" >JEE-101</a> &nbsp;&nbsp;&nbsp;&nbsp;\n<a routerLink=\"/jee102/\" >JEE-102</a> &nbsp;&nbsp;&nbsp;&nbsp;\n<a routerLink=\"/jee103/\" >JEE-103</a> &nbsp;&nbsp;&nbsp;&nbsp;\n<a routerLink=\"/jee104/\" >JEE-104</a> &nbsp;&nbsp;&nbsp;&nbsp;\n\n<hr/>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/jee101/jee101.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/jee101/jee101.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>JEE-101 Tester</h1>\n<hr/>\n\n<button (click)=\"getGreeting()\">Get Greeting</button>\n<h2 *ngIf=\"greeting\">Got Greeting: {{greeting.title}} {{greeting.name}}</h2>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/jee102/jee102.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/jee102/jee102.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>\n\tJEE-102: My Books\n</h1>\n<div *ngIf=book>\n\t<fieldset style='width: 100%'>\n\t\t<legend>Book Details ({{book.id}}):</legend>\n\t\t<form>\n\t\t\t<label>Title: </label>\n\t\t\t<input name=\"title\" [(ngModel)]=\"book.title\">\n\t\t\t<br />\n\t\t\t<label>Author: </label>\n\t\t\t<input name=\"author\" [(ngModel)]=\"book.author\">\n\t\t\t<br />\n\t\t\t<label>Year: </label>\n\t\t\t<input name=\"year\" [(ngModel)]=\"book.year\">\n\t\t\t<br />\n\t\t\t\n\t\t\t<button (click)=\"upsertBook()\">Save</button>\n\n\t\t</form>\n    </fieldset> \n</div>\n\n\n<fieldset *ngIf=books>\n\t<legend>Books: <button (click)=\"showAddBook()\">Add Book</button> </legend>\n    <table cellspacing=20>\n\t\t<tr>\n            <th></th>\n            <th>ID</th>\n            <th>Year</th>\n            <th>Author</th>\n            <th>Title</th>\n       </tr>\n\t\t<tr *ngFor='let b of books;'>\n            <td align=center>\n\t\t\t\t<button (click)=\"showEditBook(b.id)\">Edit</button>\n\t\t\t</td>\n\t\t\t<td align=right>{{b.id}}</td>\n            <td>{{b.year}}</td>\n\t\t\t<td>{{b.author}}</td>\n\t\t\t<td>{{b.title}}</td>\n             <td align=center>\n\t\t\t\t<button (click)=\"deleteBook(b.id)\">Delete</button>\n\t\t\t</td>\n       </tr>\n\t</table>\n</fieldset>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/jee103/jee103.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/jee103/jee103.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("{{ currentUser ? 'Welcome ' + currentUser.username : ''}} \n<button routerLink=\"/login/\">{{ isLoggedIn() ? 'Logout' : 'Login' }}</button>\n\n<h1>\n\tJEE-103: My Books \n</h1>\n\n<div *ngIf=book>\n\t<fieldset style='width: 100%'>\n\t\t<legend>Book Details ({{book.id}}):</legend>\n\t\t<form>\n\t\t\t<label>Title: </label>\n\t\t\t<input name=\"title\" [(ngModel)]=\"book.title\">\n\t\t\t<br />\n\t\t\t<label>Author: </label>\n\t\t\t<input name=\"author\" [(ngModel)]=\"book.author\">\n\t\t\t<br />\n\t\t\t<label>Year: </label>\n\t\t\t<input name=\"year\" [(ngModel)]=\"book.year\">\n\t\t\t<br />\n\t\t\t\n\t\t\t<button (click)=\"upsertBook()\">Save</button>\n\n\t\t</form>\n    </fieldset> \n</div>\n\n\n<fieldset>\n\t<legend>Books: <button  *ngIf=\"isLoggedIn()\" (click)=\"showAddBook()\">Add Book</button></legend>\n \t{{ isLoggedIn() ? '' : 'Must Login to Add/Edit Books' }}\n   <table cellspacing=20>\n\t\t<tr>\n            <th></th>\n            <th>ID</th>\n            <th>Year</th>\n            <th>Author</th>\n            <th>Title</th>\n       </tr>\n\t\t<tr *ngFor='let b of books;'>\n            <td align=center>\n\t\t\t\t<button *ngIf=\"isLoggedIn()\" (click)=\"showEditBook(b.id)\">Edit</button>\n\t\t\t</td>\n\t\t\t<td align=right>{{b.id}}</td>\n            <td>{{b.year}}</td>\n\t\t\t<td>{{b.author}}</td>\n\t\t\t<td>{{b.title}}</td>\n             <td align=center>\n\t\t\t\t<button *ngIf=\"isLoggedIn()\" (click)=\"deleteBook(b.id)\">Delete</button>\n\t\t\t</td>\n       </tr>\n\t</table>\n</fieldset>\n\n\n\n<div *ngIf=user>\n\t<fieldset style='width: 100%'>\n\t\t<legend>User Details ({{user.id}}):</legend>\n\t\t<form>\n\t\t\t<label>UserID: </label>\n\t\t\t<input name=\"username\" [(ngModel)]=\"user.username\">\n\t\t\t<br />\n\t\t\t<label>Password: </label>\n\t\t\t<input name=\"password\" [(ngModel)]=\"user.password\">\n\t\t\t<br />\n\t\t\t<label>Role: </label>\n\t\t\t\t<select name=\"role\" [(ngModel)]=\"user.role\">\n\t\t\t\t\t<option *ngFor=\"let r of getUserRoleKeys()\" [value]='r' selected>{{userRoleNames.get(r)}}</option>\n\t\t\t\t\t<!-- <option [value]='USER_ROLE.PUBLIC' selected>PUBLIC</option> -->\n\t\t\t\t\t<!-- <option [value]='USER_ROLE.ADMIN'>ADMIN</option> -->\n\t\t\t\t</select>\n\t\t\t<br />\n\t\t\t\n\t\t\t<button (click)=\"upsertUser()\">Save</button>\n\n\t\t</form>\n    </fieldset> \n</div>\n\n<fieldset *ngIf=isAdmin>\n\t<legend>Users: \t\n\t<button *ngIf=\"isLoggedIn()\" (click)=\"showAddUser()\">Add User</button></legend>\n\t{{ isLoggedIn() ? '' : 'Must Login to View Users' }}\n    <table cellspacing=20>\n\t\t<tr>\n            <th></th>\n            <th>ID</th>\n            <th>UserId</th>\n            <th>Role</th>\n       </tr>\n\t\t<tr *ngFor='let u of users;'>\n            <td align=center>\n\t\t\t\t<button *ngIf=(loggedIn) (click)=\"showEditUser(u.id)\">Edit</button>\n\t\t\t</td>\n\t\t\t<td align=right>{{u.id}}</td>\n            <td>{{u.username}}</td>\n\t\t\t<td>{{u.role}}</td>\n             <td align=center>\n\t\t\t\t<button *ngIf=(loggedIn) (click)=\"deleteUser(u.id)\">Delete</button>\n\t\t\t</td>\n       </tr>\n\t</table>\n</fieldset>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/jee104/jee104.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/jee104/jee104.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("{{ currentUser ? 'Welcome ' + currentUser.username : ''}} \n<button routerLink=\"/login104/\">{{ isLoggedIn() ? 'Logout' : 'Login' }}</button>\n\n<h1>\n\tJEE-104: My Books \n</h1>\n\n<div *ngIf=book>\n\t<fieldset style='width: 100%'>\n\t\t<legend>Book Details ({{book.id}}):</legend>\n\t\t<form>\n\t\t\t<label>Title: </label>\n\t\t\t<input name=\"title\" [(ngModel)]=\"book.title\">\n\t\t\t<br />\n\t\t\t<label>Author: </label>\n\t\t\t<input name=\"author\" [(ngModel)]=\"book.author\">\n\t\t\t<br />\n\t\t\t<label>Year: </label>\n\t\t\t<input name=\"year\" [(ngModel)]=\"book.year\">\n\t\t\t<br />\n\t\t\t\n\t\t\t<button (click)=\"upsertBook()\">Save</button>\n\n\t\t</form>\n    </fieldset> \n</div>\n\n\n<fieldset>\n\t<legend>Books: <button  *ngIf=\"isLoggedIn()\" (click)=\"showAddBook()\">Add Book</button></legend>\n \t{{ isLoggedIn() ? '' : 'Must Login to Add/Edit Books' }}\n   <table cellspacing=20>\n\t\t<tr>\n            <th></th>\n            <th>ID</th>\n            <th>Year</th>\n            <th>Author</th>\n            <th>Title</th>\n       </tr>\n\t\t<tr *ngFor='let b of books;'>\n            <td align=center>\n\t\t\t\t<button *ngIf=\"isLoggedIn()\" (click)=\"showEditBook(b.id)\">Edit</button>\n\t\t\t</td>\n\t\t\t<td align=right>{{b.id}}</td>\n            <td>{{b.year}}</td>\n\t\t\t<td>{{b.author}}</td>\n\t\t\t<td>{{b.title}}</td>\n             <td align=center>\n\t\t\t\t<button *ngIf=\"isLoggedIn()\" (click)=\"deleteBook(b.id)\">Delete</button>\n\t\t\t</td>\n       </tr>\n\t</table>\n</fieldset>\n\n\n\n<div *ngIf=user>\n\t<fieldset style='width: 100%'>\n\t\t<legend>User Details ({{user.id}}):</legend>\n\t\t<form>\n\t\t\t<label>UserID: </label>\n\t\t\t<input name=\"username\" [(ngModel)]=\"user.username\">\n\t\t\t<br />\n\t\t\t<label>Password: </label>\n\t\t\t<input name=\"password\" [(ngModel)]=\"user.password\">\n\t\t\t<br />\n\t\t\t<label>Role: </label>\n\t\t\t\t<select name=\"role\" [(ngModel)]=\"user.role\">\n\t\t\t\t\t<option *ngFor=\"let r of getUserRoleKeys()\" [value]='r' selected>{{userRoleNames.get(r)}}</option>\n\t\t\t\t\t<!-- <option [value]='USER_ROLE.PUBLIC' selected>PUBLIC</option> -->\n\t\t\t\t\t<!-- <option [value]='USER_ROLE.ADMIN'>ADMIN</option> -->\n\t\t\t\t</select>\n\t\t\t<br />\n\t\t\t\n\t\t\t<button (click)=\"upsertUser()\">Save</button>\n\n\t\t</form>\n    </fieldset> \n</div>\n\n<fieldset *ngIf=isAdmin>\n\t<legend>Users: \t\n\t<button *ngIf=\"isLoggedIn()\" (click)=\"showAddUser()\">Add User</button></legend>\n\t{{ isLoggedIn() ? '' : 'Must Login to View Users' }}\n    <table cellspacing=20>\n\t\t<tr>\n            <th></th>\n            <th>ID</th>\n            <th>UserId</th>\n            <th>Role</th>\n       </tr>\n\t\t<tr *ngFor='let u of users;'>\n            <td align=center>\n\t\t\t\t<button *ngIf=(loggedIn) (click)=\"showEditUser(u.id)\">Edit</button>\n\t\t\t</td>\n\t\t\t<td align=right>{{u.id}}</td>\n            <td>{{u.username}}</td>\n\t\t\t<td>{{u.role}}</td>\n             <td align=center>\n\t\t\t\t<button *ngIf=(loggedIn) (click)=\"deleteUser(u.id)\">Delete</button>\n\t\t\t</td>\n       </tr>\n\t</table>\n</fieldset>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login103/login103.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login103/login103.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n{{ loggedIn ? 'Welcome: ' + user.username : 'Please Login'}}\n\n    <fieldset style='width: 100%' *ngIf=\"!loggedIn\">\n\t\t<legend>Login Form (JEE-103)</legend>\n\t\t<form>\n\t\t\t<label>UserID: </label>\n\t\t\t<input name=\"username\" type=text [(ngModel)]=\"user.username\">\n\t\t\t<br />\n\t\t\t<label>Password: </label>\n\t\t\t<input name=\"password\" type=password [(ngModel)]=\"user.password\">\n\t\t\t<button (click)=\"login()\">Login</button>\n\n\t\t</form>\n\t\tHint: Try \"admin\" with the most common enterprise password: https://www.zdnet.com/article/top-25-passwords-overused-within-enterprises-password1-welcome-welcome1/\n\t</fieldset> \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login104/login104.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login104/login104.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<fieldset style='width: 100%'>\n\t\t<legend>Login Form (JEE-104)</legend>\n\t\t<form>\n\t\t\t<label>UserID: </label>\n\t\t\t<input name=\"username\" type=text [(ngModel)]=\"user.username\">\n\t\t\t<br />\n\t\t\t<label>Password: </label>\n\t\t\t<input name=\"password\" type=password [(ngModel)]=\"user.password\">\n\t\t\t<button (click)=\"login()\">Login</button>\n\n\t\t</form>\n\t</fieldset> \n\tHint: Try \"admin\" with the most common enterprise password: https://www.zdnet.com/article/top-25-passwords-overused-within-enterprises-password1-welcome-welcome1/\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'JEE-UI';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_jee101_jee101_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/jee101/jee101.component */ "./src/app/components/jee101/jee101.component.ts");
/* harmony import */ var _components_jee102_jee102_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/jee102/jee102.component */ "./src/app/components/jee102/jee102.component.ts");
/* harmony import */ var _components_jee103_jee103_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/jee103/jee103.component */ "./src/app/components/jee103/jee103.component.ts");
/* harmony import */ var _components_jee104_jee104_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/jee104/jee104.component */ "./src/app/components/jee104/jee104.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _components_login103_login103_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/login103/login103.component */ "./src/app/components/login103/login103.component.ts");
/* harmony import */ var _components_login104_login104_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/login104/login104.component */ "./src/app/components/login104/login104.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_jee101_jee101_component__WEBPACK_IMPORTED_MODULE_8__["Jee101Component"],
            _components_jee102_jee102_component__WEBPACK_IMPORTED_MODULE_9__["Jee102Component"],
            _components_jee103_jee103_component__WEBPACK_IMPORTED_MODULE_10__["Jee103Component"],
            _components_jee104_jee104_component__WEBPACK_IMPORTED_MODULE_11__["Jee104Component"],
            _components_login103_login103_component__WEBPACK_IMPORTED_MODULE_13__["Login103Component"],
            _components_login104_login104_component__WEBPACK_IMPORTED_MODULE_14__["Login104Component"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"], { useHash: true, preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_5__["PreloadAllModules"], onSameUrlNavigation: 'reload' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ],
        providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_jee101_jee101_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/jee101/jee101.component */ "./src/app/components/jee101/jee101.component.ts");
/* harmony import */ var _components_jee102_jee102_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/jee102/jee102.component */ "./src/app/components/jee102/jee102.component.ts");
/* harmony import */ var _components_jee103_jee103_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/jee103/jee103.component */ "./src/app/components/jee103/jee103.component.ts");
/* harmony import */ var _components_jee104_jee104_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/jee104/jee104.component */ "./src/app/components/jee104/jee104.component.ts");
/* harmony import */ var _components_login103_login103_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login103/login103.component */ "./src/app/components/login103/login103.component.ts");
/* harmony import */ var _components_login104_login104_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login104/login104.component */ "./src/app/components/login104/login104.component.ts");







const ROUTES = [
    { path: 'jee101', component: _components_jee101_jee101_component__WEBPACK_IMPORTED_MODULE_1__["Jee101Component"] },
    { path: 'jee102', component: _components_jee102_jee102_component__WEBPACK_IMPORTED_MODULE_2__["Jee102Component"] },
    { path: 'jee103', component: _components_jee103_jee103_component__WEBPACK_IMPORTED_MODULE_3__["Jee103Component"] },
    { path: 'jee104', component: _components_jee104_jee104_component__WEBPACK_IMPORTED_MODULE_4__["Jee104Component"] },
    { path: 'login103', component: _components_login103_login103_component__WEBPACK_IMPORTED_MODULE_5__["Login103Component"] },
    { path: 'login104', component: _components_login104_login104_component__WEBPACK_IMPORTED_MODULE_6__["Login104Component"] },
    { path: '', component: _components_login103_login103_component__WEBPACK_IMPORTED_MODULE_5__["Login103Component"] },
    { path: '**', component: _components_login103_login103_component__WEBPACK_IMPORTED_MODULE_5__["Login103Component"] }
];


/***/ }),

/***/ "./src/app/components/jee101/jee101.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/jee101/jee101.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvamVlMTAxL2plZTEwMS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/jee101/jee101.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/jee101/jee101.component.ts ***!
  \*******************************************************/
/*! exports provided: Jee101Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jee101Component", function() { return Jee101Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");




// import { CombineLatestOperator } from 'rxjs/internal/observable/combineLatest';
let Jee101Component = class Jee101Component {
    // tslint:disable-next-line:variable-name
    constructor(_apiService, route, router) {
        this._apiService = _apiService;
        this.route = route;
        this.router = router;
    }
    getGreeting() {
        this._apiService.readGreeting101().subscribe(success => {
            this.greeting = success;
        }, error => {
            alert('This greeting failed.');
        });
    }
    ngOnInit() {
    }
};
Jee101Component.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
Jee101Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jee101',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./jee101.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/jee101/jee101.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./jee101.component.css */ "./src/app/components/jee101/jee101.component.css")).default]
    })
], Jee101Component);



/***/ }),

/***/ "./src/app/components/jee102/jee102.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/jee102/jee102.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvamVlMTAyL2plZTEwMi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/jee102/jee102.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/jee102/jee102.component.ts ***!
  \*******************************************************/
/*! exports provided: Jee102Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jee102Component", function() { return Jee102Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_model_book__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/book */ "./src/app/model/book.ts");




let Jee102Component = class Jee102Component {
    constructor(apiService) {
        this.apiService = apiService;
        this.books = this.getBooks();
    }
    // newBook() { this.router.navigate(['book', PAGE_TYPE.NEW_BOOK]); }
    getBooks() {
        this.apiService.readBooks102().subscribe(success => {
            this.books = success;
            console.log('Got Books: ' + this.books);
        }, error => this.apiService.handleError(error));
    }
    showAddBook() {
        this.book = new src_app_model_book__WEBPACK_IMPORTED_MODULE_3__["Book"]();
    }
    showEditBook(id) {
        console.log('Showing edit bookID: ' + id);
        this.apiService.readBook102(id).subscribe(success => {
            this.book = success;
        }, error => this.apiService.handleError(error));
    }
    upsertBook() {
        let apiServieRequest;
        if (this.book.id) {
            apiServieRequest = this.apiService.updateBook102(this.book);
        }
        else {
            apiServieRequest = this.apiService.createBook102(this.book);
        }
        apiServieRequest.subscribe(success => {
            this.getBooks();
            this.book = null;
        }, error => this.apiService.handleError(error));
    }
    deleteBook(id) {
        if (confirm('Are you sure you want to delete the book?')) {
            this.apiService.deleteBook102(id).subscribe(success => {
                this.getBooks();
            }, error => this.apiService.handleError(error));
        }
    }
};
Jee102Component.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
Jee102Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jee102',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./jee102.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/jee102/jee102.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./jee102.component.css */ "./src/app/components/jee102/jee102.component.css")).default]
    })
], Jee102Component);



/***/ }),

/***/ "./src/app/components/jee103/jee103.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/jee103/jee103.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvamVlMTAzL2plZTEwMy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/jee103/jee103.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/jee103/jee103.component.ts ***!
  \*******************************************************/
/*! exports provided: Jee103Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jee103Component", function() { return Jee103Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_model_book__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/book */ "./src/app/model/book.ts");
/* harmony import */ var src_app_model_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/user */ "./src/app/model/user.ts");





let Jee103Component = class Jee103Component {
    constructor(apiService) {
        this.apiService = apiService;
        this.USER_ROLE = src_app_model_user__WEBPACK_IMPORTED_MODULE_4__["USER_ROLE"];
        this.userRoleNames = src_app_model_user__WEBPACK_IMPORTED_MODULE_4__["User"].getUserRoleNames();
        this.loggedIn = false;
        this.isAdmin = true;
        this.showLogin = false;
        this.books = this.getBooks();
        this.users = this.getUsers();
        this.currentUser = apiService.getCurrentUser();
    }
    isLoggedIn() {
        return (this.apiService.getCurrentUser() != null);
    }
    getUserRoleKeys() {
        return Array.from(this.userRoleNames.keys());
    }
    getBooks() {
        this.apiService.readBooks104().subscribe(success => {
            this.books = success.body;
            this.apiService.updateJwt(success.headers);
        }, error => this.apiService.handleError(error));
    }
    getUsers() {
        this.apiService.readUsers104().subscribe(success => {
            this.users = success.body;
            this.apiService.updateJwt(success.headers);
        }, error => this.apiService.handleError(error));
    }
    showAddBook() {
        this.book = new src_app_model_book__WEBPACK_IMPORTED_MODULE_3__["Book"]();
    }
    showEditBook(id) {
        console.log('Showing edit bookID: ' + id);
        this.apiService.readBook104(id).subscribe(success => {
            this.book = success.body;
            this.apiService.updateJwt(success.headers);
        }, error => this.apiService.handleError(error));
    }
    showAddUser() {
        this.user = new src_app_model_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.user.role = src_app_model_user__WEBPACK_IMPORTED_MODULE_4__["USER_ROLE"].PUBLIC; // Set default option
    }
    showEditUser(id) {
        console.log('Showing edit bookID: ' + id);
        this.apiService.readUser104(id).subscribe(success => {
            this.user = success.body;
            this.apiService.updateJwt(success.headers);
        }, error => this.apiService.handleError(error));
    }
    upsertBook() {
        let apiServiceRequest;
        if (this.book.id) {
            apiServiceRequest = this.apiService.updateBook104(this.book);
        }
        else {
            apiServiceRequest = this.apiService.createBook104(this.book);
        }
        apiServiceRequest.subscribe(success => {
            this.getBooks();
            this.book = null;
        }, error => this.apiService.handleError(error));
    }
    deleteBook(id) {
        if (confirm('Are you sure you want to delete the book?')) {
            this.apiService.deleteBook104(id).subscribe(success => {
                this.getBooks();
            }, error => this.apiService.handleError(error));
        }
    }
    upsertUser() {
        let apiServiceRequest;
        if (this.user.id) {
            apiServiceRequest = this.apiService.updateUser104(this.user);
        }
        else {
            apiServiceRequest = this.apiService.createUser104(this.user);
        }
        apiServiceRequest.subscribe(success => {
            this.getUsers();
            this.user = null;
        }, error => this.apiService.handleError(error));
    }
    deleteUser(id) {
        if (confirm('Are you sure you want to delete the user?')) {
            this.apiService.deleteUser104(id).subscribe(success => {
                this.getUsers();
            }, error => this.apiService.handleError(error));
        }
    }
};
Jee103Component.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
Jee103Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jee103',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./jee103.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/jee103/jee103.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./jee103.component.css */ "./src/app/components/jee103/jee103.component.css")).default]
    })
], Jee103Component);



/***/ }),

/***/ "./src/app/components/jee104/jee104.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/jee104/jee104.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvamVlMTA0L2plZTEwNC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/jee104/jee104.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/jee104/jee104.component.ts ***!
  \*******************************************************/
/*! exports provided: Jee104Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jee104Component", function() { return Jee104Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_model_book__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/book */ "./src/app/model/book.ts");
/* harmony import */ var src_app_model_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/user */ "./src/app/model/user.ts");





let Jee104Component = class Jee104Component {
    constructor(apiService) {
        this.apiService = apiService;
        this.USER_ROLE = src_app_model_user__WEBPACK_IMPORTED_MODULE_4__["USER_ROLE"];
        this.userRoleNames = src_app_model_user__WEBPACK_IMPORTED_MODULE_4__["User"].getUserRoleNames();
        this.loggedIn = false;
        this.isAdmin = true;
        this.showLogin = false;
        this.books = this.getBooks();
        this.users = this.getUsers();
        this.currentUser = apiService.getCurrentUser();
    }
    isLoggedIn() {
        return (this.apiService.getCurrentUser() != null);
    }
    getUserRoleKeys() {
        return Array.from(this.userRoleNames.keys());
    }
    getBooks() {
        this.apiService.readBooks104().subscribe(success => {
            this.books = success.body;
            this.apiService.updateJwt(success.headers);
        }, error => this.apiService.handleError(error));
    }
    getUsers() {
        this.apiService.readUsers104().subscribe(success => {
            this.users = success.body;
            this.apiService.updateJwt(success.headers);
        }, error => this.apiService.handleError(error));
    }
    showAddBook() {
        this.book = new src_app_model_book__WEBPACK_IMPORTED_MODULE_3__["Book"]();
    }
    showEditBook(id) {
        console.log('Showing edit bookID: ' + id);
        this.apiService.readBook104(id).subscribe(success => {
            this.book = success.body;
            this.apiService.updateJwt(success.headers);
        }, error => this.apiService.handleError(error));
    }
    showAddUser() {
        this.user = new src_app_model_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.user.role = src_app_model_user__WEBPACK_IMPORTED_MODULE_4__["USER_ROLE"].PUBLIC; // Set default option
    }
    showEditUser(id) {
        console.log('Showing edit bookID: ' + id);
        this.apiService.readUser104(id).subscribe(success => {
            this.user = success.body;
            this.apiService.updateJwt(success.headers);
        }, error => this.apiService.handleError(error));
    }
    upsertBook() {
        let apiServiceRequest;
        if (this.book.id) {
            apiServiceRequest = this.apiService.updateBook104(this.book);
        }
        else {
            apiServiceRequest = this.apiService.createBook104(this.book);
        }
        apiServiceRequest.subscribe(success => {
            this.getBooks();
            this.book = null;
        }, error => this.apiService.handleError(error));
    }
    deleteBook(id) {
        if (confirm('Are you sure you want to delete the book?')) {
            this.apiService.deleteBook104(id).subscribe(success => {
                this.getBooks();
            }, error => this.apiService.handleError(error));
        }
    }
    upsertUser() {
        let apiServiceRequest;
        if (this.user.id) {
            apiServiceRequest = this.apiService.updateUser104(this.user);
        }
        else {
            apiServiceRequest = this.apiService.createUser104(this.user);
        }
        apiServiceRequest.subscribe(success => {
            this.getUsers();
            this.user = null;
        }, error => this.apiService.handleError(error));
    }
    deleteUser(id) {
        if (confirm('Are you sure you want to delete the user?')) {
            this.apiService.deleteUser104(id).subscribe(success => {
                this.getUsers();
            }, error => this.apiService.handleError(error));
        }
    }
};
Jee104Component.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
Jee104Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jee104',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./jee104.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/jee104/jee104.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./jee104.component.css */ "./src/app/components/jee104/jee104.component.css")).default]
    })
], Jee104Component);



/***/ }),

/***/ "./src/app/components/login103/login103.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/login103/login103.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4xMDMvbG9naW4xMDMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/login103/login103.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/login103/login103.component.ts ***!
  \***********************************************************/
/*! exports provided: Login103Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login103Component", function() { return Login103Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_model_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/user */ "./src/app/model/user.ts");





let Login103Component = class Login103Component {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.loggedIn = false;
        this.apiService.terminateSession(); // The /login/ route automatically logs out the current User
        this.user = new src_app_model_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    login() {
        this.apiService.loginUser103(this.user).subscribe(success => {
            this.user = success.body;
            this.loggedIn = true;
            this.router.navigate(['/login103/']);
        }, error => this.apiService.handleError(error));
    }
};
Login103Component.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
Login103Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login103',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login103.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login103/login103.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login103.component.css */ "./src/app/components/login103/login103.component.css")).default]
    })
], Login103Component);



/***/ }),

/***/ "./src/app/components/login104/login104.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/login104/login104.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4xMDQvbG9naW4xMDQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/login104/login104.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/login104/login104.component.ts ***!
  \***********************************************************/
/*! exports provided: Login104Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login104Component", function() { return Login104Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_model_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/user */ "./src/app/model/user.ts");





let Login104Component = class Login104Component {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.apiService.terminateSession(); // The /login/ route automatically logs out the current User
        this.user = new src_app_model_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    login() {
        this.apiService.loginUser104(this.user).subscribe(success => {
            // this.user = success.body;
            this.apiService.setCurrentUser(success.body);
            this.apiService.updateJwt(success.headers);
            this.router.navigate(['/jee103/']);
        }, error => this.apiService.handleError(error));
    }
};
Login104Component.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
Login104Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login104',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login104.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login104/login104.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login104.component.css */ "./src/app/components/login104/login104.component.css")).default]
    })
], Login104Component);



/***/ }),

/***/ "./src/app/model/book.ts":
/*!*******************************!*\
  !*** ./src/app/model/book.ts ***!
  \*******************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Book {
}


/***/ }),

/***/ "./src/app/model/user.ts":
/*!*******************************!*\
  !*** ./src/app/model/user.ts ***!
  \*******************************/
/*! exports provided: USER_ROLE, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_ROLE", function() { return USER_ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var USER_ROLE;
(function (USER_ROLE) {
    USER_ROLE["ADMIN"] = "ADMIN";
    USER_ROLE["PUBLIC"] = "PUBLIC";
})(USER_ROLE || (USER_ROLE = {}));
const UserRoleNames = new Map([
    // These are the option display names
    [USER_ROLE.ADMIN, 'Admin'],
    [USER_ROLE.PUBLIC, 'Public']
]);
class User {
    static getUserRoleNames() {
        return UserRoleNames;
    }
}


/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const KEY_JWT_ACCESS = 'jwt_access';
const KEY_USER_ID = 'user_id';
const KEY_USER_ROLE = 'user_role';
const KEY_USERNAME = 'username';
let service101;
let service102;
let service103;
let service104;
const headers102 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
    .set('Content-Type', 'application/json');
let ApiService = class ApiService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.JWT_ACCESS_HEADER = 'Jwt-Access';
        this.TIMEOUT_HEADER = 'Timeout-Seconds';
        this.warnSecondsRemain = 60;
        this.expSecondsRemain = this.warnSecondsRemain;
        service101 = 'http://localhost:8080/JEE-101/api/v1.0/';
        service102 = 'http://localhost:8080/JEE-102/api/v1.0/';
        service103 = 'http://localhost:8080/JEE-103/api/v1.0/';
        service104 = 'http://localhost:8080/JEE-104/api/v1.0/';
    }
    //
    // JEE-103 JWT Authentication services
    // Note: Tried to move this to a JwtService, but that caused a circular dependency that broke initialization
    //      ApiService called JwtService to get header
    //      JwtService called ApiService to refresh jwt when called by the js prompt
    //
    setCurrentUser(user) { this.user = user; }
    getCurrentUser() { return this.user; }
    isLoggedIn() {
        if (this.jwtAccess) {
            return true;
        }
        else {
            return false;
        }
    }
    getAuthzHeaders() {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            // .set('Content-Type', 'POST')  // This was necessary for OPTIONS request with HttpClient for CORS to avoid 403
            .set('Authorization', 'Bearer ' + this.getJwtAccess())
            .set('Content-Type', 'application/json');
    }
    handleError(error) {
        console.log('Got API error status: ' + error.status);
        // Do something like this.router.navigate(['/error']);
    }
    getJwtAccess() {
        if (!this.jwtAccess) {
            this.jwtAccess = localStorage.getItem(KEY_JWT_ACCESS);
        }
        return this.jwtAccess;
    }
    setJwtAccess(jwt) {
        //console.log('>>>>>>>>>> ApiService.setJwtAccess with: ' + jwt);
        this.jwtAccess = jwt;
        localStorage.setItem(KEY_JWT_ACCESS, jwt);
    }
    getSecondsRemaining() { return this.expSecondsRemain; }
    updateJwt(headers) {
        let expSeconds = null;
        let jwtAccess = null;
        if (headers != null) {
            expSeconds = headers.get(this.TIMEOUT_HEADER);
            jwtAccess = headers.get(this.JWT_ACCESS_HEADER);
        }
        this.setJwtAccess(jwtAccess);
        // console.log("Restarting Timer with expSeconds: " + expSeconds + " and jwtAccess: " + jwtAccess);
        clearInterval(this.interval);
        this.expSecondsRemain = 0; // Clear time remaining for rest interval
        this.interval = setInterval(() => {
            if (this.expSecondsRemain > 0) {
                this.expSecondsRemain--;
                if (this.expSecondsRemain % 10 === 0)
                    console.log(this.getSecondsRemaining() + ' seconds remaining.');
            }
            else {
                this.expSecondsRemain = expSeconds;
            }
            if (this.expSecondsRemain === this.warnSecondsRemain) {
                const keepSession = confirm('Session timing out in ' + this.warnSecondsRemain + ' seconds.  Keep session alive?');
                if (keepSession === true) {
                    console.log('Extending session...');
                    this.continueSession();
                }
                else {
                    console.log('Not extending session...');
                    this.terminateSession();
                }
            }
        }, 1000);
    }
    continueSession() {
        this.refreshUser104().subscribe(success => {
            this.updateJwt(success.headers);
        }, err => this.handleError(err));
    }
    terminateSession() {
        this.user = null;
        this.updateJwt(null);
    }
    //
    // JEE-101 Services
    //
    readGreeting101() {
        return this.http.get(service101 + 'hello');
    }
    //
    // JEE-102 Book Services
    //
    readBooks102() {
        return this.http.get(service102 + 'book');
    }
    readBook102(id) {
        return this.http.get(service102 + 'book/' + id);
    }
    createBook102(book) {
        return this.http.post(service102 + 'book', JSON.stringify(book), { headers: headers102 });
    }
    updateBook102(book) {
        return this.http.put(service102 + 'book', JSON.stringify(book), { headers: headers102 });
    }
    deleteBook102(id) {
        return this.http.delete(service102 + 'book/' + id, { headers: headers102 });
    }
    //
    // JEE-103 User Services
    //
    readUsers103() {
        return this.http.get(service103 + 'user', { headers: headers102 });
    }
    readUser103(id) {
        return this.http.get(service103 + 'user/' + id, { headers: headers102 });
    }
    createUser103(user) {
        return this.http.post(service103 + 'user', JSON.stringify(user), { headers: headers102 });
    }
    //
    //  JEE-103 Login/Logout/Refresh Services
    //
    loginUser103(user) {
        return this.http.post(service103 + 'auth/login', JSON.stringify(user), { observe: 'response', headers: this.getAuthzHeaders() });
    }
    //
    //  JEE-104 Login/Logout/Refresh Services
    //
    loginUser104(user) {
        return this.http.post(service104 + 'auth/login', JSON.stringify(user), { observe: 'response', headers: this.getAuthzHeaders() });
    }
    refreshUser104() {
        return this.http.get(service104 + 'auth/refresh', { observe: 'response', headers: this.getAuthzHeaders() });
    }
    //
    // JEE-104 Authorized Book Services
    //         Services now 'observe' which requires pulling the success.body and success.headers
    //
    readBooks104() {
        return this.http.get(service104 + 'book', { observe: 'response', headers: this.getAuthzHeaders() });
    }
    readBook104(id) {
        return this.http.get(service104 + 'book/' + id, { observe: 'response', headers: this.getAuthzHeaders() });
    }
    createBook104(book) {
        return this.http.post(service104 + 'authz/book', JSON.stringify(book), { observe: 'response', headers: this.getAuthzHeaders() });
    }
    updateBook104(book) {
        return this.http.put(service104 + 'authz/book', JSON.stringify(book), { observe: 'response', headers: this.getAuthzHeaders() });
    }
    deleteBook104(id) {
        return this.http.delete(service104 + 'authz/book/' + id, { observe: 'response', headers: this.getAuthzHeaders() });
    }
    //
    // JEE-104 Authorized User Services
    //
    readUsers104() {
        return this.http.get(service104 + 'authz/user', { observe: 'response', headers: this.getAuthzHeaders() });
    }
    readUser104(id) {
        return this.http.get(service104 + 'authz/user/' + id, { observe: 'response', headers: this.getAuthzHeaders() });
    }
    createUser104(user) {
        return this.http.post(service104 + 'authz/user', JSON.stringify(user), { observe: 'response', headers: this.getAuthzHeaders() });
    }
    updateUser104(user) {
        return this.http.put(service104 + 'authz/user', JSON.stringify(user), { observe: 'response', headers: this.getAuthzHeaders() });
    }
    deleteUser104(id) {
        return this.http.delete(service104 + 'authz/user/' + id, { observe: 'response', headers: this.getAuthzHeaders() });
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\dev\repos\JakartaEE\JEE-UI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map