import React, { useState } from "react";

const MoreMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>More</button>
      {isOpen && (
        <div className="more-menu">
          <a href="https://t.me/modex">Telegram</a>
          <a href="https://discord.gg/modex">Discord</a>
          <a href="https://twitter.com/modex">Twitter</a>
        </div>
      )}
    </>
  );
};

export default MoreMenu;
