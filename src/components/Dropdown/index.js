import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useRouter } from 'next/router';

export default function SimpleMenu({ title, items }) {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickItems = (to) => {
    router.push(to);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onMouseEnter={(event) => setAnchorEl(event.currentTarget)}
      >
        {title}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {items.map((item) => (
          <MenuItem onClick={() => handleClickItems(item.to)} key={item.title}>
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
