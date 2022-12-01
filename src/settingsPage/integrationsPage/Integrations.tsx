import facebookLoginFlow from "../../utilities/helpers/facebookLogin";
import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faSnapchat,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Avatar from "../../utilities/reactAvatar/react-avatar";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const namespace = "settings-integrations-pg";
const instagramGradient = `radial-gradient(
    circle farthest-corner at 35% 90%,
    #fec564,
    transparent 50%
  ),
  radial-gradient(
    circle farthest-corner at 0 140%,
    #fec564,
    transparent 50%
  ),
  radial-gradient(
    ellipse farthest-corner at 0 -25%,
    #5258cf,
    transparent 50%
  ),
  radial-gradient(
    ellipse farthest-corner at 20% -50%,
    #5258cf,
    transparent 50%
  ),
  radial-gradient(
    ellipse farthest-corner at 100% 0,
    #893dc2,
    transparent 50%
  ),
  radial-gradient(
    ellipse farthest-corner at 60% -20%,
    #893dc2,
    transparent 50%
  ),
  radial-gradient(
    ellipse farthest-corner at 100% 100%,
    #d9317a,
    transparent
  ),
  linear-gradient(
    #6559ca,
    #bc318f 30%,
    #e33f5f 50%,
    #f77638 70%,
    #fec66d 100%
  )`;
const integrationData: {
  [key: string]: {
    icon: IconDefinition;
    text?: string;
    loginFunc?: () => void;
    color?: string;
    bgColor?: string;
    borderColor?: string;
  };
} = {
  Facebook: {
    icon: faFacebook,
    loginFunc: facebookLoginFlow,
    text: "Link your Facebook",
    color: "rgb(255,255,255)",
    bgColor: "#4267B2",
  },
  Instagram: {
    icon: faInstagram,
    text: "Link your Instagram",
    bgColor: instagramGradient,
    color: "rgb(255,255,255)",
  },
  TikTok: {
    icon: faTiktok,
    text: "Link your TikTok",
    color: "rgb(255,255,255)",
    bgColor: "black",
  },
  LinkedIn: {
    icon: faLinkedin,
    text: "Link your LinkedIn",
    color: "rgb(255,255,255)",
    bgColor: "#0072b1",
  },
  SnapChat: {
    icon: faSnapchat,
    text: "Link your Snapchat",
    color: "black",
    bgColor: "#FFFC00",
  },
  Twitter: {
    icon: faTwitter,
    text: "Link your Twitter",
    color: "rgb(255,255,255)",
    bgColor: "#00acee",
  },
};
const IntegrationTab = ({
  icon,
  text,
  loginFunc,
  color,
  bgColor,
  borderColor,
}: {
  borderColor?: string;
  color?: string;
  bgColor?: string;
  icon: IconProp;
  text?: string;
  loginFunc?: () => void;
}) => {
  return (
    <button
      type="button"
      className={`${namespace}-tab`}
      style={{
        background: bgColor,
        color: color,
        border: `1px solid ${borderColor ? borderColor : bgColor}`,
      }}
      onClick={() => {
        if (loginFunc) loginFunc();
      }}
    >
      <FontAwesomeIcon icon={icon} /> <span>{text}</span>
    </button>
  );
};
type AccountInfo = {
  username: string;
  icon: IconDefinition;
  profileImgUrl?: string;
  profileUrl?: string;
};
const IntegrationSquare = ({
  username,
  profileImgUrl,
  profileUrl,
  icon,
  onClose,
}: AccountInfo & {
  onClose?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
  const innerEls = (
    <>
      <div className={`${namespace}-square-img-container`}>
        {profileImgUrl ? (
          <img src={profileImgUrl} alt={`profile-pic-for-${username}`} />
        ) : (
          <Avatar
            name={username}
            className={`${namespace}-user-avatar`}
            size={"100%"}
            round={true}
            style={{ width: "35%", height: "auto", aspectRatio: "1/1" }}
          />
        )}
      </div>
      <div className={`${namespace}-username`}>{username}</div>
    </>
  );
  return (
    <div className={`${namespace}-square`}>
      <div className={`${namespace}-square-icon`}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <button aria-label={`unlink-${username}-account`} onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      {profileUrl ? (
        <a
          className={`${namespace}-square-container`}
          target={"_blank"}
          rel="noopener noreferrer"
          href={profileUrl}
        >
          {innerEls}
        </a>
      ) : (
        <div className={`${namespace}-square-container`}>{innerEls}</div>
      )}
    </div>
  );
};
const Integrations = () => {
  return (
    <div className={`${namespace}-container`}>
      <div className={`${namespace}-link-accounts`}>
        <h3>Connect Accounts</h3>
        {Object.entries(integrationData).map(([key, value]) => (
          <IntegrationTab
            key={key}
            icon={value.icon}
            text={value.text}
            loginFunc={value.loginFunc}
            color={value.color}
            bgColor={value.bgColor}
            borderColor={value.borderColor}
          />
        ))}
      </div>
      {/* <div className={`${namespace}-divider`}></div> */}
      <div className={`${namespace}-integrations`}>
        <h3>Linked Accounts</h3>
        <IntegrationSquare username={"arky.asmal"} icon={faFacebook} />
        <IntegrationSquare username={"arky.asmal"} icon={faFacebook} />
        <IntegrationSquare username={"arky.asmal"} icon={faFacebook} />
        <IntegrationSquare username={"arky.asmal"} icon={faFacebook} />
      </div>
    </div>
  );
};
export default Integrations;
