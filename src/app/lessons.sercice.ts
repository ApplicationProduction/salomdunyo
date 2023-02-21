
import { Lesson } from "./lesson";


export class LessonsService {

  getLessons(): Lesson[]{

    let lessons = <Lesson[]>JSON.parse('[{"title" : "ang as" ,"price" :50, "duration":20, "intakeDeadlin": "2017-03-28T23:59:59"}   , {"title" : "web ap" ,"price":60, "duration":30, "intakeDeadlin": "2018-04-29T23:59:59"}  , {"title" : "ent fr" ,"price":70, "duration":40, "intakeDeadlin": "2019-05-30T23:59:59"} ]');



  return lessons;
   
}
}
