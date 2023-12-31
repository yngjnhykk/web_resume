import styled from 'styled-components';
import Github from '../../assets/icon/Github';
import Notion from '../../assets/icon/Notion';
import LowesPrice from '../../assets/icon/LowesPrice';
import Tistory from '../../assets/icon/Tistory';
import Email from '../../assets/icon/Email';
import Phone from '../../assets/icon/Phone';
import profileImage from '../../assets/profileImage.jpg';
import Link from '../../assets/icon/Link';

type Props = {};

function Profile({}: Props) {
  return (
    <div>
      <InfoArticle>
        <TitleContent style={{ marginBottom: '30px' }}>
          <h1>안녕하세요, 프론트엔드 양진혁 입니다.</h1>
        </TitleContent>
        <Content>
          <ContentKey style={{ minWidth: '200px' }}>
            <img style={{ height: '218px' }} src={profileImage}></img>
          </ContentKey>
          <ContentValue style={{ fontWeight: '400', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <h2 style={{ border: 'none', margin: '0px', fontSize: '20px', marginTop: '-10px' }}>Contact</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '4px', alignItems: 'center' }}>
                <Email /> | dskzpbmk@naver.com{' '}
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '4px', alignItems: 'center' }}>
                <Phone /> | 010-7518-2910
              </div>
            </div>

            <h2 style={{ border: 'none', margin: '0px', marginTop: '10px', fontSize: '20px' }}>Channel</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href='https://yngjnhyk.tistory.com' target='_blank' style={{ textDecoration: 'underline', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Tistory /> | https://yngjnhyk.tistory.com
              </a>
              <a href='https://github.com/yngjnhykk' target='_blank' style={{ textDecoration: 'underline', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Github /> | https://github.com/yngjnhykk
              </a>
            </div>
          </ContentValue>
        </Content>

        <h2>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div>Introduce</div>
          </div>
        </h2>
        <WorkExperience style={{ paddingTop: '20px', paddingBottom: '20px' }}>
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
        </WorkExperience>

        <h2>
          <div>Skills</div>
        </h2>
        <WorkExperience>
          <Content>
            <ContentKey style={{ height: '222px' }}>
              <h4>Frontend</h4>
            </ContentKey>

            <ContentValue style={{ fontWeight: '600' }}>
              <li>HTML5, CSS3, JavaScript</li>
              <li>React, Redux, styled-components, react-query</li>
              <li>Typescript</li>
              <li>Vite</li>
              <li>GitHube</li>
              <li>Figma</li>
            </ContentValue>
          </Content>
        </WorkExperience>

        <h2>
          <span>Projects Experience</span>
        </h2>
        <WorkExperience>
          <WorkExperienceItem>
            <h3>
              <span>내일은 최저가</span>
              <div>(2023.10 ~ 2023.11)</div>
            </h3>
            <span>쿠팡 Apple 제품의 Dynamic Pricing 을 추적해 최적의 구매 타이밍을 알려주는 검색 서비스</span>
            <Table style={{ borderTop: '1px solid hsla(0, 0%, 0%, 0.12)', marginTop: '21px' }}>
              <TableKey>position</TableKey>
              <TableValue>FE, 팀 리더</TableValue>
            </Table>
            <Table>
              <TableKey>members</TableKey>
              <TableValue>Front-end 2명 / Back-end 2명 / Designer 1명</TableValue>
            </Table>
            <Table>
              <TableKey>skills</TableKey>
              <TableValue>React, TypeScript, styled-components, react-query, vite</TableValue>
            </Table>
            <Table>
              <TableKey>url</TableKey>
              <TableValue>
                <a href='https://github.com/LowestPrice/LowestPrice-FE' target='_blank'>
                  <Github />
                  Github
                </a>
                /
                <a style={{ marginTop: '6.5px' }} href='https://www.notion.so/Apple-7b07d49a4b0640e9bfe3b10e9e275731' target='_blank'>
                  <Notion />
                  Portfolio
                </a>
                /
                <a style={{ marginTop: '5px' }} href='https://lowest-price.store/' target='_blank'>
                  <LowesPrice />
                  Service
                </a>
                /
                <a style={{ marginTop: '5px' }} href='https://yngjnhyk.tistory.com/400' target='_blank'>
                  <Tistory />
                  회고
                </a>
              </TableValue>
            </Table>

            <Content style={{ marginTop: '20px' }}>
              <ContentKey style={{ height: '818px' }}>
                <h4>수행 내용</h4>
                {/* <h5>(맡은 역할)</h5> */}
              </ContentKey>
              <ContentValue>
                <div>
                  <span style={{ fontWeight: 'bold', fontSize: '16px' }}>프론트엔드 개발</span>
                  <li style={{ marginTop: '10px' }}>페이지 제작 기여도 70% (메인, 제품상세, 검색결과, 로그인, 유저정보, 알림페이지 반응형 제작)</li>
                  <li>전체 기능 로직 60% 구현 (로그인, 마이페이지, 상품 검색/필터/옵션/정렬, 최근 검색어, 알림설정/취소 등)</li>
                  <li> Splash Screen 및 refresh Token 을 이용한 자동로그인 구현 </li>
                  <li>
                    <a href='https://yngjnhyk.tistory.com/399' target='_blank' style={{}}>
                      GitHub Actions 를 통한 배포 자동화 (Amazon S3)
                      <Link />
                    </a>
                    <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
                      <li>유저 피드백을 진행하면서 수정사항을 수동으로 배포하는 과정에서 과도한 시간 비용 발생</li>
                      <li style={{ marginTop: '5px' }}>별도의 서버 설치 없이 GitHub 통합으로 적용이 간편한 Github Action 선택해 자동화로 비용과 시간을 절감</li>
                    </ul>
                  </li>
                  <li>
                    <a href='https://yngjnhyk.tistory.com/401' target='_blank' style={{}}>
                      소셜 로그인(kakao) 기능 구현(SDK)
                      <Link />
                    </a>
                    <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
                      <li>유저 개인정보를 필요로 하는 알림톡 기능을 위해 소셜로그인으로 카카오를 선정</li>
                      <li style={{ marginTop: '5px' }}>
                        Rest API 와 SDK 방식 중 프로젝트 규모가 크지 않고, 사용에 편리해 SDK 방식을 선택했고, 편리하게 사용자 정보(전화번호)를 얻어 UX 개선
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='https://yngjnhyk.tistory.com/391' target='_blank' style={{ marginTop: '0px' }}>
                      pure Javascript 와 CSS 로 의존성 없이 Carousel 기능 구현
                      <Link />
                    </a>
                  </li>
                  {/* <ul style={{ listStyle: 'circle', marginLeft: '40px' }}>
                    <li></li>
                  </ul> */}
                  <li>
                    <a href='https://lookerstudio.google.com/embed/reporting/5de3b9a8-b75f-4b4e-9d48-e0bfd57aeb7e/page/4VDGB' target='_blank'>
                      신규 유저 유입 분석을 위해 웹 어플리케이션과 Google Analytics 연동으로 데이터 시각화
                      <Link />
                    </a>
                  </li>
                  <li>
                    <span style={{ fontWeight: 'bold' }}></span>시멘틱 태그와 <span style={{ fontWeight: 'bold' }}></span>aria-label 등을 이용해 웹 접근성 개선
                  </li>

                  <div style={{ fontWeight: 'bold', fontSize: '16px', marginTop: '20px' }}>성능 최적화</div>
                  <li style={{ marginTop: '10px' }}>
                    <a href='https://yngjnhyk.tistory.com/396' target='_blank'>
                      Code Spliting을 통해 필요시 동적 로딩으로 번들링 사이즈 17% 줄여 초기 로딩 속도 개선
                      <Link />
                    </a>
                  </li>

                  <li>React.memo, useCallback, useMemo 를 이용한 불필요한 리렌더링 관리</li>
                  <ul style={{ listStyle: 'circle', marginLeft: '40px' }}>
                    <li>React Delveloper Tools 로 불필요한 리렌더링을 감지</li>
                    <li>컴포넌트, 함수, 변수를 기준으로 리액트 훅을 적절히 사용해 렌더링 비용 절감</li>
                  </ul>
                </div>
              </ContentValue>
            </Content>

            <Content>
              <ContentKey style={{ height: '340.57px' }}>
                <h4>문제 해결 경험</h4>
                {/* <h5>(문제 해결 경험)</h5> */}
              </ContentKey>
              <ContentValue>
                <span style={{ fontWeight: 'bold', fontSize: '16px' }}>Infinite Scroll</span>
                <li style={{ marginBottom: '0px', marginTop: '10px' }}>문제: 오래 걸리는 메인 페이지 초기 렌더링 시간(26,000ms)</li>
                <li style={{ marginBottom: '0px' }}>
                  원인: 1,000개 이상의 데이터를 가장 처음 렌더링되는 메인 페이지에서 불러오면서 생긴 초기 렌더링 시간 이슈
                </li>
                <li>
                  <a href='https://yngjnhyk.tistory.com/393' target='_blank'>
                    해결: Intersection Observer 와 react-query 의 useInfinitequery 를 사용해 Lazy Loading 을 구현해 26000ms 의 로딩 속도를 1100ms 로 개선
                    <Link />
                  </a>
                </li>
                <span style={{ fontWeight: 'bold', fontSize: '16px' }}>SEO(검색 엔진 최적화)</span>
                <li style={{ marginBottom: '0px', marginTop: '10px' }}>문제: 구글 애널리틱스에서 어려운 유저유입 파악</li>
                <li style={{ marginBottom: '0px' }}>원인: 페이지들의 title 이 모두 같아 파악하는 데 어려움 존재</li>
                <li>
                  <a href='https://lookerstudio.google.com/embed/reporting/5de3b9a8-b75f-4b4e-9d48-e0bfd57aeb7e/page/4VDGB' target='_blank'>
                    해결: SEO 개선 및 유저 유입 파악을 위해 fontWeight: 'bold' react-helmet 으로 페이지별 메타태그 설정 후, 구글 애널리틱스로 유저 유입 파악
                    <Link />
                  </a>
                </li>
              </ContentValue>
            </Content>
          </WorkExperienceItem>
        </WorkExperience>

        <h2>
          <span>Education</span>
        </h2>
        <WorkExperience>
          <WorkExperienceItem>
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
                  <li>
                    <a href='https://hanghae99.spartacodingclub.kr/v2/graduate/649381ad5fdc0b18c32485f5' target='_blank'>
                      99일 주 100시간 교육( 하루 평균 15시간 몰입 )
                      <Link />
                    </a>
                  </li>
                  <li>JavaScript의 ES6 주요 문법, 비동기 등 웹 개발을 위한 핵심 내용 학습</li>
                  <li>FE, BE, Designer 로 구성된 팀 프로젝트 2회 진행</li>
                </ul>
              </ContentValue>
            </Content>
            <Content style={{ marginTop: '20px', marginBottom: '20px' }}>
              <ContentKey>
                <h4>동의대학교</h4>
                <h5 style={{ fontWeight: '500', marginTop: '10px' }}>2016.03 ~ 2021.02</h5>
              </ContentKey>
              <ContentValue style={{ height: '62px' }}>
                <li>국제관광경영학과 졸업</li>
              </ContentValue>
            </Content>
          </WorkExperienceItem>
        </WorkExperience>

        <h2>
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
              <li>고객과 원활한 의사소통을 할 수 있는 능력과 돌발상황에 대한 대처능력</li>
            </ContentValue>
          </Content>
        </WorkExperience>
      </InfoArticle>
    </div>
  );
}
// style = {{marginBottom: '0px'}}
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
    margin-bottom: 13px;
    font-size: 14px;
    margin-top: 0px;
  }
  h2 {
    margin-bottom: 0.5em;
    border-bottom: 0;
    margin-top: 80.5px;
    font-family: 'Catamaran', sans-serif;
    color: #0687f0;
    font-size: 25px;
    font-weight: 700;
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

// const PersonalLinks = styled.div`
//   margin-bottom: 20px;
//   font-size: 14px;
//   a {
//     font: 100%/1.625 -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
//       'Segoe UI Symbol';
//     -webkit-text-size-adjust: 100%;
//     opacity: 0.5;
//     color: #0687f0;
//     text-decoration: none;
//     box-shadow: none;
//   }
// `;

const WorkExperience = styled.div`
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
`;

const WorkExperienceItem = styled.div`
  font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  .subTitle {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
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
      font-size: 15px;
      font-weight: 600;
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
  font-size: 15px;
  a {
    text-decoration: underline;
    font-size: 13px;
    display: flex;
    margin-top: 4px;
    flex-direction: row;
    gap: 2px;
    align-items: center;
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
  font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  /* border-right: 1px solid hsla(0, 0%, 0%, 0.12); */
  h4 {
    font-weight: 600;
  }
`;
const ContentValue = styled.div`
  padding-left: 10px;
  font-size: 15px;
  font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';

  li {
    margin-left: 15px;
    margin-bottom: 10px;
    font-weight: 300;
    /* list-style-position: inside; */
    /* text-indent: -50px; */

    li {
      color: black;
      border: 1px;
      border-color: black;
      margin-bottom: -5px;
    }
  }
`;
