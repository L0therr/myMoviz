import React, { useState } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const Example = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  var moviesNb = 10;
  return (
    <div>
      <Button id="Popover1" type="button">{moviesNb} Movies</Button>
      <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
        <PopoverHeader>Liked Movies</PopoverHeader>
        <PopoverBody>
          {/* likedMovies */}
        </PopoverBody>
      </Popover>
    </div>
  );
}

export default Example;