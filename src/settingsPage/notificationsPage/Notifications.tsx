import {
  NotificationCategory,
  NotificationCheckbox,
  NotificationForm,
} from "./NotificationUtilities";
import NotificationNav from "./NotificationNav";
import {
  //replaceSnakeCaseWithSpaces,
  snakeCaseWords,
} from "../../utilities/helpers/snakeCaseWords";

const EmailNotifications = () => {
  const notificationObj = {
    "Notifications from us": [
      "News And Updates",
      "Account Changes",
      "Marketing and Promotions",
    ],
    "Post Updates": [
      "Verified user messages/comments",
      "Post Statistics",
      "Viral Threshold Reached",
    ],
    Reminders: ["Post Scheduling", "Calender Reminders"],
    "Scheduling Actions": ["Action Errors", "Action Successes"],
  };
  return (
    <>
      {Object.entries(notificationObj).map(([key, value]) => (
        <NotificationCategory key={key} title={key}>
          <>
            {value.map((option) => (
              <NotificationCheckbox
                key={option}
                name={snakeCaseWords(option)}
                description={option}
              />
            ))}
          </>
        </NotificationCategory>
      ))}
    </>
  );
};
// const PushNotifications = () => {
//   return <></>;
// };

const Notifications = () => {
  return (
    <NotificationForm>
      <>
        <NotificationNav />
        <EmailNotifications />
      </>
    </NotificationForm>
  );
};
export default Notifications;
