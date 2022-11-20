import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useState } from "react";
import Avatar from "react-avatar";
type MediaLink = {
  mediaType: "image" | "video";
  caption?: string;
  description?: string;
  link: string;
};
type UserProps = {
  _id: string;
  first_name: string;
  last_name: string;
  email?: string;
};
const namespace = "user-profile";
export const ChangeProfilePopUpModal = ({ onClose }: { onClose: () => void }) => {
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
  const [changeProfile, setChangeProfile] = useState(false);
  //subject to change depending on user id
  const link = `${user?._id ? "/" + user?._id : ""}/settings/account`;
  const name = user ? `${user.first_name} ${user.last_name}` : "Arky Asmal";
  const innerEls = (
    <>
      <div className={`${namespace}-image-container`}>
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
      </div>
      {editControls && (
        <button
          className={`${namespace}-change`}
          onClick={() => setChangeProfile(true)}
          aria-label={"change-profile-picture"}
        >
          Change
        </button>
      )}
    </>
  );
  return (
    <>
      {editControls ? (
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
