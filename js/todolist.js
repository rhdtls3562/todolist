// jQuery - 탭 클릭에 따라 버튼을 보이거나 숨기기
$(document).ready(function () {
  // 추가 버튼 클릭 시 작업 추가
  $("#add").on("click", function () {
    const task = $("#user").val().trim();
    if (task) {
      const taskHtml = `
        <div class="task">
          <span>${task}</span>
        </div>`;
      $(".taskBoard").append(taskHtml);
      $("#user").val("");
    }
  });

  // 탭 필터링
  $(".tabs li").on("click", function () {
    // 모든 탭에서 active 클래스 제거
    $(".tabs li").removeClass("active");
    $(this).addClass("active");

    const filter = $(this).text(); // 클릭된 탭 이름

    if (filter === "전체") {
      // 전체 탭에서는 버튼 보이기
      $(".task-buttons").show();
    } else {
      // 진행중, 완료 탭에서는 버튼 숨기기
      $(".task-buttons").hide();
    }

    // 작업 필터링
    $(".task").each(function () {
      if (filter === "전체") {
        $(this).show(); // 전체 탭에서는 모든 작업 보이기
      } else if (filter === "진행중") {
        if ($(this).hasClass("completed")) {
          $(this).hide(); // 완료된 작업은 숨기기
        } else {
          $(this).show(); // 진행중인 작업만 보이게
        }
      } else if (filter === "완료") {
        if ($(this).hasClass("completed")) {
          $(this).show(); // 완료된 작업만 보이기
        } else {
          $(this).hide(); // 진행중인 작업은 숨기기
        }
      }
    });
  });
});
