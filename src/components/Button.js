import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons'

export const Button = ({ handleClick, color }) => {
    const ButtonsPageStyled = styled.div`
    .buttons {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        margin: 30px 15px 10px 15px;
        padding: 0;
      }
      
      .button {
        border: none;
        border-radius: 3px;
        outline: none;
        color: white;
        background-color: ${color.currentColor};
        -webkit-animation-name: delay;
        -webkit-animation-duration: 1s;
      }

      .button:hover {
          opacity: 0.8;
      }
      
      .button-icon {
        width: 40px;
        height: 40px;
        margin: 2px;
        padding: 0;
      }
      
      .button-quote {
        width: 105px;
        height: 40px;
      }
      
      .icon {
        font-size: 1.5em;
      }

      @-webkit-keyframes delay {
          from{background: ${color.previousColor};}
          to{background: ${color.currentColor};}
      }
    `
    return (
        <ButtonsPageStyled>
            <div className="buttons">
                <div className="buttons-icon">
                    <button className="button button-icon">
                        <FontAwesomeIcon className="icon" icon={faTwitter} />
                    </button>
                    <button className="button button-icon">
                        <FontAwesomeIcon className="icon" icon={faTumblr} />
                    </button>
                </div>
                <button className="button button-quote" onClick={handleClick}>New quote</button>
            </div>
        </ButtonsPageStyled>
    )
};
