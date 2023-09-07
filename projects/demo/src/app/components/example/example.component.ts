import { Component, Input } from "@angular/core";

@Component({
    selector: "demo-example",
    templateUrl: "./example.component.html",
    styleUrls: ["./example.component.scss"]
})
export class ExampleComponent {
    public detail:boolean = false;

    @Input()
    public code!:string;
}
