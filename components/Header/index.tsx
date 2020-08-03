import React, { useState } from 'react';
import { Wrapper, Overlay } from './styles';

const Header: React.FC = () => {
  const [sidebar, toggle] = useState(false);
  return (
    <Wrapper>
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
    </Wrapper>
  );
};

export default Header;
