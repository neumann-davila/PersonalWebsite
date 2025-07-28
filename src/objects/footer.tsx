import { IconGroup } from "./icon-group";

export function Footer() {
  return (
    <div id="footer">
      <div id="footer-text">
        <div className="title">
          Wanna Get in Contact?
        </div>
        <a className="info" href="mailto:neumanndavila@gmail.com">
          neumanndavila@gmail.com
        </a>
      </div>
      <IconGroup id="footer-icons" />
    </div>
  );
}