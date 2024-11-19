// store.js (저장소)
// stor : vuex가 관리하는 저장소
import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate';

// 저장소를 만들고 루트에 등록해야한다.
const store = createStore({
    state() {   // vuex에서 관리하는 모든 데이터를 정의 
      return {
        cart : [
            {
              product_id : 1,
              product_name : "아이폰 거치대",
              category : "A"
            }
        ], 
        count : 0,
      }
    },
    getters : { // vuex에 저장된변수 값을 조회하는 경우
      cartCount : (state) => {
      return state.cart.length;
    },

    },
    // 함수로 제어를 하는 것
    // 
    mutations : { // 실제 state에 등록된 값을 변경, 단 동기식으로 진행 히스토리 추적이 가능하다 
    increment(state) {   // 함수를 정의하면 state를 넘겨받음
        state.count++;
    },
    addProduct(state, info) {  // 첫번째는 무조건 state에서 값을 받음, 나 이거 등록해줘 ~ 매개변수로 줄께 하면은 2번째, 3번째~~~
        state.cart.push(info);
    }
    },
    actions : { // 동기식으로 진행하는 mutations을 여러개 실행하거나 비동기로 진행
        addProduct(context, info) {   // context => 저장소 전체
          setTimeout(() => {
              // & mutations에 등록된 함수 호출 시 commit 사용
              // 변경사항을 update하는게 commit
              context.commit("addProduct", info);
          }, 1000);
        }
    },
    plugins : [
      //createPersistedState() // 저장소에 있는 모든 데이터를 localStorge에 다 저장된다
      createPersistedState({
        path : ['cart']
      })
    ]
}); // 저장소가 가지고 있는 함수중에 createStore() 메소드가 있다 그걸 기반으로 등록하고 할꺼다

export default store;
