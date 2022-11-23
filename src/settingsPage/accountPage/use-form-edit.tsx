import { useState } from "react";
const useFormEdit = () => {
  const [edit, setEdit] = useState(false);
  const editCallback = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.currentTarget as HTMLElement;
    const dataset = target.dataset;
    switch (dataset.actionType) {
      case "edit":
        setEdit(true);
        break;
      case "cancel-edit":
        setEdit(false);
        break;
      default:
        break;
    }
  };
  return { editState: edit, editCallback };
};
export default useFormEdit;
