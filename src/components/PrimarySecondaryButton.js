import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import { BUTTON_TYPE } from "../constants/buttons";
import { BaseGenericButton } from "./ButtonStyles";

const Button = styled(BaseGenericButton)`
  min-width: 100px;
  padding: 10px 12px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%);

  ${({ type }) =>
    type === BUTTON_TYPE.PRIMARY
      ? css`
          background: #0090d6;
          color: #fff;

          :not(:disabled):focus {
            box-shadow: 0 0 0 3px #001620 inset;
            outline: none;
          }

          :not(:disabled):hover {
            background: #006596;
          }
        `
      : css`
          background: #efefef;
          color: #000;
          box-shadow: 0 0 0 2px #000 inset, 0 2px 4px rgb(0 0 0 / 20%);

          :not(:disabled):focus {
            outline: 1px solid #000;
            outline-offset: 1px;
          }

          :not(:disabled):hover {
            background: #404040;
            color: #fff;
          }
        `};
`;

const PrimarySecondaryButton = ({
  buttonType,
  buttonText,
  buttonIcon,
  isDisabled,
}) => {
  return (
    <Button
      type={buttonType}
      aria-label={buttonText}
      title={buttonText}
      disabled={isDisabled}
    >
      {buttonText}
      {buttonIcon}
    </Button>
  );
};

PrimarySecondaryButton.propTypes = {
  buttonType: PropTypes.string,
  buttonText: PropTypes.string,
  buttonIcon: PropTypes.elementType,
  isDisabled: PropTypes.bool,
};

PrimarySecondaryButton.defaultProps = {
  buttonType: BUTTON_TYPE.PRIMARY,
};

export default PrimarySecondaryButton;
