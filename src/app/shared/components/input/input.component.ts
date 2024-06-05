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
  selector: 'app-input',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent implements ControlValueAccessor, OnInit {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() outerClass = '';
  @Input() innerClass = '';
  @Input() errorMessage = '';

  formControl: FormControl = new FormControl();
  onChange: (value: string) => void = noop;
  onTouched: () => void = noop;

  constructor(private destroyRef: DestroyRef) {}

  ngOnInit(): void {
    this.formControl.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value: string): void => this.onChange(value));
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
