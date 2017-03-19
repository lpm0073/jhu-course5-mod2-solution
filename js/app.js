(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list = this;

  list.items = ShoppingListCheckOffService.getToBuyItems();

  list.moveItem = function (itemIndex) {
    ShoppingListCheckOffService.moveItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list = this;

  list.items = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyitems = [
    {name: "Tortillas", quantity: 25},
    {name: "Avacados", quantity: 3},
    {name: "Limes", quantity: 12},
    {name: "Tequila", quantity: 1},
    {name: "Chiles", quantity: 4}
  ];
  var boughtItems = [];

  this.moveItem = function (itemIndex) {

    boughtItems.push(toBuyitems[itemIndex]);
    toBuyitems.splice(itemIndex, 1);

  };

  this.getToBuyItems = function () {
    return toBuyitems;
  };

  this.getBoughtItems = function () {
    return boughtItems;
  };
}


})();
