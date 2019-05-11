import styled from 'styled-components';

const borderColor = '#efd2d2';

export const Header = styled.h1`
  font-size: 30px;
  margin: 40px 0;
`;

export const Main = styled.main`
  width: 50%;
  margin: 20px auto;
  padding: 30px;
`;

export const Input = styled.input`
  padding: 4px 8px;
  box-shadow: none;
  outline: none;
  border: 1px solid #e7e7e7;
  font-size: 18px;
  min-width: 0;
  flex: 4;
  width: 100%;

  &:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
  }
`;

export const Flex = styled.div`
  display: flex;
`;

export const SearchButton = styled.button`
  margin-left: 2px;
  cursor: pointer;
  background: #15cd72;
  border: 0;
  color: white;
  font-weight: 600;
  border-radius: 0 3px 3px 0;
  transition: opacity 0.4s;
  font-size: 18px;
  white-space: nowrap;
  flex: 1;

  &:hover {
    background: #0cb863;
  }
`;

export const MovieCard = styled.div`
  border: 1px solid #eee;
  /* margin: 10px 0; */
  background: white;
  color: black;
  box-shadow: 0 0 5px rgba(81, 203, 238, 1);

  /* width: 240px; */
  height: 380px;

  .poster-container {
    width: 100%;
    height: 100%;

    .poster-wrapper {
      position: relative;
      width: 100%;
      height: 100%;

      .poster {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        border: 0;
        bottom: 0;
        background: 50% 50% / cover no-repeat;
        width: 100%;
        height: auto;
      }
    }
  }
`;

export const ResultList = styled.div`
  margin: 30px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
`;
