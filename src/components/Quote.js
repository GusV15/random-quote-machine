import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const Quote = ({ quote, color }) => {

    const TextPageStyled = styled.div`
        .text {
            padding: 0 2.5rem;
            font-size: 1.7em;
            font-weight: 500;
            margin-bottom: 1.25rem;
            color: ${color.currentColor};
          }
          
          .icon-quote {
            font-size: 0.95em;
            padding-right: 10px;
          }
          
          .author {
            text-align: right;
            padding-right: 0.9375em;
            font-size: 1em;
            color: ${color.currentColor};
          }

        }
    `

    return (
        <TextPageStyled>
            <div className="text">
                <FontAwesomeIcon className="icon-quote" icon={faQuoteLeft} /><span>{quote.text}</span>
            </div>
            <div className="author">
                -<span>{quote.author}</span>
            </div>
        </TextPageStyled>
    )
};

export default Quote;