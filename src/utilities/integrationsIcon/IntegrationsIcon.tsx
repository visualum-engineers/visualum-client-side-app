import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
const IntegrationsIcon = () => {
  return (
    <div className="integrations-icon">
      <div>
        <FontAwesomeIcon icon={faSquare} />
        <FontAwesomeIcon icon={faSquare} />
      </div>
      <div>
        <FontAwesomeIcon icon={faSquare} />
      </div>
    </div>
  );
};
export default IntegrationsIcon;
