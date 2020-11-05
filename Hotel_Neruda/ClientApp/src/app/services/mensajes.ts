import { Injectable, Inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from '../@base/alert-modal/alert-modal.component';

@Injectable({
  providedIn: 'root'
})
export class Mensajes {
  
  baseUrl: string;
  constructor(private modalService: NgbModal) { }

  Mostrar(title: string, message: string) {
    const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = title;
        messageBox.componentInstance.message = message;
  }
}
