/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/chooseTour.js":
/*!******************************!*\
  !*** ./src/js/chooseTour.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ \"./src/js/modules.js\");\n// импортируем функции\n\n\n// самовызывающаяся функция добавляет/удаляет стиль для вкладки и ссылки\n(function toggleStyleTabsAndLinks() {\n  // получим статическую коллекцию NodeList элементов вкладок\n  var nodeListOfTabs = document.querySelectorAll('.tabs__link');\n\n  // удалить стиль из всех элементов\n  function removeStyleFromAllItems(nodeListName, className) {\n    nodeListName.forEach(function (item) {\n      (0,_modules__WEBPACK_IMPORTED_MODULE_0__.removeStyleAnItem)(item, className);\n    });\n  }\n\n  // добавим/удалим стиль вкладки\n  nodeListOfTabs.forEach(function (item) {\n    item.addEventListener('click', function () {\n      removeStyleFromAllItems(nodeListOfTabs, 'tabs__link_active');\n      (0,_modules__WEBPACK_IMPORTED_MODULE_0__.addStyleAnItem)(item, 'tabs__link_active');\n    });\n  });\n})();\n\n//# sourceURL=webpack://layout_yourtour_test/./src/js/chooseTour.js?");

/***/ }),

/***/ "./src/js/collectTour.js":
/*!*******************************!*\
  !*** ./src/js/collectTour.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ \"./src/js/modules.js\");\n// импортируем функции\n\n// получим элемент формы\nvar formElement = document.querySelector('.form-fill');\n// получим элемент select\nvar dropdownSelectItem = formElement.querySelector('.input-fields__dropdown-select-item');\n// получим элемент кнопки (Сбросить)\nvar btnReset = formElement.querySelector('.buttons-group__reset');\n\n// получаем данные формы из полей ввода\nfunction getFormData(event) {\n  // отменяет действие по умолчанию для события.\n  event.preventDefault();\n  /* Для получения данных из формы, воспользуемся объектом FormData.\r\n    Этот объект содержит метод get(), с помощью которого извлекаем данные по имени */\n  var formData = new FormData(formElement);\n  // теперь можно извлечь данные\n  var enteredName = formData.get('name');\n  var enteredDirection = formData.get('direction');\n  var enteredEmail = formData.get('email');\n  var enteredPhone = formData.get('phone');\n  var enteredDateFrom = formData.get('dateFrom');\n  var enteredDateTo = formData.get('dateTo');\n  var enteredComment = formData.get('comment');\n  var enteredClientAge = formData.get('clientAge');\n\n  // соберем введенные пользовательские данные из формы в объект\n  var userDataEntered = {\n    name: enteredName,\n    direction: enteredDirection,\n    email: enteredEmail,\n    phone: enteredPhone,\n    dateFrom: enteredDateFrom,\n    dateTo: enteredDateTo,\n    comment: enteredComment,\n    clientAge: enteredClientAge\n  };\n\n  // преобразуем значение объект с данными в строку JSON\n  var userDataEnteredJson = JSON.stringify(userDataEntered);\n  // Выведем полученные данные\n  console.log('userDataEnteredJson', userDataEnteredJson);\n}\n\n// очистить поля формы\nfunction clearFormFields(event) {\n  event.preventDefault();\n  // очищаем поля формы\n  formElement.reset();\n  // удаляем стиль элементу\n  (0,_modules__WEBPACK_IMPORTED_MODULE_0__.removeStyleAnItem)(dropdownSelectItem, 'input-fields__dropdown-select-item_active');\n}\n\n// Для применения стиля выбранному элементу из списка, навешивается обработчик\ndropdownSelectItem.addEventListener('change', function () {\n  (0,_modules__WEBPACK_IMPORTED_MODULE_0__.addStyleAnItem)(dropdownSelectItem, 'input-fields__dropdown-select-item_active');\n});\n\n// Для проверки получения данных, навешивается обработчик\nformElement.addEventListener('submit', getFormData);\n\n// Для очистки полей формы навешиваем обработчик\nbtnReset.addEventListener('click', clearFormFields);\n\n//# sourceURL=webpack://layout_yourtour_test/./src/js/collectTour.js?");

/***/ }),

/***/ "./src/js/heading.js":
/*!***************************!*\
  !*** ./src/js/heading.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ \"./src/js/modules.js\");\n// импортируем функции\n\n\n// самовызывающаяся функция добавляет/удаляет стиль навигационной панели\n(function toggleNavigationBarStyle() {\n  // элементы раздела heading(раздел-заголовок)\n  var heading = document.querySelector('.heading');\n  var logoYourTour = heading.querySelector('.navbar__logo-YourTour');\n  var logoTelephoneNumber = heading.querySelector('.navbar__telephoneNumber-item');\n  // получим статическую коллекцию NodeList элементов ссылок навигационной панели\n  var nodeListOfNavbarLinkItems = heading.querySelectorAll('.navbar__menu-link');\n\n  // добавить стиль навигационной панели\n  function addNavbarStyle() {\n    (0,_modules__WEBPACK_IMPORTED_MODULE_0__.addStyleAnItem)(heading, 'scrolled-fix-bgn');\n    (0,_modules__WEBPACK_IMPORTED_MODULE_0__.addStyleAnItem)(logoYourTour, 'scrolled-color');\n    (0,_modules__WEBPACK_IMPORTED_MODULE_0__.addStyleAnItem)(logoTelephoneNumber, 'scrolled-color');\n    nodeListOfNavbarLinkItems.forEach(function (item) {\n      (0,_modules__WEBPACK_IMPORTED_MODULE_0__.addStyleAnItem)(item, 'scrolled-color');\n      (0,_modules__WEBPACK_IMPORTED_MODULE_0__.addStyleAnItem)(item, 'scrolled-hover');\n    });\n  }\n\n  // удалить стиль навигационной панели\n  function removeNavbarStyle() {\n    (0,_modules__WEBPACK_IMPORTED_MODULE_0__.removeStyleAnItem)(heading, 'scrolled-fix-bgn');\n    (0,_modules__WEBPACK_IMPORTED_MODULE_0__.removeStyleAnItem)(logoYourTour, 'scrolled-color');\n    (0,_modules__WEBPACK_IMPORTED_MODULE_0__.removeStyleAnItem)(logoTelephoneNumber, 'scrolled-color');\n    nodeListOfNavbarLinkItems.forEach(function (item) {\n      (0,_modules__WEBPACK_IMPORTED_MODULE_0__.removeStyleAnItem)(item, 'scrolled-color');\n      (0,_modules__WEBPACK_IMPORTED_MODULE_0__.removeStyleAnItem)(item, 'scrolled-hover');\n    });\n  }\n  window.addEventListener('scroll', function () {\n    // Использование локальной переменной thisScrollY вместо глобальной переменной scrollY\n    var thisScrollY = window.scrollY;\n    // если вертикальный scroll больше 450px\n    if (thisScrollY > 450) {\n      addNavbarStyle();\n    } else {\n      removeNavbarStyle();\n    }\n  });\n})();\n\n// самовызывающаяся функция для плавного скролла до якорного элемента\n(function smoothScrollingToTheAnchorItem() {\n  var linkItem = document.querySelectorAll('.navbar__menu-link');\n  linkItem.forEach(function (item) {\n    item.addEventListener('click', function handleClick(e) {\n      e.preventDefault();\n      var target = document.querySelector(this.getAttribute('href'));\n      window.scrollTo({\n        behavior: 'smooth',\n        top: target.offsetTop\n      });\n    });\n  });\n})();\n\n//# sourceURL=webpack://layout_yourtour_test/./src/js/heading.js?");

/***/ }),

/***/ "./src/js/images.js":
/*!**************************!*\
  !*** ./src/js/images.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_images_fav_icons_YT_apple_touch_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/fav_icons_YT/apple-touch-icon.png */ \"./src/assets/images/fav_icons_YT/apple-touch-icon.png\");\n/* harmony import */ var _assets_images_fav_icons_YT_favicon_32x32_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/fav_icons_YT/favicon-32x32.png */ \"./src/assets/images/fav_icons_YT/favicon-32x32.png\");\n/* harmony import */ var _assets_images_fav_icons_YT_favicon_16x16_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/fav_icons_YT/favicon-16x16.png */ \"./src/assets/images/fav_icons_YT/favicon-16x16.png\");\n/* harmony import */ var _assets_images_fav_icons_YT_safari_pinned_tab_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/fav_icons_YT/safari-pinned-tab.svg */ \"./src/assets/images/fav_icons_YT/safari-pinned-tab.svg\");\n/* harmony import */ var _assets_images_fav_icons_YT_android_chrome_192x192_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/fav_icons_YT/android-chrome-192x192.png */ \"./src/assets/images/fav_icons_YT/android-chrome-192x192.png\");\n/* harmony import */ var _assets_images_fav_icons_YT_android_chrome_256x256_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/fav_icons_YT/android-chrome-256x256.png */ \"./src/assets/images/fav_icons_YT/android-chrome-256x256.png\");\n/* harmony import */ var _assets_images_fav_icons_YT_mstile_128x128_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/fav_icons_YT/mstile-128x128.png */ \"./src/assets/images/fav_icons_YT/mstile-128x128.png\");\n/* harmony import */ var _assets_images_fav_icons_YT_mstile_150x150_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/fav_icons_YT/mstile-150x150.png */ \"./src/assets/images/fav_icons_YT/mstile-150x150.png\");\n/* harmony import */ var _assets_images_fav_icons_YT_mstile_270x270_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/images/fav_icons_YT/mstile-270x270.png */ \"./src/assets/images/fav_icons_YT/mstile-270x270.png\");\n/* harmony import */ var _assets_images_fav_icons_YT_mstile_558x270_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/images/fav_icons_YT/mstile-558x270.png */ \"./src/assets/images/fav_icons_YT/mstile-558x270.png\");\n/* harmony import */ var _assets_images_fav_icons_YT_mstile_558x558_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/images/fav_icons_YT/mstile-558x558.png */ \"./src/assets/images/fav_icons_YT/mstile-558x558.png\");\n/* harmony import */ var _assets_images_greeting_greetingBackgroundImg_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/images/greeting/greetingBackgroundImg.png */ \"./src/assets/images/greeting/greetingBackgroundImg.png\");\n/* harmony import */ var _assets_images_chooseTour_card_tour_photo_1_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/images/chooseTour/card_tour_photo_1.png */ \"./src/assets/images/chooseTour/card_tour_photo_1.png\");\n/* harmony import */ var _assets_images_chooseTour_card_tour_photo_2_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/images/chooseTour/card_tour_photo_2.png */ \"./src/assets/images/chooseTour/card_tour_photo_2.png\");\n/* harmony import */ var _assets_images_chooseTour_card_tour_photo_3_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/images/chooseTour/card_tour_photo_3.png */ \"./src/assets/images/chooseTour/card_tour_photo_3.png\");\n/* harmony import */ var _assets_images_chooseTour_card_tour_photo_4_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/images/chooseTour/card_tour_photo_4.png */ \"./src/assets/images/chooseTour/card_tour_photo_4.png\");\n/* harmony import */ var _assets_images_chooseTour_card_tour_photo_5_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/images/chooseTour/card_tour_photo_5.png */ \"./src/assets/images/chooseTour/card_tour_photo_5.png\");\n/* harmony import */ var _assets_images_chooseTour_card_tour_photo_6_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/images/chooseTour/card_tour_photo_6.png */ \"./src/assets/images/chooseTour/card_tour_photo_6.png\");\n/* harmony import */ var _assets_images_VectorRight_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/images/VectorRight.svg */ \"./src/assets/images/VectorRight.svg\");\n/* harmony import */ var _assets_images_VectorDown_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/images/VectorDown.svg */ \"./src/assets/images/VectorDown.svg\");\n/* harmony import */ var _assets_images_reviewPhoto1_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/images/reviewPhoto1.png */ \"./src/assets/images/reviewPhoto1.png\");\n/* harmony import */ var _assets_images_reviewPhoto2_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/images/reviewPhoto2.png */ \"./src/assets/images/reviewPhoto2.png\");\n/* harmony import */ var _assets_images_travelPhotos_travelPhoto1_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../assets/images/travelPhotos/travelPhoto1.png */ \"./src/assets/images/travelPhotos/travelPhoto1.png\");\n/* harmony import */ var _assets_images_travelPhotos_travelPhoto2_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../assets/images/travelPhotos/travelPhoto2.png */ \"./src/assets/images/travelPhotos/travelPhoto2.png\");\n/* harmony import */ var _assets_images_travelPhotos_travelPhoto3_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../assets/images/travelPhotos/travelPhoto3.png */ \"./src/assets/images/travelPhotos/travelPhoto3.png\");\n/* harmony import */ var _assets_images_travelPhotos_travelPhoto4_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../assets/images/travelPhotos/travelPhoto4.png */ \"./src/assets/images/travelPhotos/travelPhoto4.png\");\n/* harmony import */ var _assets_images_travelPhotos_travelPhoto5_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../assets/images/travelPhotos/travelPhoto5.png */ \"./src/assets/images/travelPhotos/travelPhoto5.png\");\n/* harmony import */ var _assets_images_travelPhotos_travelPhoto6_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../assets/images/travelPhotos/travelPhoto6.png */ \"./src/assets/images/travelPhotos/travelPhoto6.png\");\n/* harmony import */ var _assets_images_travelPhotos_travelPhoto7_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../assets/images/travelPhotos/travelPhoto7.png */ \"./src/assets/images/travelPhotos/travelPhoto7.png\");\n/* harmony import */ var _assets_images_travelPhotos_travelPhoto8_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../assets/images/travelPhotos/travelPhoto8.png */ \"./src/assets/images/travelPhotos/travelPhoto8.png\");\n/* harmony import */ var _assets_images_travelPhotos_travelPhoto9_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../assets/images/travelPhotos/travelPhoto9.png */ \"./src/assets/images/travelPhotos/travelPhoto9.png\");\n/* harmony import */ var _assets_images_travelPhotos_travelPhoto10_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../assets/images/travelPhotos/travelPhoto10.png */ \"./src/assets/images/travelPhotos/travelPhoto10.png\");\n/* harmony import */ var _assets_images_travelPhotos_travelPhoto11_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../assets/images/travelPhotos/travelPhoto11.png */ \"./src/assets/images/travelPhotos/travelPhoto11.png\");\n/* harmony import */ var _assets_images_travelPhotos_travelPhoto12_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../assets/images/travelPhotos/travelPhoto12.png */ \"./src/assets/images/travelPhotos/travelPhoto12.png\");\n/* harmony import */ var _assets_images_travelPhotos_travelPhoto13_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../assets/images/travelPhotos/travelPhoto13.png */ \"./src/assets/images/travelPhotos/travelPhoto13.png\");\n/* harmony import */ var _assets_images_stories_storyPhoto1_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../assets/images/stories/storyPhoto1.png */ \"./src/assets/images/stories/storyPhoto1.png\");\n/* harmony import */ var _assets_images_stories_storyPhoto2_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../assets/images/stories/storyPhoto2.png */ \"./src/assets/images/stories/storyPhoto2.png\");\n/* harmony import */ var _assets_images_stories_storyPhoto3_png__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../assets/images/stories/storyPhoto3.png */ \"./src/assets/images/stories/storyPhoto3.png\");\n/* harmony import */ var _assets_images_footersPhoto_png__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../assets/images/footersPhoto.png */ \"./src/assets/images/footersPhoto.png\");\n// импортируем значки веб-сайта (fav_icons_YT)\n\n\n\n\n\n\n\n\n\n\n\n// импортируем изображение для раздела (\"greeting\")\n\n// импортируем изображение для раздела (\"choose-tour\")\n\n\n\n\n\n\n\n// импортируем изображение для раздела (\"collect-tour\")\n\n// импортируем изображение для раздела (\"reviews\")\n\n\n// импортируем изображение для раздела (\"travel-photos\")\n\n\n\n\n\n\n\n\n\n\n\n\n\n// импортируем изображение для раздела (\"stories\")\n\n\n\n// импортируем изображение для раздела (\"footers\")\n\n\n//# sourceURL=webpack://layout_yourtour_test/./src/js/images.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ \"./src/js/images.js\");\n/* harmony import */ var _heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heading */ \"./src/js/heading.js\");\n/* harmony import */ var _chooseTour__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chooseTour */ \"./src/js/chooseTour.js\");\n/* harmony import */ var _collectTour__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collectTour */ \"./src/js/collectTour.js\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules */ \"./src/js/modules.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://layout_yourtour_test/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules.js":
/*!***************************!*\
  !*** ./src/js/modules.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addStyleAnItem: () => (/* binding */ addStyleAnItem),\n/* harmony export */   removeStyleAnItem: () => (/* binding */ removeStyleAnItem)\n/* harmony export */ });\n// удалить стиль элемента\nfunction removeStyleAnItem(item, className) {\n  item.classList.remove(className);\n}\n// добавить стиль элементу\nfunction addStyleAnItem(item, className) {\n  item.classList.add(className);\n}\n\n//# sourceURL=webpack://layout_yourtour_test/./src/js/modules.js?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://layout_yourtour_test/./src/css/index.css?");

/***/ }),

/***/ "./src/assets/images/VectorDown.svg":
/*!******************************************!*\
  !*** ./src/assets/images/VectorDown.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/VectorDown.svg\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/VectorDown.svg?");

/***/ }),

/***/ "./src/assets/images/VectorRight.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/VectorRight.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/VectorRight.svg\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/VectorRight.svg?");

/***/ }),

/***/ "./src/assets/images/chooseTour/card_tour_photo_1.png":
/*!************************************************************!*\
  !*** ./src/assets/images/chooseTour/card_tour_photo_1.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/card_tour_photo_1.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/chooseTour/card_tour_photo_1.png?");

/***/ }),

/***/ "./src/assets/images/chooseTour/card_tour_photo_2.png":
/*!************************************************************!*\
  !*** ./src/assets/images/chooseTour/card_tour_photo_2.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/card_tour_photo_2.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/chooseTour/card_tour_photo_2.png?");

/***/ }),

/***/ "./src/assets/images/chooseTour/card_tour_photo_3.png":
/*!************************************************************!*\
  !*** ./src/assets/images/chooseTour/card_tour_photo_3.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/card_tour_photo_3.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/chooseTour/card_tour_photo_3.png?");

/***/ }),

/***/ "./src/assets/images/chooseTour/card_tour_photo_4.png":
/*!************************************************************!*\
  !*** ./src/assets/images/chooseTour/card_tour_photo_4.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/card_tour_photo_4.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/chooseTour/card_tour_photo_4.png?");

/***/ }),

/***/ "./src/assets/images/chooseTour/card_tour_photo_5.png":
/*!************************************************************!*\
  !*** ./src/assets/images/chooseTour/card_tour_photo_5.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/card_tour_photo_5.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/chooseTour/card_tour_photo_5.png?");

/***/ }),

/***/ "./src/assets/images/chooseTour/card_tour_photo_6.png":
/*!************************************************************!*\
  !*** ./src/assets/images/chooseTour/card_tour_photo_6.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/card_tour_photo_6.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/chooseTour/card_tour_photo_6.png?");

/***/ }),

/***/ "./src/assets/images/fav_icons_YT/android-chrome-192x192.png":
/*!*******************************************************************!*\
  !*** ./src/assets/images/fav_icons_YT/android-chrome-192x192.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/android-chrome-192x192.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/fav_icons_YT/android-chrome-192x192.png?");

/***/ }),

/***/ "./src/assets/images/fav_icons_YT/android-chrome-256x256.png":
/*!*******************************************************************!*\
  !*** ./src/assets/images/fav_icons_YT/android-chrome-256x256.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/android-chrome-256x256.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/fav_icons_YT/android-chrome-256x256.png?");

/***/ }),

/***/ "./src/assets/images/fav_icons_YT/apple-touch-icon.png":
/*!*************************************************************!*\
  !*** ./src/assets/images/fav_icons_YT/apple-touch-icon.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/apple-touch-icon.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/fav_icons_YT/apple-touch-icon.png?");

/***/ }),

/***/ "./src/assets/images/fav_icons_YT/favicon-16x16.png":
/*!**********************************************************!*\
  !*** ./src/assets/images/fav_icons_YT/favicon-16x16.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/favicon-16x16.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/fav_icons_YT/favicon-16x16.png?");

/***/ }),

/***/ "./src/assets/images/fav_icons_YT/favicon-32x32.png":
/*!**********************************************************!*\
  !*** ./src/assets/images/fav_icons_YT/favicon-32x32.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/favicon-32x32.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/fav_icons_YT/favicon-32x32.png?");

/***/ }),

/***/ "./src/assets/images/fav_icons_YT/mstile-128x128.png":
/*!***********************************************************!*\
  !*** ./src/assets/images/fav_icons_YT/mstile-128x128.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/mstile-128x128.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/fav_icons_YT/mstile-128x128.png?");

/***/ }),

/***/ "./src/assets/images/fav_icons_YT/mstile-150x150.png":
/*!***********************************************************!*\
  !*** ./src/assets/images/fav_icons_YT/mstile-150x150.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/mstile-150x150.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/fav_icons_YT/mstile-150x150.png?");

/***/ }),

/***/ "./src/assets/images/fav_icons_YT/mstile-270x270.png":
/*!***********************************************************!*\
  !*** ./src/assets/images/fav_icons_YT/mstile-270x270.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/mstile-270x270.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/fav_icons_YT/mstile-270x270.png?");

/***/ }),

/***/ "./src/assets/images/fav_icons_YT/mstile-558x270.png":
/*!***********************************************************!*\
  !*** ./src/assets/images/fav_icons_YT/mstile-558x270.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/mstile-558x270.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/fav_icons_YT/mstile-558x270.png?");

/***/ }),

/***/ "./src/assets/images/fav_icons_YT/mstile-558x558.png":
/*!***********************************************************!*\
  !*** ./src/assets/images/fav_icons_YT/mstile-558x558.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/mstile-558x558.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/fav_icons_YT/mstile-558x558.png?");

/***/ }),

/***/ "./src/assets/images/fav_icons_YT/safari-pinned-tab.svg":
/*!**************************************************************!*\
  !*** ./src/assets/images/fav_icons_YT/safari-pinned-tab.svg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/safari-pinned-tab.svg\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/fav_icons_YT/safari-pinned-tab.svg?");

/***/ }),

/***/ "./src/assets/images/footersPhoto.png":
/*!********************************************!*\
  !*** ./src/assets/images/footersPhoto.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/footersPhoto.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/footersPhoto.png?");

/***/ }),

/***/ "./src/assets/images/greeting/greetingBackgroundImg.png":
/*!**************************************************************!*\
  !*** ./src/assets/images/greeting/greetingBackgroundImg.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/greetingBackgroundImg.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/greeting/greetingBackgroundImg.png?");

/***/ }),

/***/ "./src/assets/images/reviewPhoto1.png":
/*!********************************************!*\
  !*** ./src/assets/images/reviewPhoto1.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/reviewPhoto1.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/reviewPhoto1.png?");

/***/ }),

/***/ "./src/assets/images/reviewPhoto2.png":
/*!********************************************!*\
  !*** ./src/assets/images/reviewPhoto2.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/reviewPhoto2.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/reviewPhoto2.png?");

/***/ }),

/***/ "./src/assets/images/stories/storyPhoto1.png":
/*!***************************************************!*\
  !*** ./src/assets/images/stories/storyPhoto1.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/storyPhoto1.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/stories/storyPhoto1.png?");

/***/ }),

/***/ "./src/assets/images/stories/storyPhoto2.png":
/*!***************************************************!*\
  !*** ./src/assets/images/stories/storyPhoto2.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/storyPhoto2.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/stories/storyPhoto2.png?");

/***/ }),

/***/ "./src/assets/images/stories/storyPhoto3.png":
/*!***************************************************!*\
  !*** ./src/assets/images/stories/storyPhoto3.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/storyPhoto3.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/stories/storyPhoto3.png?");

/***/ }),

/***/ "./src/assets/images/travelPhotos/travelPhoto1.png":
/*!*********************************************************!*\
  !*** ./src/assets/images/travelPhotos/travelPhoto1.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/travelPhoto1.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/travelPhotos/travelPhoto1.png?");

/***/ }),

/***/ "./src/assets/images/travelPhotos/travelPhoto10.png":
/*!**********************************************************!*\
  !*** ./src/assets/images/travelPhotos/travelPhoto10.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/travelPhoto10.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/travelPhotos/travelPhoto10.png?");

/***/ }),

/***/ "./src/assets/images/travelPhotos/travelPhoto11.png":
/*!**********************************************************!*\
  !*** ./src/assets/images/travelPhotos/travelPhoto11.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/travelPhoto11.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/travelPhotos/travelPhoto11.png?");

/***/ }),

/***/ "./src/assets/images/travelPhotos/travelPhoto12.png":
/*!**********************************************************!*\
  !*** ./src/assets/images/travelPhotos/travelPhoto12.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/travelPhoto12.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/travelPhotos/travelPhoto12.png?");

/***/ }),

/***/ "./src/assets/images/travelPhotos/travelPhoto13.png":
/*!**********************************************************!*\
  !*** ./src/assets/images/travelPhotos/travelPhoto13.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/travelPhoto13.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/travelPhotos/travelPhoto13.png?");

/***/ }),

/***/ "./src/assets/images/travelPhotos/travelPhoto2.png":
/*!*********************************************************!*\
  !*** ./src/assets/images/travelPhotos/travelPhoto2.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/travelPhoto2.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/travelPhotos/travelPhoto2.png?");

/***/ }),

/***/ "./src/assets/images/travelPhotos/travelPhoto3.png":
/*!*********************************************************!*\
  !*** ./src/assets/images/travelPhotos/travelPhoto3.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/travelPhoto3.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/travelPhotos/travelPhoto3.png?");

/***/ }),

/***/ "./src/assets/images/travelPhotos/travelPhoto4.png":
/*!*********************************************************!*\
  !*** ./src/assets/images/travelPhotos/travelPhoto4.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/travelPhoto4.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/travelPhotos/travelPhoto4.png?");

/***/ }),

/***/ "./src/assets/images/travelPhotos/travelPhoto5.png":
/*!*********************************************************!*\
  !*** ./src/assets/images/travelPhotos/travelPhoto5.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/travelPhoto5.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/travelPhotos/travelPhoto5.png?");

/***/ }),

/***/ "./src/assets/images/travelPhotos/travelPhoto6.png":
/*!*********************************************************!*\
  !*** ./src/assets/images/travelPhotos/travelPhoto6.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/travelPhoto6.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/travelPhotos/travelPhoto6.png?");

/***/ }),

/***/ "./src/assets/images/travelPhotos/travelPhoto7.png":
/*!*********************************************************!*\
  !*** ./src/assets/images/travelPhotos/travelPhoto7.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/travelPhoto7.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/travelPhotos/travelPhoto7.png?");

/***/ }),

/***/ "./src/assets/images/travelPhotos/travelPhoto8.png":
/*!*********************************************************!*\
  !*** ./src/assets/images/travelPhotos/travelPhoto8.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/travelPhoto8.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/travelPhotos/travelPhoto8.png?");

/***/ }),

/***/ "./src/assets/images/travelPhotos/travelPhoto9.png":
/*!*********************************************************!*\
  !*** ./src/assets/images/travelPhotos/travelPhoto9.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/travelPhoto9.png\";\n\n//# sourceURL=webpack://layout_yourtour_test/./src/assets/images/travelPhotos/travelPhoto9.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;