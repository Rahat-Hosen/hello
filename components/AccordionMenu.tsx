import React, { useState } from "react";

const AccordionMenu: React.FC<{ title: React.ReactNode }> = ({
  title,
  children,
}) => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div>
      <div onClick={() => setIsToggle(!isToggle)}>{title}</div>
      {isToggle ? children : null}
    </div>
  );
};

export default AccordionMenu;
