import { Component } from "@angular/core";
import { CourseService } from "./course.service";
@Component({
    selector : "courses",
    template : ` 
    <div class = "container">
    <button class = "btn btn-primary" (click)="addItem()">Add Item</button>
    <table class="table table-bordered">
    <tr>
        <th>Id</th>
        <th>Course Name</th>
        <th> Remove</th>
        <th>Update</th>
    </tr>
    <tr *ngFor="let course of courses">
        <td>{{course.id}}</td>
        <td>{{course.courseName}}</td>
        <td (click) = "removeItem(course)">X</td>
        <td (click) = "update(course)">Updated</td>
    </tr>
    </table>
    </div>
       `
})
export class CourseComponent {
courses = [
    {id:1, courseName:"Java"},
    {id:2, courseName:"PHP"},
    {id:3, courseName:"JS"}
]
removeItem(course){
    let Index = this.courses.indexOf(course);
    this.courses.splice(Index,1)
}
addItem(){
    this.courses.push({id:4, courseName:"Angular"});
}
update(course){
    course.courseName = "updated";
}
}
