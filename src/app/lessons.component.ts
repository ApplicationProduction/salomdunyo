import { Component, OnInit } from "@angular/core";
import { LessonsService } from "./lessons.sercice";
import { Lesson } from "./lesson";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'lessons',
  template: `
<h1>Lessons</h1>


<!-- <table>
  <tr>
    <td [attr.colSpan]="colSpan"></td>
  </tr>
</table> -->


<!-- <input type="text" (input)="onTextInput($event)"> -->
<!-- <input type="text" [(ngModel)]="userName">
<p>{{ userName }}</p>
<button [ngClass]="{'btn': isActive, 'btn-primary' : isActive}">Test2 </button>
<button [ngStyle]="{'backgroundColor': isActive ? 'green' : 'white',
'color': isActive ? 'white' : 'gray' }">test</button>
<button [style.backgroundColor]="isActive ? 'green' : 'white'" (click)="onTestButtonClicked()"> rest</button>
 <button [class.btn]="isbtnaplicable" [class.btn-primary]=" isbtnprimaryaaplicable"  (click)="onTestButtonClicked()"> rest</button> -->



  <h1> {{ getTitle() }}</h1>
 <ul>
<li *ngFor="let lesson of lessons" (click)="onSelect(lesson)">
  <a [routerLink]="['/darslar, lesson.title']">{{lesson.title}}</a>

  <!-- {{i+". "+lesson }} -->
  <!-- {{lesson.title}} -->


</li>

</ul>
{{selecsCount}}
<app-lesson [lesson]="sellectedLessson" (changeTitle)="onTitleChange($event)"> bu <h2> lesson </h2> komponentigagi <div class="mycontent"> kontent </div></app-lesson>

<!-- <div [ngSwitch]="colSpan">
  <p *ngSwitchCase="1">colSpan=1</p>
  <button *ngSwitchCase="2">colSpan=2</button>
  <input *ngSwitchCase="3" >
</div>

<img *ngIf="colSpan<2; else noLogo" src="{{logoUrl}}" />
<ng-template #noLogo> <p>rasm yo'q  </p>  </ng-template>

<img [src]="logoUrl"/> -->
`

})
export class LessonsComponent implements OnInit {
  //  isActive :boolean=false;
  // colSpan : number =3;
  // isbtnaplicable: boolean=true;
  // isbtnprimaryaaplicable: boolean=true;



  // logoUrl = "https://picsum.photos/300/400?image=2";
  titlex: string = "Darslar ro'yhati";
  lessons: Lesson[];
  sellectedLessson!: Lesson;
  isPlus: boolean=true;
// showImage: boolean=false;
//   userName: string = " ";
selecsCount: any;
titleParam: string= '';

  constructor(private route: ActivatedRoute, lessonsSvc: LessonsService) {
    this.lessons = lessonsSvc.getLessons();
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
this.titleParam!= params.get('title');
this.getLessonByTitle();
    })

  }
  getLessonByTitle(): void {

    if(!!this.titleParam){
      var lesson=this.lessons.find(les => les.title==this.titleParam);
      this.onSelect(lesson!);
    }
  }
   getTitle(): string {
    return this.titlex;
  }
  // onTestButtonClicked(){
  //   console.log("tugma bosildi");
  //   this.userName='';
  //   }
    onSelect(lesson: Lesson): void{
this.sellectedLessson=lesson;
    }
    onTitleChange(isPlus: boolean){
      isPlus ? this.sellectedLessson.title+="+ ": this.sellectedLessson.title+="-";
    }
//     onTextInput(event: Event){


//       //  this.userName =event?.target?.value;

// console.log(event);
//     }
  }
