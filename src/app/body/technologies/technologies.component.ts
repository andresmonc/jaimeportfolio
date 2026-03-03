import { Component } from "@angular/core";

@Component({
  selector: "app-technologies",
  templateUrl: "./technologies.component.html",
  styleUrls: ["./technologies.component.css"],
})
export class TechnologiesComponent {
  public technologies = [
    { icon: "devicon-java-plain-wordmark colored", name: "Java", color: "#4169e1" },
    { icon: "devicon-go-line", name: "Go", color: "#29adbe" },
    { icon: "devicon-nodejs-plain-wordmark colored", name: "Node.js", color: "#6B5B95" },
    { icon: "devicon-git-plain-wordmark", name: "Git", color: "#F1502F" },
    { icon: "devicon-express-original-wordmark colored", name: "Express", color: "#fdfd96" },
    { icon: "devicon-angularjs-plain", name: "Angular", color: "red" },
    { icon: "devicon-postgresql-plain-wordmark colored", name: "PostgreSQL", color: "rgb(59, 189, 92)" },
    { icon: "devicon-docker-plain-wordmark colored", name: "Docker", color: "black" },
    { icon: "devicon-css3-plain-wordmark colored", name: "CSS3", color: "#F0F8FF" },
    { icon: "devicon-python-plain-wordmark colored", name: "Python", color: "#4B8BBE" },
    { icon: "devicon-mongodb-plain-wordmark", name: "MongoDB", color: "#4DB33D" },
    { icon: "devicon-scala-plain-wordmark colored", name: "Scala", color: "#6B5B95" },
    { icon: "devicon-typescript-plain colored", name: "TypeScript", color: "#F0F8FF" },
    { icon: "devicon-javascript-plain colored", name: "JavaScript", color: "black" },
    { icon: "devicon-amazonwebservices-plain-wordmark colored", name: "AWS", color: "#6B5B95" },
  ];
}
