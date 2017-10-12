import { Component } from "@angular/core"

@Component({
    selector: 'events-list',
    templateUrl: '/app/events/events-list.component.html'

})

export class EventsListComponent{
    event = {
        id: 1,
        name: 'Introdução ao JavaScript',
        date: '16/12/217',
        time: '10:00 am',
        price: 1.99,
        imageUrl: '/app/assets/images/angularconnect-shield.png',
        location: {
            address: 'Rua da esquina',
            city: 'Belo Horizonte',
            country: 'Brasil'
        }
    }
}