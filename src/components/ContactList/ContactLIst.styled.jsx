import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
  margin: 5px 0;
  width: 100%;
  border-radius: 5px;
  background-color: #e8e8e8;
  box-shadow: rgb(0, 0, 0) 0px 3px 5px;
  transition: all 300ms;

  &:hover {
    background-color: #6e6e6e;
    scale: 1.05;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.885) 0px 7px 10px;
  }
  &:hover img {
    box-shadow: rgba(255, 255, 255, 0.4) 0px 0px 15px;
  }
`;
export const Avatar = styled.img`
  margin-left: 10px;
  width: 40px;
  border-radius: 50px;
  transition: all 250ms;
`;

export const UserInfo = styled.p`
  margin-left: 15px;
`;

export const DeleteBtn = styled.button`
  max-height: 25px;
  margin-left: auto;
  margin-right: 5px;
  margin-right: 15px;
  border: 1px solid #a7a7a7ec;
  border-radius: 5px;
 
  /* background-color: transparent; */
  transition: all 250ms;

  &:hover {
    color: #ffffff;
    background-color: #000000;
    box-shadow: rgb(255, 254, 254) 0px 0px 3px;
  }
`;
