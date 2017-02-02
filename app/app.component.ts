import { Component } from '@angular/core'

@Component({
        selector: 'pm-app',
        template: `
            <h1>{{pageTitle}}</h1>
            <div>Hello</div>
        `
    }
)
export class AppComponent
{
    pageTitle: string = "Acme Product Management";
}
