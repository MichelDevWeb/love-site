import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-contact-popup',
    template: `
    <div class="modal-header">
        <h5 class="modal-title text-center">Thông tin liên hệ</h5>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body"> 
        <div class="row">
            <div class="typography-line">
                <h6>
                    <span class="note">Số điện thoại 1: </span> 0965112864
                </h6>
            </div>
            <div class="typography-line">
                <h6>
                    <span class="note">Số điện thoại 2: </span> 0365420225
                </h6>
            </div>
            <div class="typography-line">
                <h6>
                    <span class="note">Số điện thoại 3: </span> 0909678646
                </h6>
            </div>
            <div class="typography-line">
                <h6>
                    <span class="note">Địa chỉ: </span> Lái Thiêu, Thuận An Bình Dương
                </h6>
            </div>
        </div>
    </div>
    <div class="modal-footer">
        <div class="left-side">
            <button type="button" class="btn btn-default btn-link" (click)="activeModal.close('Close click')">Xem trên bản đồ</button>
        </div>
        <div class="divider"></div>
        <div class="right-side">
            <button type="button" class="btn btn-danger btn-link" (click)="activeModal.close('Close click')">Đóng</button>
        </div>
    </div>
    `
})
export class NgbdModalContent {
    @Input() name;

    constructor(public activeModal: NgbActiveModal) {}
}

@Component({
    selector: 'app-contact-popup-component',
    templateUrl: './contact-popup.component.html'
})
export class ContactPopupComponent {
    constructor(private modalService: NgbModal) {}
    open() {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    }
}
