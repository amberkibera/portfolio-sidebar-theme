/**
 * Copyright 2025 amberkibera
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-card-list`
 * 
 * @demo index.html
 * @element ddd-card-list
 */
export class DddCardList extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ddd-card-list";
  }

  constructor() {
    super();
    this.title = "";
    this.image = "";
    this.description = "";
    this.primary = "";
    this.accent = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      image: { type: String },
      description: { type: String },
      primary: { type: String,
        reflect: true,
        attribute: "ddd-primary",
      },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
          border: 1px solid var(--ddd-border-color, #ccc);
          border-radius: var(--ddd-border-radius, 8px);
          padding: var(--ddd-spacing-3);
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--ddd-card-list-label-font-size, var(--ddd-font-size-s));
      }
      .title-bar {
        padding: var(--ddd-spacing-2);
          font-weight: var(--ddd-font-weight-bold);
        }
      .ddd-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: var(--ddd-spacing-3);
          border: 1px solid var(--ddd-theme-primary);
          border-radius: var(--ddd-radius-md);
          background-color: var(--ddd-theme-accent);
        }
       
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <h3><span>${this.t.title}</span> ${this.title}</h3>
  <slot></slot>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return html` <div class="wrapper">
    <h3><span>${this.t.title}</span> ${this.title}</h3>
    <slot></slot>
  </div>`;
  }
}

globalThis.customElements.define(DddCardList.tag, DddCardList);