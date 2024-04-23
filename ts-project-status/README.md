# 모듈 및 네임스페이스

## 여러 개의 파일로 코드를 분할 하는 3가지 방법

1. 여러 개의 코드 파일을 작성하는 것.

   - 특정 프로젝트에 적합하지만, 모든 임포트를 수동으로 관리해야하는 불편함이 있다.
   - 특정한 기능 타입을 사용할 때 타입 지원이 불가능하다.

첫 번째 방법의 문제는 규모가 큰 프로젝트에서 불리하다는 단점이 있어, 이 것의 대안으로
네임스페이스와 파일 번들링을 사용할 수 있다.

- 네임 스페이스  
  네임스페이스는 구문 기능을 제공할 수 있는 타입이며, 코드에 특수 코드를 추가하면 사용할 수 있으며,  
   기본적으로 네임스페이스 아래에, 코드를 그룹으로 묶은 다음  
   다른 파일에 네임스페이스를 임포트해서 파일마다 네임스페이스를 갖게 된다.

  - 타입스크립트는 단순히 이러한 지원뿐만 아니라,  
    여러 파일을 하나의 파일로 묶어서 컴파일 처리한 여러 파일에 코드를 작성한다.

- 네임 스페이스의 대안으로, ES6 모듈(Module)인, import와 export가 있다.
  - 여러 파일 사이의 종속성을 명시할 수 있어, 파일이 개별적으로 존재해도 임포트를 수동으로 관리하지 않는 대신,
    모던 브라우저가 이를 이해하고 자동으로 파일을 실행한다.
    - 때문에, 종속성을 갖는 모든 파일은 개별 다운로드를 해야하며, HTTP 요청이 늘어나는 부작용이 있어,
      여러 파일을 작업하기 위해 파일을 번들링 처리 할 수 있는 Webpack 같은 서드 파티 도구가 필요하다.

## 네임스페이스(Namespace)

- 인터페이스는 해당하는 네임스페이스에서만 사용 가능해,  
  `export` 키워드를 인터페이스 앞에 추가해 네임스페이스에서 기능을 내보낸다.

- `///` 를 사용해, 다른 파일에 임포트 할 수 있다.

- 자바스크립트에는 네임스페이스에 대응하는 동등한 값이 없어,  
  tsconfig에서 "moduleResolution": "node" 설정을 해주어야한다.

- 모든 것을 app.ts에 임포트하면 런타임 오류가 발생할 수 있어,  
  필요한 것을 파일 안에 임포트하고, 필요할 때마다 파일에 추가하는 것이 좋다