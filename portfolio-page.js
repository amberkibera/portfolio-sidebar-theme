/**
 * Copyright 2025 amberkibera
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `portfolio-sidebar-theme`
 * 
 * @demo index.html
 * @element portfolio-sidebar-theme
 */
export class PortfolioPage extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-page";
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
    
      }
      section {
        margin-left: 200px;
        padding: var(--ddd-spacing-4);
        min-height: 100vh;
        
      }   
      h1 {
        margin: 0 0 var(--ddd-spacing-4) 0;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <section id="screen-${this.pagenumber}">
    <h1>${this.title}</h1>
    <slot></slot>
  </section>`;
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

globalThis.customElements.define(PortfolioPage.tag, PortfolioPage);