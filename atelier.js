const jsonBox = document.querySelector(".jsonBox");
let itemData;
let counter = 0;
let CTcounter = 0;
let Sortcounter = 0;
let stringToNumber = [];
let itemAmount = 1;

//항목 선택 버튼
const colorSelectBox = document.querySelectorAll("#colorMenu .colorSelect");
const categorySelectBox = document.querySelectorAll(
  "#categoryMenu .colorSelect"
);
const s123 = document.querySelectorAll("#sortMenu .colorSelect");
const colorMenu = document.querySelector("#colorMenu");
const colorMenuBtn = document.querySelector("#colorBtn");
const categoryMenu = document.querySelector("#categoryMenu");
const categoryMenuBtn = document.querySelector("#categoryBtn");
const sortMenu = document.querySelector("#sortMenu");
const sortMenuBtn = document.querySelector("#sortBtn");

const innerHtmlLoop = () => {
  jsonBox.innerHTML = "";
  for (let i = 0; i < itemData.length; i++) {
    const dataBox = `
      <div class="goodsBox">
          <div class="goodsImgBox">
            <img class="goodsImg" src="${itemData[i].itemImg}" alt="img${i}" >
            <div class="whiteCircle">
              <img class="heart" src="https://image.thehyundai.com/cos_cdn/images/cos/01/icon_wish_cos.svg" alt="heart">
            </div>
          </div>
          <div class="goodsTextarea">
              <div class="goodsName">${itemData[i].name}</div>             
              <div class="goodsPrice">${itemData[i].price}</div>
               <div class="categoryName">${itemData[i].category}</div> 
           </div>
      </div>  
      `;
    jsonBox.innerHTML += dataBox;
  }
};

async function init() {
  //fetch 함수 안에 값을 찾아서 JSON 데이터를 response 라는 변수에 담음.
  const response = await fetch("GOODSdata.json");
  //객체로 바꿔줘야함!
  itemData = await response.json();

  //------컬러선택 switch문------//
  switch (counter) {
    case 1:
      for (let i = 0; i < itemData.length; i++) {
        if (itemData[i].color !== "black") {
          itemData.splice(i, 1);
          i--;
        }
      }
      innerHtmlLoop();
      break;
    case 2:
      for (let i = 0; i < itemData.length; i++) {
        if (itemData[i].color !== "silver") {
          itemData.splice(i, 1);
          i--;
        }
      }
      innerHtmlLoop();
      break;
    case 3:
      for (let i = 0; i < itemData.length; i++) {
        if (itemData[i].color !== "white") {
          itemData.splice(i, 1);
          i--;
        }
      }
      innerHtmlLoop();
      break;
    case 4:
      for (let i = 0; i < itemData.length; i++) {
        if (itemData[i].color !== "brown") {
          itemData.splice(i, 1);
          i--;
        }
      }
      innerHtmlLoop();
      break;
    case 5:
      for (let i = 0; i < itemData.length; i++) {
        if (itemData[i].color !== "green") {
          itemData.splice(i, 1);
          i--;
        }
      }
      innerHtmlLoop();
      break;
    case 6:
      for (let i = 0; i < itemData.length; i++) {
        if (itemData[i].color !== "navy") {
          itemData.splice(i, 1);
          i--;
        }
      }
      innerHtmlLoop();
      break;
    case 9:
      innerHtmlLoop();
      for (let i = 0; i < 6; i++) {
        colorSelectBox[i].style.opacity = "";
        colorSelectBox[i].style.border = "";
      }
      break;
  }

  //------카테고리선택 switch문------//
  switch (CTcounter) {
    case 1:
      for (let i = 0; i < itemData.length; i++) {
        if (itemData[i].category !== "COS ATELIER") {
          itemData.splice(i, 1);
          i--;
        }
      }
      innerHtmlLoop();
      break;
    case 2:
      for (let i = 0; i < itemData.length; i++) {
        if (itemData[i].category !== "MATCHING SETCOS ATELIER") {
          itemData.splice(i, 1);
          i--;
        }
      }
      innerHtmlLoop();
      break;
    case 9:
      innerHtmlLoop();
      categorySelectBox[0].style.background = "#fff";
      categorySelectBox[1].style.background = "#fff";
      break;
  }

  //------정렬 switch문------//
  switch (Sortcounter) {
    case 1: //이름 순
      stringToNumber = [];
      itemData.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      innerHtmlLoop();
      break;

    case 2: //높은가격 순
      stringToNumber = [];
      for (let i = 0; i < itemData.length; i++) {
        stringToNumber[i] = itemData[i].price.replace(/,/g, "");
        itemData[i].price = stringToNumber[i];
      }
      itemData.sort((a, b) => b.price - a.price);
      for (let i = 0; i < itemData.length; i++) {
        itemData[i].price = itemData[i].price.replace(
          /(\d)(?=(?:\d{3})+(?!\d))/g,
          "$1,"
        );
      }
      innerHtmlLoop();
      break;

    case 3: // 낮은가격 순
      stringToNumber = [];
      for (let i = 0; i < itemData.length; i++) {
        stringToNumber[i] = itemData[i].price.replace(/,/g, "");
        itemData[i].price = stringToNumber[i];
      }
      itemData.sort((a, b) => a.price - b.price);
      for (let i = 0; i < itemData.length; i++) {
        itemData[i].price = itemData[i].price.replace(
          /(\d)(?=(?:\d{3})+(?!\d))/g,
          "$1,"
        );
      }
      innerHtmlLoop();
      break;

    case 9:
      innerHtmlLoop();
      for (let i = 0; i < 3; i++) {
        s123[i].style.background = "";
      }
      break;
  }

  //--------(default)JSON데이터를 HTML에 추가--------//
  for (let i = 0; i < itemData.length; i++) {
    const dataBox = `
      <div class="goodsBox">
          <div class="goodsImgBox">
            <img class="goodsImg" src="${itemData[i].itemImg}" alt="img${i}" >
            <div class="whiteCircle">
              <img class="heart" src="https://image.thehyundai.com/cos_cdn/images/cos/01/icon_wish_cos.svg" alt="heart">
            </div>
          </div>
          <div class="goodsTextarea">
              <div class="goodsName">${itemData[i].name}</div>             
              <div class="goodsPrice">${itemData[i].price}</div>
              <div class="categoryName">${itemData[i].category}</div> 
           </div>
      </div>  
      `;
    jsonBox.innerHTML += dataBox;
  }
  //----------------JSON데이터를 HTML에 추가--//

  //------------GOODSitem 클릭------------//
  const itemImg = document.querySelectorAll(".goodsImgBox");

  //반복문 시작
  itemImg.forEach((el, idx) => {
    let priceToNumber = [];
    let finalPrice = [];
    let number_finalPrice = [];

    el.addEventListener("click", () => {
      document.body.style.overflow = "hidden";
      priceToNumber[idx] = Number(itemData[idx].price.replace(/,/g, ""));
      finalPrice[idx] = itemAmount * priceToNumber[idx];
      number_finalPrice[idx] = finalPrice[idx];
      finalPrice[idx] = String(finalPrice[idx]).replace(
        /(\d)(?=(?:\d{3})+(?!\d))/g,
        "$1,"
      );
      jsonBox.innerHTML = "";
      //modal HTML
      const itemModalHTML = `
     <div id="modalBackground">
        <div class="modalWrap">
          <div id="exitBtn">
            <span></span>
            <span></span>
          </div>
          <div class="modalContentBox">
            <img class="itemImg" src="${itemData[idx].itemImg}" alt="img${idx}" />
            <div class="descBox">
              <h3 class="itemName">${itemData[idx].name}</h3>
              <h4 class="itemPrice">${itemData[idx].price}</h4>
              <h4 class="itemCategory">${itemData[idx].category}</h4>

              <div class="detailDesc">
                <div>
                  <span class="bold">제조사</span>
                  <span>COS</span>
                </div>
                <div>
                  <span class="bold">배송 방법</span>
                  <span>택배</span>
                </div>
                <div>
                  <span class="bold">배송비</span>
                  <span>무료 ⎮ 도서산간 배송비 추가</span>
                </div>
              </div>

              <div class="amountBox">
                <p>수량</p>
                <button id="sub">-</button>
                <div id="nowAmount">${itemAmount}</div>
                <button id="add">+</button>
                <div id="totalPrice">${finalPrice[idx]}원</div>
              </div>

              <div class="End-price">
                <span>
                  총 상품금액(${itemAmount}개)
                  <!-- (<span id="End-nowAmount"></span>) -->
                </span>
                <span> <span id="finalPrice">${finalPrice[idx]}</span> 원 </span>
              </div>

              <button id="addCart">장바구니</button>
              <button id="purchase">구매하기</button>
            </div>
          </div>
        </div>
      </div>
  `;
      jsonBox.innerHTML += itemModalHTML;

      const DOM_nowAmount = document.querySelector("#nowAmount");
      const DOM_totalPrice = document.querySelector("#totalPrice");
      const DOM_finalPrice = document.querySelector("#finalPrice");
      //amount button
      const amountAdd = document.querySelector("#add");
      const amountSub = document.querySelector("#sub");

      //add btn
      amountAdd.addEventListener("click", () => {
        if (itemAmount < 5) {
          itemAmount++;
          let DOM_Price = [];
          DOM_Price[idx] = String(itemAmount * number_finalPrice[idx]);
          DOM_nowAmount.innerHTML = itemAmount;
          DOM_totalPrice.innerHTML = `${DOM_Price[idx].replace(
            /(\d)(?=(?:\d{3})+(?!\d))/g,
            "$1,"
          )}원`;
          DOM_finalPrice.innerHTML = `${DOM_Price[idx].replace(
            /(\d)(?=(?:\d{3})+(?!\d))/g,
            "$1,"
          )}`;
        } else {
          alert(`주문 수량이 너무 많습니다. (최대 주문 가능 수량 : 5개)`);
        }
      });

      //sub btn
      amountSub.addEventListener("click", () => {
        if (itemAmount === 1) {
          alert("최소 주문 가능 수량은 1개 입니다.");
        } else {
          itemAmount--;
          let DOM_Price = [];
          DOM_Price[idx] = String(itemAmount * number_finalPrice[idx]);
          DOM_nowAmount.innerHTML = itemAmount;
          DOM_totalPrice.innerHTML = `${DOM_Price[idx].replace(
            /(\d)(?=(?:\d{3})+(?!\d))/g,
            "$1,"
          )}원`;
          DOM_finalPrice.innerHTML = `${DOM_Price[idx].replace(
            /(\d)(?=(?:\d{3})+(?!\d))/g,
            "$1,"
          )}`;
        }
      });

      //modal Exit Button
      const exitBtn = document.querySelector("#exitBtn");
      const modalBG = document.querySelector("#modalBackground");
      exitBtn.addEventListener("click", () => {
        document.body.style.overflow = "auto";
        modalBG.style.display = "none";
        init();
        itemAmount = 1;
      });
    });
  });

  //----------------------GOODSitem 클릭--//
}
//init 실행
init();

//-----------정렬 함수----------//
const SortEffect = () => {
  s123.forEach((el, idx, arr) => {
    el.addEventListener("click", () => {
      el.style.background = "#000";

      //항목 세부 기능 구현
      switch (idx) {
        case 0: //이름 순
          console.log(`${idx} clicked!`);
          Sortcounter = Sortcounter == 1 ? 9 : 1;
          // Sortcounter = 1;
          init();
          break;
        case 1: //높은 가격 순
          console.log(`${idx} clicked!`);
          Sortcounter = Sortcounter == 2 ? 9 : 2;

          // Sortcounter = 2;
          init();
          break;
        case 2: //낮은 가격 순
          console.log(`${idx} clicked!`);
          Sortcounter = Sortcounter == 3 ? 9 : 3;

          // Sortcounter = 3;
          init();
          break;
      }

      arr.forEach((e, i) => {
        if (idx !== i) {
          e.style.background = "";
        }
      });
    });
  });
};

//-----------컬러 선택 함수-----------/
const colorSelectEffect = () => {
  colorSelectBox.forEach((el, idx, arr) => {
    el.addEventListener("click", () => {
      el.style.opacity = "1";

      switch (idx) {
        case 0:
          counter = counter == 1 ? 9 : 1;
          init();
          break;
        case 1:
          counter = counter == 2 ? 9 : 2;
          init();
          break;
        case 2:
          counter = counter == 3 ? 9 : 3;
          init();
          break;
        case 3:
          counter = counter == 4 ? 9 : 4;
          init();
          break;
        case 4:
          counter = counter == 5 ? 9 : 5;
          init();
          break;
        case 5:
          counter = counter == 6 ? 9 : 6;
          init();
          break;
      }

      //검정색은 예외적으로 border= gray 처리
      if (idx === 0) {
        arr[idx].style.border = "1.5px solid gray";
      } else {
        arr[idx].style.border = "1.5px solid black";
      }

      arr.forEach((element, index) => {
        if (index !== idx) {
          element.style.opacity = "0.5";
          element.style.border = "";
        }
      });
    });
  });
};

//------------카테고리 선택 함수----------//
const categorySelectEffect = () => {
  categorySelectBox.forEach((el, idx, arr) => {
    el.addEventListener("click", () => {
      console.log(`cate - ${idx} pressed`);
      el.style.background = "#fff";
      arr[idx].style.background = "#000";
      switch (idx) {
        case 0:
          CTcounter = CTcounter == 1 ? 9 : 1;
          console.log(`CTcounter => ${CTcounter}`);
          init();
          break;
        case 1:
          CTcounter = CTcounter == 2 ? 9 : 2;
          init();
          break;
      }
      arr.forEach((element, index) => {
        if (index !== idx) {
          element.style.background = "#fff";
        }
      });
    });
  });
};

//--------------펼치기 버튼 이벤트-------------//
colorMenuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (colorMenu.classList.contains("show")) {
    colorMenu.classList.remove("show");
  } else {
    colorMenu.classList.add("show");
  }
});
categoryMenuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (categoryMenu.classList.contains("show")) {
    categoryMenu.classList.remove("show");
  } else {
    categoryMenu.classList.add("show");
  }
});
sortMenuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (sortMenu.classList.contains("show")) {
    sortMenu.classList.remove("show");
  } else {
    sortMenu.classList.add("show");
  }
});

SortEffect();
colorSelectEffect();
categorySelectEffect();
