# Blog_Post

## 개요
* **목적**

본 문서는 Blog_Post 프로젝트의 구조를 문서화하여 차후 프로젝트 유지보수를 위해 작성되었습니다.

* **Getting Start**
```
npm install
npm start
```
본 프로젝트는 React-Native CLI 기반으로 제작되었습니다.

추가된 주요 사용 라이브러리는 axios, mobx, react-navigation 입니다.

자세한 dependencies 및 scripts는 package.json을 참고해주시면 됩니다.

## 유의사항

- node를 이용하여 localhost로 서버를 만들어서 테스트를 하였습니다.

테스트시 별도의 테스트서버가 필요합니다.

- 테스트용 코드로 디자인 및 파일구조를 적용하지 않은 프로젝트입니다.

## File Structure
```
src
 - src
 App.js
```

### Screen

* **HomeScreen**
    * 홈화면으로 글 포스팅을 위한 영역

### Store

* **postStore**
    * MobX store로 전역 상태 관리를 위함

## Variable
- apiArray : 각기 다른 종류의 프로토콜을 가진 블로그에 포스팅을 하기 위한 변수로 확장을 위해 object형으로 지정

## Version History

  Date | Version | author
  ------ | ------ | ------
  2019.07.04 | <center> v0.1 </center> | 이학성