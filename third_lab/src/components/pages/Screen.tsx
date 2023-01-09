import styled from "styled-components";
import {FC} from "react";
export const Screen: FC = () => {
    const numb = 1562;
    return (
        <div>
            <UpScreen>
                <Title>Characters</Title>
                <ArrayCards>({numb})</ArrayCards>
            </UpScreen>
            <SearchCharacters>
                <Input placeholder='Search for characters by name' type="text"/>
                <Button>SEARCH</Button>
            </SearchCharacters>
            <Line></Line>
            <div>

            </div>
        </div>

    );
}

export const UpScreen = styled.div`
  display: flex;
`

export const Title = styled.h1`
  padding-left: 2%;
  font-weight: bolder;
  font-size: 40px;
  font-family: Calibri, serif;
  opacity: 90%;
`

export const ArrayCards = styled.h1`
  padding: 18px 0 0 10px;
  opacity: 60%;
  font-weight: bold;
`

export const SearchCharacters = styled.div`
  padding: 0 2% 20px 2%;
  margin-top: -15px;
  display: flex;
`

export const Input = styled.input`
  width: 1450px;
  height: 40px;
  font-size: 20px;
  padding-left: 15px;
  opacity: 60%;
`

export const Button = styled.button`
  margin-left: 2%;
  width: 265px;
  border: 0;
  background: #efad4d;
  color: white;
  font-size: 18px;
`

export const Line = styled.hr`
  margin: 20px 46px 10px 2%;
  opacity: 30%;
`