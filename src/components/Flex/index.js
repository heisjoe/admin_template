import React from 'react';

const Flex = ({children, direction = "row", justify = "flex-start", align = "flex-start", style, ...rest}) => (
  <div {...rest} style={Object.assign({
    display: "flex",
    alignItems: align,
    justifyContent: justify,
    flexDirection: direction,
  }, style)}>{children}</div>
);

export default Flex;
