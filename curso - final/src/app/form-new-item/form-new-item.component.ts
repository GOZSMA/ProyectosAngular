import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormNewItemComponent implements AfterViewInit {
  @ViewChild('newItem') newItem!: ElementRef;

  @Input() className = 'btn-primary';
  @Input() label!: string;
  @Input() selection!: City;

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() updateItemEvent = new EventEmitter<City>();

  ngAfterViewInit(): void {
    this.newItem.nativeElement.focus();
  }

  onAddNewItem(): void {
    // console.log(item);
    this.newItemEvent.emit(this.newItem.nativeElement.value);
    this.onClear();
  }

  onUpdateItem(): void {
    const city: City = {
      _id: this.selection._id,
      name: this.newItem.nativeElement.value,
    };
    this.updateItemEvent.emit(city);
    this.onClear();
  }

  private onClear(): void {
    this.newItem.nativeElement.value = '';
  }
}
