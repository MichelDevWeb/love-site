import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ValentineComponent } from './components/valentine.component';
import { ContactPopupComponent, NgbdModalContent } from './contact-popup/contact-popup.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        ValentineComponent,
        ContactPopupComponent,
        NgbdModalContent
    ],
    entryComponents: [NgbdModalContent]
})
export class ValentineModule { }
