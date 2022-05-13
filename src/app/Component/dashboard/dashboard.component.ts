import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalManager } from 'ngb-modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
@ViewChild('myModal') myModal:any;
private modalRef:any;
  constructor(private modalService:ModalManager) { }

  ngOnInit(): void {
  }

  openModal(){
    this.modalRef = this.modalService.open(this.myModal, {
        size: "md",
        modalClass:'mymodal',
        hideCloseButton: false,
        center: true,
        animation: true,
        backdrop: true,
        keyboard: false,
        closeOnOutsideClick: true,
        backdropClass: "modal-backdrop"
    })
  };
  closeModal(){
    this.modalService.close(this.modalRef);
  }

}
