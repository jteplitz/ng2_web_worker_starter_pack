import {Component, View} from "angular2/core";

@Component({
  selector: "my-app"
})
@View({
  template: "<h1>Hello {{name}} from the WebWorker</h1>"
})
export class MyApp {
  name = "Angular Connect";
}
