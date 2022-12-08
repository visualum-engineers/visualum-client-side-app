import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const namespace = "err-banner";
const ErrBanner = ({
  closeAction,
  children,
}: {
  closeAction?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: JSX.Element | string;
}) => {
  return (
    <div className={`${namespace}-container`}>
      {closeAction && (
        <button
          className={`${namespace}-close-btn`}
          onClick={closeAction}
          aria-label="close-err-message"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      )}
      {children}
    </div>
  );
};
export default ErrBanner;
