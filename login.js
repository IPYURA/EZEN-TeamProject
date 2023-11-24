//-----------로그인 창----------//

const idInput = document.querySelector("#id");
const pwInput = document.querySelector("#pw");
const logsigninBtn = document.querySelector("#login-signIn-btn");
const signIn = document.querySelector(".signIn");
const loginContainer = document.querySelector("#login-container");

signIn.style.display = "none";

logsigninBtn.addEventListener("click", () => {
  loginContainer.style.display = "none";
  signIn.style.display = "block";
});

//---------회원가입---------//

document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.querySelector("#signupForm");
  const idSignIn = document.querySelector("#signIn-ID");
  const checkBtn = document.querySelector("#signIncheck");

  checkBtn.addEventListener("click", () => {
    const userId = idSignIn.value;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const duplicate = users.some((user) => user.userId === userId); // 아이디 중복확인
    if (duplicate) {
      alert("이미 존재하는 아이디입니다. 다른 아이디를 사용해주세요.");
    } else {
      alert("사용 가능한 아이디입니다. 비밀번호를 입력해주세요.");
    }
  });

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userId = idSignIn.value;
    const password = document.querySelector("#signIn-PW").value;
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const duplicate = users.some((user) => user.userId === userId);
    if (duplicate) {
      alert("이미 존재하는 아이디입니다. 다른 아이디를 사용해주세요.");
      return;
    }

    const newUser = {
      userId: userId,
      password: password,
    }; //새로운 객체 생성

    users.push(newUser); // 새로운 사용자 추가
    localStorage.setItem("users", JSON.stringify(users));

    const finishTxt = document.querySelector("#finishTxt");
    finishTxt.innerHTML = `<p>회원가입을 정상적으로 완료하였습니다!</p>`;
    // signupForm.reset();
    setTimeout(() => {
      loginContainer.style.display = "block";
      signIn.style.display = "none";
    }, 1500);
  });
  signupForm.reset();
});

//Storage 기능구현하기
//storage 내의 배열과 비교하여 중복검사 구현
