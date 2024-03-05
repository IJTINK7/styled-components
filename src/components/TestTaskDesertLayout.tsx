import React from 'react';
import styled from "styled-components";
import desertImage from "./../assets/images/DesertPicture.svg"

export const TestTaskDesertLayout = () => {
	return (
		<DesertBox>
			<DesertImage src={desertImage} alt={"desertImage"}/>
			<Headline>Headline</Headline>
			<DesertBoxTest>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</DesertBoxTest>
			<DesertBoxButtonsContainer>
				<DesertBoxSeeMoreButton>See more</DesertBoxSeeMoreButton>
				<DesertBoxSaveButton>Save</DesertBoxSaveButton>
			</DesertBoxButtonsContainer>
		</DesertBox>
	);
};

const DesertBox = styled.div`
  margin: 0 auto;
  background-color: #FFF;
  border-radius: 15px;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 10px 10px;
`
const DesertImage = styled.img`
  border-radius: 10px;
`
const Headline = styled.h1`
  color: rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0;
  text-align: left;
  margin-left: 10px;
`
const DesertBoxTest = styled.p`
  color: rgb(171, 179, 186);
  font-family: Inter,serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  margin-left: 10px ;
`
const DesertBoxButtonsContainer = styled.div`
  display: flex;
  margin-left: 10px;
  button + button{
	margin-left: 12px;
  }
`

const DesertBoxSeeMoreButton = styled.button`
  border-radius: 5px;
  background: rgb(78, 113, 254);
  padding: 4px 20px 6px;
  border: 2px solid #4E71FEFF;
  color: rgb(255, 255, 255);
  font-family: "Inter",serif;
  font-size: 10px;
  font-weight: 700;
  line-height: 15px;
  text-align: left;
`

const DesertBoxSaveButton = styled(DesertBoxSeeMoreButton)`
  color:rgb(78, 113, 254);
  background-color: #FFF;
  padding: 4px 31px 6px;
`