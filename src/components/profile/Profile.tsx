import styled from 'styled-components';
import Github from '../../assets/icon/Github';
import Notion from '../../assets/icon/Notion';
import LowesPrice from '../../assets/icon/LowesPrice';
import Tistory from '../../assets/icon/Tistory';
import profileImage from '../../assets/profileImage.jpg';
import serviceview from '../../assets/service_view.png';
import carouselCode from '../../assets/carousel_code.png';
import WeatherAPP1 from '../../assets/WeatherAPP1.png';
import WeatherAPP2 from '../../assets/WeatherAPP2.png';
import WeatherAPP3 from '../../assets/WeatherAPP3.png';
import WeatherAPP4 from '../../assets/WeatherAPP4.png';
import Link from '../../assets/icon/Link';

type Props = {};

function Profile({}: Props) {
  return (
    <div>
      <InfoArticle>
        <Content style={{ position: 'relative' }}>
          <TitleContent style={{ marginBottom: '20px', marginLeft: '50px' }}>
            <h1 style={{ fontSize: '40px', marginBottom: '10px' }}>양진혁</h1>
            <div style={{ fontSize: '22px' }}>프론트엔드 개발자</div>
            <div style={{ marginTop: '10px', fontSize: '13px' }}>
              <div style={{ gap: '8px' }}></div>
              <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '2px', marginBottom: '10px', gap: '10px' }}>
                <a href='https://yngjnhyk.tistory.com' target='_blank' style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Tistory /> Blog
                </a>
                <a href='https://github.com/yngjnhykk' target='_blank' style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Github /> Github
                </a>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '4px', alignItems: 'center' }}>
                <li>Email: dskzpbmk@naver.com </li>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '4px', alignItems: 'center' }}>
                <li>Contact: 010-7518-2910</li>
              </div>
              <li>
                Skills
                <ul style={{ listStyleType: 'circle', paddingLeft: '30px', fontWeight: '500' }}>
                  <li>JavaScript, TypeScript HTML5, CSS3</li>
                  <li>ReactJS, Redux, Redux-Saga, NextJS, Styled-Components</li>
                  <li>Github, Vercel, Framer</li>
                </ul>
              </li>
            </div>
          </TitleContent>
          <ContentKey style={{ minWidth: '200px', position: 'absolute', right: '50px', top: '55px' }}>
            <img style={{ height: '280px' }} src={profileImage}></img>
          </ContentKey>
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
          <span>Projects Experience</span>
        </h2>
        <WorkExperience>
          <WorkExperienceItem>
            <h3>
              <span>내일은 최저가</span>
              <div>(2023.10 ~ 2023.11)</div>
            </h3>
            <div style={{ color: '#878e98', fontWeight: '500', fontSize: '15px' }}>항해99 실전프로젝트 (FE2, BE4, DE1) / 팀 리더</div>
            <div style={{ marginTop: '10px' }}>쿠팡 Apple 제품의 Dynamic Pricing 을 추적해 최적의 구매 타이밍을 알려주는 검색 서비스</div>
            <TableValue style={{ marginTop: 10, border: 'none', marginBottom: 20 }}>
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
            <Content style={{ gap: '30px' }}>
              <ContentKey style={{ height: '2145px', width: '30%' }}>
                <Content style={{ marginTop: 0 }}>
                  <ContentValue>
                    <h4>사용 기술</h4>
                    <li style={{ fontWeight: '500' }}>
                      ReactJS
                      <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
                        <li style={{ marginBottom: '5px' }}>React Hooks 를 이용한 렌더링 최적화</li>
                        <li style={{ marginBottom: '5px' }}>React lazy 를 통한 코드 스플리팅</li>
                        <li style={{ marginBottom: '5px' }}>Axios 를 통한 비동기 데이터 요청</li>
                        <li style={{ marginBottom: '5px' }}>팀원이 만든 컴포넌트 재사용</li>
                      </ul>
                    </li>
                    <li style={{ fontWeight: '500' }}>
                      TypeScript
                      <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
                        <li style={{ marginBottom: '5px' }}>interface 를 통한 데이터 타입 설정</li>
                        <li style={{ marginBottom: '5px' }}>컴파일 타입 에러 슈팅 경험</li>
                      </ul>
                    </li>
                    <li style={{ fontWeight: '500' }}>
                      React-Query
                      <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
                        <li style={{ marginBottom: '5px' }}>useInfiniteQuery 를 이용한 무한 스크롤</li>
                        <li style={{ marginBottom: '5px' }}>invalidQueries 을 통한 쿼리 무효화(좋아요, 알림설정)</li>
                      </ul>
                    </li>
                    <li style={{ fontWeight: '500' }}>
                      Styled-Components
                      <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
                        <li style={{ marginBottom: '5px' }}>props 연동을 통해 조건부 스타일링 및 동적 스타일링 가능</li>
                      </ul>
                    </li>
                    <li style={{ fontWeight: '500' }}>
                      React-Router
                      <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
                        <li style={{ marginBottom: '5px' }}>createBrowseRouter 경험</li>
                      </ul>
                    </li>
                    <li style={{ fontWeight: '500' }}>
                      Swiper
                      <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
                        <li style={{ marginBottom: '5px' }}>모바일 환경에서의 터치 이벤트에 잘 반응하는 Slider 를 표현하기 위해 선택</li>
                      </ul>
                    </li>
                    <li style={{ fontWeight: '500' }}>
                      Vite
                      <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
                        <li style={{ marginBottom: '5px' }}>
                          프로젝트의 규모가 커지면서 CRA 처럼 JS 코드를 모두 번들하지 않고, 브라우저가 필요로 하는 애플리케이션 코드의 일부분만 변화하는 Vite 를
                          선택
                        </li>
                      </ul>
                    </li>
                    <li style={{ fontWeight: '500' }}>
                      Js-Cookie
                      <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
                        <li style={{ marginBottom: '5px' }}>JWT 토큰을 쿠키에 보관하기 위해 도입</li>
                      </ul>
                    </li>
                  </ContentValue>
                </Content>
              </ContentKey>
              <ContentValue style={{ width: '70%' }}>
                <ContentValue>
                  <h4>서비스 화면</h4>
                  <img style={{ height: '280px', width: '800px' }} src={serviceview}></img>
                </ContentValue>

                <Content style={{ marginTop: '30px' }}>
                  <ContentValue>
                    <h4>수행 내용</h4>
                    <div>
                      <span style={{ fontWeight: 'bold', fontSize: '16px' }}>프론트엔드 개발</span>
                      <li style={{ marginTop: '10px' }}>페이지 제작 기여도 70% (메인, 제품상세, 검색결과, 로그인, 유저정보, 알림페이지 반응형 제작)</li>

                      <li style={{ marginTop: '20px' }}>
                        전체 기능 로직 60% 구현 (로그인, 마이페이지, 상품 검색/필터/옵션/정렬, 최근 검색어, 알림설정/취소 등)
                      </li>

                      <li style={{ marginTop: '20px' }}> Splash Screen 제작 및 refresh Token 을 이용한 자동로그인 구현 </li>

                      <li style={{ marginTop: '20px' }}>
                        <a href='https://yngjnhyk.tistory.com/399' target='_blank' style={{}}>
                          GitHub Actions 를 통한 배포 자동화 (Amazon S3)
                          <Link />
                        </a>
                        <ul style={{ listStyleType: 'circle', paddingLeft: '40px' }}>
                          <li>유저 피드백을 진행하면서 수정사항을 수동으로 배포하는 과정에서 과도한 시간 비용 발생</li>
                          <li style={{ marginTop: '5px' }}>
                            별도의 서버 설치 없이 GitHub 통합으로 적용이 간편한 Github Action 선택해 자동화로 비용과 시간을 절감
                          </li>
                        </ul>
                      </li>

                      <li style={{ marginTop: '20px' }}>
                        <a href='https://yngjnhyk.tistory.com/401' target='_blank' style={{}}>
                          소셜 로그인(kakao) 기능 구현(SDK)
                          <Link />
                        </a>
                        <ul style={{ listStyleType: 'circle', paddingLeft: '40px' }}>
                          <li>유저 개인정보를 필요로 하는 알림톡 기능을 위해 소셜로그인으로 카카오를 선정</li>
                          <li style={{ marginTop: '5px' }}>
                            Rest API 와 SDK 방식 중 프로젝트 규모가 크지 않고, 사용에 편리해 SDK 방식을 선택했고, 편리하게 사용자 정보(전화번호)를 얻어 UX 개선
                          </li>
                        </ul>
                      </li>

                      <li style={{ marginTop: '20px' }}>
                        <a href='https://yngjnhyk.tistory.com/391' target='_blank' style={{ marginTop: '0px' }}>
                          pure Javascript 와 CSS 로 의존성 없이 Carousel 기능 구현
                          <Link />
                        </a>
                        <ul style={{ listStyle: 'circle', marginLeft: '40px' }}>
                          <li>메인페이지에서 할인율이 높은 순위에 있는 제품들을 Carousel 로 보여주어야 하는 feature 가 있었음</li>
                          <ul style={{ listStyle: 'square', marginLeft: '40px' }}>
                            <li>css 속성인 translateX 를 통해 animation 효과를 줄 수 있었고, content 마다 index 에 삼항연산자를 적용해 carousel 기능을 구현</li>
                            <li>React Hook 인 useEffect 와 setTimeout 을 통해 content 가 자동으로 넘어갈 수 있게 UI적 성과를 얻음</li>
                          </ul>
                        </ul>
                      </li>
                      <img src={carouselCode} style={{ width: '750px', marginLeft: '37px' }} />

                      <li style={{ marginTop: '20px' }}>
                        <a href='https://lookerstudio.google.com/embed/reporting/5de3b9a8-b75f-4b4e-9d48-e0bfd57aeb7e/page/4VDGB' target='_blank'>
                          신규 유저 유입 분석을 위해 웹 어플리케이션과 Google Analytics 연동으로 데이터 시각화
                          <Link />
                        </a>
                      </li>

                      <li style={{ marginTop: '20px' }}>
                        <span style={{ fontWeight: 'bold' }}></span>시멘틱 태그와 <span style={{ fontWeight: 'bold' }}></span>aria-label 등을 이용해 웹 접근성
                        개선
                      </li>

                      <div style={{ fontWeight: 'bold', fontSize: '16px', marginTop: '30px' }}>성능 최적화</div>
                      <li style={{ marginTop: '10px' }}>
                        <a href='https://yngjnhyk.tistory.com/396' target='_blank'>
                          React lazy 와 Suspense 로 Code Spliting을 적용해 필요시 동적 로딩으로 번들링 사이즈 17% 줄여 초기 로딩 속도 개선
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

                <Content style={{ marginTop: '30px' }}>
                  <ContentValue>
                    <h4>문제 해결 경험</h4>
                    <span style={{ fontWeight: 'bold', fontSize: '16px' }}>성능 문제 해결</span>
                    <li style={{ marginTop: '10px' }}>MVP 구현 이후 첫 페이지 로딩 시간이 평균 26,000ms로 너무 느렸고, UX적 문제가 된다고 판단</li>
                    <ul style={{ listStyle: 'circle', marginLeft: '40px' }}>
                      <li>1,000개 이상의 데이터를 가장 처음 렌더링되는 메인 페이지에서 불러오면서 생긴 초기 렌더링 시간 이슈 확인</li>
                      <li>
                        <a href='https://yngjnhyk.tistory.com/393' target='_blank'>
                          Intersection Observer 와 react-query 의 useInfinitequery 를 사용해 Lazy Loading 을 구현해 26000ms &rarr; 1100ms 로 개선
                          <Link />
                        </a>
                      </li>
                    </ul>
                    <Table style={{ borderTop: '1px solid hsla(0, 0%, 0%, 0.12)', backgroundColor: '#EFEFEF', marginLeft: '50px' }}>
                      <TableValue style={{ width: '33%' }}>before</TableValue>
                      <TableKey style={{ width: '33%' }}>after</TableKey>
                      <TableKey style={{ width: '33%' }}>save</TableKey>
                    </Table>
                    <Table style={{ marginLeft: '50px' }}>
                      <TableValue style={{ width: '33%' }}>26,000ms</TableValue>
                      <TableKey style={{ width: '33%' }}>1100ms</TableKey>
                      <TableKey style={{ width: '33%' }}>95.77%</TableKey>
                    </Table>

                    <div style={{ fontWeight: 'bold', fontSize: '16px', marginTop: '30px' }}>유저 유입 파악</div>
                    <li style={{ marginTop: '10px' }}>
                      구글 애널리틱스에서 유저유입을 페이지의 title 로 구분지어 파악할 수 있지만, 페이지의 title 이 모두 같아 유저의 유입이 정확히 파악할 수
                      없는 문제 확인
                    </li>
                    <ul style={{ listStyle: 'circle', marginLeft: '40px' }}>
                      <li>head 태그를 동적으로 조작할 수 있는 React-Helmet 라이브러리 적용</li>
                      <li>
                        <a href='https://lookerstudio.google.com/embed/reporting/5de3b9a8-b75f-4b4e-9d48-e0bfd57aeb7e/page/4VDGB' target='_blank'>
                          title 태그와 meta 태그를 props 로 설정할 수 있는 컴포넌트 제작해 유저 유입 파악
                          <Link />
                        </a>
                      </li>
                    </ul>

                    {/* <div style={{ fontWeight: 'bold', fontSize: '16px', marginTop: '30px' }}>터치 이벤트 장애 대응</div>
                    <li style={{ marginTop: '10px' }}>
                      메인 페이지의 얇은 가로 스크롤바 문제로 웹 환경에서 터치 이벤트 없이 스크롤바를 이용하기엔 UX적 문제 파악
                    </li>
                    <ul style={{ listStyle: 'circle', marginLeft: '40px' }}>
                      <li>터치 이벤트가 내장되어 있는 Swiper 라이브러리 적용해 웹 환경에서도 드래그로 스크롤할 수 있게 구현</li>
                    </ul> */}
                  </ContentValue>
                </Content>
              </ContentValue>
            </Content>
          </WorkExperienceItem>

          <WorkExperienceItem style={{ marginTop: '50px', borderTop: '1px solid hsla(0, 0%, 0%, 0.12)', paddingTop: '30px' }}>
            <h3>
              <span>Nice Weather</span>
              <div>(2023.11 ~ 2023.12)</div>
            </h3>
            <div style={{ color: '#878e98', fontWeight: '500', fontSize: '15px' }}>1인 프로젝트</div>
            <div style={{ marginTop: '10px' }}>사용자의 현재 위치를 조회해 실시간 위치와 날씨정보를 알려주는 React Naitive 날씨 애플리케이션</div>
            <TableValue style={{ marginTop: 10, border: 'none', marginBottom: 20 }}>
              <a href='https://github.com/yngjnhykk/WeatherAPP' target='_blank'>
                <Github />
                Github
              </a>
              {/* /
                      <a style={{ marginTop: '5px' }} href='https://yngjnhyk.tistory.com/400' target='_blank'>
                      <Tistory />
                      회고
                    </a> */}
            </TableValue>

            <Content>
              <ContentKey style={{ width: '30%', height: 927 }}>
                <ContentValue>
                  <h4>사용 기술</h4>
                  <li style={{ fontWeight: '500' }}>
                    React Native
                    <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
                      <li style={{ marginBottom: '5px' }}>React JS 개발자의 입장으로 낮은 접근성으로 선택</li>
                      <li style={{ marginBottom: '5px' }}>AOS, iOS 대응이 가능하고, Code Push 를 통해 앱스토어 심사 없이 버전 업데이트가 가능</li>
                    </ul>
                  </li>
                  <li style={{ fontWeight: '500' }}>
                    TypeScript
                    <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
                      <li style={{ marginBottom: '5px' }}>interface 를 통한 데이터 타입 설정</li>
                      <li style={{ marginBottom: '5px' }}>컴파일 타입 에러 슈팅 경험</li>
                    </ul>
                  </li>
                  <li style={{ fontWeight: '500' }}>
                    Expo
                    <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
                      <li style={{ marginBottom: '5px' }}>다양한 RN 지원 및 라이브러리와 간편한 세팅을 이유로 선택</li>
                    </ul>
                  </li>
                  <li style={{ fontWeight: '500' }}>
                    react-native-dotenv
                    <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
                      <li style={{ marginBottom: '5px' }}>리액트네이티브에서 환경 변수를 관리하기 위해 선택</li>
                      <li style={{ marginBottom: '5px' }}>
                        react-native-dotenv 와 react-native-config 을 고민중 프로젝트의 규모가 크지 않다는 점에서 비교적 가벼운 react-native-dotenv 를 선택
                      </li>
                    </ul>
                  </li>
                </ContentValue>
              </ContentKey>
              <ContentValue style={{ width: '70%' }}>
                <ContentValue>
                  <h4>서비스 화면</h4>
                  <img src={WeatherAPP1} style={{ height: '380px' }} />
                  <img src={WeatherAPP2} style={{ height: '380px' }} />
                  <img src={WeatherAPP3} style={{ height: '380px' }} />
                  <img src={WeatherAPP4} style={{ height: '380px' }} />
                </ContentValue>
                <ContentValue style={{ marginTop: 30 }}>
                  <h4>수행 내용</h4>
                  <div>
                    <span style={{ fontWeight: 'bold', fontSize: '16px' }}>동적 배경화면</span>
                    <li style={{ marginTop: '10px' }}>
                      날씨에 따라 변하는 배경화면 화면 및 아이콘
                      <ul style={{ listStyleType: 'circle', paddingLeft: '40px' }}>
                        <li>UI 개선를 위해 날씨에 따라 영향을 받는 css 효과를 고민하던 중, 다른 날씨앱에서도 자주 사용되는 동적 배경화면 기능을 선택</li>
                        <li style={{ marginTop: '5px' }}>
                          매력적인 인터페이스를 구현하고, Expo 프로젝트에서 gradient 효과를 사용하기 편리하고 일관성 있게 적용하기 위해 expo-linear-gradient
                          선택
                        </li>
                      </ul>
                    </li>

                    <div style={{ fontWeight: 'bold', fontSize: '16px', marginTop: 20 }}>위치 기반 날씨 및 지리 정보 조회</div>
                    <li style={{ marginTop: '10px' }}>
                      사용자의 현재 위치정보와 날씨정보, 두 가지 데이터를 필요로 했음
                      <ul style={{ listStyleType: 'circle', paddingLeft: '40px' }}>
                        <li>
                          사용자의 위치를 expo-location 을 통해 사용자의 gps 로 위치(위도, 경도)를 조회할수 있었고, 얻어진 위치를 기반으로 Openweathermaps API
                          를 통해 날씨 정보를 조회
                        </li>
                        <li style={{ marginTop: '5px' }}>
                          현재 위치를 숫자정보(위도, 경도)뿐 아니라 보다 직관적으로 알 수 있게 react-native-maps 로 현재위치를 알려주는 지도를 구현
                        </li>
                      </ul>
                    </li>
                  </div>
                </ContentValue>
              </ContentValue>
            </Content>
          </WorkExperienceItem>

          <WorkExperienceItem style={{ marginTop: '50px', paddingTop: '50px', borderTop: '1px solid rgba(0, 0, 0, 0.12)' }}>
            <h3>
              <span>NNN(Next + Node + sNs)</span>
              <div>(2024.01 ~ 진행중)</div>
            </h3>
            <div style={{ color: '#878e98', fontWeight: '500', fontSize: '15px' }}>1인 프로젝트</div>
            <div style={{ marginTop: '10px' }}>Next.js + Node.js 로 구현한 SNS 서비스</div>

            <Content>
              <ContentKey>
                <h4>url</h4>
              </ContentKey>
              <TableValue style={{ border: 'none' }}>
                {' '}
                <a href='https://github.com/yngjnhykk/NodeBird_SNS' target='_blank'>
                  <Github />
                  Github
                </a>
                {/* /
                <a style={{ marginTop: '5px' }} href='https://lowest-price.store/' target='_blank'>
                  <Twiter />
                  Service
                </a> */}
                {/* /
                <a style={{ marginTop: '5px' }} href='https://yngjnhyk.tistory.com/400' target='_blank'>
                  <Tistory />
                  회고
                </a> */}
              </TableValue>
            </Content>
            <Content>
              <ContentKey>
                <h4>사용 기술</h4>
              </ContentKey>
              <ContentValue>
                <div style={{ fontSize: '16px' }}>React, Redux & Redux-Saga, Ant-Design, Styled-Components, SWR, AWS</div>
              </ContentValue>
            </Content>

            <Content>
              <ContentKey style={{ height: '176px' }}>
                <h4>수행 내용</h4>
              </ContentKey>
              <ContentValue>
                <span style={{ fontWeight: 'bold', fontSize: '16px' }}>프론트엔드 개발</span>
                <li style={{ marginTop: '10px' }}>로그인, 게시글 CRUD, 좋아요, 이미지 업로드, 댓글, 리트윗, 좋아요 등 기본적인 SNS 기능 구현</li>
                <li>SEO 개선과 Code spliting 기능을 위해 Next.js 를 통해 SSR 사용</li>
                <li>쉬운 반응형 페이지와 기능에 집중하기 위해 ant-desogn 라이브러리 사용</li>
                <li>서버 없이 프론트엔드 구현을 먼저 진행하기 위해 Redux 와 Redux-Saga 를 이용해 상태를 관리하고, faker 와 uuid 를 통해 목 데이터 구현</li>
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
    color: black;
    font-size: 25px;
    font-weight: 700;
    opacity: 0.8;
    border-bottom: 1px solid black;
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

//  border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);

const WorkExperience = styled.div`
  border-bottom: 1px solid black;
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
    font-size: 25px;
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
      /* color: #9b9a97; */
      color: black;
    }
  }
  table {
    font-family: Noto Sans KR, sans-serif;
    width: 100%;
  }
`;

const Table = styled.div`
  width: 600px;
  height: 30px;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
  display: flex;
  flex-direction: row;
  align-items: center;
  border-right: 1px solid hsla(0, 0%, 0%, 0.12);
`;

const TableKey = styled.div`
  width: 100.886px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 0px;
  text-align: left;
  padding-right: 1.08333rem;
  padding-left: 0.3rem;

  border-left: 1px solid hsla(0, 0%, 0%, 0.12);
`;
const TableValue = styled.div`
  width: 100%;
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
  margin-top: 10px;
`;

const ContentKey = styled.div`
  min-width: 103px;
  font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  /* border-right: 1px solid hsla(0, 0%, 0%, 0.12); */
  h4 {
    /* font-weight: 600; */
    font-size: 17px;
  }
`;
const ContentValue = styled.div`
  padding-left: 10px;
  font-size: 15px;
  font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  h4 {
    font-size: 20px;
    margin-bottom: 20px;
    color: #2e2e2e;
    /* margin-top: 10px; */
  }
  li {
    margin-left: 15px;
    margin-top: 10px;
    font-weight: 400;
    /* list-style-position: inside; */
    /* text-indent: -50px; */
  }
`;
