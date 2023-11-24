// kakao map API
const lat = 37.5025398;
const lng = 127.0248679;

let mapContainer = document.querySelector("#map");
let mapOption = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(lat, lng), //지도의 중심좌표.
  level: 9, //지도의 레벨(확대, 축소 정도)
};

let map = new kakao.maps.Map(mapContainer, mapOption);

let clusterer = new kakao.maps.MarkerClusterer({
  map: map,
  averageCenter: true,
  minLevel: 5,
});

let positions = [
  {
    adress: `<div><label">스타필드 고양</label></div>`,
    latlng: new kakao.maps.LatLng(37.6470035, 126.8949777),
  },
  {
    adress: `<div><label">영등포 타임스퀘어점</label></div>`,
    latlng: new kakao.maps.LatLng(37.5169389, 126.9040991),
  },
  {
    adress: `<div><label">IFC 몰</label></div>`,
    latlng: new kakao.maps.LatLng(37.5249328, 126.9254888),
  },
  {
    adress: `<div><label">한남점</label></div>`,
    latlng: new kakao.maps.LatLng(37.5377203, 127.0010096),
  },
  {
    adress: `<div><label">강남 신세계점</label></div>`,
    latlng: new kakao.maps.LatLng(37.5041299, 127.0030692),
  },
  {
    adress: `<div><label">신사 가로수점</label></div>`,
    latlng: new kakao.maps.LatLng(37.522363, 127.0218189),
  },
  {
    adress: `<div><label">청담점</label></div>`,
    latlng: new kakao.maps.LatLng(37.5270738, 127.042769),
  },
  {
    adress: `<div><label">무역센터 현대점</label></div>`,
    latlng: new kakao.maps.LatLng(37.5087171, 127.0598239),
  },
  {
    adress: `<div><label">잠실 롯데월드몰점</label></div>`,
    latlng: new kakao.maps.LatLng(37.5137525, 127.1032749),
  },
  {
    adress: `<div><label">스타필드 하남점</label></div>`,
    latlng: new kakao.maps.LatLng(37.5464133, 127.2230498),
  },
  {
    adress: `<div><label">중동 현대 유플렉스점</label></div>`,
    latlng: new kakao.maps.LatLng(37.5044321, 126.7608393),
  },
  {
    adress: `<div><label">판교 현대점</label></div>`,
    latlng: new kakao.maps.LatLng(37.3925786, 127.1120236),
  },
  {
    adress: `<div><label">롯데몰 수지점</label></div>`,
    latlng: new kakao.maps.LatLng(37.285081, 127.057028),
  },
  {
    adress: `<div><label">광교 갤러리아점</label></div>`,
    latlng: new kakao.maps.LatLng(37.264163, 126.996818),
  },
  {
    adress: `<div><label">COS 롯데백화점 동탄점</label></div>`,
    latlng: new kakao.maps.LatLng(37.2006203, 127.0974478),
  },
  {
    adress: `<div><label">스타필드 안성점</label></div>`,
    latlng: new kakao.maps.LatLng(36.9965723, 127.1485493),
  },
  {
    adress: `<div><label">갤러리아 대전 타임월드점</label></div>`,
    latlng: new kakao.maps.LatLng(36.3518679, 127.3782468),
  },
  {
    adress: `<div><label">대구 신세계점</label></div>`,
    latlng: new kakao.maps.LatLng(35.8774299, 128.6290535),
  },
  {
    adress: `<div><label">부산 신세계 센텀시티몰점</label></div>`,
    latlng: new kakao.maps.LatLng(35.1698577, 129.128281),
  },
];

let markers = [];
let imageSrc =
  "https://image.thehyundai.com/cos_cdn/images/cos/02/a-icon-store_locator.png";

for (let i = 0; i < positions.length; i++) {
  // 마커 이미지의 이미지 크기 입니다
  let imageSize = new kakao.maps.Size(48, 48);

  // 마커 이미지를 생성합니다
  let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

  // 마커를 생성합니다
  let marker = new kakao.maps.Marker({
    map: map, // 마커를 표시할 지도
    position: positions[i].latlng, // 마커를 표시할 위치
    adress: positions[i].adress, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    image: markerImage, // 마커 이미지
  });

  let infowindow = new kakao.maps.InfoWindow({
    content: positions[i].adress,
  });

  const makeOverListener = (map, marker, infowindow) => {
    return () => {
      infowindow.open(map, marker);
    };
  };

  const makeOutListener = (infowindow) => {
    return () => {
      infowindow.close();
    };
  };

  kakao.maps.event.addListener(
    marker,
    "mouseover",
    makeOverListener(map, marker, infowindow)
  );

  kakao.maps.event.addListener(marker, "mouseout", makeOutListener(infowindow));
}

clusterer.addMarkers(markers);
