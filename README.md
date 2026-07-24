# Personal Portfolio Website

AI와 딥러닝을 공부하는 컴퓨터공학과 학생 정규상의 개인 개발자 웹사이트입니다.
순수 HTML, CSS, JavaScript로 직접 만들고, 앞으로 완성한 프로젝트를 하나씩 추가할 수 있는
단순하고 반복 가능한 구조를 목표로 합니다.

## 현재 목표

- 나와 현재 학습 중인 분야를 정직하게 소개하기
- 개인 웹사이트 자체를 첫 번째 프로젝트로 완성하기
- 스마트폰, 태블릿, 데스크톱에서 읽기 편한 화면 만들기
- GitHub Pages에 배포할 수 있는 정적 웹사이트 준비하기
- 이후 프로젝트 카드를 쉽게 추가할 수 있는 구조 만들기

## 사용 기술

- HTML
- CSS
- JavaScript
- Git
- GitHub Pages (배포 예정)

외부 프레임워크나 라이브러리는 사용하지 않습니다.

## 파일 구조

```text
.
├─ index.html       # 웹사이트의 내용과 전체 영역
├─ css/
│  └─ style.css     # 색상, 레이아웃, 반응형 디자인
├─ js/
│  └─ main.js       # 모바일 메뉴, 부드러운 이동, 현재 연도
├─ images/          # 추후 프로필 이미지와 프로젝트 이미지 저장
└─ README.md        # 실행 및 수정 방법
```

기존 `main.py`는 PyCharm 예제 파일이며 웹사이트 실행에는 사용되지 않습니다.

## 로컬 실행 방법

### 방법 1: 파일 직접 열기

`index.html` 파일을 웹 브라우저에서 직접 엽니다.

### 방법 2: Python 로컬 서버 사용

프로젝트 폴더에서 다음 명령어를 실행합니다.

```bash
python -m http.server 8000
```

이후 브라우저에서 다음 주소로 접속합니다.

```text
http://localhost:8000
```

## 주요 기능

- 상단에 고정되는 메뉴
- 메뉴를 통한 각 영역의 부드러운 이동
- 모바일 화면의 햄버거 메뉴
- 모바일 메뉴 항목 선택 시 자동 닫기
- 메뉴 버튼의 `aria-expanded` 상태 변경
- Footer의 현재 연도 자동 표시
- 화면 크기에 맞춰 한 열로 바뀌는 반응형 레이아웃

## 프로젝트 카드 추가 방법

1. `index.html`에서 `project-card` 주석이 있는 `<article>` 전체를 복사합니다.
2. 복사한 카드를 기존 카드 아래에 붙여 넣습니다.
3. 제목, 설명, 상태, 기술 태그를 실제 프로젝트 내용으로 바꿉니다.
4. 저장소나 배포 주소가 생겼을 때만 준비 중인 `<span>`을 `<a href="실제 주소">`로 변경합니다.
5. 존재하지 않는 주소나 `href="#"`는 사용하지 않습니다.

카드의 모양은 `css/style.css`의 `.project-card`, `.project-actions`,
`.project-tags`에서 수정할 수 있습니다.

## 수정하기 쉬운 위치

- 이름과 소개: `index.html`의 `hero-copy` 영역
- 자기소개: `index.html`의 `about-content` 영역
- GitHub 주소: `index.html`에서 `https://github.com/kyusang4657` 검색
- Learning 항목: `index.html`의 `learning-card` 안에 있는 `<li>` 목록
- 프로젝트 카드: `index.html`의 `project-list` 영역
- 사이트 색상: `css/style.css` 맨 위 `:root` 변수
- 프로필 이미지: 이미지를 `images/`에 넣은 뒤 `profile-placeholder`를 `<img>`로 변경
- 모바일 기준 너비: `css/style.css`의 `@media (max-width: 820px)`

## 프로필 이미지 추가 예시

1. `images/profile.jpg` 파일을 준비합니다.
2. `index.html`의 `profile-placeholder` 요소 전체를 다음처럼 바꿉니다.

```html
<img class="profile-image" src="images/profile.jpg" alt="정규상 프로필 사진">
```

3. `css/style.css`에서 `.profile-placeholder` 스타일을 참고해 `.profile-image`의
   크기와 둥근 모서리를 설정합니다.

## GitHub Pages 배포 예정

코드 검토 후 Git 저장소를 직접 만들고 GitHub에 올린 다음 GitHub Pages를 설정할 예정입니다.
현재 작업에서는 저장소 생성, 원격 연결, 커밋, 푸시, Pages 설정을 실행하지 않았습니다.

배포 전에는 다음 항목을 확인합니다.

- 저장소 이름이 `kyusang4657.github.io`인지 확인
- 루트 폴더에 `index.html`이 있는지 확인
- CSS와 JavaScript 경로가 상대 경로인지 확인
- 모든 외부 링크가 실제 주소인지 확인
- 모바일과 데스크톱에서 메뉴와 레이아웃 확인
- 준비된 프로젝트 저장소 주소를 카드에 연결
- 프로필 이미지 사용 시 파일 이름과 대소문자 확인

## 향후 개선 계획

- 실제 프로필 이미지 추가
- 첫 번째 AI 프로젝트 추가
- 프로젝트 상세 페이지 추가
- 개인 도메인 연결 검토
- 접근성 및 반응형 개선
