import styled from 'styled-components';
import Github from '../../assets/fonts/icon/Github';
import Portfolio from '../../assets/fonts/icon/Portfolio';
import Logo from '../../assets/fonts/icon/LowesPrice';

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
        <p>
          관광학을 전공했고, <span style={{ fontWeight: 'bold' }}>사람들을 도와주는 일</span>을 하고 싶어 호텔, 국내여행가이드 일을 했습니다.
        </p>
        <p>
          서비스를 제공하는 것에서 이젠 <span style={{ fontWeight: 'bold' }}>좋은 서비스</span>를 만들고 싶어 개발자가 되려고 합니다.
        </p>
        <p>
          개발 공부를 시작하면서 꾸준히 공부한 내용을 블로그로 작성하고 있습니다. 매일 Tech 설명회를 챙겨보며 유지보수가 쉽고 중복 없는 '좋은 코드' 에 대한
          관점을 넓히기 위해 노력하고 있습니다.
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

        <h2 style={{ marginTop: '80px' }}>
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
              <TableKey>url</TableKey>
              <TableValue>
                <a style={{ marginTop: '4px' }} href='https://github.com/LowestPrice/LowestPrice-FE' target='_blank'>
                  <Github />
                </a>
                <a
                  style={{ marginTop: '6.5px' }}
                  href='https://www.notion.so/b3ff27aae197476cad5dab81a36abe42?v=fa1d6c9df5514467aaa23a3119b001ea'
                  target='_blank'
                >
                  <Portfolio />
                </a>
                <a style={{ marginTop: '5px' }} href='https://lowest-price.store/' target='_blank'>
                  <Logo />
                </a>
              </TableValue>
            </Table>

            <Content style={{ marginTop: '20px' }}>
              <ContentKey style={{ height: '421.6px' }}>
                <h4>What i did</h4>
                <h5>(맡은 역할)</h5>
              </ContentKey>
              <ContentValue>
                <div>
                  <span style={{ fontWeight: 'bold', fontSize: '15px' }}>웹 페이지 구현</span>
                  <li>메인, 제품상세, 검색결과, 로그인, 유저정보, 알림페이지를 제작했습니다.(60%)</li>
                  <li>
                    <span style={{}}>필터 기능 구현</span>

                    <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
                      <li>데이터의 방대한 양의 JS코드를 재활용하기 위해 props 를 통해 구분되는 공용 컴포넌트를 구현.</li>
                    </ul>
                  </li>

                  <li>
                    라이브러리 없이{' '}
                    <span style={{ textDecoration: 'underline' }}>
                      <a href='https://yngjnhyk.tistory.com/391' target='_blank'>
                        <span style={{ fontWeight: 'bold' }}>Carousel </span>기능 구현.
                      </a>
                    </span>
                    <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
                      <li>carousel 의 preview 를 구성하고, 삼항연산자로 각각 index 를 부여해 translateX 로 슬라이드를 구현했습니다.</li>
                    </ul>
                  </li>

                  <span style={{ fontWeight: 'bold', fontSize: '15px' }}>성능 최적화</span>
                  <li>
                    <span style={{ textDecoration: 'underline' }}>
                      <a href='https://yngjnhyk.tistory.com/396' target='_blank'>
                        <span style={{ fontWeight: 'bold' }}> 코드 스플리팅</span>을 통해 번들링 사이즈 17% 줄여{' '}
                      </a>
                    </span>
                    초기 로딩 속도를 개선.
                  </li>
                  <li>
                    <span style={{ fontWeight: 'bold' }}>시멘틱 태그</span>와 <span style={{ fontWeight: 'bold' }}>aria-label </span>등을 이용해 웹 접근성 개선.
                    <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
                      <li>웹 접근성을 고려하여, 청각 장애인을 위해 aria-label 속성 사용.</li>
                      <li>시멘틱 태그를 이용해 정보의 계층 구조를 명확히 했습니다.</li>
                    </ul>
                  </li>
                </div>
              </ContentValue>
            </Content>

            <Content>
              <ContentKey style={{ height: '384px' }}>
                <h4>TroubleShooting</h4>
              </ContentKey>
              <ContentValue>
                <span style={{ fontWeight: 'bold' }}>Infinite Scroll</span>
                <li>문제: 오래 걸리는 메인 페이지 초기 렌더링 시간(26,000ms)</li>
                <li>원인: 1,000개 이상의 데이터를 가장 처음 렌더링되는 메인 페이지에서 불러오면서 생긴 초기 렌더링 시간 이슈</li>
                <li>
                  해결: {/* 처음엔 문제의 원인을 정확히 파악하지 못하고, 코드 스플리팅에 대해 알아보던 중,  */}
                  <span style={{ textDecoration: 'underline' }}>
                    <a href='https://yngjnhyk.tistory.com/393' target='_blank'>
                      <span style={{ fontWeight: 'bold' }}>Intersection Observer </span>와 react-query 의
                      <span style={{ fontWeight: 'bold' }}> useInfinitequery </span>를 사용해 Lazy Loading 을 구현
                    </a>
                  </span>
                  하여 26000ms 의 로딩 속도를 1100ms 로 개선.
                </li>
                <span style={{ fontWeight: 'bold' }}>SEO(검색 엔진 최적화)</span>
                <li>문제: 구글 애널리틱스에서 유저유입 파악에 어려운 문제가 있었습니다.</li>
                <li>원인: 페이지들의 title 이 모두 같아서 유저의 유입을 구분짓기가 어려웠습니다.</li>
                <li>
                  해결: SEO 개선 및 유저 유입 파악을 위해 <span style={{ fontWeight: 'bold' }}>react-helmet </span>으로{' '}
                  <span style={{ textDecoration: 'underline' }}>
                    <a href='https://lookerstudio.google.com/embed/reporting/5de3b9a8-b75f-4b4e-9d48-e0bfd57aeb7e/page/4VDGB' target='_blank'>
                      페이지별 메타태그 설정 후, 구글 애널리틱스로 유저 유입 파악.
                    </a>
                  </span>
                </li>

                {/* <li>
                  <span style={{ fontWeight: 'bold' }}>React.memo, useCallback, useMemo 를 이용한 페이지 성능 최적화</span>
                  <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
                    <li>문제: 메인 페이지의 불필요한 리렌더링 발생</li>
                    <li>원인: '필터링' 기능에서 props 가 바뀔 때마다 불필요한 리렌더링으로 인한 성능 저하</li>
                    <li>
                      해결: 메모이제이션을 이용해 "컴포넌트는 React.memo, 함수는 useCallback, 값은 useMemo" 라는 가이드라인을 세워 불필요한 리렌더링 해결{' '}
                    </li>
                  </ul>
                </li> */}
              </ContentValue>
            </Content>

            <Content>
              <ContentKey style={{ height: '590px' }}>
                <h4>Review</h4>
                <h5>(회고)</h5>
              </ContentKey>
              <ContentValue>
                <div style={{ fontWeight: 'bold', fontSize: '15px' }}>소통하는 개발자</div>
                <li>
                  리더로서 프로젝트의 전반적인 진행상황을 파악하고, 팀원들이 효율적으로 소통할 수 있도록 조율하며 팀장으로서 역할을 수행했습니다. 적절한
                  마일스톤을 세우고, 이를 완수하기 위해 스탠드업 미팅을 아침, 저녁 한 번씩 가지며 효율적인 협업과 커뮤니케이션을 중요시하는 팀 문화를 형성하기
                  위해 노력했습니다. 이번을 계기로 앞으로도 책임과 신뢰를 기반으로 동료 개발자분들과 소통하고 싶은 그런 개발자의 모습을 보여줄 수 있을 것
                  같습니다.
                </li>
                <div style={{ fontWeight: 'bold', fontSize: '15px' }}>원인 파악하기 힘든 장애</div>
                <li>
                  담당했던 '무한스크롤' 기능에서 반복적인 장애가 있었습니다. 무한 스크롤 기능은 처음 사용해보는 기능이 두 가지여서 어느 한 곳에 문제가
                  일어났는지 파악하는 것부터 어려웠죠. 하지만, 아무리 살펴봐도 로직엔 문제가 없어 보였고, 이 장애로 인해 큰 스크레스를 받았습니다.{' '}
                  <span style={{ fontWeight: '600' }}>두 기능을 하나씩 동작시켜보며 하나의 기능에 좀 더 깊이 있게 이해할 수 있었던 것 같습니다.</span> 반복적인
                  상황이 지속되니 동료분들도 심적으로 육체적으로 많이 지쳤던 것 같아요. 그래도 계속해서 원인을 파악하기 위해 포기하지 않고, 이것저것 참 많이
                  시도를 했고, 결국 메모리릭을 발생시키는 원인을 파악하게 되었고, 백엔드 동료분과 api 를 조율해 해결할 수 있었습니다.{' '}
                  <span style={{ fontWeight: '600' }}>
                    장애는 개발자의 능력을 스텝업 시켜준다는 말이 정말 맞는 말 같습니다. 이런 트러블 슈팅들을 겪으면서 배운 것들이 제 스스로에게 너무 소중한
                    자산이 된 것 같습니다.
                  </span>
                </li>
              </ContentValue>
            </Content>
          </WorkExperienceItem>
        </WorkExperience>

        <h2 style={{ marginTop: '130px' }}>
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

        <h2 style={{ marginTop: '150px' }}>
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
  flex-direction: row;
  align-items: center;
  gap: 10px;
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
