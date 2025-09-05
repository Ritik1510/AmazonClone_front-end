import { footerLinks, footerBottomLinks } from "../data/appData";

export default function Footer() {
  return (
    <footer>
      <div className="foot-panel">
        <p className="foot-panel-text">Back to top</p>
      </div>

      <div className="footer-option-lists">
        {footerLinks.map((section, index) => (
          <div key={index}>
            <ul>
              <p>{section.title}</p>
              {section.links.map((link, i) => (
                <a key={i}>{link}</a>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-panel-3">
        <div className="logo"></div>
      </div>

      <div className="foot-panel-4">
        <div>
          <ul className="pages">
            {footerBottomLinks.pages.map((page, index) => (
              <a key={index}>{page}</a>
            ))}
          </ul>
          <span className="copyright">
            {footerBottomLinks.copyright}
          </span>
        </div>
      </div>
    </footer>
  );
}
