import React from "react";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
const CustomRadioButton = (props) => {
  const {
    onRadioButtonClicked,
    label,
    isSelected,
    deSelectedCustomIcon,
    selectedIconClass = "",
    value,
    totalCount,
    labelClassName,
    classes,
  } = props;
  // TODO please do not change inside component
  const radioButtonClicked = () => {
    onRadioButtonClicked?.(props, !isSelected);
  };

  const classVal = `flex w-full cursor-pointer ${
    isSelected ? "font-medium" : ""
  } ${classes}`;

  return (
    <div
      onClick={radioButtonClicked}
      className={`custom-checkbox-wrapper ${classVal}`}
    >
      <div>
        {isSelected ? (
          <MdOutlineRadioButtonChecked color="#ee2c3c" fontSize={24} />
        ) : (
          deSelectedCustomIcon ?? (
            <MdOutlineRadioButtonUnchecked fontSize={24} />
          )
        )}
      </div>
      <div className="custom-checkbox-label text-bodySmall text-greyscale-1">
        <span className={`text-bodySmall ${labelClassName}`}>{label}</span>
        {value !== "all" && totalCount !== undefined && (
          <span
            className={`text-bodySmall pl-spacing2 ${
              isSelected ? "text-primary-main" : "text-greyscale-4"
            }`}
          >
            ({totalCount})
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomRadioButton;
