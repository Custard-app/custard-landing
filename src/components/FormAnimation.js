import React from 'react';
import styled, { keyframes, css } from "styled-components";
import "../css/form.css";
import "../css/FormAnimation.css";

const FormAnimation = () => {
  const row1 = [
    ".  CUSTARD : GROW YOUR COMMUNITY   .",
    ".  CUSTARD : GROW YOUR COMMUNITY   .",
  ];

  const row2 = [
    ".  CUSTARD : GROW YOUR COMMUNITY   .",
    ".  CUSTARD : GROW YOUR COMMUNITY   .",
  ];

  return (
    <section>
    <AppContainer className='AppContainer'>
      <Wrapper className='wrapper'>
        <Texthead className='texthead'>A PLATFORM THAT ADAPTS TO YOU</Texthead>
        <Marquee className='marqueetext'>
          <MarqueeGroup>
            {row1.map((el) => (
              <Text1>{el}</Text1>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <Text1><Dark>{el}</Dark></Text1>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <Text1>{el}</Text1>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <Text1><Dark>{el}</Dark></Text1>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee className='marqueetext'>
          <MarqueeGroup2>
            {row2.map((el) => (
              <Text2>{el}</Text2>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <Text2><Dark>{el}</Dark></Text2>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <Text2>{el}</Text2>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <Text2><Dark>{el}</Dark></Text2>
            ))}
          </MarqueeGroup2>
        </Marquee>
        <Marquee className='marqueetext'>
          <MarqueeGroup>
            {row1.map((el) => (
              <Text3>{el}</Text3>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <Text3><Dark>{el}</Dark></Text3>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <Text3>{el}</Text3>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <Text3><Dark>{el}</Dark></Text3>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee className='marqueetext'>
          <MarqueeGroup2>
            {row2.map((el) => (
              <Text4>{el}</Text4>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <Text4><Dark>{el}</Dark></Text4>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <Text4>{el}</Text4>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <Text4><Dark>{el}</Dark></Text4>
            ))}
          </MarqueeGroup2>
        </Marquee>
        <Marquee className='marqueetext'>
          <MarqueeGroup>
            {row1.map((el) => (
              <Text5>{el}</Text5>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <Text5><Dark>{el}</Dark></Text5>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <Text5>{el}</Text5>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <Text5><Dark>{el}</Dark></Text5>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee className='marqueetext'>
          <MarqueeGroup2>
            {row2.map((el) => (
              <Text6>{el}</Text6>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <Text6><Dark>{el}</Dark></Text6>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <Text6>{el}</Text6>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <Text6><Dark>{el}</Dark></Text6>
            ))}
          </MarqueeGroup2>
        </Marquee>
        <Marquee className='marqueetext'>
          <MarqueeGroup>
            {row1.map((el) => (
              <Text7>{el}</Text7>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <Text7><Dark>{el}</Dark></Text7>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <Text7>{el}</Text7>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <Text7><Dark>{el}</Dark></Text7>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Box>
        <div className="form-container">
            <div className="form-container-1">
              <h1 className="form-text">JOIN THE WAITLIST</h1>
              <p>Custard will get back to you soon.</p>
            </div>
            <div className='super-text'>
              <h1>Join The Waitlist</h1>
            
            </div>
            <div className="form-container-2">
              <form className="form">
               
                <div className="flex">
                  <label>
                    <span className='name-span'>Name</span>
                    <input
                      className="input"
                      type="text"
                      placeholder=""
                      required=""
                    />
                  </label>
                </div>
                <div className="flex">
                  <label>
                    <span>Community Name</span>
                    <input
                      className="input"
                      type="text"
                      placeholder=""
                      required=""
                    />
                  </label>
                </div>
                <div className="flex">
                  <label>
                    <span>About Community</span>
                    <input
                      className="input"
                      type="text"
                      placeholder=""
                      required=""
                    />
                  </label>
                </div>
                <div className="flex">
                  <label>
                    <span>PhoneNumber</span>
                    <input
                      className="input"
                      type="tel"
                      placeholder=""
                      required=""
                    />
                  </label>
                </div>

               
                
                <button
                  className="submit
              "
                >
                  Verify
                </button>
              </form>
            </div>
          </div>
        </Box>
      </Wrapper>
    </AppContainer>
    </section>
  );
}

export default FormAnimation

const Box = styled.div`
    display:flex;
    position:absolute;
    justify-content:center;
`;

const Texthead = styled.div`
  font-size:5rem;
  color:#ff7e27;
  font-weight: 500;

`;

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  color: #000000;
  display: flex;
  background: #393939;
  overflow-x:hidden;
  overflow-y:hidden;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = css`
  display:flex;
  justify-content:space-evenly;
  font-size: 7rem;
  font-weight: 500;
  margin:-25px 0 -25px 0;
`;

const Text1 = styled.div`
    ${Text}
    color:#F2F2F2;
    opacity:0.09;
`;

const Text2 = styled.div`
    ${Text}
    color:#F2F2F2;
    opacity:0.25;
`;

const Text3 = styled.div`
    ${Text}
    color:#F2F2F2;
    opacity:0.45;
`;

const Text4 = styled.div`
    ${Text}
    color:#F2F2F2;
    opacity:0.6;
`;

const Text5 = styled.div`
    ${Text}
    color:#F2F2F2 ;
    opacity:0.85;
`;
const Text6 = styled.div`
    ${Text}
    color:#F2F2F2 ;
    opacity:0.95;
`;

const Text7 = styled.div`
    ${Text}
    color:#F2F2F2;
    opacity:1;
`;

const Dark = styled.div`
    ${Text}
    font-weight:bolder;
`;


const Marquee = styled.div`
  display: flex;
  width: 1200px;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  animation: ${scrollX} 100s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;