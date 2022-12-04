import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import upperCaseWords from "../../utilities/helpers/upperCaseWords";
import RadioIcon from "../../utilities/radioIcon/RadioIcon";
import useCursorInside from "../../hooks/use-cursor-inside";
type BillingCardProps = {
  cardDescription: string;
  activeCard: boolean;
  cardImgLink: string;
};
const namespace = "settings-billing-pg";
const subscription = {
  name: "starter",
  price: 15,
  interval: "monthly",
  imgUrl: "",
};
const BillingButton = ({
  cardDescription,
  activeCard,
  cardImgLink,
}: BillingCardProps) => {
  const { ref, inside } = useCursorInside();
  return (
    <button style={{ height: "100%", flexGrow: "1" }}>
      <div ref={ref} className={`${namespace}-billing-card-select-btn`}>
        <div className={`${namespace}-billing-card-radio-btn`}>
          <RadioIcon active={inside || activeCard} activeClass={"active"} />
        </div>
        <div className={`${namespace}-billing-card-img`}>
          <img src={cardImgLink} alt="payment" />
        </div>
        <div className={`${namespace}-billing-card-description`}>
          {cardDescription}
        </div>
      </div>
    </button>
  );
};
const BillingCard = ({
  cardDescription,
  activeCard,
  cardImgLink,
}: BillingCardProps) => {
  return (
    <div className={`${namespace}-billing-card`}>
      <BillingButton
        activeCard={activeCard}
        cardDescription={cardDescription}
        cardImgLink={cardImgLink}
      />
      <button className={`${namespace}-billing-card-remove-btn`}>Remove</button>
    </div>
  );
};
const Billing = () => {
  return (
    <div className={`${namespace}-container`}>
      <h3>Current Subscription</h3>
      <div className={`${namespace}-subscription`}>
        <div className={`${namespace}-subscription-img`}>
          <img src={subscription.imgUrl} alt={`${subscription.name}-option`} />
        </div>
        <div className={`${namespace}-subscription-description`}>
          {upperCaseWords(subscription.name) + " - "}
          <b>{`${subscription.price} dollars ${subscription.interval}`}</b>
        </div>
        <button className={`${namespace}-upgrade-now-btn`}>Upgrade Now</button>
      </div>
      <h3>Linked Cards</h3>
      <div className={`${namespace}-linked-cards`}>
        <BillingCard
          cardDescription={"Hello"}
          activeCard={false}
          cardImgLink=""
        />
        <BillingCard
          cardDescription={"Hello"}
          activeCard={true}
          cardImgLink=""
        />
      </div>

      <button
        className={`${namespace}-add-card-btn`}
        type="button"
        aria-label="add-card"
      >
        <FontAwesomeIcon icon={faPlus} /> <span>Add Card</span>
      </button>
    </div>
  );
};
export default Billing;
