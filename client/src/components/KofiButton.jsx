import React from "react";
const { Button } = require("grommet");

const KofiButton = () => {
  return (
    <Button
      label="want to buy me a coffee?"
      href="https://ko-fi.com/eldorado"
      target="_blank"
      color="accent1"
      a11yTitle="Buy me a coffee at ko-fi.com"
    />
  );
};

export default KofiButton;
