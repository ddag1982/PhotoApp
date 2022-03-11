import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PhotoFilter } from '../../interfaces';

@Component({
  selector: 'app-photo-filter',
  templateUrl: './photo-filter.component.html',
  styleUrls: ['./photo-filter.component.scss'],
})
export class PhotoFilterComponent implements OnInit, OnDestroy {
  @Output() valueChanges = new EventEmitter<PhotoFilter>();
  public form: FormGroup;
  private destroy$: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      text: new FormControl(''),
    });
    this.form.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((formValue) => {
        this.valueChanges.emit(formValue);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
