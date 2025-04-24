/**
 * Copyright 2025 amberkibera
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `portfolio-sidebar`
 * 
 * @demo index.html
 * @element portfolio-sidebar
 */
export class PortfolioSidebar extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-sidebar";
  }

  constructor() {
    super();
    this.title = "";
    this.pagenumber = null;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      pagenumber: {type: Number}
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
        height:100vh;
        width: 200px;
        background-color: white;
        position: fixed;
      }
      h3 span {
        font-size: var(--portfolio-sidebar-label-font-size, var(--ddd-font-size-s));
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
 <div class="wrapper">
<a>
    Link
</a>

 </div>
`;
  }

  firstUpdate(changedProperties) {
    if (super.firstUpdate) {
        super.firstUpdated(changedProperties);
    }
    this.dispatchEvent(new CustomEvent('page-added')), {
        bubbles: true,
        composed: true,
        details:  {
            value:this
        }}}
  
}

globalThis.customElements.define(PortfolioSidebar.tag, PortfolioSidebar);