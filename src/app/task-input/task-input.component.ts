import { Component, OnInit ,Input,Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css'],
  encapsulation :ViewEncapsulation.ShadowDom
})
export class TaskInputComponent implements OnInit {
  inputTask = '';
  inputDesc = '';
  newTask ={ task: this.inputTask, desc: this.inputDesc }; 
  @Input() taskList: { task: string, desc: string }[]=[];
  @Output("taskChanged") taskListChange = new EventEmitter<{ task: string, desc: string }[]>();


  onTaskList(){
    if (this.inputTask && this.inputDesc) {
      // Create a new task object and push it to the taskList
      const newTask = { task: this.inputTask, desc: this.inputDesc };
      this.taskList.push(newTask);

      // Emit the updated taskList
      this.taskListChange.emit(this.taskList);

      // Reset input fields
      this.inputTask = '';
      this.inputDesc = '';
    }
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
