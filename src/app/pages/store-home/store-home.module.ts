import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreHomeComponent } from './components/store-home.component';
import { ContactPopupComponent, NgbdModalContent } from './contact-popup/contact-popup.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        StoreHomeComponent,
        ContactPopupComponent,
        NgbdModalContent
    ],
    entryComponents: [NgbdModalContent]
})
export class StoreHomeModule { }
