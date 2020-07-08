import { DOCUMENT } from '@angular/common';
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type PmUiEditorAction = 'save' | 'copy' | 'delete' | 'clear';

@Component({
  selector: 'pm-editor',
  templateUrl: './pm-ui-editor.component.html',
  styleUrls: ['./pm-ui-editor.component.css'],
})
export class PmUiEditorComponent implements OnInit {
  @Input() text: string;
  @Input() name: string;
  @Output() actions = new EventEmitter<PmUiEditorAction>();
  status$: Observable<string>;
  id: string;
  private document: Document;

  constructor(
    @Optional() @Inject(DOCUMENT) document,
    private route: ActivatedRoute,
  ) {
    this.document = document as Document;
    const uuid = Math.random()
      .toString(36)
      .substr(2, 9);
    this.id = `pm-textarea-${uuid}`;
    if (!this.name) {
      this.route.url
        .subscribe(
          urlSegments => (this.name = urlSegments.pop().path + '-pm-textarea'),
        )
        .unsubscribe();
    }
  }

  clearText() {
    this.text = undefined;
    this.actions.emit('clear');
  }

  copyText() {
    this.document.defaultView.navigator.clipboard.writeText(this.text);
    this.actions.emit('copy');
  }

  getMailToLink() {
    return `mailto:?subject=${encodeURI(this.name)}&body=${encodeURI(
      this.text,
    )}`;
  }

  saveText() {
    this.document.defaultView.localStorage.setItem(this.name, this.text);
    this.actions.emit('save');
  }

  deleteText() {
    this.document.defaultView.localStorage.removeItem(this.name);
    this.actions.emit('delete');
  }

  ngOnInit() {
    const text = this.document.defaultView.localStorage.getItem(this.name);
    // only set this.text if localStorage has a value
    this.text = text !== null || text !== undefined ? text : this.text;
    this.status$ = this.actions.pipe(
      map(action => {
        switch (action) {
          case 'clear':
            return '> Cleared text from editor.';
          case 'copy':
            return '> Copied text to clipboard.';
          case 'delete':
            return '> Deleted text from local storage.';
          case 'save':
            return '> Saved text to local storage.';
          default:
            break;
        }
      }),
    );
  }
}
