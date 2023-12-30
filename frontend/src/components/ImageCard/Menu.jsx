import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FiEye } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import './Menu.css';
const options = [`Preview `, "Delete"];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem
          key={options[0]}
          selected={options[0] === "Pyxis"}
          onClick={handleClose}
        >
          <div className="option">
            <div>{options[0]} </div>
            <div><FiEye/></div>
          </div>
        </MenuItem>
        <MenuItem
          key={options[1]}
          selected={options[1] === "Pyxis"}
          onClick={handleClose}
        >
          <div className="option">
            {options[1]} <MdDeleteOutline/>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
