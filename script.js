$(document).ready(function () {
  $(document).ready(function () {
    setTimeout(function () {
      $(".animated-image01").css({
        left: "1550px",
        top: "255px",
      });
    }, 1500);
  });

  $(document).ready(function () {
    setTimeout(function () {
      $(".animated-image02").css({
        left: "1720px",
        top: "255px",
      });
    }, 1600);
  });

  $(document).ready(function () {
    setTimeout(function () {
      $(".animated-image03").css({
        left: "1700px",
        top: "90px",
      });
    }, 1700);
  });

  $(document).ready(function () {
    setTimeout(function () {
      $(".animated-image04").css({
        left: "1870px",
        top: "90px",
      });
    }, 1800);
  });

  const images = $(".bg-image"); // 모든 이미지 요소 선택
  let currentIndex = 0; // 현재 이미지 인덱스

  function showNextImage() {
    // 현재 인덱스의 이미지를 숨김
    $(images[currentIndex]).hide();

    // 인덱스 증가
    currentIndex++;

    // 인덱스가 배열 길이와 같다면, 마지막 이미지 유지
    if (currentIndex >= images.length) {
      currentIndex = images.length - 1; // 마지막 인덱스로 고정
      $(images[currentIndex]).show(); // 마지막 이미지 표시
      return; // 함수 종료
    }

    // 다음 이미지 표시
    $(images[currentIndex]).show();

    // 2초 후 다음 이미지 전환
    setTimeout(showNextImage, 300);
  }

  // 첫 번째 이미지를 표시하고 전환 시작
  $(images[currentIndex]).show(); // 첫 번째 이미지 표시
  setTimeout(showNextImage, 0); // 2초 후 전환 시작

  // 1초 후에 마지막 이미지 숨기기
  setTimeout(function () {
    $(images[currentIndex]).css({ visibility: "hidden" }); // 마지막 이미지 숨기기
  }, 2000); 

  $(document).ready(function () {
    let currentIndex = 0;
    const images = $(".bg-image2");
    const imageCount = images.length;

    
    images.hide();

    
    setTimeout(function showNextImage() {
      $(images[currentIndex]).show(); 

      
      function changeImage() {
        
        $(images[currentIndex]).hide();

     
        currentIndex = (currentIndex + 1) % imageCount;

       
        $(images[currentIndex]).show();

       
        const randomDelay = Math.random() * 600 + 300;

       
        setTimeout(changeImage, randomDelay);
      }

      
      changeImage();
    }, 1750); 
  });3

  $(document).ready(function () {
    let currentIndex = 0;
    const images = $(".bg-image3");
    const imageCount = images.length;

    // 처음에는 모든 이미지를 숨김
    images.hide();

    // 1초 후에 첫 번째 이미지 보이도록 설정
    setTimeout(function () {
      $(images[currentIndex]).show(); // 첫 번째 이미지 보이기

      // 0.3초마다 이미지 변경
      setInterval(function () {
        // 현재 이미지 숨기기
        $(images[currentIndex]).hide();

        // 인덱스 증가 (마지막 이미지에 도달하면 처음으로 돌아감)
        currentIndex = (currentIndex + 1) % imageCount;

        // 다음 이미지 보이기
        $(images[currentIndex]).show();
      }, 1100); // 0.3초마다 변경
    }, 1750); // 1초 후에 시작
  });

  $(document).ready(function () {
    setTimeout(function () {
      $(".image-zoom").addClass("start-animation");
    }, 2000); // 1초(1000ms) 후에 애니메이션 시작
  });
});
