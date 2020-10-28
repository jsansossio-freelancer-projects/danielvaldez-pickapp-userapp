(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-coupons-coupons-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/coupons/coupons.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/coupons/coupons.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Coupons' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"noData\" *ngIf=\"!dummy?.length && !list?.length\" [style.backgroundImage]=\"'url(assets/nothing.jpg)'\">\n  </div>\n  <div *ngFor=\"let item of dummy\">\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-thumbnail slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-thumbnail>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n  <ion-row *ngFor=\"let item of list\" class=\"coupons\" (click)=\"claim(item)\">\n    <ion-col size=\"12\" class=\"info\">\n      <p class=\"title\">{{item.desc}} <br>\n        <span class=\"code\">{{'CODE'  | translate }} : {{item.code}} </span><br>\n        <span class=\"expire\">{{expire(item.exire)}}</span><br>\n        <span class=\"desc\">{{'Get' | translate}} {{item.discout}} {{item.type}} {{'to' | translate}} {{item.upto}}\n          {{item.type}} {{'discount on minimum order' | translate}}\n          {{'of' | translate}}\n          {{item.min}} {{getCurrency()}}\n        </span></p>\n    </ion-col>\n    <ion-badge color=\"primary\" class=\"ion-padding\" mode=\"ios\">{{'CLAIM' | translate}}</ion-badge>\n  </ion-row>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/coupons/coupons-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/coupons/coupons-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CouponsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponsPageRoutingModule", function() { return CouponsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _coupons_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coupons.page */ "./src/app/pages/coupons/coupons.page.ts");




const routes = [
    {
        path: '',
        component: _coupons_page__WEBPACK_IMPORTED_MODULE_3__["CouponsPage"]
    }
];
let CouponsPageRoutingModule = class CouponsPageRoutingModule {
};
CouponsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CouponsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/coupons/coupons.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/coupons/coupons.module.ts ***!
  \*************************************************/
/*! exports provided: CouponsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponsPageModule", function() { return CouponsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _coupons_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coupons-routing.module */ "./src/app/pages/coupons/coupons-routing.module.ts");
/* harmony import */ var _coupons_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coupons.page */ "./src/app/pages/coupons/coupons.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");








let CouponsPageModule = class CouponsPageModule {
};
CouponsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _coupons_routing_module__WEBPACK_IMPORTED_MODULE_5__["CouponsPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_coupons_page__WEBPACK_IMPORTED_MODULE_6__["CouponsPage"]]
    })
], CouponsPageModule);



/***/ }),

/***/ "./src/app/pages/coupons/coupons.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/coupons/coupons.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".noData {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 100%;\n  height: 250px;\n}\n\n.coupons {\n  border-bottom: 1px solid lightgray;\n}\n\n.coupons .info .title {\n  margin: 0px;\n  font-weight: bold;\n}\n\n.coupons .info .title .code {\n  font-weight: normal;\n  color: var(--ion-color-primary);\n}\n\n.coupons .info .title .expire {\n  font-size: 0.8rem;\n  color: gray;\n}\n\n.coupons .info .title .desc {\n  font-size: 0.8rem;\n  color: gray;\n}\n\n.coupons .btns {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWx2YWxkZXovRG93bmxvYWRzL2lvbmljNUZvb2RBcHBGdWxsL0FwcF9jb2RlL1VzZXJBcHAvc3JjL2FwcC9wYWdlcy9jb3Vwb25zL2NvdXBvbnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb3Vwb25zL2NvdXBvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENBO0VBQ0ksa0NBQUE7QUNFSjs7QURBUTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQ0VaOztBRERZO0VBQ0ksbUJBQUE7RUFDQSwrQkFBQTtBQ0doQjs7QUREWTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQ0doQjs7QUREWTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQ0doQjs7QURDSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb3Vwb25zL2NvdXBvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vRGF0YXtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xufVxuLmNvdXBvbnN7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAuaW5mb3tcbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIC5jb2Rle1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5leHBpcmV7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kZXNje1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJ0bnN7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbn0iLCIubm9EYXRhIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuXG4uY291cG9ucyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4uY291cG9ucyAuaW5mbyAudGl0bGUge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY291cG9ucyAuaW5mbyAudGl0bGUgLmNvZGUge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLmNvdXBvbnMgLmluZm8gLnRpdGxlIC5leHBpcmUge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IGdyYXk7XG59XG4uY291cG9ucyAuaW5mbyAudGl0bGUgLmRlc2Mge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IGdyYXk7XG59XG4uY291cG9ucyAuYnRucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/coupons/coupons.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/coupons/coupons.page.ts ***!
  \***********************************************/
/*! exports provided: CouponsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponsPage", function() { return CouponsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");







let CouponsPage = class CouponsPage {
    constructor(api, route, util, navCtrl) {
        this.api = api;
        this.route = route;
        this.util = util;
        this.navCtrl = navCtrl;
        this.list = [];
        this.dummy = Array(10);
        this.getOffers();
    }
    ngOnInit() {
        this.route.queryParams.subscribe(data => {
            console.log(data);
            if (data && data.restId) {
                this.restId = data.restId;
                this.name = data.name;
                this.total = parseFloat(data.totalPrice);
                console.log(this.restId);
            }
            else {
                this.dummy = [];
            }
        });
    }
    getOffers() {
        this.api.getOffers().then(data => {
            this.dummy = [];
            console.log('list=====>', data);
            this.list = [];
            if (data && data.length) {
                const currnetDate = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD');
                data.forEach(element => {
                    console.log(moment__WEBPACK_IMPORTED_MODULE_3__(element.expire).isAfter(currnetDate));
                    if (element && element.status === 'active' && moment__WEBPACK_IMPORTED_MODULE_3__(element.expire).isAfter(currnetDate)) {
                        console.log('yes=>', element);
                        this.list.push(element);
                    }
                });
                // this.list = data;
            }
        }).catch(error => {
            this.dummy = [];
            console.log(error);
        });
    }
    claim(item) {
        console.log(item);
        if (item && item.available && item.available.length) {
            const data = item.available.filter(x => x.id === this.restId);
            console.log(data);
            if (data && data.length) {
                if (this.total >= item.min) {
                    console.log('ok');
                    this.util.showToast(this.util.translate('Coupon Applied'), 'success', 'bottom');
                    this.util.publishCoupon(item);
                    this.navCtrl.back();
                }
                else {
                    this.util.errorToast(this.util.translate('For claiming this coupon your order required minimum order  of $') + item.min);
                }
            }
            else {
                this.util.errorToast(this.util.translate('This coupon is not valid for ') + this.name);
            }
        }
        else {
            this.util.errorToast(this.util.translate('This coupon is not valid for ') + this.name);
        }
    }
    expire(date) {
        return moment__WEBPACK_IMPORTED_MODULE_3__(date).format('llll');
    }
    getCurrency() {
        return this.util.getCurrecySymbol();
    }
};
CouponsPage.ctorParameters = () => [
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
CouponsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coupons',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./coupons.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/coupons/coupons.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./coupons.page.scss */ "./src/app/pages/coupons/coupons.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])
], CouponsPage);



/***/ })

}]);
//# sourceMappingURL=pages-coupons-coupons-module-es2015.js.map