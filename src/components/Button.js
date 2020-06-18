import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';
 
const Button = ({ handleClick, color, quote }) => {
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
      
      a {
        color: white;
        text-decoration: none;
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
    const linkTumblr = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${encodeURIComponent(quote.author)}&content=${encodeURIComponent(quote.text)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`
    const linkTwitter = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${encodeURIComponent(quote.text)}" -${encodeURIComponent(quote.author)}`
    
    return (
        <ButtonsPageStyled>
            <div className="buttons">
                <div className="buttons-icon">
                    <button className="button button-icon">
                        <a href={linkTwitter} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon" icon={faTwitter} /></a>
                    </button>
                    <button className="button button-icon">
                        <a href={linkTumblr} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon" icon={faTumblr} /></a>
                    </button>
                </div>
                <button className="button button-quote" onClick={handleClick}>New quote</button>
            </div>
        </ButtonsPageStyled>
    )
};

export default Button;
