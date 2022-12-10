import styled from "styled-components";
import { motion } from "framer-motion";

const CardBox = styled.div`
  width: 100%;
  height: 90%;
  @media screen and (max-width: 480px) {
    height: 90%;
  }
`;
const InnerCardBox = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  padding: 2rem;
  @media screen and (min-width: 481px) and (max-width: 850px) {
    width: 95%;
  }
`;

const Top = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
  @media screen and (min-width: 481px) and (max-width: 850px) {
  }
`;

const FirstCard = styled(motion.div)`
  margin-right: 20px;
  width: 300px;
  background-color: white;
  border-radius: 2rem;
  padding: 10px;
  cursor: pointer;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  height: 240px;
  margin-bottom: 20px;
  @media screen and (max-width: 480px) {
    margin: 20px auto;
  }
  @media screen and (min-width: 481px) and (max-width: 850px) {
    width: 200px;
  }
`;
const SecondCard = styled(motion.div)`
  margin-right: 20px;
  width: 300px;
  height: 340px;
  background-color: white;
  border-radius: 2rem;
  padding: 10px;
  cursor: pointer;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  @media screen and (max-width: 480px) {
    margin: 20px auto;
  }
  @media screen and (min-width: 481px) and (max-width: 850px) {
    width: 200px;
  }
`;
const ThirdCard = styled(motion.div)`
  height: 560px;
  width: 380px;
  background-color: white;
  border-radius: 2rem;
  padding: 10px;
  margin-right: 20px;
  cursor: pointer;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  @media screen and (max-width: 480px) {
    width: 300px;
    margin: 20px 0px;
  }
  @media screen and (min-width: 481px) and (max-width: 850px) {
    width: 420px;
  }
`;
const LastCard = styled(motion.div)`
  height: 220px;
  width: 320px;
  background-color: white;
  border-radius: 2rem;
  padding: 10px;
  cursor: pointer;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  margin-bottom: 20px;
  @media screen and (max-width: 480px) {
    width: 300px;
  }
  @media screen and (min-width: 481px) and (max-width: 850px) {
    width: 200px;
  }
`;
const CardName = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  font-size: 2.1rem;
  border-bottom: 3px solid rgba(0, 0, 0, 0.6);
  padding: 30px 0px;
  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
  @media screen and (min-width: 481px) and (max-width: 850px) {
    font-size: 1.6rem;
  }
`;
const CardDes = styled.div`
  width: 100%;
  height: 70%;
  margin-top: 20px;
`;
const ItemBox = styled.div`
  width: 100%;
  height: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 10px;
  align-items: center;
`;
const Item = styled.div`
  width: 95%;
  height: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 10px 0px;
`;

const FlexCard = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const hoverVar = {
  initial: {
    y: 0,
  },
  animate: {
    y: -10,
  },
};

const Skill = () => {
  return (
    <>
      <CardBox>
        <InnerCardBox>
          <Top>
            <FlexCard>
              <FirstCard
                variants={hoverVar}
                initial="initial"
                whileHover="animate"
              >
                <CardName>Language</CardName>
                <CardDes>
                  <ItemBox>
                    <Item
                      style={{
                        backgroundImage:
                          "url('https://cdn-icons-png.flaticon.com/512/1199/1199124.png')",
                      }}
                    />
                    <Item
                      style={{
                        backgroundImage:
                          "url('https://cdn-icons-png.flaticon.com/512/5968/5968381.png')",
                      }}
                    />
                  </ItemBox>
                </CardDes>
              </FirstCard>
              <SecondCard
                variants={hoverVar}
                initial="initial"
                whileHover="animate"
              >
                <CardName style={{ fontSize: "1.6rem" }}>
                  FrameWork / Library
                </CardName>
                <CardDes>
                  <ItemBox>
                    <Item
                      style={{
                        backgroundImage:
                          "url('https://cdn-icons-png.flaticon.com/512/1260/1260667.png')",
                      }}
                    />
                    <Item
                      style={{
                        backgroundImage:
                          "url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png')",
                      }}
                    />
                  </ItemBox>
                  <ItemBox>
                    <Item
                      style={{
                        backgroundImage:
                          "url('https://velog.velcdn.com/images/dev_song99/post/c41362da-82b5-4fa9-999d-c91949f28a0a/image.png')",
                      }}
                    />
                    <Item
                      style={{
                        backgroundImage:
                          "url('data:image/png;base64,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')",
                      }}
                    />
                  </ItemBox>
                </CardDes>
              </SecondCard>
            </FlexCard>
            <ThirdCard
              variants={hoverVar}
              initial="initial"
              whileHover="animate"
            >
              <CardName style={{ fontSize: "1.6rem" }}>Mark Up</CardName>
              <CardDes>
                <ItemBox style={{ height: "30%" }}>
                  <Item
                    style={{
                      backgroundImage:
                        "url('https://cdn-icons-png.flaticon.com/512/888/888859.png')",
                    }}
                  />
                  <Item
                    style={{
                      backgroundImage:
                        "url('https://cdn-icons-png.flaticon.com/512/888/888847.png')",
                    }}
                  />
                </ItemBox>
                <ItemBox style={{ height: "30%" }}>
                  <Item
                    style={{
                      backgroundImage:
                        "url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png')",
                    }}
                  />
                  <Item
                    style={{
                      backgroundImage:
                        "url('https://i.ibb.co/ydkG6cv/img.png')",
                    }}
                  />
                </ItemBox>
                <ItemBox style={{ height: "30%" }}>
                  <Item
                    style={{
                      backgroundImage:
                        "url('https://velog.velcdn.com/images/mopevxw/post/364fbd64-0203-482d-a8b3-83030c823fbf/image.png')",
                    }}
                  />
                </ItemBox>
              </CardDes>
            </ThirdCard>
            <FlexCard>
              <LastCard
                variants={hoverVar}
                initial="initial"
                whileHover="animate"
              >
                <CardName>DataBase</CardName>
                <CardDes style={{ height: "80%" }}>
                  <ItemBox style={{ height: "60%" }}>
                    <Item
                      style={{
                        backgroundImage:
                          "url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png')",
                      }}
                    />
                    <Item
                      style={{
                        backgroundImage:
                          "url('https://cms-assets.tutsplus.com/uploads/users/34/posts/29527/preview_image/mongoose.jpg')",
                      }}
                    />
                  </ItemBox>
                </CardDes>
              </LastCard>
              <LastCard
                variants={hoverVar}
                initial="initial"
                whileHover="animate"
              >
                <CardName>Tool</CardName>
                <CardDes style={{ height: "80%" }}>
                  <ItemBox>
                    <Item
                      style={{
                        backgroundImage:
                          "url('https://cdn.iconscout.com/icon/free/png-256/git-1-226092.png')",
                      }}
                    />
                    <Item
                      style={{
                        backgroundImage:
                          "url('https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png')",
                      }}
                    />
                  </ItemBox>
                </CardDes>
              </LastCard>
              <LastCard
                variants={hoverVar}
                initial="initial"
                whileHover="animate"
              >
                <CardName>Deployment</CardName>
                <CardDes style={{ height: "80%" }}>
                  <ItemBox>
                    <Item
                      style={{
                        backgroundImage:
                          "url('data:image/png;base64,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')",
                      }}
                    />
                    <Item
                      style={{
                        backgroundImage:
                          "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Heroku_logo.svg/2560px-Heroku_logo.svg.png')",
                      }}
                    />
                  </ItemBox>
                </CardDes>
              </LastCard>
            </FlexCard>
          </Top>
        </InnerCardBox>
      </CardBox>
    </>
  );
};

export default Skill;
