react hook form
shadcn/ui
zod / @hookform/resolvers
tailwind
eslint
typescript
next-auth
json-server

GLITCH(json-server), VERCEL 사용하여 배포

shadcn/ui를 통해 ui 생성
zod + react hook form을 이용한 유효성 검사
next-auth와 json-server를 사용한 회원가입/로그인

vercel 링크 - https://dev-camp-first-week-auth-hgyeom.vercel.app/


src/app/api/auth/[...nextauth]/route.ts

로그인, 회원가입을 위한 NEXT_AUTH 설정파일
provider를 통해 소셜 로그인과 자체적인 이메일 로그인 구현 가능
callback의 jwt와 session으로 jwt 기능 사용 가능


src/validators/user/userSchema.ts

zod와 react-hook-form을 이용한 유효성 검사
z.object로 여러 유형 검사 가능
refine 함수를 이용해 서버와 통신 가능 > 이메일 중복 검사에 사용됨.
superRefine의 경우 refine과 유사한 기능.
여기서는 비밀번호와 비밀번호 확인이 일치하는지 검사.
