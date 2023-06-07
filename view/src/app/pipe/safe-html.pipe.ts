import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
@Pipe(
  {name: 'safeHtml'}
)
export class safeHtmlPipe implements PipeTransform {
  constructor (
    private sanitized: DomSanitizer
  ) {}
  transform(value: string) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
