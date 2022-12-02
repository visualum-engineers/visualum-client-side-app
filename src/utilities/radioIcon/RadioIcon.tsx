const RadioIcon = ({
  active,
  activeClass,
}: {
  active: boolean;
  activeClass: string;
}) => {
  return (
    <svg className="radio-btn" viewBox="0 0 24 24">
      <circle
        className="radio-btn-outer-circle"
        cx="12"
        cy="12"
        r="10"
      ></circle>
      <circle
        className={`radio-btn-inner-circle${active ? " " + activeClass : ""}`}
        cx="12"
        cy="12"
        r="7"
      ></circle>
    </svg>
  );
};
export default RadioIcon;
