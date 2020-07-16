import React from 'react';

export const withActiveFlag = (Component) => (props) => {
  const [isActive, setActive] = React.useState(false);

  const handleActiveChange = () => setActive(!isActive);

  return (
    <Component
      {...props}
      isActive={isActive}
      onActiveChange={handleActiveChange}
    />
  );
};
