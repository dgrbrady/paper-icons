import { Component } from "@angular/core";
import { PaperIconNames } from "projects/paper-icons/src/public-api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "paper-icons-showcase";
  icons: string[] = Object.values(PaperIconNames);
}
