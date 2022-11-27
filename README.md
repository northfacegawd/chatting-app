# 간단한 1:1 채팅 사이트

## 개요

로그인한 사용자끼리 1:1 채팅을 할 수 있는 사이트 입니다.

## 개발

### 구현 사항
* 소셜 로그인 구현
* 채팅 생성 구현
* 유저 검색 구현
* 채팅방을 선택 구현
* 1:1 채팅 구현
* 안 읽은 메시지 알림 구현 (실시간으로 바뀔 수 있게 개발중)

### BUG
* 채팅 발송 시 상대방 클라이언트에서는 onRecive가 작동하지만 자기 자신에서는 작동하지 않음(상대방에게는 내가 실시간으로 보낸 채팅이 보이지만 나에게는 내가 보낸 채팅이 보이지 않음.)


### 기술 스택


| 속성          | 값                                                                                                                                                   |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 프레임워크    | [NextJS](https://nextjs.org/)                                                                                                                        |
| 패키지 매니저 | [npm](https://www.npmjs.com/)                                                                                                                        |
| 언어          | [Typescript](https://www.typescriptlang.org/)                                                                                                        |
| 데이터베이스,ORM  | [Postgresql](https://www.postgresql.org/), [Prisma](https://www.prisma.io/)                                                                                                 |
| 상태관리 라이브러리| [React Query](https://www.npmjs.com/package/react-query)                                                                                          |
| 통신           | [SocketIO](https://socket.io/), [Axios](https://axios-http.com/docs/intro)                                                                        |
| 스타일        | [MUI](https://mui.com/), [Emotion](https://emotion.sh/docs/introduction)                                                                                                 |
| 코드 퀄리티   | [eslint](https://eslint.org/), [prettier](https://prettier.io/)                                                                                      |
| 코드 관리     | [git](https://git-scm.com/) & [github](https://www.github.com/)                                                                                      |


### 환경 세팅

[해당 문서](./INSTALLATION.md) 를 참고한다.

### 컨벤션

[해당 문서](./CONVENTION.md) 를 참고한다.

## 담당자

<table>
    <tr>
      <td align="center">
        <a href="https://github.com/northfacegawd">
            <img
                src="https://avatars.githubusercontent.com/northfacegawd"
            width="200px;"
            />
            <br />
            <sub><b>이용준</b></sub>
        </a>
        <br />
        </td>
    </tr>
</table>


