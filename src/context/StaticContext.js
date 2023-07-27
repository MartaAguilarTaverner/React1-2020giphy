import React from "react";

const Context = React.createContext ({
  name: 'esto-es-sin-provider',
  subscribed: true,
});

export default Context;