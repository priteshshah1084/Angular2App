System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ItemListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ItemListComponent = (function () {
                function ItemListComponent() {
                    this.listItems = [
                        { name: "Venkat", Description: "This is Sample Application" },
                        { name: "Reddy", Description: "Angular1" },
                        { name: "Kate", Description: "Angular2" },
                        { name: "Kim", Description: "Test1" },
                        { name: "Mike", Description: "Test2" },
                        { name: "Matt", Description: "Test3" }
                    ];
                    this.selectedItem = { name: "" };
                }
                ItemListComponent.prototype.onItemClicked = function (listItem) {
                    this.selectedItem = listItem;
                    this.listItems.splice(this.listItems.indexOf(this.selectedItem), 1);
                };
                ItemListComponent.prototype.onAddItem = function (listItem, listDesc) {
                    this.listItems.push({ name: listItem.value, Description: listDesc.value });
                };
                ItemListComponent = __decorate([
                    core_1.Component({
                        selector: 'my-list',
                        template: "\n      <table>\n         <thead><tr><td>User Name</td><td>Description</td><td></td></tr></thead>\n         <tr *ngFor=\"#listItem of listItems\" \n            >\n            <td>{{listItem.name}}</td>\n            <td>{{listItem.Description}}</td>\n            <td><button (click)=\"onItemClicked(listItem)\" class=\"delete\">X</button></td>\n         </tr>\n         <tr>\n            <td><input type=\"text\" #listItem ></td>\n            <td><input type=\"text\" #listDesc ></td>\n            <td><button  (click)=\"onAddItem(listItem, listDesc)\">Add User</button></td>\n         </tr>\n         <tr>\n            <td colspan=\"3\"><input type=\"hidden\" [(ngModel)]=\"selectedItem.name\"></td>\n         </tr>\n   "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ItemListComponent);
                return ItemListComponent;
            }());
            exports_1("ItemListComponent", ItemListComponent);
        }
    }
});
//# sourceMappingURL=shopping-list.component.js.map