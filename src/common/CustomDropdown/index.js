import { useCallback, useEffect, useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import CustomRadioButton from "../CustomRadioButton";
import CustomCheckBox from "../CustomCheckBox/Index";
import { IoChevronDownSharp } from "react-icons/io5";
import { IoChevronUpSharp } from "react-icons/io5";
const CustomDropdown = ({
  itemList,
  placeholder,
  icon,
  onChange,
  classes,
  customSelectedView,
  defaultSelectedItem,
  isSingleSelect,
}) => {
  // TODO please do not change inside component
  const [showList, setShowList] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultSelectedItem || null);
  const [selectList, setSelectedList] = useState([]);

  const elementRef = useRef(null);

  useOnClickOutside(elementRef, () => {
    setShowList(false);
  });

  useEffect(() => {
    onChange?.(selectedItem || []);
  }, [selectedItem]);

  const onClickDropdown = useCallback(() => {
    setShowList(!showList);
  }, [showList]);

  const onSelectItem = (selectedItem, isChecked) => {
    debugger;
    itemList.forEach((item) => {
      if (item._id === selectedItem.value) {
        setSelectedItem(item);
        setSelectedList([item]);
        setShowList(false);
      }
    });
  };

  const onMultiSelectItem = (item, isChecked) => {
    setSelectedList((prevSelectList) => {
      const newSelectList = isChecked
        ? [...prevSelectList, item]
        : prevSelectList.filter((name) => name !== item.value);

      setSelectedItem(newSelectList.join(","));
      return newSelectList;
    });
  };

  const parentContainerClass = `w-full relative rounded-xl  ${
    showList ? "rounded-xl" : "rounded-xl"
  } ${classes ? classes.parentContainer : ""}`;
  const placeholderClass = `text-bodySmall ${
    classes ? classes.placeholder : ""
  }`;
  const dropdownIcon = `pr-3 d-flex items-center ${
    classes ? classes.dropdownIcon : ""
  }`;
  const placeholderIconWrapperClass = `items-center cursor-pointer d-flex justify-between p-spacing16 border-greyscale-5 py-spacing12 rounded-xl   ${
    classes ? classes.placeholderIconWrapper : ""
  }`;
  const selectWrapperClass = `p-spacing20 absolute  mt-spacing8 d-flex gap-spacing16 flex-col w-full rounded-2xl z-10 bg-white border-greyscale-5 border-t shadow-sm dropdown-scrollbar ${
    classes ? classes.selectWrapper : ""
  }`;

  return (
    <div className={parentContainerClass} ref={elementRef}>
      <>
        <div onClick={onClickDropdown} className={placeholderIconWrapperClass}>
          <div className={placeholderClass}>
            {!selectedItem
              ? placeholder
              : customSelectedView
              ? customSelectedView(selectedItem)
              : selectedItem}
          </div>
          {icon && (
            <div className={dropdownIcon}>
              {/* <i className={`${icon}`}></i> */}
              {!showList ? <IoChevronDownSharp /> : <IoChevronUpSharp />}
            </div>
          )}
        </div>
        {itemList?.length > 0 && showList && (
          <div className={selectWrapperClass}>
            {itemList.map((item, index) =>
              isSingleSelect ? (
                <CustomRadioButton
                  isSelected={item._id === selectedItem}
                  onRadioButtonClicked={onSelectItem}
                  label={item.name}
                  value={item._id}
                  classes={"text-bodySmall gap-spacing6"}
                  key={index}
                />
              ) : (
                <CustomCheckBox
                  isSelected={selectList.includes(item._id)}
                  onCheckBoxClicked={onMultiSelectItem}
                  label={item.name}
                  value={item._id}
                  key={index}
                />
              )
            )}
          </div>
        )}
      </>
    </div>
  );
};

export default CustomDropdown;
