# 데브캠프 로그인 / 회원가입

## 사용된 라이브러리 / 패키지

1. react hook form
2. shadcn/ui
3. zod / @hookform/resolvers
4. tailwind
5. eslint
6. typescript
7. next-auth
8. json-server



shadcn/ui를 통해 ui 생성

zod + react hook form을 이용한 유효성 검사

next-auth와 json-server를 사용한 회원가입/로그인

-----

## 배포 환경


GLITCH : json-server

VERCEL <https://dev-camp-first-week-auth-hgyeom.vercel.app/>

----

## 간단한 파일 설명

### src/app/api/auth/[...nextauth]/route.ts

1. 로그인, 회원가입을 위한 Next-auth 설정파일
2. next 13버전 이상에서는 위와 같은 경로, 이하에서는 apit/auth/[...nextauth].ts의 경로처럼 만들어야 함. 이 프로젝트에 사용된 Next 버전은 14.1.2
3. provider를 통해 소셜 로그인과 자체적인 이메일 로그인 구현 가능
4. callback의 jwt와 session으로 jwt 기능 사용 가능. + 커스텀 callback 사용 가능.


### src/validators/user/userSchema.ts

1. zod와 react-hook-form을 이용한 유효성 검사
2. z.object로 여러 유형 검사 가능
3. refine 함수를 이용해 서버와 통신 가능 > 이메일 중복 검사에 사용됨.
4. superRefine의 경우 refine과 유사한 기능.
5. 여기서는 비밀번호와 비밀번호 확인이 일치하는지 검사.
