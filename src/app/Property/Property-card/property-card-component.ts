import { Component } from "@angular/core";



@Component({
    selector : 'app-property-card',
    templateUrl: 'property-card-component.html',
    styleUrls : ['property-card-component.css']
})

export class PropertyCardComponent{

    property : any =  {
        "Id" : 1,
        "Type" : "House",
        "Name" : "Sami's House",
        "Price" : 12000
    }
}