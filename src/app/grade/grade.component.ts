import { Component, OnInit, Input, OnChanges ,SimpleChanges, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit,OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    //console.log("ngOnChanges invoked....")
    //console.log(changes);
    this.findGrade();
  }


  constructor() { 
    console.log("inside Grade constructor....")
    console.log("marks are" + this.marks);
    this.findGrade()
  }

  ngOnInit() {
    console.log("inside init method")
    console.log("marks are" + this.marks);
    this.findGrade()
  }

  @Input()
  marks:number =40;
  grade:string = "Yet to change";

  @Output()
  wrongMarks: EventEmitter<String> = new EventEmitter();

  findGrade(){
    if(this.marks>100){
      console.log("in findgrade > 100")
      this.wrongMarks.emit("Wrong Marks...cant be more than " + this.marks);
      console.log("emit event called")
    }
    if(this.marks>35){
      this.grade="Passed"
    }
    else
    {
      this.grade="Failed"
    }
  }

}
