import styled from 'styled-components';
import Github from '../../assets/icon/Github';
import Notion from '../../assets/icon/Notion';
import LowesPrice from '../../assets/icon/LowesPrice';
import Tistory from '../../assets/icon/Tistory';
import profileImage from '../../assets/profileImage.jpg';
import architecture1 from '../../assets/architecture1.png';
import architecture2 from '../../assets/architecture2.png';
import carouselCode from '../../assets/carousel_code.png';
import infiniteScroll from '../../assets/infiniteScroll.png';
import WeatherAPP1 from '../../assets/WeatherAPP1.png';
import WeatherAPP2 from '../../assets/WeatherAPP2.png';
import WeatherAPP3 from '../../assets/WeatherAPP3.png';
import WeatherAPP4 from '../../assets/WeatherAPP4.png';

import NNN_trouble_shooting1 from '../../assets/[NNN]trouble_shooting1.png';
import NNN_trouble_shooting3 from '../../assets/[NNN]trouble_shooting3.png';
import Link from '../../assets/icon/Link';

type Props = {};

function Profile({}: Props) {
  return (
    <div>
      <Wrap>
        <Content style={{ position: 'relative', display: 'flex', flexDirection: 'row', paddingTop: 60, alignItems: 'initial' }}>
          <img style={{ height: '280px', borderRadius: 50 }} src={profileImage}></img>
          <TitleContent style={{ marginBottom: '20px', marginLeft: '50px' }}>
            <h1 style={{ fontSize: '40px', marginBottom: '10px' }}>양진혁</h1>
            <div style={{ fontSize: '22px' }}>프론트엔드 개발자</div>
            <div style={{ marginTop: '10px', fontSize: '16px' }}>
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
              <div style={{ display: 'flex', flexDirection: 'row', gap: '4px', alignItems: 'center' }}>
                <li style={{}}>
                  TypeScript, React 기반의 웹 프론트엔드 개발자입니다.
                  <ul style={{ listStyle: 'none', marginLeft: 25 }}>
                    <li>Redux, React-Query, CSS-in-JS 활용에 익숙합니다.</li>
                    <li>동작 원리에 대한 지속적인 호기심과 갈증은 도전을 즐기게 하고, 제 개발 능력을 높이는 큰 원동력이 됩니다.</li>
                    <li>수년간 서비스 분야에 있으면서 대면/서면 의사소통에 능합니다.</li>
                  </ul>
                </li>
              </div>
              <li>
                Skills
                <ul style={{ listStyleType: 'circle', paddingLeft: '30px', fontWeight: '500' }}>
                  <li className='underlineFront'>
                    <span style={{ background: 'linear-gradient(to top, #a9e2f3 40%, transparent 40%)' }}>JavaScript</span> <span>TypeScript</span>
                    <span>HTML5</span> <span>CSS3</span>
                  </li>
                  <li className='underlineFront'>
                    <span>ReactJS</span> <span>NextJS</span> <span>Redux</span> <span>Redux-Saga</span> <span>Styled-Components</span>
                  </li>
                  <li className='underlineBack'>
                    <span>NodeJS</span> <span>ExpressJS</span> <span>MySQL</span> <span>Passport</span>
                  </li>
                  <li className='underlineTool'>
                    <span>Github</span> <span>Vercel</span> <span>Framer</span>
                  </li>
                </ul>
              </li>
            </div>
          </TitleContent>
        </Content>

        <h2>
          <span>Projects Experience</span>
        </h2>
        <WorkExperience>
          <WorkExperienceItem style={{ borderBottom: '1px solid hsla(0, 0%, 0%, 0.12)' }}>
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
              <ContentKey style={{ height: 3037, width: '30%' }}>
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
                        <li style={{ marginBottom: '5px' }}>모바일 환경처럼 웹 환경에서도 터치 이벤트가 적용된 가로스크롤을 구현하기 위해 선택</li>
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
                <Content>
                  <ContentValue>
                    <h4 style={{ position: 'relative' }}>
                      담당 기능 <span style={{ position: 'absolute', right: 6, bottom: 3, fontSize: 13 }}>(기여도-70%)</span>
                    </h4>
                    <li>
                      메인 페이지
                      <ul style={{ listStyleType: 'circle', marginLeft: 30 }}>
                        <li>
                          <a href='https://yngjnhyk.tistory.com/393' target='_blank'>
                            무한 스크롤
                            <Link />
                          </a>
                        </li>
                        <li>제품 카테고리 및 필터링</li>
                        <li>제품 알림 설정</li>
                        <li>
                          <a href='https://yngjnhyk.tistory.com/391' target='_blank' style={{ marginTop: '0px' }}>
                            Carousel 기능
                            <Link />
                          </a>
                        </li>
                        <li>최근 검색어</li>
                        <li>Splash Screen 제작</li>
                      </ul>
                    </li>
                    <li>
                      검색 결과 페이지
                      <ul style={{ listStyleType: 'circle', marginLeft: 30 }}>
                        <li>
                          <a href='https://yngjnhyk.tistory.com/393' target='_blank'>
                            무한 스크롤
                            <Link />
                          </a>
                        </li>
                        <li>제품 카테고리 및 필터링</li>
                        <li>제품 알림 설정</li>
                      </ul>
                    </li>
                    <li>
                      제품 상세 페이지
                      <ul style={{ listStyleType: 'circle', marginLeft: 30 }}>
                        <li>제품 옵션</li>
                        <li>비슷한 제품 조회</li>
                      </ul>
                    </li>
                    <li>
                      알림 페이지
                      <ul style={{ listStyleType: 'circle', marginLeft: 30 }}>
                        <li>알림 제품 조회</li>
                        <li>제품 알림 설정</li>
                      </ul>
                    </li>
                    <li>
                      로그인 페이지
                      <ul style={{ listStyleType: 'circle', marginLeft: 30 }}>
                        <li>
                          <a href='https://yngjnhyk.tistory.com/401' target='_blank'>
                            소셜 로그인(kakao) 기능 구현(SDK)
                            <Link />
                          </a>
                        </li>
                        <li>자동 로그인(refresh token)</li>
                      </ul>
                    </li>
                    <li>
                      MY 페이지
                      <ul style={{ listStyleType: 'circle', marginLeft: 30 }}>
                        <li>프로필 수정</li>
                        <li>회원 탈퇴</li>
                      </ul>
                    </li>
                  </ContentValue>
                </Content>
              </ContentKey>
              <ContentValue style={{ width: '70%' }}>
                <ContentValue>
                  <h4>아키텍처</h4>
                  <img style={{ width: '100%' }} src={architecture1}></img>
                </ContentValue>

                <Content style={{ marginTop: '30px' }}>
                  <ContentValue>
                    <h4>문제 해결 경험</h4>
                    <div>
                      <span style={{ fontWeight: 'bold', fontSize: '16px' }}>로그인 보안 문제 해결</span>
                      {/* <li style={{ marginTop: '10px' }}>페이지 제작 기여도 70% (메인, 제품상세, 검색결과, 로그인, 유저정보, 알림페이지 반응형 제작)</li> */}

                      {/* <li style={{ marginTop: '20px' }}>
                        전체 기능 로직 60% 구현 (로그인, 마이페이지, 상품 검색/필터/옵션/정렬, 최근 검색어, 알림설정/취소 등)
                      </li>

                      <li style={{ marginTop: '20px' }}> Splash Screen 제작 및 refresh Token 을 이용한 자동로그인 구현 </li> */}
                      <li>
                        고민: 백엔드에서는 토큰 상태를 제어하기 힘들어서 탈취를 비롯한 보안문제가 생길 수 있다고 판단
                        <ul style={{ listStyleType: 'circle', paddingLeft: '40px' }}>
                          <li>해결 노력: 프론트에서 token 을 관리하기로 결정하고, 다음과 같이 해결</li>
                          <Table style={{ borderTop: '1px solid hsla(0, 0%, 0%, 0.12)', marginLeft: 10, marginTop: 10 }}>
                            <TableValue style={{ width: '30%', backgroundColor: '#EFEFEF' }}>refreshToken</TableValue>
                            <TableKey style={{ width: '30%' }}>이틀, 만료기간 설정</TableKey>
                            <TableKey style={{ width: '40%' }}>탈취되어도 소멸 후 재발급 불가</TableKey>
                          </Table>
                          <Table style={{ marginLeft: 10 }}>
                            <TableValue style={{ width: '30%', backgroundColor: '#EFEFEF' }}>accessToken</TableValue>
                            <TableKey style={{ width: '30%' }}>3시간, 만료기간 설정</TableKey>
                            <TableKey style={{ width: '40%' }}>짧은 유효기간으로 금방 유효성 소멸</TableKey>
                          </Table>
                          <Table style={{ marginLeft: 10 }}>
                            <TableValue style={{ width: '30%', backgroundColor: '#EFEFEF' }}>HttpOnly</TableValue>
                            <TableKey style={{ width: '30%' }}>true</TableKey>
                            <TableKey style={{ width: '40%' }}>자바스크립트에서 쿠키에 접근 불가</TableKey>
                          </Table>
                          <Table style={{ marginLeft: 10 }}>
                            <TableValue style={{ width: '30%', backgroundColor: '#EFEFEF' }}>SameSite</TableValue>
                            <TableKey style={{ width: '30%' }}>true</TableKey>
                            <TableKey style={{ width: '40%' }}>HTTPS 에서만 쿠키 전송 가능</TableKey>
                          </Table>
                          <Table style={{ marginLeft: 10 }}>
                            <TableValue style={{ width: '30%', backgroundColor: '#EFEFEF' }}>Secure</TableValue>
                            <TableKey style={{ width: '30%' }}>Strict</TableKey>
                            <TableKey style={{ width: '40%' }}>CSRF 공격 방어</TableKey>
                          </Table>
                          <li>성과: httpOnly, secure, sameSite 설정 등으로 보안에 취약할 수 있던 JWT 토큰의 안전성을 향상시킬 수 있었음</li>
                        </ul>
                      </li>

                      {/* <li style={{ marginTop: '20px' }}>
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
                      </li> */}

                      {/* <li style={{ marginTop: '20px' }}>
                        <a href='https://yngjnhyk.tistory.com/401' target='_blank' style={{}}>
                          소셜 로그인(kakao) 기능 구현(SDK)
                          <Link />
                        </a>
                        <ul style={{ listStyleType: 'circle', paddingLeft: '40px' }}>
                          <li>유저 개인정보(전화번호)를 필요로 하는 알림톡 기능을 위해 소셜로그인으로 카카오를 선정</li>
                          <li style={{ marginTop: '5px' }}>
                            Rest API 와 SDK 방식 중 프로젝트 규모가 크지 않고, 사용에 편리해 SDK 방식을 선택했고, 편리하게 사용자 정보(전화번호)를 얻어 UX 개선
                          </li>
                        </ul>
                      </li> */}
                      <div style={{ fontWeight: 'bold', fontSize: '16px', marginTop: 10 }}>의존성 없는 Carousel 구현</div>
                      <li>
                        할인율이 높은 제품을 유연하게 유저에게 부각시키기 위해 레퍼런스를 찾던 중 carousel 기능을 알게 되었고, 라이브러리를 사용하기 전,
                        동작원리에 대한 호기심으로 pure Javascript 와 CSS 로 의존성 없이 Carousel 기능 구현하면서 1)툭툭 끊기는 애니메이션과 2)자동 슬라이드와
                        버튼 클릭 충돌 등 두 가지 문제가 있었음
                        <ul style={{ listStyle: 'circle', marginLeft: '40px' }}>
                          <li>
                            고민: 자동 슬라이드 중 버튼을 클릭하면 인덱스가 예상치 못하게 변경되는 문제가 있었고, 이는 자동 슬라이드 동작 중에도 사용자의 버튼
                            클릭이 즉시 반영되어 두 기능의 충돌이 발생한 것으로 판단
                          </li>
                          <ul style={{ listStyleType: 'square', marginLeft: 40 }}>
                            <li>해결 노력: 충돌을 막기 위해 isSlide 라는 상태를 도입해 슬라이드 중인 동안은 조건문을 통해 좌우 버튼 클릭을 무시하도록 설정</li>
                          </ul>
                          <li>
                            고민: 슬라이드 이동 시 애니메이션을 적용하고자 했으나, 애니메이션 중에도 인덱스와 위치를 업데이트가 필요하다고 판단. 이로 인해
                            애니메이션 중에도 슬라이드가 일어나야 하는데, 이를 어떻게 자연스럽게 처리할지가 고민
                          </li>
                          <ul style={{ listStyleType: 'square', marginLeft: 40 }}>
                            <li>
                              해결 노력: setTimeout 함수를 활용하여 일정 시간이 지난 후에 인덱스 및 슬라이드 위치를 업데이트하도록 구현. 애니메이션이 완료된
                              후에 해당 코드가 실행되어 자연스러운 전환이 가능하도록 구현
                            </li>
                          </ul>
                        </ul>
                      </li>
                      <img src={carouselCode} style={{ width: '720px', marginLeft: '37px', marginTop: 10 }} />

                      {/* <li style={{ marginTop: '20px' }}>
                        <a href='https://lookerstudio.google.com/embed/reporting/5de3b9a8-b75f-4b4e-9d48-e0bfd57aeb7e/page/4VDGB' target='_blank'>
                          신규 유저 유입 분석을 위해 웹 어플리케이션과 Google Analytics 연동으로 데이터 시각화
                          <Link />
                        </a>
                      </li>

                      <li style={{ marginTop: '20px' }}>
                        <span style={{ fontWeight: 'bold' }}></span>시멘틱 태그와 <span style={{ fontWeight: 'bold' }}></span>aria-label 등을 이용해 웹 접근성
                        개선
                      </li> */}
                      {/* 
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
                      </ul> */}
                    </div>
                  </ContentValue>
                </Content>

                <Content style={{ marginTop: '30px' }}>
                  <ContentValue>
                    <span style={{ fontWeight: 'bold', fontSize: '16px' }}>성능 문제 해결</span>
                    <li style={{ marginTop: '10px' }}>
                      고민: 프로젝트의 MVP를 구현 이후, 첫 페이지 로딩 시간이 평균 26,000ms로 매우 느려 UX적 문제가 된다고 판단했고, 특히 1,000개 이상의
                      데이터를 처음 렌더링하는 메인 페이지에서 초기 렌더링 시간이 길어진 것이 주요 문제원인으로 확인
                    </li>
                    <ul style={{ listStyle: 'circle', marginLeft: '40px' }}>
                      <li>
                        해결 노력: React-Query의 Infinite Queries를 도입하여, 스크롤이 내려갈 때, Observer 가 Viewpoint 와 ref 간 Intersection 을 감지해
                        자동으로 새로운 페이지의 데이터를 서버에서 가져오도록 구현해서 해결
                      </li>
                      <img src={infiniteScroll} style={{ width: '720px' }} />

                      <li>성과: Intersection Observer 와 react-query 의 useInfinitequery 를 사용해 Lazy Loading 을 구현해 로딩 시간 개선</li>
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
                  </ContentValue>
                </Content>
                <Content style={{ marginTop: 30 }}>
                  <ContentValue>
                    <span style={{ fontWeight: 'bold', fontSize: '16px' }}>비회원의 자동로그인</span>
                    <li>
                      고민: 자동로그인 구현을 위해 처음엔 해당 유저가 회원인지 아닌지를 Axios Interceptor 로 구별하기 위해 모든 API 에서 refresh token 을 API
                      body 에 포함시켰으나, 제품을 판매하는 서비스 특성상 회원과 비회원 유저 모두가 이용할 수 있는 서비스이기에 token 을 보유하지 않아도 제품을
                      조회하거나 검색하는 등 서비스를 이용할 수 있어야 했음
                    </li>
                    <ul style={{ listStyleType: 'circle', marginLeft: 40 }}>
                      <li>
                        해결 노력: 비회원 유저도 서비스를 이용할 수 있도록 Axios Interceptor 로 회원인지를 판단하는 것이 아닌 프론트에서 회원만 가능한 기능으로
                        한정해 중첩 조건문으로 해당 유저가 access token 을 갖고 있는지(로그인 한 회원인지), refresh token 을 갖고 있는지(로그인 하지 않는
                        회원인지), 비회원인지(token 을 보유하지 않았는지)등 유효성 검사를 통해 적절한 로직으로 자동로그인을 구현할 수 있었음
                      </li>

                      <Table style={{ borderTop: '1px solid hsla(0, 0%, 0%, 0.12)', marginLeft: 10, marginTop: 10, width: 800 }}>
                        <TableValue style={{ width: '30%', backgroundColor: '#EFEFEF', textIndent: -9999 }}>sss</TableValue>
                        <TableKey style={{ width: '30%' }}>보유했다면,</TableKey>
                        <TableKey style={{ width: '40%' }}>보유하지 않았다면,</TableKey>
                      </Table>
                      <Table style={{ marginLeft: 10, width: 800 }}>
                        <TableValue style={{ width: '30%', backgroundColor: '#EFEFEF' }}>accessToken</TableValue>
                        <TableKey style={{ width: '30%', height: '100%' }}>로그인 한 회원 유저 &rarr; 정상 진행</TableKey>
                        <TableKey style={{ width: '40%', textIndent: -9999 }}> &darr;</TableKey>
                      </Table>
                      <Table style={{ marginLeft: 10, width: 800, height: 50 }}>
                        <TableValue style={{ width: '30%', backgroundColor: '#EFEFEF', height: 50 }}>refreshToken</TableValue>
                        <TableKey style={{ width: '30%' }}>accessToken 이 만료된 회원 유저 &rarr; accessToken 발급 후, 정상 진행</TableKey>
                        <TableKey style={{ width: '40%' }}>
                          비회원 유저 &rarr; Toastify 알림 전송
                          <br />
                          ("로그인 후 이용가능합니다.")
                        </TableKey>
                      </Table>
                      <li>성과: 회원전용 서비스에 대한 접근을 효과적으로 제어하고, 불필요한 데이터(API body) 를 줄이면서, 전반적인 시스템 보안성을 향상</li>
                    </ul>
                  </ContentValue>
                </Content>
              </ContentValue>
            </Content>
          </WorkExperienceItem>

          <WorkExperienceItem style={{ marginTop: 50, paddingTop: '50px', borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>
            <h3>
              <span>NNN(Next + Node + sNs)</span>
              <div>(2024.01 ~ 진행중)</div>
            </h3>
            <div style={{ color: '#878e98', fontWeight: '500', fontSize: '15px' }}>1인 Full Stack 프로젝트</div>
            <div style={{ marginTop: '10px' }}>Next.js + Node.js 로 구현한 SNS 서비스</div>
            <TableValue style={{ marginTop: 10, border: 'none', marginBottom: 20 }}>
              <a href='https://github.com/yngjnhykk/NNN' target='_blank'>
                <Github />
                Github
              </a>
            </TableValue>
            <Content>
              <ContentKey style={{ width: '30%', height: 2447 }}>
                <ContentValue>
                  <h4>사용 기술</h4>
                  <span style={{ fontWeight: 'bold', fontSize: '16px' }}>Frontend</span>

                  <li style={{ fontWeight: '500' }}>
                    Next
                    <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
                      <li style={{ marginBottom: '5px' }}>SSR 과 CSR 의 차이를 이해하며 적절한 페이지에 적용 가능</li>
                    </ul>
                  </li>
                  <li style={{ fontWeight: '500' }}>
                    Redux & Redux-Saga
                    <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
                      <li style={{ marginBottom: '5px' }}>Redux 로 전역 상태의 변화에 따른 컴포넌트 간 데이터 공유 및 조작이 가능</li>
                      <li style={{ marginBottom: '5px' }}>
                        Redux Saga 의 effcts 를 사용해 비동기 액션들의 흐름을 제어하고, 복잡한 비동기 작업을 모듈화해 코드의 가독성과 유지보수성을 높일 수 있음
                      </li>
                    </ul>
                  </li>
                  <li style={{ fontWeight: '500' }}>
                    Next-Redux-Wrapper
                    <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
                      <li style={{ marginBottom: '5px' }}>Next.js와 함께 Next-Redux-Wrapper를 사용하여 서버 사이드 렌더링 및 전역 상태 초기화 구현</li>
                    </ul>
                  </li>
                  <li style={{ fontWeight: '500' }}>
                    Styled Components
                    <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
                      <li style={{ marginBottom: '5px' }}>props 연동을 통해 조건부 스타일링 및 동적 스타일링이 가능</li>
                    </ul>
                  </li>
                  <li style={{ fontWeight: '500' }}>
                    Ant Design
                    <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
                      <li style={{ marginBottom: '5px' }}>쉬운 반응형 페이지와 기능에 집중하기 위해 ant-desogn 라이브러리 사용</li>
                    </ul>
                  </li>

                  <span style={{ fontWeight: 'bold', fontSize: '16px' }}>Backend</span>

                  <li style={{ fontWeight: '500' }}>
                    Express.js
                    <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
                      <li style={{ marginBottom: '5px' }}>RESTful API 구현</li>
                      <li style={{ marginBottom: '5px' }}>데이터베이스 연동 및 CRUD 작업 처리</li>
                      <li style={{ marginBottom: '5px' }}>Passport 와 함께 사용자 인증 및 권한 관리 구현</li>
                    </ul>
                  </li>
                  <li style={{ fontWeight: '500' }}>
                    Sequelize(MySQL)
                    <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
                      <li style={{ marginBottom: '5px' }}>Sequelize를 통한 모델 정의 및 관계 설정</li>
                    </ul>
                  </li>
                  <li style={{ fontWeight: '500' }}>
                    <a target='_blank' href='https://yngjnhyk.tistory.com/412'>
                      Passport & Passport-local
                      <Link />
                    </a>
                    <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
                      <li style={{ marginBottom: '5px' }}>Local strategy를 활용하여 사용자 정보를 데이터베이스에서 인증</li>
                      <li style={{ marginBottom: '5px' }}>로그인 후에는 세션을 유지하고, 사용자 정보를 직렬화 및 역직렬화하여 유지</li>
                      <li style={{ marginBottom: '5px' }}>보안을 위해 bcrypt 를 사용해 비밀번호 암호화 후 데이터베이스에 저장</li>
                    </ul>
                  </li>

                  <li style={{ fontWeight: '500' }}>
                    Multer
                    <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
                      <li style={{ marginBottom: '5px' }}>이미지 업로드를 위해 Multer 도입 및 설정</li>
                      <li style={{ marginBottom: '5px' }}>업로드 시간으로 이미지 파일명의 중복을 방지</li>
                    </ul>
                  </li>
                </ContentValue>
                <ContentValue style={{ marginTop: 40 }}>
                  <h4>수행 내용</h4>
                  <li>
                    메인 페이지
                    <ul style={{ listStyleType: 'circle', marginLeft: 30 }}>
                      <li>로그인 & 로그아웃</li>
                      <li>게시글 작성</li>
                      <li>댓글 작성</li>
                      <li>이미지 업로드</li>
                      <li>좋아요</li>
                      <li>리트윗</li>
                      <li>Infinite Scroll</li>
                      <li>팔로우 & 언팔로우</li>
                      <li>해시태그 검색</li>
                    </ul>
                  </li>
                  <li>
                    회원가입 페이지
                    <ul style={{ listStyleType: 'circle', marginLeft: 30 }}>
                      <li>회원가입</li>
                    </ul>
                  </li>
                  <li>
                    프로필 페이지
                    <ul style={{ listStyleType: 'circle', marginLeft: 30 }}>
                      <li>닉네임 수정</li>
                      <li>팔로워 & 팔로잉 조회</li>
                    </ul>
                  </li>
                </ContentValue>
              </ContentKey>
              <ContentValue style={{ width: '70%', height: 2447 }}>
                <ContentValue>
                  <h4>아키텍처</h4>
                  <img src={architecture2} style={{ width: '100%' }} />
                </ContentValue>
                <ContentValue style={{ marginTop: 30 }}>
                  <h4>문제 해결 경험</h4>
                  <div>
                    <span style={{ fontWeight: 'bold', fontSize: '16px' }}>
                      <a target='_blank' href='https://yngjnhyk.tistory.com/426'>
                        SSR 환경에서 데이터 흐름
                        <Link />
                      </a>
                    </span>
                    <li style={{ marginTop: '10px' }}>
                      고민: 유저정보가 담긴 쿠키를 GET 요청시 함께 보내기 위한 방법으로 백엔드에서 브라우저 session 에 담아 서버에서 쿠키를 받을 수 있었지만,
                      SSR 을 구현하고 난 뒤, 쿠키를 전송하지 못하는 문제를 확인
                      <ul style={{ listStyleType: 'circle', paddingLeft: '40px' }}>
                        <li>
                          해결 노력: 이전에 CORS 와 Credentials 에러를 백엔드에서 해결했었기에 SSR 을 구현한 프론트에서 문제가 있다고 판단하고, 확인해보니
                          요청에 쿠키를 담지 못하고 있었던 것을 확인.
                        </li>
                        <ul style={{ listStyleType: 'none' }}>
                          <li>서버사이드 렌더링의 주체는 브라우저에서 프론트, 백엔드가 아닌, 프론트에서 백엔드 서버로 데이터를 요청하는 것을 깨달음</li>
                          <li>getServerSideProps 에서 데이터를 요청할 때, 쿠키를 조회해 axios headers 에 담아서 GET 요청</li>
                        </ul>
                        <li style={{ marginTop: '5px' }}>
                          성과: SSR 환경에서의 데이터 흐름에 대한 이해를 바탕으로 SSR 환경에서도 서로 다른 도메인 간 쿠키 전송이 가능
                        </li>
                      </ul>
                    </li>

                    <div style={{ fontWeight: 'bold', fontSize: '16px', marginTop: 20 }}>Infinite Request</div>
                    <li style={{ marginTop: '10px' }}>
                      고민: lastId 를 통해 마지막으로 조회된 게시글의 id 보다 낮은 게시글을 모두 조회했지만, 여전히 트리거가 작동되어 계속되는 GET 요청으로
                      끊임없이 게시글이 조회는 문제가 발생
                      <ul style={{ listStyleType: 'circle', paddingLeft: '40px' }}>
                        <li>
                          해결 노력: 게시글 조회 요청을 관리하는 상태인 불리언 상태, hasMorePosts 를 만들어 불러온 게시글의 갯수가 10개 아니라면, 더 이상
                          조회하지 않도록 트리거를 만듬
                          <ul style={{ listStyleType: 'square', paddingLeft: 40 }}>
                            <li>
                              추가 고민: 하지만, 만약 게시글의 갯수가 10의 배수이고, 남은 갯수의 게시글이 10개라면, 마지막 게시글인줄 모르고, 조회를 요청하게
                              되는데, 그렇다하더라도, 더 이상 불러올 데이터가 없기에 한 번의 데이터 요청 낭비가 발생하겠지만, 어떤 데이터도 더 이상 조회하지
                              않아 에러를 막을 수 있었음
                            </li>
                          </ul>
                        </li>
                        <li>성과: 데이터 요청이 한 번 낭비되었지만, 적절한 트리거로 Infinite Scroll 구현</li>
                      </ul>
                    </li>
                  </div>
                </ContentValue>

                <div style={{ fontWeight: 'bold', fontSize: '16px', marginTop: 20 }}>
                  <a target='_blank' href='https://yngjnhyk.tistory.com/416'>
                    Multer, 이미지 업로드
                    <Link />
                  </a>
                </div>
                <li style={{ marginTop: '10px' }}>
                  고민: 게시글을 포스팅하는 과정에서 이미지와 텍스트를 서버로 함께 보내면서 시간이 오래 걸려 고민
                  <ul style={{ listStyleType: 'circle', paddingLeft: '40px' }}>
                    <li>
                      해결 노력: 한 번에 보내는 것보다는 사용자가 게시글을 작성하는 동안 onChange 를 트리거로 해 업로드된 이미지부터 서버로 보내고, 프론트는
                      다시 return 받아 이미지를 리사이징하면서 포스팅 시간을 줄여보기로 결정
                    </li>
                    <img src={NNN_trouble_shooting1} style={{ width: 800, marginTop: 10 }} />
                    <ul style={{ listStyleType: 'square', paddingLeft: '40px', marginTop: -20 }}>
                      <li style={{ marginTop: 0 }}>
                        upload 객체 내용: 배포가 되지 않은 개발단계로 클라이언트로부터 전송된 이미지 파일을 컴퓨터 하드디스크에 저장하기 위해 uplods 파일을
                        생성해 이미지를 저장하고, 파일명에 현재 시간을 추가해 파일명 중복을 방지
                      </li>
                    </ul>
                    <li style={{ marginTop: '5px' }}>
                      성과: 게시글의 이미지를 먼저 서버로 보내면서 유저가 게시글의 content 를 작성하는 과정에서 오래 걸리는 이미지를 우선 포스팅하고, 다시
                      return 받아 이미지 주소를 알고 있는 프론트에서는 이미지 미리보기 기능이 가능하고, 미리 리사이징할 수 있으면서 포스팅 시간을 단축
                    </li>
                    <img src={NNN_trouble_shooting3} style={{ width: 720, marginLeft: 10 }} />
                  </ul>
                </li>
              </ContentValue>
            </Content>
          </WorkExperienceItem>

          <WorkExperienceItem style={{ marginTop: '200px', borderBottom: '1px solid hsla(0, 0%, 0%, 0.12)', paddingTop: '30px' }}>
            <h3>
              <span>Nice Weather</span>
              <div>(2023.12 ~ 진행중)</div>
            </h3>
            <div style={{ color: '#878e98', fontWeight: '500', fontSize: '15px' }}>1인 React Native 프로젝트</div>
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
              <ContentKey style={{ width: '30%', height: 1213 }}>
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
                  <img src={WeatherAPP1} style={{ width: '25%' }} />
                  <img src={WeatherAPP2} style={{ width: '25%' }} />
                  <img src={WeatherAPP3} style={{ width: '25%' }} />
                  <img src={WeatherAPP4} style={{ width: '25%' }} />
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

                <div style={{ fontWeight: 'bold', fontSize: '16px', marginTop: 20 }}>API_KEY 환경변수 적용</div>
                <li style={{ marginTop: '10px' }}>
                  날씨 정보를 조회하기 위해 Openweathermaps API 에서 사용자 고유의 API_KEY 를 사용해야 했음
                  <ul style={{ listStyleType: 'circle', paddingLeft: '40px' }}>
                    <li>
                      하지만, React 와 달리 ReactNative 에서는 각 플랫폼(Android 및 iOS)에 대한 별도의 빌드 및 실행 환경이 필요하므로, 네이티브 모듈과
                      상호작용할 때 더 많은 설정이 필요로 했음
                    </li>
                    <li style={{ marginTop: '5px' }}>
                      ReactNative 에서 환경변수를 간편하게 관리하기 위해 react-native-dotenv 와 react-native-config 를 고민중 프로젝트의 규모가 크지 않다는 점을
                      고려해 용량이 비교적 가벼운 react-native-dotenv 를 선택해서 API_KEY 보안 문제를 해결
                    </li>
                  </ul>
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
      </Wrap>
    </div>
  );
}
// style = {{marginBottom: '0px'}}
export default Profile;

const Wrap = styled.div`
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
  h1 {
    font: 100%/1.625 -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    -webkit-text-size-adjust: 100%;
    line-height: 1.2;
    font-weight: 600;
    text-rendering: optimizeLegibility;
    font-size: 28px;
  }

  .underlineFront {
    span {
      background: linear-gradient(to top, #a9e2f3 40%, transparent 40%);
    }
  }
  .underlineBack {
    span {
      background: linear-gradient(to top, #a9f5bc 40%, transparent 40%);
    }
  }
  .underlineTool {
    span {
      background: linear-gradient(to top, #feb7b4 40%, transparent 40%);
    }
  }
`;

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
  width: 700px;
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
  height: 30px;
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
    background-color: #f2f2f2;
    padding: 2px 5px;
    /* margin-top: 10px; */
  }
  li {
    margin-left: 15px;
    margin-top: 10px;
    font-weight: 400;
    font-size: 16px;
    /* list-style-position: inside; */
    /* text-indent: -50px; */
  }
`;
