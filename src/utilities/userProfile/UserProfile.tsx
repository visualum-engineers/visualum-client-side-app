import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Avatar, { ConfigProvider } from "../reactAvatar/react-avatar";
import useCursorInside from "../../hooks/use-cursor-inside";
import useWindowWidth from "../../hooks/use-window-width";
export type MediaLink = {
  mediaType: "image" | "video";
  caption?: string;
  description?: string;
  link: string;
};
export type UserProps = {
  _id: string;
  first_name: string;
  last_name: string;
  interests?: string[];
  personal_website?: string;
  email?: string;
  login_methods?: string[];
  language: string;
  company?: {
    name?: string;
    occupation?: string;
  };
  address?: {
    city?: string;
    country?: string;
  };
  phone_num?: string;
};
const namespace = "user-profile";
export const ChangeProfilePopUpModal = ({
  onClose,
}: {
  onClose: () => void;
}) => {
  return <></>;
};
const UserProfile = ({
  user,
  image,
  editControls = false,
  imageSize = "1.5rem",
}: {
  user?: UserProps;
  image?: MediaLink;
  editControls?: boolean;
  imageSize?: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const buttonInside = useCursorInside(isMounted ? ref.current : null);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const smallWindowWidth = useWindowWidth(576);
  const [changeProfile, setChangeProfile] = useState(false);
  //subject to change depending on user id
  const link = `${user?._id ? "/" + user?._id : ""}/settings/account`;
  const name = user ? `${user.first_name} ${user.last_name}` : "Guest";
  const innerEls = (
    <ConfigProvider colors={["#041c54", "#fc8304", "#3277f7"]}>
      <div ref={ref} className={`${namespace}-image-container`}>
        {image ? (
          <LazyLoadImage alt={image.description} src={image.link} />
        ) : user ? (
          <Avatar
            name={name}
            className={`${namespace}-user-avatar`}
            size={imageSize}
            round={true}
            style={{ fontSize: imageSize }}
          />
        ) : null}
        {editControls && (!smallWindowWidth || buttonInside) && (
          <button
            type="button"
            className={`${namespace}-change-btn`}
            onClick={() => setChangeProfile(true)}
            aria-label={"change-profile-picture"}
          >
            <span>Change</span>
          </button>
        )}
      </div>
    </ConfigProvider>
  );
  return (
    <>
      {!editControls ? (
        <Link className={`${namespace}-container`} to={link}>
          {innerEls}
        </Link>
      ) : (
        <div className={`${namespace}-container`}>{innerEls}</div>
      )}
      {changeProfile && (
        <ChangeProfilePopUpModal onClose={() => setChangeProfile(false)} />
      )}
    </>
  );
};
export default UserProfile;
