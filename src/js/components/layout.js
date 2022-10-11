import {LitElement, html, css} from 'lit';

class Layout extends LitElement {
  static properties = {
    theme: 'fifty-fifty',
  };
  static styles = css`
    :host {
      display: block;
    }
    .layout {
      display: grid;
      min-height: 100vh;
    }
    slot {
      display: block;
    }

    slot[name="content"] { grid-area: content; }
    slot[name="headline"] { grid-area: headline; }
    slot[name="teaser"] { grid-area: teaser; }
    slot[name="text"] { grid-area: text; }
    slot[name="visual"] { grid-area: visual; }
    slot[name="footer"] { grid-area: footer; }

    slot[name="content"] {
      padding: var(--spacing-3);
    }

    slot[name="footer"] {
      padding: var(--spacing-3);
    }
    
    .layout--fifty-fifty {
      grid-template-areas:
        "content"
        "visual"
        "footer"
      ;
      grid-template-columns: 100%;
      grid-template-rows: auto;
    }

    .layout--fifty-fifty slot[name="visual"]::slotted(img) {
      display: block;
      object-fit: cover;
      height: 100%;
      width: 100%;
    }

    @media (min-width: 768px) {
      .layout--fifty-fifty {
          grid-template-areas:
            "content visual"
            "footer visual"
          ;
        grid-template-rows: 1fr auto;
        grid-template-columns: 50% 50%;
      }
      .layout--fifty-fifty slot[name="visual"]::slotted(*) {
        
      }
    }
  `;
  
  render() {
    return html`
      <div class="layout layout--${this.theme}">
        <slot name="content">
          <slot name="headline"></slot>
          <slot name="teaser"></slot>
          <slot name="text"></slot>
          <slot></slot>
        </slot>
        <slot name="visual"></slot>
        <slot name="footer"></slot>
      </div>
    `;
  }
}
customElements.define('f-layout', Layout);
