// --------------------------------------------- Đn - Đk
// var btn_user = document.querySelectorAll('.header__navbar-item--strong')
// var window_logout = document.querySelectorAll('.user-logout')


// function Show_logout(){
//     window_logout[0].style.display = "block";
    
// }

// btn_user[0].addEventListener('click', Show_logout)
// btn_user[1].addEventListener('click', Show_logout)



// ------------------------------------------------ Danh Muc
var ItemDanhMuc = document.querySelectorAll('.category-item')

function active_click(){
    // Xóa class active khỏi tất cả các mục
    ItemDanhMuc.forEach(function(item) {
        item.classList.remove('category-item--active');
    });
    this.classList.add('category-item--active');
}
for (var i = 0; i< ItemDanhMuc.length; i++){
    ItemDanhMuc[i].addEventListener('click', active_click)

}
// ----------------------------------------------- Nút
var ItemHome = document.querySelectorAll('.home-filter-btn')

function active_btn(){
    // Xóa class active khỏi tất cả các mục
    ItemHome.forEach(function(item) {
        item.classList.remove('btn--primary');
    });
    this.classList.add('btn--primary');
}
for (var i = 0; i< ItemHome.length; i++){
    ItemHome[i].addEventListener('click', active_btn)

}
// ----------------------------------------------- Search
var ItemSearch = document.querySelectorAll('.header__search-option-item')

function active_search(){
    // Xóa class active khỏi tất cả các mục
    ItemSearch.forEach(function(item) {
        item.classList.remove('header__search-option-item-active');
    });
    this.classList.add('header__search-option-item-active');
}
for (var i = 0; i< ItemSearch.length; i++){
    ItemSearch[i].addEventListener('click', active_search)

}
// ----------------------------------------------- Btn Page
var ItemPage = document.querySelectorAll('.pagination-item')

function active_page(){
    // Xóa class active khỏi tất cả các mục
    ItemPage.forEach(function(item) {
        item.classList.remove('pagination-item--active');
    });
    this.classList.add('pagination-item--active');
}
for (var i = 0; i< ItemPage.length; i++){
    ItemPage[i].addEventListener('click', active_page)

}


// ---------------------------------------------- Data


//------------------------------------------------ Quiz Check
const allQuestions = [
    { question: "21-6-1893 ai là người đã đặt chân lên cao nguyên Lâm Viên?", answers: ["Bác sĩ Paul Néis ", "Trung úy Albert Septans", "Bác sĩ Alexandre Yersin", "Tướng Beylié"], correct: "Bác sĩ Alexandre Yersin" },
    { question: "Trên bản đồ đạo Ninh Thuận, ở khu vực Đà Lạt và vùng phụ cận có ghi 3 chữ gì?", answers: ["Lâm Sơn Phần", "Ngũ Hành Sơn", "Cao nguyên", "Đà Lạt"], correct: "Lâm Sơn Phần" },
    { question: "Viện Pasteur được thành lập vào năm nào?", answers: ["1934", "1935", "1936", "1937"], correct: "1936" },
    { question: "Đảng Cộng sản Việt Nam ra đời vào năm nào?", answers: ["3-2-1930", "2-3-1930", "26-3-1930", "26-3-1945"], correct: "3-2-1930" },
    { question: "Ai là người triệu tập hội nghị để thực hiện quyết định việc giải thể chi bộ Tân Việt và thành lập chi bộ Cộng sản gồm 3 đảng viên?", answers: ["Trần Hữu Duyệt", "Trần Diệm", "Hồ Chí Minh", "Nguyễn Sĩ Quế"], correct: "Trần Diệm" },
    { question: "Tối 30-4-1930, .................được treo ở chợ Đà Lạt, Cầu Đất, truyền đơn xuất hiện trên các đường phố, đồn điền và dọc đường từ Đà Lạt đến Cầu Đất.", answers: ["Cờ đỏ búa liềm", "Cờ đỏ sao vàng", "Cờ vàng ba sọc đỏ", "Cờ trắng"], correct: "Cờ đỏ búa liềm" },
    { question: "Nhân dân Cầu Đất, Trạm Hành khởi nghĩa thắng lợi, thành lập chính quyền cách mạng vào thời gian nào?", answers: ["23-8-1945", "25-8-1945", "21-8-1945", "27-8-1945"], correct: "21-8-1945" },
    { question: "Ngày 14-12-1936, hơn ... công nhân đình công đưa yêu sách đòi chủ phải trả đủ lương và đúng kỳ hạn.", answers: ["200", "300", "400", "500"], correct: "500" },
    { question: "Chi bộ Palace có 5 đảng viên, do ai làm bí thư?", answers: ["Trần Hữu Duyệt", "Trần Diệm", "Hồ Chí Minh", "Nguyễn Sĩ Quế"], correct: "Trần Diệm" },
    { question: "Câu hỏi", answers: ["Đáp án 1", "2", "3", "4"], correct: "Đáp án đúng" },
    { question: "Câu hỏi", answers: ["Đáp án 1", "2", "3", "4"], correct: "Đáp án đúng" },
    { question: "Câu hỏi", answers: ["Đáp án 1", "2", "3", "4"], correct: "Đáp án đúng" },
    { question: "Câu hỏi", answers: ["Đáp án 1", "2", "3", "4"], correct: "Đáp án đúng" },
    // Thêm 90 câu nữa...
]
function getRandomQuestions() {
    const shuffled = allQuestions.sort(() => 0.5 - Math.random()); // Trộn ngẫu nhiên
    return shuffled.slice(0, 10); // Lấy 10 câu đầu tiên
}

// Hiển thị câu hỏi
function displayQuestions() {
    const quizContainer = document.getElementById('quiz-container');
    const randomQuestions = getRandomQuestions();
    let html = '';

    randomQuestions.forEach((q, index) => {
        html += `
            <div class="question">
                <p>${index + 1}. ${q.question}</p>
                ${q.answers
                    .map(
                        (answer, i) =>
                            `<label>
                                <input type="radio" name="q${index}" value="${answer}">
                                ${answer}
                            </label><br>`
                    )
                    .join('')}
            </div>
        `;
    });

    quizContainer.innerHTML = html;
    return randomQuestions; // Trả về danh sách câu hỏi được random để so sánh
}

// Lưu danh sách câu hỏi random để kiểm tra đáp án
const randomQuestions = displayQuestions();
// Chấm điểm
function checkAnswers() {
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    let score = 0;

    randomQuestions.forEach((q, index) => {
        const selectedAnswer = form[`q${index}`].value; // Lấy giá trị được chọn
        if (selectedAnswer === q.correct) {
            score++;
        }
    });

    resultDiv.textContent = `Bạn đã đạt được ${score}/10 điểm.`;
}
