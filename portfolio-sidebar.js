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
        background-color: black;
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
        height:90vh;
        width: 90px;
        background-color: black;
        position: fixed;
        display: flex;
        flex-direction: column;
        
      }
      h3 span {
        font-size: var(--portfolio-sidebar-label-font-size, var(--ddd-font-size-s));
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
 <nav class="wrapper">
        <a href="#screen-1" @click="${this._onNav}">About</a>
        <a href="#screen-2" @click="${this._onNav}">Resume</a>
        <a href="#screen-3" @click="${this._onNav}">Projects</a>
        <a href="#screen-4" @click="${this._onNav}">Experience</a>
        <a href="#screen-5" @click="${this._onNav}">Contact</a>

    
      </nav>
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