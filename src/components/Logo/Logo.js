import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import SpacerGif from '../SpacerGif';

const Logo = () => {
  return (
    <Wrapper href="/">
      <CircleImage>
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="36"
            height="36"
          >
            <circle cx="18" cy="18" r="18" fill="#E42E00" />
          </mask>
          <g mask="url(#mask0)">
            <circle cx="18" cy="18" r="18" fill="#F8B608" />
            <path
              d="M9 8.25C4.86174 8.01866 2.25 4.5 2.25 4.5L-4.5 19.125L-1.125 43.125L34.5 40.875L48.75 18L22.875 -1.125C22.875 -1.125 15.3078 8.60262 9 8.25Z"
              fill="#F19F45"
            />
            <path
              d="M0.375 19.6651C-6.375 17.4151 -3 9.54007 -3 9.54007L-6 8.79007C-2.875 19.7901 3.45 41.9401 3.75 42.5401C4.05 43.1401 25.125 37.7901 35.625 35.0401L40.5 7.29007C40.5 7.29007 30.375 2.24998 22.5 5.62498C17.9234 7.58637 17.3406 7.49997 15 13.125C12.6594 18.75 7.125 21.9151 0.375 19.6651Z"
              fill="#DD6C2B"
            />
            <path
              d="M8.25 28.5C2.93038 28.8442 -1.875 25.875 -1.875 25.875L7.125 41.25L38.625 38.25L41.25 8.25002C41.25 8.25002 28.875 7.12502 24 9.75002C19.125 12.375 18 13.875 18 18.375C18 22.875 13.7279 28.1456 8.25 28.5Z"
              fill="#CB5C34"
            />
            <path
              d="M11.625 33.75C6.39921 34.0301 1.875 30.75 -1.125 29.625V39C6.375 40.625 21.525 43.8 22.125 43.5C22.725 43.2 35.375 35.875 41.625 32.25L38.625 10.875C38.625 10.875 31.4975 12.5447 28.5 15.75C25.1153 19.3694 27.75 23.25 24.375 27.75C21 32.25 17.1201 33.4555 11.625 33.75Z"
              fill="#B03212"
            />
          </g>
        </svg>
      </CircleImage>

      <SpacerGif size={16} />

      <Title>MadeUp Corp</Title>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  display: flex;
  text-decoration: none;
  color: ${COLORS.black};
`;

const CircleImage = styled.div`
  display: block;
  width: 36px;
  height: 36px;
`;

const Title = styled.h1`
  font-size: 24px;
  line-height: 32px;
  font-weight: 900;
`;

export default Logo;
