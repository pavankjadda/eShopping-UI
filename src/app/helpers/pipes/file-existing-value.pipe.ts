import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "fileExistingValue",
  standalone: true,
})
export class FileExistingValuePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return null;
  }
}
