import styled from 'styled-components';

type Props = {};

function Profile({}: Props) {
  // const userInfoList = [
  //   { content: 'Blog | https://yngjnhyk.tistory.com/' },
  //   { content: 'Portfolio | https://www.notion.so/93659abf7dde4df487199796cec747af' },
  //   { content: 'Github | https://github.com/yngjnhykk' },
  // ];

  return (
    <div>
      <InfoArticle>
        <TitleContent>
          <h1>안녕하세요, 양진혁 입니다.</h1>
          <PersonalLinks>
            <a href='https://yngjnhyk.tistory.com' target='_blank'>
              https://yngjnhyk.tistory.com
            </a>
            &nbsp;/&nbsp;
            <a href='https://github.com/yngjnhykk' target='_blank'>
              https://github.com/yngjnhykk
            </a>
            &nbsp;/&nbsp;
            <a href='dskzpbmk@naver.com' target='_blank'>
              dskzpbmk@naver.com
            </a>
          </PersonalLinks>
        </TitleContent>
        <p>사람들의 생활을 편리하게 만들어주는 웹 서비스, Design System 그리고 독서를 좋아하는 개발자입니다.</p>
        <p>
          개발 공부를 시작하면서 공부한 내용을 담은 블로그를 작성하고 있습니다. 매일 Tech 설명회를 챙겨보며 유지보수가 쉽고 중복 없는 코드에 대한 고민합니다.
          변경에 유연하게 대응할 수 있는 설계, 시스템, 테스트, 자동화에 대한 투자가 중요하다고 믿고, 이 요소들이 제품 개선과 함께 갈 수 있다고 생각합니다.
        </p>
        <p>프론트엔드 개발자로 도전하는 결단력과 지속적인 학습 의지를 갖추어, 개발자에 대한 열망을 통해 미래에 더 나은 전문성을 쌓아가고자 합니다.</p>

        <h2>
          <span>Skills</span>
        </h2>
        <WorkExperience>
          <Content>
            <ContentKey>
              <h4>Frontend</h4>
            </ContentKey>
            <ContentValue>
              <li>HTML5, CSS3, JavaScript</li>
              <li>React</li>
              <li>Typescript</li>
              <li>Redux, styled-components, react-query</li>
              <li>Vite</li>
            </ContentValue>
          </Content>
        </WorkExperience>

        <h2>
          <span>Projects Experience</span>
        </h2>
        <WorkExperience>
          <WorkExperienceItem>
            <h3>
              <a>내일은 최저가</a>
              <div>(2023.10 ~ 2023.11)</div>
            </h3>
            <span>
              쿠팡 Apple 제품의 <span style={{ fontWeight: 'bold', color: 'orange' }}>Dynamic Pricing</span> 을 추적해 최적의 구매 타이밍을 알려주는{' '}
              <span style={{ fontWeight: 'bold' }}>검색 사이트</span>
              입니다.
            </span>
            <Table style={{ borderTop: '1px solid hsla(0, 0%, 0%, 0.12)', marginTop: '21px' }}>
              <TableKey>position</TableKey>
              <TableValue>FE, 팀 리더</TableValue>
            </Table>
            <Table>
              <TableKey>skills</TableKey>
              <TableValue>React, TypeScript, styled-components, react-query, vite</TableValue>
            </Table>
            <Table>
              <TableKey>github</TableKey>
              <TableValue>
                <a href='https://github.com/LowestPrice/LowestPrice-FE' target='_blank'>
                  https://github.com/LowestPrice/LowestPrice-FE
                </a>
              </TableValue>
            </Table>
            <Table>
              <TableKey>service URL</TableKey>
              <TableValue>
                <a href='https://lowest-price.store/' target='_blank'>
                  https://lowest-price.store
                </a>
              </TableValue>
            </Table>
            <Table>
              <TableKey>portfolio</TableKey>
              <TableValue>
                <a href='https://www.notion.so/b3ff27aae197476cad5dab81a36abe42?v=fa1d6c9df5514467aaa23a3119b001ea' target='_blank'>
                  https://www.notion.so/b3ff27aae197476cad5dab81a36abe42?v=fa1d6c9df5514467aaa23a3119b001ea
                </a>
              </TableValue>
            </Table>
            <Content>
              <ContentKey style={{ height: '432px' }}>
                <h4>What i did</h4>
                <h5>(맡은 역할)</h5>
              </ContentKey>
              <ContentValue>
                <div>메인, 제품상세, 검색결과, 로그인, 유저정보, 알림페이지를 제작했습니다.</div>
                <div style={{ paddingTop: '10px' }}>
                  <li>
                    1,000개 이상의 데이터를{' '}
                    <span style={{ textDecoration: 'underline' }}>
                      <span style={{ fontWeight: 'bold' }}>Intersection Observer </span>와 react-query 의
                      <span style={{ fontWeight: 'bold' }}> useInfinitequery </span>를 사용해{' '}
                      <a href='https://yngjnhyk.tistory.com/393' target='_blank' style={{ color: '#9b9a97' }}>
                        Lazy Loading{' '}
                      </a>
                      을 구현
                    </span>
                    하여 26000ms 의 로딩 속도를 1100ms 로 개선.
                  </li>
                  <li>React.memo, useCallback, useMemo 를 이용한 불필요한 리렌더링 관리.</li>
                  <li>
                    <span style={{ textDecoration: 'underline' }}>
                      <span style={{ fontWeight: 'bold' }}>코드 스플리팅</span>을 통해 번들링 사이즈 17% 줄여{' '}
                    </span>
                    <a href='https://yngjnhyk.tistory.com/396' target='_blank' style={{ color: '#9b9a97' }}>
                      초기 로딩 속도를 개선.
                    </a>
                  </li>

                  <li>
                    <span style={{ fontWeight: 'bold' }}>시멘틱 태그</span>와 <span style={{ fontWeight: 'bold' }}>aria-label </span>등을 이용해 웹 접근성 개선.
                    <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
                      <li>웹 접근성을 고려하여, 청각 장애인을 위해 aria-label 속성 사용.</li>
                      <li>시멘틱 태그를 이용해 정보의 계층 구조를 명확히 했습니다.</li>
                    </ul>
                  </li>
                  <li>
                    라이브러리 없이{' '}
                    <span style={{ textDecoration: 'underline', color: '#9b9a97' }}>
                      <a href='https://yngjnhyk.tistory.com/391' target='_blank'>
                        Carousel 기능 구현.
                      </a>
                    </span>
                    <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
                      <li>carousel 의 preview 를 구성하고, 삼항연산자로 각각 index 를 부여해 translateX 로 슬라이드를 구현했습니다.</li>
                    </ul>
                  </li>
                  <li>
                    SEO 개선 및 유입 증진을 위해 <span style={{ fontWeight: 'bold' }}>react-helmet </span>으로{' '}
                    <span style={{ textDecoration: 'underline' }}>
                      페이지별 메타태그 설정 후,{' '}
                      <a
                        href='https://lookerstudio.google.com/embed/reporting/5de3b9a8-b75f-4b4e-9d48-e0bfd57aeb7e/page/4VDGB'
                        target='_blank'
                        style={{ color: '#9b9a97' }}
                      >
                        구글 애널리틱스로{' '}
                      </a>
                      유저 유입 파악.
                    </span>
                  </li>
                </div>
              </ContentValue>
            </Content>

            <Content>
              <ContentKey style={{ height: '398px' }}>
                <h4>Review</h4>
                <h5>(회고)</h5>
              </ContentKey>
              <ContentValue>
                <li>
                  (리더로서) 팀장을 맡아 프로젝트를 진행하는 것이 처음엔 낮설었습니다. 프로젝트의 전반적인 진행상황을 파악하고, 팀원들이 효율적으로 소통할 수
                  있도록 조율하며 팀장으로서 역할을 수행했습니다. 또한 적절한 마일스톤을 세우고, 이를 완수하기 위해 스탠드업 미팅을 아침, 저녁 한 번씩 가지며
                  효율적인 협업과 커뮤니케이션을 중요시하는 팀 문화를 형성하기 위해 노력했습니다. 이번을 계기로 다음 프로젝트에서는 더 나은 개발자의 모습을
                  보여줄 수 있을 것 같습니다.
                </li>
                <li>
                  (삶을 윤택하게 만드는 개발자) 기획부터 설계, 개발까지 항상 고민했던 건 '우리 서비스는 정말 필요로 하는 서비스일까?' 였습니다. 서비스가
                  완성되고, 멘토님의 '정말 도움이 되는 서비스인 것 같다' 라는 평가를 받고, 개발하면서 고민을 했던 수 많은 부분이 이용하는 사용자에게 전달이
                  되었다는 생각에 프로젝트하는 기간 내에 가장 뿌듯한 순간이었습니다. 앞으로 개발자의 꿈을 향해 가는 길에 이러한 가치관을 이룰 수 있는 수많은
                  프로젝트에 도전하고 싶습니다.
                </li>
              </ContentValue>
            </Content>
          </WorkExperienceItem>
        </WorkExperience>
        <h2 style={{ marginTop: '180px' }}>
          <span>Education</span>
        </h2>
        <WorkExperience>
          <Content>
            <ContentKey style={{ height: '163px' }}>
              <h4 style={{ marginTop: '10px' }}>스파르타 코딩클럽,</h4>
              <h4> 항해 99 풀타임</h4>
              <h5 style={{ marginTop: '10px' }}>
                <a
                  href='https://hanghae99.spartacodingclub.kr/v2/fullTime?utm_source=google&utm_medium=bs&utm_campaign=hh&utm_content=brand&utm_term=%27%ED%95%AD%ED%95%B499%27&gcl_keyword=%27%ED%95%AD%ED%95%B499%27&gcl_network=g&gad_source=1&gclid=Cj0KCQiAjMKqBhCgARIsAPDgWlxhjGZDm_6nabEEqUahEUkV5piUlpZxdkqIj2OKl_FvTK1U70eiU3caAqIFEALw_wcB'
                  target='_blank'
                  style={{ color: '#9b9a97', fontWeight: '500', textDecoration: 'underline', marginTop: '10px' }}
                >
                  과정 안내
                </a>
              </h5>
              <h5 style={{ fontWeight: '500', marginTop: '10px' }}>2023.06 ~ 2023.11</h5>
            </ContentKey>
            <ContentValue>
              <li>스파르타 코딩클럽에서 진행한 개발자 양성 교육 과정</li>
              <ul style={{ listStyleType: 'circle', paddingLeft: '40px' }}>
                <li>99일 주 100시간 교육</li>
                <li>JS 심화, CSS 심화, React, Typescript</li>
                <li>FE, BE, Designer 로 구성된 팀 프로젝트를 통한 협업</li>
              </ul>
            </ContentValue>
          </Content>
          <Content style={{ marginTop: '70px', marginBottom: '20px' }}>
            <ContentKey>
              <h4>동의대학교</h4>
              <h5 style={{ fontWeight: '500', marginTop: '10px' }}>2016.03 ~ 2021.02</h5>
            </ContentKey>
            <ContentValue style={{ height: '62px' }}>
              <li>국제관광경영학과 졸업</li>
            </ContentValue>
          </Content>
        </WorkExperience>

        <h2 style={{ marginTop: '50px' }}>
          <span>Work Experience</span>
        </h2>
        <WorkExperience>
          <Content>
            <ContentKey style={{ height: '138px' }}>
              <h4 style={{ marginTop: '10px' }}>부산롯데호텔</h4>
              <h5 style={{ fontWeight: '500', marginTop: '30px' }}>2019.02 ~ 2020.02(1년)</h5>
            </ContentKey>
            <ContentValue>
              <li>[F&B] 라운지 바에서 지원사원으로 근무</li>
              <li>서비스 분야로, 학습과 현업을 병행하며 현장에서 일을 체화시키는 경험</li>
              <li>라운지 바 외 파인다이닝 레스토랑, 뷔페, 연회장 등 다양한 곳에서 여러 사람들과 협업 </li>
            </ContentValue>
          </Content>
          <Content style={{ marginBottom: '20px' }}>
            <ContentKey>
              <h4 style={{ marginTop: '10px' }}>부산테마여행사</h4>
              <h5 style={{ fontWeight: '500', marginTop: '30px' }}>2018.11 ~ 2019.03</h5>
            </ContentKey>
            <ContentValue>
              <li>국내관광가이드 근무</li>
              <li>고객과 원활한 의사소통을 할 수 있는 능력과 돌발상황에 대한 대처능력.</li>
            </ContentValue>
          </Content>
        </WorkExperience>
      </InfoArticle>
    </div>
  );
}

export default Profile;

const InfoArticle = styled.div`
  p {
    font: 100%/1.625 -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    -webkit-text-size-adjust: 100%;
    color: hsla(0, 0%, 0%, 0.8);
    font-weight: 400;
    word-wrap: break-word;
    font-kerning: normal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-bottom: 0.8125rem;
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    font-size: 14px;
  }
  h2 {
    margin-bottom: 0.5em;
    border-bottom: 0;
    margin-top: 1.5em;
    font-family: 'Catamaran', sans-serif;
    font-size: 25px;
    font-weight: 700;
    color: #0687f0;
    opacity: 0.8;
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
  }
`;

const TitleContent = styled.div`
  width: 100%;
  padding-top: 60px;
  h1 {
    font: 100%/1.625 -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    -webkit-text-size-adjust: 100%;
    line-height: 1.2;
    font-weight: 600;
    text-rendering: optimizeLegibility;
    font-size: 28px;
  }
`;

const PersonalLinks = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  a {
    font: 100%/1.625 -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    -webkit-text-size-adjust: 100%;
    opacity: 0.5;
    color: #0687f0;
    text-decoration: none;
    box-shadow: none;
  }
`;

const WorkExperience = styled.div`
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
`;

const WorkExperienceItem = styled.div`
  font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  h3 {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* color: #0687f0; */
    a {
      /* color: #0687f0; */
      text-decoration: none;
      box-shadow: none;
    }
    div {
      font-size: 18px;
      font-weight: 300;
      margin-left: auto;
      color: #9b9a97;
    }
  }
  table {
    font-family: Noto Sans KR, sans-serif;
    width: 100%;
  }
`;

const Table = styled.div`
  width: 100%;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
  display: flex;
  flex-direction: row;
  align-items: center;
  border-right: 1px solid hsla(0, 0%, 0%, 0.12);
`;

const TableKey = styled.div`
  width: 100.886px;
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 0px;
  text-align: left;
  padding-right: 1.08333rem;
  padding-left: 0.3rem;

  font-weight: 600;
  border-left: 1px solid hsla(0, 0%, 0%, 0.12);
`;
const TableValue = styled.div`
  width: 100%;
  height: 45px;
  font-family: Noto Sans KR, sans-serif;
  padding-left: 0.3rem;
  border-left: 1px solid hsla(0, 0%, 0%, 0.12);
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  a {
    text-decoration: underline;
    font-size: 13px;
    /* color: gray; */
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

const ContentKey = styled.div`
  min-width: 136px;
  /* border-right: 1px solid hsla(0, 0%, 0%, 0.12); */
  h4 {
    font-weight: 600;
    font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  }
`;
const ContentValue = styled.div`
  padding-left: 30px;
  font-size: 15px;
  font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';

  li {
    margin-left: 15px;
    margin-bottom: 10px;
    li {
      color: black;
      border: 1px;
      border-color: black;
      margin-bottom: -5px;
    }
  }
`;
