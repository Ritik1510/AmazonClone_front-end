import { cardsData } from "@/data/appData";
import Tooltip from "./ToolTip";

function ShopSection() {
  return (
    <div className="shop-section">
      <div className="hero-section"></div>
      {cardsData.map((card, index) => (
        <div key={index} className={`box-${(index % 4) + 1} box`}>
          <div className="box-content">
            <h2>{card.title}</h2>
            <div
              className="box-image"
              style={{ backgroundImage: `url(${card.image})` }}
            ></div>
            <Tooltip message="Sorry, it's just a frontend image">
              <div className="box-btn-text">
                <a href={card.link}>{card.linkText}</a>
              </div>
            </Tooltip>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShopSection;