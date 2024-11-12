// 11_class.js

// 생성자 함수
function User(name, age, city) {
   this.name = name;
   this.age = age;
   this.city = city
   this.getInfo = () => {
      return `${this.name}, ${this.age}, ${this.city}`;
   }
}

let hong = new User("Hong", 30, "Daegu")
console.log(hong.getInfo());

let Kim = new User("Kim", 25, "Jeju");
console.log(Kim.getInfo());

// class
class Emp {
   constructor(id, name, dept) {
      // 해당 클래스가 가지는 필드 등록
      // _로 시작하는 대상은(private)이다 
      // 숨겨진 속성이라고 보고 직접적인 접근을 하지 않도록 하는 암묵적인 약속
      // 직접적으로 점근을 한다고 해서 그걸 막을 방법은 없다 그냥 암묵적인 약속이다
      this._id = id;
      this._name = name;
      this._dept = dept;
   }

   get id() {
      return this._id;
   }

   set name(name) {
      this._name = name;
   }

   get name() {
      return this._name;
   }

   setDept(dept) {
      this._dept = dept;
   }

   getDept() {
      return this._dept;
   }

}

let kang = new Emp(100, "Kang", "Sales");
kang.id = 200; // get밖에 없어서 변경 불가
kang.name = "King";

// 내가 데이터에 접근 할 수 있도록 권한을 체크하는 것
kang.setDept("Marketing");
console.log(kang);