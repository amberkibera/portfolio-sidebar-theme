/**
 * Copyright 2025 amberkibera
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./portfolio-sidebar.js";

/**
 * `portfolio-sidebar-theme`
 * 
 * @demo index.html
 * @element portfolio-sidebar-theme
 */
export class PortfolioSidebarTheme extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-sidebar-theme";
  }

  constructor() {
    super();
    this.sections = [
      {title: "About"},
      {title: "Resume"},
      {title: "Relevant Projects"},
      {title: "Work Experience"},
      {title: "Contact"}

    ]
   
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      pagenumber: {type: Number},
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-default-pughBlue);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--portfolio-sidebar-theme-label-font-size, var(--ddd-font-size-s));
      }
      
    `];
  }

  firstUpdated() {
    super.firstUpdated && super.firstUpdated();
    // If there's a hash on load, scroll to it
    requestAnimationFrame(() => {
      const hash = location.hash.slice(1);
      if (hash) {
        const el = this.querySelector(`#${hash}`);
        el && el.scrollIntoView();
      }
    });
  }

  // Lit render the HTML
  render() {
    return html`
    <portfolio-sidebar .items="${this.pages}" @navigate-page="${this._onNav}"></portfolio-sidebar>
    <div class="pages-wrapper"><slot></slot></div>
  `;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(PortfolioSidebarTheme.tag, PortfolioSidebarTheme);