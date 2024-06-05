import {
  Component,
  DestroyRef,
  forwardRef,
  Input,
  OnInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { noop } from 'rxjs';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
  imports: [ReactiveFormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent implements ControlValueAccessor, OnInit {
  @Input() label?: string;
  @Input() outerClass?: string;

  formControl: FormControl = new FormControl();
  onChange: (value: boolean) => void = noop;
  onTouched: () => void = noop;

  constructor(private destroyRef: DestroyRef) {}

  ngOnInit(): void {
    this.formControl.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((checked: boolean): void => this.onChange(checked));
  }

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(checked: boolean): void {
    this.formControl.patchValue(checked, { emitEvent: false });
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) this.formControl.disable();
    else this.formControl.enable();
  }
}
