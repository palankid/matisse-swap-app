import React, { useEffect, useState } from "react";
import { Drawer, MenuItem, MenuList, SxProps, Theme } from "@mui/material";
import { Box } from "@mui/system";

import Dropdown, { DropdownType } from "components/atoms/Dropdown";
import useMediaQuery from "hooks/useMediaQuery";
import { CloseIcon } from "components/atoms/Icons/Icons";

import {
  closeIconContainerStyle,
  drawerStyle,
} from "./MobileAwareDropdown.styles";
import IconButton from "components/atoms/IconButton";

interface MenuItemType {
  value: string | number;
  label: React.ReactNode;
  visible?: boolean;
  disabled?: boolean;
  sx?: SxProps<Theme>;
}

export interface MobileAwareDropdownType
  extends Omit<DropdownType, "onChange" | "children"> {
  value: string | number;
  items: MenuItemType[];
  onChange: (value: string | number) => void;
}

const MobileAwareDropdown = ({
  value,
  items,
  onChange,
  ...props
}: MobileAwareDropdownType) => {
  const [selectedValue, setSelectedValue] = useState(value);
  const [drawerOpened, setDrawerOpened] = useState(false);
  const { isMaxSm } = useMediaQuery();

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const handleWindowResize = () => {
    setDrawerOpened(false);
  };

  const handleDrawerOpen = () => setDrawerOpened(true);
  const handleDrawerClose = () => setDrawerOpened(false);

  const handleListItemClick = (item: MenuItemType) => {
    setSelectedValue(item.value);
    onChange(item.value);
    setDrawerOpened(false);
  };

  const menuItems = [
    items.map((item) => (
      <MenuItem
        key={item.value}
        value={item.value}
        disabled={item.disabled}
        sx={item.sx}
        selected={item.value === value}
        onClick={() => handleListItemClick(item)}
      >
        {item.label}
      </MenuItem>
    )),
  ];

  return (
    <>
      <Dropdown
        value={selectedValue}
        readOnly={isMaxSm}
        onClick={handleDrawerOpen}
        {...props}
      >
        {menuItems}
      </Dropdown>
      {isMaxSm && (
        <Drawer sx={drawerStyle} anchor="bottom" open={drawerOpened}>
          <Box
            sx={closeIconContainerStyle}
            display="flex"
            justifyContent="flex-end"
          >
            <IconButton color="secondary" onClick={handleDrawerClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <MenuList>{menuItems}</MenuList>
        </Drawer>
      )}
    </>
  );
};

export default MobileAwareDropdown;
