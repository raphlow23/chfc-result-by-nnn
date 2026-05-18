# DEEPBLUE ARCHIVE

충북청주FC 시즌별 기록 아카이브 웹앱 1차 정식 프로토타입입니다.

## 구성

- React
- TypeScript
- Vite
- Tailwind CSS
- 모바일 우선 레이아웃
- 하단 탭 메뉴
- 시즌 선택 드롭다운
- 경기, 선수단, 기록, 히스토리 화면

## 데이터

더미 데이터는 `src/data/seasons.ts`에 있습니다.

현재는 2026 시즌 샘플 데이터를 중심으로 구성했고, 2023, 2024, 2025, 2026 시즌을 계속 추가할 수 있도록 데이터 구조를 분리했습니다.

## 쉽게 바꾸는 곳

앱 이름, 팀명, 상단 로고 글자, 하단 메뉴 이름, 홈 설명 문구, 주요 색상은 아래 파일에서 바꿉니다.

```text
src/config/appConfig.ts
```

브랜드 색상은 네이비, 레드, 화이트 기준으로 전역 관리합니다. 컴포넌트에서 새 hex 색상을 직접 만들지 않고 `brand.navy`, `brand.red`, `slate`, `white` 계열만 사용합니다.

시즌별 경기, 선수단, 순위, 히스토리 데이터는 아래 파일에서 바꿉니다.

```text
src/data/seasons.ts
```

팀 로고 URL도 `src/data/seasons.ts`의 `teamLogoUrls`에서 관리합니다. 현재는 충북청주FC 공식 사이트의 경기/순위 로고 자산을 연결했습니다.

카드 모양이나 화면 배치는 `src/components` 폴더와 `src/App.tsx`에서 바꿉니다.

## 실행

Node.js와 npm이 설치된 환경에서 아래 순서로 실행합니다.

```bash
npm install
npm run dev
```

같은 Wi-Fi의 안드로이드폰에서 확인하려면 아래 명령으로 실행합니다.

```bash
npm run dev:host
```

그 다음 PC의 로컬 IP를 확인하고 안드로이드 Chrome에서 아래 주소로 접속합니다.

```text
http://PC로컬IP:5173
```

## Vercel 배포

외부에서 접속할 정식 테스트 주소가 필요하면 Vercel에 배포합니다.

1. GitHub에 이 프로젝트를 올립니다.
2. Vercel에서 `New Project`를 선택합니다.
3. GitHub 저장소를 연결합니다.
4. Framework Preset은 `Vite`로 둡니다.
5. Build Command는 `npm run build`입니다.
6. Output Directory는 `dist`입니다.
7. 배포하면 `https://...vercel.app` 주소가 생성됩니다.

Vercel에서는 아래 서버 API도 같이 동작합니다.

```text
/api/chfc-data?season=2026
/api/match-detail?eventId=경기ID
```

브라우저가 외부 데이터를 직접 가져오지 않고 Vercel API가 중간에서 가져오므로, 외부 접속 환경에서 더 안정적으로 자동 업데이트를 사용할 수 있습니다.
