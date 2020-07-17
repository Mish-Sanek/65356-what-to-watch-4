import React from 'react';

export const withActiveFlag = (Component) => (props) => {
  const {isActive, setActive} = props;

  const handleActiveChange = () => setActive(!isActive);

  return (
    <Component
      {...props}
      isActive={isActive}
      onActiveChange={handleActiveChange}
    />
  );
};
