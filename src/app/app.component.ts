import { Component ,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  taskList: { task: string, desc: string }[] = [
    { task: 'Belajar', desc: 'angular' },
    { task: 'Bermain', desc: 'valorant' }
  ];

  handleTaskListChange(newTaskList: { task: string, desc: string }[]) {
    this.taskList = newTaskList;
  }
  deleteTask(task: any) {
    // Find the index of the task to delete
    const index = this.taskList.indexOf(task);

    if (index !== -1) {
      // Remove the task from the taskList array
      this.taskList.splice(index, 1);

    }
  }
}


