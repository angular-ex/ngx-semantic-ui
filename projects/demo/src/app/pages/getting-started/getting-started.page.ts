import { Component } from "@angular/core";

@Component({
    selector: "demo-page-getting-started",
    templateUrl: "./getting-started.page.html",
    styles: [`
.dividing.header {
    margin-top: 1em;
    margin-bottom: 0.5em;
}
`]
})
export class GettingStartedPage {
    public installCode:string = `$ npm install ngx-semantic-ui --save`;

    public includeCssCode:string =
`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css">`;

    public importCode:string = `import {SuiModule} from 'ngx-semantic-ui';`;
    public moduleImportCode:string = `
import {SuiModule} from 'ngx-semantic-ui';

@NgModule({
    declarations: [AppComponent, ...],
    imports: [SuiModule, ...],  
    bootstrap: [AppComponent]
})
export class AppModule {}
`;
    public systemJSCode:string = `
var config = {
    ...
    map: {
        ...
        'ngx-semantic-ui': 'npm:ngx-semantic-ui/bundles/ngx-semantic-ui.umd.min.js'
    }
}
`;
    public individualImportCode:string = `import {SuiCheckboxModule, SuiRatingModule} from 'ngx-semantic-ui';`;
}
