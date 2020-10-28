function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-review-add-review-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-review/add-review.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-review/add-review.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAddReviewAddReviewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Add Review' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <ion-label class=\"head_lbl\">{{'Rate your Experiance' | translate}}</ion-label>\n\n    <div class=\"flex_div\">\n      <div class=\"first_div\">\n        <div class=\"rate_div\" [class.rate1]=\"rate==1\" [class.rate2]=\"rate==2\" [class.rate3]=\"rate==3\"\n          [class.rate4]=\"rate==4\" [class.rate5]=\"rate==5\" (click)=\"onClick(1)\"><span>1</span>\n          <ion-icon name=\"star\"></ion-icon>\n        </div>\n        <div class=\"rate_div\" [class.rate2]=\"rate==2\" [class.rate3]=\"rate==3\" [class.rate4]=\"rate==4\"\n          [class.rate5]=\"rate==5\" (click)=\"onClick(2)\"><span>2</span>\n          <ion-icon name=\"star\"></ion-icon>\n        </div>\n        <div class=\"rate_div\" [class.rate3]=\"rate==3\" [class.rate4]=\"rate==4\" [class.rate5]=\"rate==5\"\n          (click)=\"onClick(3)\"><span>3</span>\n          <ion-icon name=\"star\"></ion-icon>\n        </div>\n        <div class=\"rate_div\" [class.rate4]=\"rate==4\" [class.rate5]=\"rate==5\" (click)=\"onClick(4)\"><span>4</span>\n          <ion-icon name=\"star\"></ion-icon>\n        </div>\n        <div class=\"rate_div\" [class.rate5]=\"rate==5\" (click)=\"onClick(5)\"><span>5</span>\n          <ion-icon name=\"star\"></ion-icon>\n        </div>\n      </div>\n      <div class=\"second_div\">\n        <ion-label *ngIf=\"rate==1\" class=\"rate1\">{{'Horrible' | translate}}</ion-label>\n        <ion-label *ngIf=\"rate==2\" class=\"rate2\">{{'Bad' | translate}}</ion-label>\n        <ion-label *ngIf=\"rate==3\" class=\"rate3\">{{'Average' | translate}}</ion-label>\n        <ion-label *ngIf=\"rate==4\" class=\"rate4\">{{'Good' | translate}}</ion-label>\n        <ion-label *ngIf=\"rate==5\" class=\"rate5\">{{'Excellent' | translate}}</ion-label>\n      </div>\n    </div>\n\n    <div class=\"line_div\"></div>\n\n    <div class=\"lower_div\" (click)=\"openCamera()\" *ngIf=\"image ==''\">\n      <ion-label class=\"head_lbl2\">{{'Add Photos' | translate}}</ion-label>\n\n      <div class=\"gray_div\">\n        <ion-icon class=\"camera\" name=\"camera\"></ion-icon>\n      </div>\n    </div>\n    <div class=\"lower_div\" (click)=\"openCamera()\" *ngIf=\"image !=''\">\n\n      <div class=\"gray_div\" class=\"back_image\" [style.backgroundImage]=\"'url('+image+')'\">\n      </div>\n    </div>\n    <div class=\"line_div\"></div>\n\n    <div class=\"lower_div\">\n      <ion-label class=\"head_lbl2\">{{'Anything else you want to add' | translate}} <span>0/100</span></ion-label>\n      <ion-textarea rows=\"4\" [(ngModel)]=\"descriptions\" placeholder=\"Write detailed review here..\"></ion-textarea>\n\n      <ion-label class=\"small_gray\">\n        {{'Be polite and friendly. This is a place for love and feedback, not hate. You can use @friends and #tags as well.' | translate}}\n      </ion-label>\n    </div>\n    <div class=\"line_div\"></div>\n\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-button (click)=\"addReview()\" expand=\"block\" class=\"sub_btn\">\n      {{'Submit Dinimg Review' | translate}}\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/add-review/add-review-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/add-review/add-review-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: AddReviewPageRoutingModule */

  /***/
  function srcAppPagesAddReviewAddReviewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddReviewPageRoutingModule", function () {
      return AddReviewPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _add_review_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-review.page */
    "./src/app/pages/add-review/add-review.page.ts");

    var routes = [{
      path: '',
      component: _add_review_page__WEBPACK_IMPORTED_MODULE_3__["AddReviewPage"]
    }];

    var AddReviewPageRoutingModule = function AddReviewPageRoutingModule() {
      _classCallCheck(this, AddReviewPageRoutingModule);
    };

    AddReviewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddReviewPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/add-review/add-review.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/add-review/add-review.module.ts ***!
    \*******************************************************/

  /*! exports provided: AddReviewPageModule */

  /***/
  function srcAppPagesAddReviewAddReviewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddReviewPageModule", function () {
      return AddReviewPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _add_review_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-review-routing.module */
    "./src/app/pages/add-review/add-review-routing.module.ts");
    /* harmony import */


    var _add_review_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-review.page */
    "./src/app/pages/add-review/add-review.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");

    var AddReviewPageModule = function AddReviewPageModule() {
      _classCallCheck(this, AddReviewPageModule);
    };

    AddReviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_review_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddReviewPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_add_review_page__WEBPACK_IMPORTED_MODULE_6__["AddReviewPage"]]
    })], AddReviewPageModule);
    /***/
  },

  /***/
  "./src/app/pages/add-review/add-review.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/add-review/add-review.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAddReviewAddReviewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n  padding-top: 20px;\n}\n.main_content_div .head_lbl {\n  font-weight: 600;\n  font-size: 18px;\n  padding-left: 20px;\n}\n.main_content_div .flex_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-top: 10px;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0px 20px;\n}\n.main_content_div .flex_div .first_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 70%;\n}\n.main_content_div .flex_div .first_div .rate_div {\n  border: 1px solid lightgray;\n  color: lightgray;\n  border-radius: 25px;\n  padding: 3px 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n.main_content_div .flex_div .first_div .rate_div ion-icon {\n  font-size: 15px;\n}\n.main_content_div .flex_div .first_div .rate_div span {\n  font-size: 18px;\n  font-weight: 600;\n}\n.main_content_div .flex_div .first_div .rate1 {\n  background: #ed5a74;\n  color: white;\n  border: 1px solid #ed5a74;\n}\n.main_content_div .flex_div .first_div .rate2 {\n  background: #f7c007;\n  color: white;\n  border: 1px solid #f7c007;\n}\n.main_content_div .flex_div .first_div .rate3 {\n  background: #7bdb7b;\n  color: white;\n  border: 1px solid #7bdb7b;\n}\n.main_content_div .flex_div .first_div .rate4 {\n  background: #13ad13;\n  color: white;\n  border: 1px solid #13ad13;\n}\n.main_content_div .flex_div .first_div .rate5 {\n  background: #085c08;\n  color: white;\n  border: 1px solid #085c08;\n}\n.main_content_div .flex_div .second_div .rate1 {\n  color: #ed5a74;\n}\n.main_content_div .flex_div .second_div .rate2 {\n  color: #f7c007;\n}\n.main_content_div .flex_div .second_div .rate3 {\n  color: #7bdb7b;\n}\n.main_content_div .flex_div .second_div .rate4 {\n  color: #13ad13;\n}\n.main_content_div .flex_div .second_div .rate5 {\n  color: #085c08;\n}\n.main_content_div .line_div {\n  width: 100%;\n  height: 3px;\n  background: lightgray;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.main_content_div .lower_div {\n  padding: 20px;\n}\n.main_content_div .lower_div .head_lbl2 {\n  font-weight: 600;\n  font-size: 18px;\n}\n.main_content_div .lower_div .gray_div {\n  margin-top: 10px;\n  height: 70px;\n  width: 70px;\n  border-radius: 5px;\n  border: 1px solid lightgray;\n  background: #f3f3f3;\n  position: relative;\n}\n.main_content_div .lower_div .gray_div .camera {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-size: 20px;\n}\n.main_content_div .lower_div ion-textarea {\n  border-bottom: 1px solid lightgray;\n}\n.main_content_div .lower_div .small_gray {\n  font-size: 12px;\n  color: gray;\n  margin-top: 10px;\n}\n.sub_btn {\n  --background: var(--ion-color-primary);\n  --border-radius: 5px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWx2YWxkZXovRG93bmxvYWRzL2lvbmljNUZvb2RBcHBGdWxsL0FwcF9jb2RlL1VzZXJBcHAvc3JjL2FwcC9wYWdlcy9hZGQtcmV2aWV3L2FkZC1yZXZpZXcucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZGQtcmV2aWV3L2FkZC1yZXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUVBLGlCQUFBO0FDQUo7QURDSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ1I7QURDSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDUjtBREFRO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLFVBQUE7QUNFWjtBREFZO0VBQ0ksMkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QUNFaEI7QUREZ0I7RUFDSSxlQUFBO0FDR3BCO0FEQWdCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDRXBCO0FER1k7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0RoQjtBREdZO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNEaEI7QURHWTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDRGhCO0FER1k7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0RoQjtBREdZO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNEaEI7QURNWTtFQUNJLGNBQUE7QUNKaEI7QURNWTtFQUNJLGNBQUE7QUNKaEI7QURNWTtFQUNJLGNBQUE7QUNKaEI7QURNWTtFQUNJLGNBQUE7QUNKaEI7QURNWTtFQUNJLGNBQUE7QUNKaEI7QURRSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDTlI7QURTSTtFQUNJLGFBQUE7QUNQUjtBRFNRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDUFo7QURVUTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1JaO0FEVVk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFQUNBLGVBQUE7QUNSaEI7QURZUTtFQUNJLGtDQUFBO0FDVlo7QURhUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNYWjtBRGVBO0VBQ0ksc0NBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDWkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZGQtcmV2aWV3L2FkZC1yZXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGggOiAxMDAlO1xuICAgIC8vIHBhZGRpbmc6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgLmhlYWRfbGJse1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICB9XG4gICAgLmZsZXhfZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICAgICAgLmZpcnN0X2RpdntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuXG4gICAgICAgICAgICAucmF0ZV9kaXZ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggMTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yYXRlMXtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWQ1YTc0O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWQ1YTc0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJhdGUye1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmN2MwMDc7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmN2MwMDc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmF0ZTN7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzdiZGI3YjtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzdiZGI3YjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yYXRlNHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTNhZDEzO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMTNhZDEzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJhdGU1e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwODVjMDg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwODVjMDg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc2Vjb25kX2RpdntcbiAgICAgICAgICAgIC5yYXRlMXtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2VkNWE3NDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yYXRlMntcbiAgICAgICAgICAgICAgICBjb2xvcjogI2Y3YzAwN1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJhdGUze1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjN2JkYjdiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJhdGU0e1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTNhZDEzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJhdGU1e1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDg1YzA4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5saW5lX2RpdntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgLmxvd2VyX2RpdntcbiAgICAgICAgcGFkZGluZzogMjBweDtcblxuICAgICAgICAuaGVhZF9sYmwye1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmF5X2RpdntcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgIC5jYW1lcmF7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi10ZXh0YXJlYXtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIH1cblxuICAgICAgICAuc21hbGxfZ3JheXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5zdWJfYnRue1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59IiwiLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaGVhZF9sYmwge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5maXJzdF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA3MCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmZpcnN0X2RpdiAucmF0ZV9kaXYge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHBhZGRpbmc6IDNweCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5maXJzdF9kaXYgLnJhdGVfZGl2IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5maXJzdF9kaXYgLnJhdGVfZGl2IHNwYW4ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmZpcnN0X2RpdiAucmF0ZTEge1xuICBiYWNrZ3JvdW5kOiAjZWQ1YTc0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZDVhNzQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmZpcnN0X2RpdiAucmF0ZTIge1xuICBiYWNrZ3JvdW5kOiAjZjdjMDA3O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmN2MwMDc7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmZpcnN0X2RpdiAucmF0ZTMge1xuICBiYWNrZ3JvdW5kOiAjN2JkYjdiO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3YmRiN2I7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmZpcnN0X2RpdiAucmF0ZTQge1xuICBiYWNrZ3JvdW5kOiAjMTNhZDEzO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxM2FkMTM7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmZpcnN0X2RpdiAucmF0ZTUge1xuICBiYWNrZ3JvdW5kOiAjMDg1YzA4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwODVjMDg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLnNlY29uZF9kaXYgLnJhdGUxIHtcbiAgY29sb3I6ICNlZDVhNzQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLnNlY29uZF9kaXYgLnJhdGUyIHtcbiAgY29sb3I6ICNmN2MwMDc7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLnNlY29uZF9kaXYgLnJhdGUzIHtcbiAgY29sb3I6ICM3YmRiN2I7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLnNlY29uZF9kaXYgLnJhdGU0IHtcbiAgY29sb3I6ICMxM2FkMTM7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLnNlY29uZF9kaXYgLnJhdGU1IHtcbiAgY29sb3I6ICMwODVjMDg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGluZV9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAuaGVhZF9sYmwyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAuZ3JheV9kaXYge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA3MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAuZ3JheV9kaXYgLmNhbWVyYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgaW9uLXRleHRhcmVhIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLnNtYWxsX2dyYXkge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc3ViX2J0biB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/add-review/add-review.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/add-review/add-review.page.ts ***!
    \*****************************************************/

  /*! exports provided: AddReviewPage */

  /***/
  function srcAppPagesAddReviewAddReviewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddReviewPage", function () {
      return AddReviewPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");

    var AddReviewPage =
    /*#__PURE__*/
    function () {
      function AddReviewPage(route, api, actionSheetController, camera, util, navCtrl) {
        _classCallCheck(this, AddReviewPage);

        this.route = route;
        this.api = api;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.util = util;
        this.navCtrl = navCtrl;
        this.rate = 1;
        this.coverImage = '';
        this.image = '';
        this.descriptions = '';
      }

      _createClass(AddReviewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.queryParams.subscribe(function (data) {
            console.log('data=>', data);

            if (data.hasOwnProperty('id')) {
              _this.id = data.id;

              _this.getDetails();
            }
          });
        }
      }, {
        key: "getDetails",
        value: function getDetails() {
          var _this2 = this;

          this.api.getVenueDetails(this.id).then(function (data) {
            console.log(data);

            if (data) {
              _this2.ratting = data.ratting;
              _this2.totalRatting = data.totalRatting;
            }
          }, function (error) {
            console.log('errir', error);
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "onClick",
        value: function onClick(val) {
          this.rate = val;
        }
      }, {
        key: "onChange",
        value: function onChange(val) {
          console.log(val);
        }
      }, {
        key: "addReview",
        value: function addReview() {
          var _this3 = this;

          var myRate = this.ratting * this.rate;
          var totalRatting = Math.round(this.totalRatting * 5 / myRate);
          console.log('total', totalRatting);

          if (!totalRatting) {
            totalRatting = this.rate;
          }

          console.log(totalRatting);
          var review = {
            id: localStorage.getItem('uid'),
            descriptions: this.descriptions,
            rate: this.rate,
            cover: this.coverImage,
            restId: this.id,
            vid: this.id,
            uid: localStorage.getItem('uid')
          };
          this.util.show();
          console.log('review', review);
          this.api.addReview(review).then(function (data) {
            var restParam = {
              ratting: _this3.ratting + 1,
              totalRatting: totalRatting,
              uid: _this3.id
            };
            console.log('restParam', restParam);

            _this3.api.updateVenue(restParam).then(function (newUpdate) {
              console.log(newUpdate);

              _this3.util.hide();

              _this3.util.showToast(_this3.util.translate('Review added succesfully'), 'success', 'bottom');

              _this3.util.publishReview('hello');

              _this3.navCtrl.navigateRoot(['/tabs/tab4']);
            }, function (error) {
              console.log('err', error);

              _this3.util.hide();
            }).catch(function (error) {
              _this3.util.hide();

              console.log(error);
            });
          }, function (error) {
            console.log('err', error);

            _this3.util.hide();
          }).catch(function (error) {
            _this3.util.hide();

            console.log(error);
          });
        }
      }, {
        key: "openCamera",
        value: function openCamera() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.actionSheetController.create({
                      header: this.util.translate('Choose from'),
                      buttons: [{
                        text: this.util.translate('Gallery'),
                        icon: 'images',
                        handler: function handler() {
                          console.log('Images clicked');

                          _this4.opemCamera('gallery');
                        }
                      }, {
                        text: this.util.translate('Camera'),
                        icon: 'camera',
                        handler: function handler() {
                          console.log('camera clicked');

                          _this4.opemCamera('camera');
                        }
                      }, {
                        text: this.util.translate('Cancel'),
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context.sent;
                    _context.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "opemCamera",
        value: function opemCamera(type) {
          var _this5 = this;

          var options = {
            quality: 100,
            targetHeight: 700,
            targetWidth: 700,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: type === 'camera' ? 1 : 0
          };
          console.log('open');
          this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this5.image = base64Image;

            _this5.util.show();

            var id = localStorage.getItem('uid') + '/' + _this5.util.makeid(10);

            firebase__WEBPACK_IMPORTED_MODULE_6__["storage"]().ref().child(localStorage.getItem('uid')).child(btoa(id) + '.jpg').putString(base64Image, 'data_url').then(function (snapshot) {
              _this5.util.hide();

              snapshot.ref.getDownloadURL().then(function (url) {
                console.log('url uploaded', url);
                _this5.coverImage = url;
              });
            }, function (error) {
              _this5.util.hide();

              console.log(error);
            }).catch(function (error) {
              console.log(error);

              _this5.util.hide();
            });
          }, function (err) {
            _this5.util.hide();
          });
        }
      }]);

      return AddReviewPage;
    }();

    AddReviewPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };

    AddReviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-review',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-review.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-review/add-review.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-review.page.scss */
      "./src/app/pages/add-review/add-review.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])], AddReviewPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-add-review-add-review-module-es5.js.map