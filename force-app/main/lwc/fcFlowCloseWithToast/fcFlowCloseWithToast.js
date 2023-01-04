import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { FlowNavigationFinishEvent } from 'lightning/flowSupport';

export default class FcFlowCloseWithToast extends LightningElement {
    @api title;
    @api message;
    @api variant;
    @api mode;

    connectedCallback() {
        this.closeModal();
        this.doTheToast();
    }

    doTheToast() {
        const options = {
            title: this.title,
            message: this.message,
            variant: this.variant,
            mode: this.mode
        };
        this.dispatchEvent(new ShowToastEvent(options));
    }

    closeModal() {
        const closeEvent = new FlowNavigationFinishEvent();
        this.dispatchEvent(closeEvent);
    }
}