/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CandidateHeader {
        "candidateInfo": CandidateDetails;
        "reqId": string;
    }
    interface GtaButton {
    }
    interface GtaDialog {
        "buttons": string;
        "headerTitle": string;
        "isOpen": boolean;
    }
    interface MyComponent {
    }
}
declare global {
    interface HTMLCandidateHeaderElement extends Components.CandidateHeader, HTMLStencilElement {
    }
    var HTMLCandidateHeaderElement: {
        prototype: HTMLCandidateHeaderElement;
        new (): HTMLCandidateHeaderElement;
    };
    interface HTMLGtaButtonElement extends Components.GtaButton, HTMLStencilElement {
    }
    var HTMLGtaButtonElement: {
        prototype: HTMLGtaButtonElement;
        new (): HTMLGtaButtonElement;
    };
    interface HTMLGtaDialogElement extends Components.GtaDialog, HTMLStencilElement {
    }
    var HTMLGtaDialogElement: {
        prototype: HTMLGtaDialogElement;
        new (): HTMLGtaDialogElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "candidate-header": HTMLCandidateHeaderElement;
        "gta-button": HTMLGtaButtonElement;
        "gta-dialog": HTMLGtaDialogElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface CandidateHeader {
        "candidateInfo"?: CandidateDetails;
        "onOpenJobDescription"?: (event: CustomEvent<boolean>) => void;
        "reqId"?: string;
    }
    interface GtaButton {
    }
    interface GtaDialog {
        "buttons"?: string;
        "headerTitle"?: string;
        "isOpen"?: boolean;
        "onOpenChange"?: (event: CustomEvent<any>) => void;
    }
    interface MyComponent {
    }
    interface IntrinsicElements {
        "candidate-header": CandidateHeader;
        "gta-button": GtaButton;
        "gta-dialog": GtaDialog;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "candidate-header": LocalJSX.CandidateHeader & JSXBase.HTMLAttributes<HTMLCandidateHeaderElement>;
            "gta-button": LocalJSX.GtaButton & JSXBase.HTMLAttributes<HTMLGtaButtonElement>;
            "gta-dialog": LocalJSX.GtaDialog & JSXBase.HTMLAttributes<HTMLGtaDialogElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
