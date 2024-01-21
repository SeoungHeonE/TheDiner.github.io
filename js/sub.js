function updateProgressBar() {
    // progress-bar 요소를 가져옴
    const progressBar = document.getElementById("progress-bar");
    // 필수 입력 필드를 모두 가져옴
    const inputs = document.querySelectorAll("input[required]");
    // 값이 비어있지 않은 입력 필드를 필터링하여 새로운 배열에 저장
    const filledInputs = Array.from(inputs).filter(
        (input) => input.value.trim() !== ""
    );

    // 채워진 입력 필드의 비율을 계산하여 진행률을 구함
    const progressPercentage = (filledInputs.length / inputs.length) * 100;
    // 진행률을 progress-bar 요소의 너비로 설정
    progressBar.style.width = `${progressPercentage}%`;
}

function saveReservation() {
    // 필수 입력 필드를 모두 가져옴
    const inputs = document.querySelectorAll("input[required]");
    // 값이 비어있는 입력 필드를 필터링하여 새로운 배열에 저장
    const emptyInputs = Array.from(inputs).filter(
        (input) => input.value.trim() === ""
    );

    // 비어있는 입력 필드가 하나라도 있을 경우
    if (emptyInputs.length > 0) {
        // SweetAlert 라이브러리를 사용하여 경고창 표시
        Swal.fire({
            icon: "warning",
            title: "입력되지 않은 항목이 있습니다",
            confirmButtonText: "확인",
        });
    } else { // 모든 입력 필드가 채워져 있을 경우
        // SweetAlert 라이브러리를 사용하여 성공 메시지 표시
        Swal.fire({
            icon: "success",
            title: "예약이 완료되었습니다!",
            showConfirmButton: false,
            timer: 1500,
        }).then(() => {
            // 예약 성공 후 1.5초 후에 index.html로 자동 이동
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        });
    }
}


// 두 가지 주요 함수를 포함하고 있습니다. 첫 번째 함수인 `updateProgressBar`는 프로그레스 바를 업데이트하는데 사용되고, 두 번째 함수인 `saveReservation`은 예약 정보를 저장하고 그에 따른 처리를 수행합니다.

// 1. `updateProgressBar` 함수:
//    - `progressBar`와 `required` 속성이 있는 입력 필드들을 가져옵니다.
//    - 입력된 값이 있는 필수 입력 필드들을 찾아내어 `filledInputs`에 저장합니다.
//    - 프로그레스 바의 백분율을 계산하여 해당 백분율로 프로그레스 바를 업데이트합니다.

// 2. `saveReservation` 함수:
//    - `required` 속성이 있는 입력 필드들을 가져옵니다.
//    - 입력되지 않은 필수 입력 필드들을 찾아내어 `emptyInputs`에 저장합니다.
//    - 만약 입력되지 않은 필수 입력 필드가 존재한다면, 경고 창을 띄우고 사용자에게 알립니다.
//    - 그렇지 않다면, 성공 창을 띄우고 예약이 완료되었음을 알립니다.

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

//컨트롤+쉬프트+알트+c = 코드리뷰
//컨트롤+쉬프트+알트+z = 주석문
//컨트롤+쉬프트+알트+r = 리팩토링

// 이 코드는 프로그레스 바를 업데이트하고 필수 입력 필드를 확인하여 예약 정보를 저장하는 기능을 구현한 것입니다.
// 좋은 점:
// 1. 코드가 간결하고 가독성이 좋습니다. 함수 이름과 변수 이름이 명확하게 지어져 있어 코드를 이해하기 쉽습니다.
// 2. 필수 입력 필드를 확인하는 부분에서 `querySelectorAll`과 `filter`를 사용하여 간단하게 구현되었습니다.
// 3. 입력되지 않은 필수 입력 필드가 있는 경우 경고 창을 표시하고, 모든 필수 입력 필드가 입력되었을 경우 성공 창을 표시하는 부분이 잘 구현되었습니다.

// 나쁜 점:
// 1. 코드에 주석이 부족합니다. 코드의 의도와 동작을 이해하기 위해 주석이 필요한 부분이 있습니다. 예를 들어, `updateProgressBar` 함수에서 프로그레스 바와 필수 입력 필드를 가져오는 부분에 대한 주석이 없습니다.
// 2. `querySelectorAll`을 사용하여 필수 입력 필드를 가져오는 부분에서 선택자가 복잡하게 작성되어 있습니다. 선택자를 더 간결하게 작성할 수 있는 방법을 고려해 볼 수 있습니다.
// 이 코드는 기능적으로는 잘 동작하지만, 주석의 부족과 선택자의 복잡성이 개선될 수 있습니다.


// 컨트롤+쉬프트+알트+g
// 색상값을 의미하는 10진수의 숫자 3개를 인자로 받아서 #000000와 같은 형태의 7자리 문자열을 리턴하는 함수

// 컨트롤+쉬프트+알트+m
// 개와 고양이중 누가 더 귀여운지에 대한 주제의 글을 써줘
