import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import upperCaseWords from "../../utilities/helpers/upperCaseWords";
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
};
const BillingCard = ({
  cardDescription,
  activeCard,
  cardImgLink,
}: BillingCardProps) => {
  return (
    <div className={`${namespace}-billing-card`}>
      <button className={`${namespace}-billing-card-select-btn`}>
        <div className={`${namespace}-billing-card-radio-img`}></div>
        <div className={`${namespace}-billing-card-img`}>
          <img />
        </div>
        <div className={`${namespace}-billing-card-description`}>
          {cardDescription}
        </div>
      </button>
      <button className={`${namespace}-billing-card-remove-btn`}>Remove</button>
    </div>
  );
};
const Billing = () => {
  return (
    <div className={`${namespace}-container`}>
      <h3>Current Subscription</h3>
      <div className={`${namespace}-subscription`}>
        <div>
          <img />
        </div>
        <div>
          {upperCaseWords(subscription.name) + " - "}
          <b>{`${subscription.price} dollars ${subscription.interval}`}</b>
        </div>
        <button className={`${namespace}-upgrade-now-btn`}>Upgrade Now</button>
      </div>
      <h3>Linked Cards</h3>
      <div className={`${namespace}-linked-cards`}>
        <button
          className={`${namespace}-add-card-btn`}
          type="button"
          aria-label="add-card"
        >
          <FontAwesomeIcon icon={faPlus} /> <span>Add Card</span>
        </button>
      </div>
    </div>
  );
};
export default Billing;
