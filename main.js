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
    { question: "Chi bộ Cầu Quẹo (đường Phan Đình Phùng hiện nay) có 6 đảng viên, do ai làm bí thư?", answers: ["Trần Hữu Duyệt", "Trần Diệm", "Hồ Chí Minh", "Nguyễn Sĩ Quế"], correct: "Nguyễn Sĩ Quế(Đ)" },
    { question: "Để duy trì các hoạt động của Đảng và tránh địch khủng bố, tổ chức Đảng ở Đà Lạt xây dựng mấy cơ sở bí mật?", answers: ["1", "2", "3", "4"], correct: "2" },
    { question: "Đường Prenn mới thay đường Prenn cũ  đã bắt đầu xây dựng vào thời gian nào?", answers: ["Tháng 5-1943", "Tháng 2-1943", "Tháng 9-1943", "Tháng 8-1943"], correct: "Tháng 2-1943" },
    { question: "Nhà máy thủy điện Ankroet được khởi công xây dựng vào thời gian nào?", answers: ["Tháng 8-1942", "Tháng 11-1942", "Tháng 10-1942", "Tháng 5-1943"], correct: "Tháng 10-1942" },
    { question: "Trường Kiến trúc thuộc Trường Cao đẳng Đông Dương được chuyển từ Hà Nội vào  Đà Lạt vào thời gian nào?", answers: ["Năm 1944", "Năm 1941", "Năm 1945", "Năm 1939"], correct: "Năm 1944" },
    { question: "Đà Lạt vào năm 1945 đã trở thành một thành phố tuyệt đẹp  sau bao nhiêu năm xây dựng?", answers: ["Gần 30 năm", "Hơn 30 năm", "Gần 20 năm", "Gần 10 năm"], correct: "Gần 30 năm" },
    { question: "Năm 1940, Toàn quyền Decoux ngay khi mới nhậm chức đã bắt tay thực hiện ý tưởng của các vị tiền nhiệm là biến Đà Lạt thành gì?", answers: ["Trung tâm đô thị", "Trung tâm hành chính", "Cao nguyên Lâm Viên", "Trung tâm thương mại"], correct: "Trung tâm hành chính" },
    { question: "Tỉnh Langbian (Lâm Viên) được thành lập vào thời gian nào?", answers: ["8-1-1941", "1-8-1942", "1-8-1941", "8-1-1942"], correct: "8-1-1941" },
    { question: "Ga Đà Lạt được xây dựng xong vào năm nào?", answers: ["Năm 1936", "Năm 1934", "Năm 1932", "Năm 1938"], correct: "Năm 1938" },
    { question: "Ban vận động thành lập hội Ái hữu ở Đà Lạt được thành lập vào năm nào?", answers: ["Năm 1936", "Năm 1934", "Năm 1939", "Năm 1938"], correct: "Năm 1939" },
    { question: "Tổ chức Đảng ở Đà Lạt lại được khôi phục để trực tiếp lãnh đạo phong trào cách mạng địa phương sau hơn bao nhiêu năm gián đoạn?", answers: ["5", "6", "7", "4"], correct: "7" },
    { question: "Tộc người Chu Ru chiếm khoảng bao nhiêu số dân toàn tỉnh? ", answers: ["1", "2", "3", "4"], correct: "2" },
    { question: "Tộc người Mạ chiếm khoảng bao nhiêu số dân toàn tỉnh?", answers: ["1", "2", "3", "4"], correct: "1" },
    { question: "Tộc người K’Ho chiếm khoảng bao nhiêu số dân toàn tỉnh? ", answers: ["9", "13", "10", "12"], correct: "12" },
    { question: "Tộc người Chu Ru sống chủ yếu đông nhất ở đâu?", answers: ["Đà Lạt", "Di Linh", "Đức Trọng", "Đơn Dương"], correct: "Đơn Dương" },
    { question: "Trang phục của người phụ nữ Chu Ru có gì nổi bật?", answers: ["Váy màu trắng và khăn đội đầu màu đen", "Khăn trắng quấn từ trước ngực ra sau lưng, dải hoa văn đỏ chạy dọc mép khan", "Áo dài màu đen và váy trắng", "Áo ngắn thêu họa tiết với váy xòe"], correct: "Khăn trắng quấn từ trước ngực ra sau lưng, dải hoa văn đỏ chạy dọc mép khan" },
    { question: "Nghề truyền thống nào của người Chu Ru tại xã Tu Tra đang có nguy cơ thất truyền? ", answers: ["Làm gốm", "Đúc nhẫn bạc", "Đan lát", "Dệt thổ cẩm"], correct: "Đúc nhẫn bạc" },
    { question: "Nhạc cụ nào không được nhắc đến trong đoạn văn là của người Chu Ru? ", answers: ["Rơke", "Sar", "Đàn T’rưng", "R’tông"], correct: "Đàn T’rưng" },
    { question: "Nghệ nhân nào hiện đang cố gắng duy trì nghề đúc nhẫn bạc của người Chu Ru?", answers: ["Ya Tuất", "Touneh", "K’bao B’nuh", "Crugiang"], correct: "Ya Tuất" },
    { question: "Trong di sản văn hóa Chu Ru, nội dung nào được ca ngợi nhiều?", answers: ["Vai trò của người đàn ông trong xã hộ", "Chế độ mẫu hệ và vai trò của người phụ nữ", "Tinh thần chiến đấu chống giặc ngoại xâm", "Lịch sử phát triển của các dòng họ"], correct: "Chế độ mẫu hệ và vai trò của người phụ nữ" },
    { question: "Tộc người K’ho chủ yếu sinh sống ở khu vực nào", answers: ["Đồng bằng sông Cửu Long", "Vùng núi cao phía Nam Tây Nguyên", "Vùng duyên hải miền Trun", "Đông Bắc Bộ"], correct: "Vùng núi cao phía Nam Tây Nguyên" },
    { question: "Ngôn ngữ của người K’ho thuộc ngữ hệ nào?", answers: ["Nam Đảo", "Nam Á", "Tạng-Miến", "Hán-Tạng"], correct: "Nam Á" },
    { question: "Lễ hội nào không phải là lễ hội của người K’ho?", answers: ["Lễ gieo sạ lúa", "Lễ cúng dưỡng lúa", "Lễ hội đua thuyền", "Lễ cầu mưa"], correct: "Lễ hội đua thuyền" },
    { question: "Vì sao người K’ho luôn có ý thức bảo vệ rừng?", answers: ["Vì rừng cung cấp nguyên liệu để làm nhạc cụ", "Vì rừng còn thì buôn làng và văn hóa người K’ho còn", "Vì rừng là nơi trú ngụ của tổ tiên họ", "Vì rừng giúp họ làm ruộng lúa nước"], correct: "Vì rừng còn thì buôn làng và văn hóa người K’ho còn" },
    { question: "Người K’ho sử dụng nhạc cụ nào không được nhắc đến trong đoạn văn?", answers: ["Cồng chiên", "Đàn ống tre (Kơrla)", "Sáo trúc", "Kèn ống bầu (Kơmbuat)"], correct: "Sáo trúc" },
    { question: "Tộc người Mạ tập trung sinh sống chủ yếu ở đâu tại Lâm Đồng?", answers: ["Thành phố Đà Lạt", "Thành phố Bảo Lộc và các huyện Bảo Lâm, Đạ Tẻh, Cát Tiên", "Huyện Lạc Dương và thành phố Đà Lạt", "Huyện Đức Trọng và huyện Di Linh"], correct: "Thành phố Bảo Lộc và các huyện Bảo Lâm, Đạ Tẻh, Cát Tiên" },
    { question: "Tín ngưỡng của người Mạ là gì?", answers: ["Thờ một vị thần duy nhất", "Đa thần giáo, thờ Yàng là vị thần cao nhất", "Không theo tín ngưỡng nào", "Thờ tổ tiên là chính"], correct: "Đa thần giáo, thờ Yàng là vị thần cao nhất" },
    { question: "Trong nghi thức lễ cưới của người Mạ, đôi trẻ phải làm gì để thể hiện lời thề chung thủy?", answers: ["Chạm trán nhau 7 lần trong tấm thổ cẩm", "Cùng uống rượu cần trước bàn thờ Yàng", "Cắt máu ăn thề trước cộng đồng", "Trao nhẫn cưới cho nhau trước thần linh"], correct: "Chạm trán nhau 7 lần trong tấm thổ cẩm" },
    { question: "Nghề truyền thống nào của người Mạ vẫn được duy trì và phát triển mạnh?", answers: ["Làm gốm", "Đan lát", "Dệt thổ cẩm", "Rèn sắt"], correct: "Dệt thổ cẩm" },
    { question: "Lễ hội lớn nhất trong vòng đời của một người Mạ là gì?", answers: ["Nhô năng brê - lễ xem rừng xem đất", "Nhô nđan măt kòn - lễ đặt tên cho đứa trẻ mới sinh", "Ngai bơ thi bồc - lễ bỏ mả", "Nhô Rờ he - lễ mừng lúa mới"], correct: "Ngai bơ thi bồc - lễ bỏ mả" },
    { question: "Trong cộng đồng người Mạ, loại hình văn hóa nào sau đây không được nhắc đến trong đoạn văn?", answers: ["Sử thi Mạ", "Đàn đá B’Đạ", "Văn hóa cồng chiên", "Múa rối nước"], correct: "Múa rối nước" }, //40
    { question: "Văn học dân gian Lâm Đồng được truyền lại chủ yếu qua hình thức nào?", answers: ["Viết trên giấy", "Truyền miệng", "Truyền hình", "Qua sách vở"], correct: "Truyền miệng" },
    { question: "Văn học dân gian Lâm Đồng phản ánh điều gì?", answers: ["Các phát minh khoa học", "Đời sống tinh thần và bản sắc văn hóa", "Các sự kiện lịch sử lớn", "Lịch sử quân sự"], correct: "Đời sống tinh thần và bản sắc văn hóa" },
    { question: "Truyện cổ dân gian Lâm Đồng thường bao gồm thể loại nào?", answers: ["Thần thoại, truyền thuyết, cổ tích", "Tiểu thuyết, truyện ngắn", "Bi kịch, hài kịch", "Thơ ca, diễn thuyết"], correct: "Thần thoại, truyền thuyết, cổ tích" },
    { question: "Một trong những địa danh nổi tiếng có sự tích trong truyền thuyết Lâm Đồng là gì?", answers: ["Sự tích núi Lang Biang", "Sự tích Hồ Gươm", "Sự tích Đền Hùng", "Sự tích Phan Thiết"], correct: "Sự tích núi Lang Biang" },
    { question: "Nhân vật mồ côi trong truyện cổ tích Lâm Đồng có đặc điểm gì? ", answers: ["Giàu có và hạnh phúc", "Nghèo khổ, bất hạnh nhưng có phẩm chất tốt", "Là những người thông minh", "Chỉ xuất hiện trong các câu chuyện thần thoại"], correct: "Nghèo khổ, bất hạnh nhưng có phẩm chất tốt" },
    { question: "Truyện cổ tích thần kỳ thường phản ánh điều gì trong cuộc sống?", answers: ["Những tội ác", "Những cuộc đấu tranh thiện ác", "Những cuộc chiến tran", "Những cuộc tìm kiếm kho báu"], correct: "Những cuộc đấu tranh thiện ác" },
    { question: "Các bài ca lao động giúp con người rèn luyện điều gì?", answers: ["Kỹ năng hát", "Tinh thần đoàn kết", "Tìm kiếm tài nguyên thiên nhiên", "Nỗ lực và chăm chỉ trong công việc"], correct: "Nỗ lực và chăm chỉ trong công việc" },
    { question: "Bài ca nghi lễ chủ yếu có nội dung gì?", answers: ["Cầu mưa thuận gió hòa", "Kể chuyện về các anh hùng", "Khuyên bảo con người về luân lý", "Đánh giá thành tích của các tộc trưởng"], correct: "Cầu mưa thuận gió hòa" },
    { question: "Sáng tác văn vần của dân tộc nào ở Lâm Đồng được ghi nhận nhiều nhất?", answers: ["Mạ, Cơ Ho, Chu Ru", "Kinh, Tày, Nùng", "Thái, H'mông, Dao", "Kinh, Mường, Khmer"], correct: "Mạ, Cơ Ho, Chu Ru" },
    { question: "Bài ca lao động chủ yếu nói về điều gì? ", answers: ["Cảnh đẹp thiên nhiên", "Tình yêu và hạnh phúc", "Lịch sử chiến tranh", "Kinh nghiệm trong lao động và cuộc sống"], correct: "Kinh nghiệm trong lao động và cuộc sống" },
    { question: "Trong thơ ca dân gian Lâm Đồng, bài ca nghi lễ được sử dụng trong hoàn cảnh nào?", answers: ["Trong các nghi lễ truyền thống", "Khi giải trí", "Khi học bài", "Khi sinh hoạt gia đình"], correct: "Trong các nghi lễ truyền thống" },
    { question: "Trong truyện cổ tích Lâm Đồng, nhân vật mang lốt có đặc điểm gì? ", answers: ["Tính cách ác độc", "Sống trong thành phố", "Gắn bó với thiên nhiên", "Được mọi người ghét"], correct: "Gắn bó với thiên nhiên" },
    { question: "Bài ca luật tục được sử dụng để làm gì? ", answers: ["Khuyên bảo con người tuân thủ luật lệ", "Mừng các sự kiện lịch sử", "Chúc mừng người chiến thắng", "Cầu nguyện cho mùa màng"], correct: "Khuyên bảo con người tuân thủ luật lệ" },
    { question: "Trong thần thoại Lâm Đồng, các nhân vật có thể hóa thân thành gì? ", answers: ["Các loại cây cỏ", "Nhân vật thần thoại khác", "Người bình thường3", "Các loài vật"], correct: "Các loài vật" },
    { question: "Truyền thuyết Lâm Đồng có yếu tố gì đặc biệt? ", answers: ["Các cuộc chiến tranh vĩ đại", "Giải thích về tên gọi của các địa danh có thật", "Kể về những anh hùng dân tộc", "Phản ánh văn hóa lễ hội cổ xưa"], correct: "Giải thích về tên gọi của các địa danh có thật" },
    { question: "Những bài ca tình cảm trong thơ ca dân gian Lâm Đồng thường được thể hiện như thế nào?", answers: ["Thông qua các bài ca tôn vinh chiến thắng", "Được hát trong các nghi lễ tín ngưỡng", "Thông qua đối đáp giữa nam và nữ", "Được sử dụng để kể về lịch sử"], correct: "Thông qua đối đáp giữa nam và nữ" },
    { question: "Truyền thuyết về núi Lang Biang được kể bởi cộng đồng dân tộc nào ở Lâm Đồng?", answers: ["Dân tộc Kinh", "Dân tộc Mạ", "Dân tộc Cơ Ho", "Dân tộc Chu Ru"], correct: "Dân tộc Mạ" },
    { question: "Trong truyện cổ tích thần kỳ Lâm Đồng, nhân vật nào thường có hoàn cảnh khó khăn và phải tự mình vượt qua thử thách?", answers: ["Nhân vật mồ côi", "Nhân vật hoàng tử", "Nhân vật thần thánh", "Nhân vật hoá vật"], correct: "Nhân vật mồ côi" },
    { question: "Truyền thuyết của các dân tộc thiểu số Lâm Đồng có gì đặc biệt?", answers: ["Dự báo tương lai của con người", "Giải thích sự hình thành các địa danh", "Kể về các cuộc chiến tranh lớn", "Nói về cuộc sống của các vị thần"], correct: "Giải thích sự hình thành các địa danh" },
    { question: "Thần thoại trong văn học dân gian Lâm Đồng có đặc điểm gì nổi bật?", answers: ["Nhân vật chính thường là các loài vật", "Câu chuyện liên quan đến sự xuất hiện của các vị thần", "Kể về các cuộc chiến tranh lớn", "Nói về cuộc sống của các vị thần"], correct: "Câu chuyện liên quan đến sự xuất hiện của các vị thần" },
    { question: "Trong năm 2024, diện tích trồng cây lúa của Lâm Đồng được dự kiến là bao nhiêu?", answers: ["25.238 ha", "20.000 ha", "30.000 ha", "35.000 ha"], correct: "25.238 ha" },
    { question: "Mục tiêu nào được đặt ra đối với diện tích cây trồng đạt tiêu chuẩn xuất khẩu năm 2024?", answers: ["25.000 ha", "34.000 ha", "50.000 ha", "54.000 ha"], correct: "54.000 ha" },
    { question: "Mục tiêu diện tích trồng trọt theo tiêu chuẩn GlobalGAP trong năm 2024 được gắn với yếu tố nào?", answers: ["Tiêu chuẩn quốc tế và mở rộng xuất khẩu", "Phục vụ thị trường nội địa", "Đáp ứng nhu cầu chế biến nông sản", "Cải thiện chất lượng đất"], correct: "Tiêu chuẩn quốc tế và mở rộng xuất khẩu" },
    { question: "Đâu là giải pháp bứt phá được nhấn mạnh đối với chăn nuôi trong năm 2024?", answers: ["Giảm đàn gia súc nhỏ lẻ", "Phát triển đàn heo trang trại quy mô lớn", "Chỉ tập trung vào nuôi trồng thủy sản", "Tăng diện tích đất nuôi cừu"], correct: "Phát triển đàn heo trang trại quy mô lớn" },
    { question: "Mục tiêu tăng trưởng GRDP toàn ngành Nông nghiệp của Lâm Đồng trong năm 2024 là bao nhiêu?", answers: ["4% - 4,5%", "5% - 5,2%", "5,5% - 6%", "6% - 6,5%"], correct: "5% - 5,2%" },
    { question: "Tổng diện tích rừng và đất lâm nghiệp của tỉnh Lâm Đồng theo quy hoạch giai đoạn 2016-2025 là bao nhiêu?", answers: ["500.000 ha", "596.297 ha", "600.000 ha", "650.000 ha"], correct: "596.297 ha" },
    { question: "Đất quy hoạch rừng phòng hộ chiếm tỷ lệ bao nhiêu trên tổng diện tích đất lâm nghiệp?", answers: ["29%", "14%", "56,9%", "61%"], correct: "29%" },
    { question: "Huyện nào trồng được số lượng cây xanh lớn nhất trong năm 2023 tại tỉnh Lâm Đồng?", answers: ["Đam Rông", "Bảo Lâm", "Đơn Dương", "Lạc Dương"], correct: "Đơn Dương" },
    { question: "Nguyên nhân khách quan khiến công tác lâm nghiệp còn tồn tại những hạn chế là gì?", answers: ["Lực lượng quản lý còn thiếu, trang thiết bị không đầy đủ", "Thiếu kinh phí và nguồn nhân lực", "Công tác tuần tra chưa chủ động", "Tất cả các ý trên"], correct: "Tất cả các ý trên" },
    { question: "Tỷ lệ đất quy hoạch rừng đặc dụng trên tổng diện tích đất lâm nghiệp của tỉnh Lâm Đồng là bao nhiêu?", answers: ["14%", "29%", "56,9%", "61%"], correct: "14%" },
    { question: "Tổng diện tích nuôi trồng thủy sản tại tỉnh Lâm Đồng dự kiến đạt vào năm 2030 là bao nhiêu?", answers: ["2.380 ha", "2.400 ha", "2.536 ha", "2.600 ha"], correct: "2.536 ha" },
    { question: "Các huyện nào được khuyến khích chuyển đổi vùng trũng thấp, ven sông suối sang đào ao, hồ nuôi cá truyền thống?", answers: ["Cát Tiên, Đạ Tẻh, Đạ Huoai, Di Linh", "Bảo Lâm, Đức Trọng, Lâm Hà, Đam Rông", "Tất cả các huyện trên", "Chỉ các huyện có hồ thủy lợi"], correct: "Tất cả các huyện trên" },
    { question: "Tỉnh Lâm Đồng đặt mục tiêu đáp ứng bao nhiêu phần trăm nhu cầu giống cá nước lạnh vào giai đoạn 2026-2030? ", answers: ["50%", "60%", "70%", "80%"], correct: "70%" },
    { question: "Công nghệ nào được khuyến khích áp dụng để giảm giá thành sản phẩm thủy sản?", answers: ["Công nghệ hữu cơ", "Cơ giới hóa sản xuất", "Nuôi sinh thái", "Chứng nhận thực hành nuôi trồng thủy sản tốt"], correct: "Cơ giới hóa sản xuất" },
    { question: "Một trong những giải pháp phát triển thủy sản tại Lâm Đồng là gì?", answers: ["Phục hồi các loài thủy sản giá trị kinh tế tại hồ chứa, đập thủy lợi", "Chuyển đổi, đa dạng hóa hình thức nuôi trồng", "Ứng dụng công nghệ tiên tiến để nuôi thủy sản", "Tất cả các ý trên"], correct: "Tất cả các ý trên" },
    { question: "Đến năm 2023, tỉnh Lâm Đồng có bao nhiêu dự án thủy điện?", answers: ["30 dự án", "35 dự án", "37 dự án", "40 dự án"], correct: "37 dự án" },
    { question: "Công suất của 3 dự án điện gió tại tỉnh Lâm Đồng đến năm 2023 là bao nhiêu?", answers: ["120MW", "133MW", "148MW", "160MW"], correct: "148MW" },
    { question: "Sản phẩm sợi len lông cừu tại tỉnh Lâm Đồng đạt sản lượng bao nhiêu tấn trong giai đoạn 2019-2023?", answers: ["4.000 tấn", "5.000 tấn", "5.971 tấn", "6.000 tấn"], correct: "5.971 tấn" },
    { question: "Nguyên nhân chính khiến sản lượng tơ lụa, quần áo may sẵn tại Lâm Đồng giảm trong giai đoạn 2020-2023 là gì?", answers: ["Thiếu lao động", "Ảnh hưởng của dịch bệnh COVID-19", "Thiếu nguyên liệu sản xuất", "Thiếu đầu tư công nghệ"], correct: "Ảnh hưởng của dịch bệnh COVID-19" },
    { question: "Công nghiệp chế biến nông sản ở tỉnh Lâm Đồng đã giúp nâng cao tỷ lệ sơ chế và chế biến nông sản lên trên bao nhiêu phần trăm?", answers: ["50%", "60%", "70%", "80%"], correct: "70%" },
    { question: "Mục tiêu tầm nhìn của chương trình phát triển đô thị Lâm Đồng kéo dài đến năm nào?", answers: ["2030", "2040", "2050", "2060"], correct: "2050" },
    { question: "Tỷ lệ đô thị hóa của tỉnh Lâm Đồng hiện nay là bao nhiêu?", answers: ["30,2%", "40,2%", "50,2%", "60,2%"], correct: "40,2%" },
    { question: "TP Đà Lạt được xác định là trung tâm hành chính - chính trị, kinh tế - văn hóa, khoa học - kỹ thuật của tỉnh vào năm nào?", answers: ["2010", "2015", "2020", "2024"], correct: "2020" },
    { question: "Đến nay, tỉnh Lâm Đồng có bao nhiêu đơn vị hành chính được công nhận cấp đô thị?", answers: ["10 đơn vị", "12 đơn vị", "15 đơn vị", "20 đơn vị"], correct: "15 đơn vị" },
    { question: "Diện tích nhà ở bình quân tại đô thị tỉnh Lâm Đồng hiện nay là bao nhiêu?", answers: ["20 m²/người", "22,5 m²/người", "24,5 m²/người", "25 m²/người"], correct: "24,5 m²/người" },
    { question: "Mục tiêu tỷ lệ đô thị hóa của tỉnh Lâm Đồng đến năm 2030 là bao nhiêu?", answers: ["50,0%", "59,3%", "60,0%", "70,0%"], correct: "59,3%" },
    { question: "Diện tích cây xanh bình quân trên mỗi người dân đô thị đạt bao nhiêu?", answers: ["4-6 m²/người", "6-8 m²/người", "8-10 m²/người", "10-12 m²/người"], correct: "6-8 m²/người" },
    { question: "Mục tiêu tỷ lệ đất xây dựng đô thị trên tổng diện tích đất tự nhiên của tỉnh Lâm Đồng đến năm 2030 là bao nhiêu?", answers: ["1,5-2,0%", "2,0-2,5% ", "3,0-3,5%", "4,0-5,0%"], correct: "2,0-2,5% " },
    { question: "Lâm Đồng đặt mục tiêu nâng cao tỷ lệ dân số được cấp nước sạch tại đô thị lên bao nhiêu?", answers: ["80%", "85%", "90%", "95%"], correct: "90%" },
    { question: "Để xây dựng đô thị xanh, Lâm Đồng sẽ tăng cường phát triển gì?", answers: ["Đường giao thông công cộng", "Diện tích cây xanh", "Xử lý nước thải", "Cả A, B, C"], correct: "Cả A, B, C" },
    { question: "Tỷ lệ bao phủ của hệ thống thoát nước tại các đô thị tỉnh Lâm Đồng đến năm 2030 đạt bao nhiêu?", answers: ["60-70%", "70-80%", "80-90%", "90-100%"], correct: "70-80%" },
    { question: "Lâm Đồng đã phê duyệt Quyết định điều chỉnh Chương trình phát triển đô thị vào năm nào?", answers: ["2023", "2024", "2021", "2022"], correct: "2024" },
    { question: "Lâm Đồng xác định rằng đô thị sẽ là động lực quan trọng thúc đẩy phát triển gì?", answers: ["Môi trường", "Chính trị", "Kinh tế - xã hội", "Vùng nông thôn"], correct: "Kinh tế - xã hội" },
    { question: "Hệ thống đô thị Lâm Đồng sẽ được phát triển theo mạng lưới như thế nào?", answers: ["Phân bổ hợp lý", "Phân bổ không hợp lý", "Chỉ phát triển ở Đà Lạt", "Không có kế hoạch phân bổ"], correct: "Phân bổ hợp lý" },
    { question: "Tỷ lệ đất giao thông so với đất xây dựng đô thị tại đô thị loại I, loại II ở tỉnh Lâm Đồng dự kiến đạt bao nhiêu?", answers: ["15-18%", "18-20%", "20-25%", "25-30%"], correct: "18-20%" },
    { question: "Đến năm 2030, tỉnh Lâm Đồng đặt mục tiêu nâng cao tỷ lệ đóng góp của khu vực đô thị vào GRDP lên bao nhiêu phần trăm?", answers: ["70%", "80%", "85%", "90%"], correct: "85%" },
    { question: "Các giải pháp trọng tâm của Lâm Đồng sẽ tập trung vào những khía cạnh nào?", answers: ["Quy hoạch và phát triển hạ tầng", "Quản lý đô thị và phát triển kinh tế", "Đổi mới cơ chế tài chính và đầu tư", "Cả A, B, C"], correct: "Cả A, B, C" },
    { question: "Lâm Đồng có bao nhiêu nhóm giải pháp trọng tâm để phát triển đô thị xanh và thông minh?", answers: ["5 nhóm", "8 nhóm", "10 nhóm", "12 nhóm"], correct: "10 nhóm" },
    { question: "Một trong những nhóm giải pháp trọng tâm của tỉnh Lâm Đồng là gì?", answers: ["Đổi mới công nghệ", "Quản lý và nâng cao chất lượng cuộc sống đô thị", "Tăng cường phát triển công nghiệp", "Phát triển ngành du lịch"], correct: "Quản lý và nâng cao chất lượng cuộc sống đô thị" },
    { question: "TP Bảo Lộc của tỉnh Lâm Đồng đã đạt tiêu chí đô thị loại mấy?", answers: ["Loại I", "Loại II", "Loại III", "Loại IV"], correct: "Loại II" },
    
]
function getRandomQuestions() {
    const shuffled = allQuestions.sort(() => 0.5 - Math.random()); // Trộn ngẫu nhiên
    return shuffled.slice(0, 20); // Lấy 10 câu đầu tiên
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
    const ranking = document.getElementById('rank');
    let score = 0;

    randomQuestions.forEach((q, index) => {
        const selectedAnswer = form[`q${index}`].value; // Lấy giá trị được chọn
        if (selectedAnswer === q.correct) {
            score++;
        }
    });

    resultDiv.textContent = `Điểm của bạn là: ${score}/20 điểm.`;

    let show = '';
    if(score < 16){
        show = 'Rớt'
        ranking.style.color = 'red'
    }
        
    else {
        show = 'Đạt'
        ranking.style.color = 'green'
    }
    
    ranking.textContent = `Bạn đã ${show} !`
}

// ------------------------------------------------- btn scroll back
// Hiển thị hoặc ẩn nút dựa vào vị trí cuộn trang
window.onscroll = function () {
    const backToTopButton = document.getElementById('back-to-top');
    if (document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = 'flex'; // Hiển thị nút
    } else {
        backToTopButton.style.display = 'none'; // Ẩn nút
    }
};

// Cuộn trở về đầu trang
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Cuộn mượt mà
    });
}


// ----------------------------------------------- Vr 360
// Khởi tạo Viewer với cấu hình chính xác
