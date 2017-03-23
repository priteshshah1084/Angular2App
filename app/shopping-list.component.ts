import {Component, Input} from "angular2/core";

@Component({
   selector:'my-list',
   template:`
      <table>
         <thead><tr><td>User Name</td><td>Description</td><td></td></tr></thead>
         <tr *ngFor="#listItem of listItems" 
            >
            <td>{{listItem.name}}</td>
            <td>{{listItem.Description}}</td>
            <td><button (click)="onItemClicked(listItem)" class="delete">X</button></td>
         </tr>
         <tr>
            <td><input type="text" #listItem ></td>
            <td><input type="text" #listDesc ></td>
            <td><button  (click)="onAddItem(listItem, listDesc)">Add User</button></td>
         </tr>
         <tr>
            <td colspan="3"><input type="hidden" [(ngModel)]="selectedItem.name"></td>
         </tr>
   `
})

export class ItemListComponent{
   public listItems = [
      {name:"Venkat", Description: "This is Sample Application"},
      {name:"Reddy", Description: "Angular1"},
      {name:"Kate", Description: "Angular2"},
      {name:"Kim", Description: "Test1"},
      {name:"Mike", Description: "Test2"},
      {name:"Matt", Description: "Test3"}
   ];
   public selectedItem = {name: ""};

   onItemClicked(listItem){
      this.selectedItem=listItem;
      this.listItems.splice(this.listItems.indexOf(this.selectedItem),1);
   }

   onAddItem(listItem, listDesc){
      this.listItems.push({name:listItem.value, Description:listDesc.value});
   }


}