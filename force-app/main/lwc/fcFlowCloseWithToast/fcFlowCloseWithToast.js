import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { FlowNavigationFinishEvent } from 'lightning/flowSupport';

export default class FcFlowCloseWithToast extends LightningElement {
    @api title;
    @api message;
    @api variant;
    @api mode;
    @api closeModal;

    connectedCallback() {
        if(this.closeModal) this.finishModal();
        this.showToast();
    }

    showToast() {
        const options = {
            title: this.title,
            message: this.message,
            variant: this.variant,
            mode: this.mode
        };
        this.dispatchEvent(new ShowToastEvent(options));
    }

    finishModal() {
        const closeEvent = new FlowNavigationFinishEvent();
        this.dispatchEvent(closeEvent);
    }
}