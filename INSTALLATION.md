# HOW TO SETUP

## Source Code

### 유의사항

env 파일 생성 후 해당 환경변수들을 세팅 해주어야함.

```env
DATABASE_URL=<DATABASE_URL>
SHADOW_DATABASE_URL=<SHADOW_DATABASE_URL>
NEXTAUTH_SECRET=<NEXTAUTH_SECRET>
NEXTAUTH_URL=http://localhost:3000/api/auth
GITHUB_ID=<GITHUB_ID>
GITHUB_SECRET=<GITHUB_SECRET>
```

1. [레포](git@github.com:northfacegawd/chatting-app.git) 를 클론한다.

```shell
$ git clone git@github.com:northfacegawd/chatting-app.git
```

2. 디펜던시를 설치한다.

```shell
$ npm install
```

3. 로컬에 프로젝트를 실행한다.

```shell
$ npm run dev
```
