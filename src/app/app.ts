import {bootstrap, Component} from 'angular2/angular2';

@Component({
    selector: 'my-app',
    template: '<h1>My First ng2015 app, hell yeah' +
    '<br/>second try' +
    '<br/>third</h1>'
})

class AppComponent{}

bootstrap(AppComponent);