import { Component, OnInit } from "@angular/core";
import Notices from "../../assets/data.json";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-christian-noticias",
  templateUrl: "./christian-noticias.component.html",
  styleUrls: ["./christian-noticias.component.scss"],
})
export class ChristianNoticiasComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("assets/data.json").subscribe((data) => {
      this.data = data;
    });
  }
}
