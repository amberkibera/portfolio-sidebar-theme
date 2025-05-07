/**
 * Copyright 2025 amberkibera
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-card`
 * 
 * @demo index.html
 * @element ddd-card
 */
export class DddCard extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ddd-card";
  }

  constructor() {
    super();
    this.title = "My card";
    this.image = "https://via.placeholder.com/200"; 
    this.description = "This is a default description."; 
    this.link = "#"; 
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      altText: { type: String },
      description: { type: String },
      image: { type: String },
      link: { type: String },
      themeColor: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: inline-block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-primary);
        border-radius: var(--ddd-radius-sm);
        padding: var(--ddd-spacing-3);
        border: var(--ddd-border-sm) solid red;
      }
      .card {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-0);
        border: var(--ddd-border-sm);
        width: 300px;
        box-shadow: var(--ddd-boxShadow-xl);
        background-color: var(--ddd-theme-default-white);
        border-radius: var(--ddd-radius-md);
        
        
      }
      
      h3 span {
        font-size: var(--ddd-card-label-font-size, var(--ddd-font-size-s));
      }
      
      .image-container img {
        width: 100%;
        height: auto;
        display: block;
        
       }
       .image-container {
        overflow: hidden;
        
          border-bottom: 12px var(--ddd-theme-default-nittanyNavy) solid;
          padding: var(--ddd-spacing-0);
          border-radius: var(--ddd-radius-md);
       }

       h3 {
        display: inline-block;
       }
      
      .card-title {
        text-align: left;
          padding-left: var(--ddd-spacing-3);
          margin: var(--ddd-spacing-3) var(--ddd-spacing-3) ;
          color: var(--ddd-theme-default-nittanyNavy);
          
       }

      .card-details {
      font-size: var(--ddd-font-size-3xs);
      color: var(--ddd-theme-default-coalyGray);
      margin:var(--ddd-spacing-3);
       }
    
       .button-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: var(--ddd-spacing-3);
        }
       button {
          width: 100%;
          color: var(--ddd-theme-default-white);
          padding:  var(--ddd-spacing-3) var(--ddd-spacing-4);
          font-size: var(--ddd-font-size-4xs);
          font-weight: var(--ddd-font-weight-bold);
          border-radius: var(--ddd-radius-sm);
          cursor: pointer;
          transition: background-color 0.3s ease-in-out;
          margin-bottom: var(--ddd-spacing-4);
        }

       a, a:link, a:visited {
        color: var(--ddd-theme-default-white);
        font-size: var(--ddd-font-size-xs);
        background-color: var(--ddd-theme-default-beaverBlue);
       }
       a:hover, a:active {
        background-color: var(--ddd-theme-default-nittanyNavy);

       }
       a {
          color: var(--ddd-theme-default-white);
          padding:  var(--ddd-spacing-3) var(--ddd-spacing-4);
          font-size: var(--ddd-font-size-3xs);
          font-weight: var(--ddd-font-weight-bold);
          border-radius: var(--ddd-radius-sm);
          margin:var(--ddd-spacing-8) 0;
          cursor: pointer;
          transition: background-color 0.3s ease-in-out;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }
    `];
  }

  // Lit render the HTML
  render() {
     return html`
     <div class ="card">
      <div class="image-container">
          <!-- Dynamically set the image and alt text -->

        <img 
          class="card-image"
          alt="${this.altText}"
          src="${this.image}" />
       </div>
      
        <div class="card-text">
          <!-- Dynamically set the card's title -->
          <h3 class="card-title">${this.title}</h3>
          
          <!-- Add the card's details, showing description and link -->
          <div class="card-details">
              <slot>${this.description}</slot>
              <a href="${this.link}" target="_blank">Explore ></a>
          </div>
        </div>
      </div>
      `;
  }

  /**
   * haxProperties integration via file reference
   */
}

globalThis.customElements.define(DddCard.tag, DddCard);