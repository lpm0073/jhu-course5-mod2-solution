(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingList) {
  var list = this;

  ShoppingListCheckOffService.addToBuyItem('Tortillas', '1 kg');
  ShoppingListCheckOffService.addToBuyItem('Ripe Avacados', '4');
  ShoppingListCheckOffService.addToBuyItem('Limes', '24');
  ShoppingListCheckOffService.addToBuyItem('Tequila', '1 bottle');
  ShoppingListCheckOffService.addToBuyItem('Green Chiles', '100 grams');

  list.items = ShoppingListCheckOffService.getToBuyItems();
  list.count = ShoppingListCheckOffService.getToBuyItems.count;

  list.addToBuyItem = function () {
    ShoppingListCheckOffService.addToBuyItem(list.itemName, list.itemQuantity);
  };

  list.moveItem = function (itemIndex) {
    ShoppingListCheckOffService.moveItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingList) {
  var list = this;

  list.items = ShoppingListCheckOffService.getAlreadyBoughtItems();

}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyitems = [];
  var alreadyBoughtitems = [];

  service.addToBuyItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    toBuyitems.push(item);
  };

  service.moveItem = function (itemIndex) {

    alreadyBoughtitems.push(toBuyitems(itemIndex));
    toBuyitems.splice(itemIndex, 1);

  };

  service.getToBuyItems = function () {
    return toBuyitems;
  };

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtitems;
  };
}


})();
