import { Response } from "@angular/http";
import { Observable } from "rxjs/observable";

export class ErrorHandler {

  static handlerError(error: Response | any) {
    let msg: string;
    if(error instanceof Response) {
      msg = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`;
    } else {
      msg = error.toString();
    }
    console.log(msg);
    return Observable.throw(msg);
  }

}
