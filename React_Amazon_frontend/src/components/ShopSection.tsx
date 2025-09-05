import { cardsData } from "@/data/appData";

function ShopSection() {
  return (
    <div className="shop-section">
      {cardsData.map((card, index) => (
        <div key={index} className={`box-${(index % 4) + 1} box`}>
          <div className="box-content">
            <h2>{card.title}</h2>
            <div
              className="box-image"
              style={{ backgroundImage: `url(${card.image})` }}
            ></div>
            <div className="box-btn-text">
              <a href={card.link}>{card.linkText}</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShopSection;