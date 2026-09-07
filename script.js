// DỮ LIỆU CÔ GIÁO VÀ 32 HỌC SINH 12A3
const teacherData = {
    name: "Cô Võ Thị Thanh Tuyền",
    message: `Gửi Cô Võ Thị Thanh Tuyền,

Hai năm trôi qua kể từ ngày chúng ta rời xa trường cấp ba, bươn chải giữa dòng đời rộng lớn, em mới càng mềm và khắc văn tâm biết bao công ơn sinh thành, dưỡng giáo dục thứ hai của cô. Nhớ lại những năm tháng 12A3, có những buổi học mệt mỏi, những lần chúng ta cứng rắn, lơ đễnh làm đôi mày cô mím lại, nhưng chưa một lần cô buông tay hay bỏ mặc em. Cô vẫn ở đó, Nhẫn suy, bao dung và dùng hết tình yêu thương của một người mẹ để sẵn sàng cho em thành người. Giờ đây, khi mỗi đứa trẻ đã mảnh cánh bay đi những phương trời mới, hình bóng cô với tấm mỏng hao gầy và ánh mắt thăm viếng ngày ấy vẫn là an yên nhất mỗi khi chúng em ngoại nhìn lại. Em kính chúc cô hai năm qua và mãi về sau luôn thật nhiều sức khỏe, bình an, giữ vững ngọn nhiệt huyết trên nghiên cứu để tiếp tục chèo lái thêm nhiều thế hệ trò sang sông.`
};

const studentsData = [
    {
        name: "Huỳnh Thị Tuyết Băng",
        message: `Gửi Huỳnh Thị Tuyết Băng,

Hai năm xa cách, không biết đường thợ trang điểm và cách làm tốt của băng hiện tại thế nào rồi? Mình vẫn nhớ như trong những buổi chiều cùng nhau ngồi trong lớp, chia sẻ từng câu chuyện nhỏ nhỏ của tuổi học trò. Thời gian trôi qua, cuốn từng đứa trẻ vào những điều tất bật quyến rũ, nhưng những ký ức về một tuyết băng luôn khéo léo, dịu dàng và đầy nhiệt huyết ngày ấy chưa bao giờ phai mờ trong tâm trí mình. Chúc mừng bạn hiện tại và tương lai sẽ luôn giữ vững đôi tay tài hoa, không ngừng tỏa sáng trên con đường mình đã chọn. Mong cuộc đời sẽ luôn dịu dàng, tô điểm cho thanh xuân và cuộc sống của bạn thật nhiều rực rỡ, bình an.`
    },
    {
        name: "Nguyễn Quốc Dinh",
        message: `Gửi Nguyễn Quốc Định,

Dinh ơi, đã thoát khỏi hai năm kể từ ngày chúng ta mỗi đứa con ngã xuống. Mình vẫn nhớ mãi đồng hành thầm Yên tĩnh, yên tĩnh và tử tế của bạn trong suốt những năm tháng áo trắng. Lúc này, khi bạn đang nghiên cứu đường học tập tại Sư phạm Khoa học tự nhiên - Đại học Đồng Tháp, chắc chắn bạn cũng đã trưởng thành hơn rất nhiều, đã mang theo cả tuyết đứng trên giảng giảng. Chúc Dinh luôn giữ ngọn lửa đam mê với tri thức, để sau này, những thế hệ học của bạn sẽ được truyền cảm hứng từ chính tấm lòng chân thành và tận tận mà ngày xưa chúng ta từng quý ở bên bạn.`
    },
    {
        name: "Nguyễn Huỳnh Giao",
        message: `Gửi Nguyễn Huỳnh Giao,

Hai năm trôi qua, một khoảng thời gian đủ dài để một cô gái cá tính, bản lĩnh vực như Giao trải trải những va vấp đầu đời ở môi trường Luật kinh tế - Trường Đại học Tài chính - Marketing. Mình vẫn nhớ hoài những tiếng cười sảng khoái và chia sẻ thẳng thắn của bạn trong những ngày tháng 12A3 cũ. Chúc cô gái mạnh mẽ của lớp mình sẽ luôn giữ vững cái đầu lạnh đầy tinh, trái tim ấm áp và một bản lĩnh thép trước mọi giông bão ngoài kia. Hãy tự động xác định bước, hiển thị đường dẫn công lý và luật pháp mà bạn đã chọn nhé.`
    },
    {
        name: "Lê Minh Hiếu",
        message: `Gửi Lê Minh,

Ngải thoát đã hai năm chúng ta không còn nghe tiếng ồn trường chiến đấu mỗi sáng. Nhớ những ngày tháng cùng nhau chật vật vượt qua những kỳ thi áp lực, mình vô cùng biết ơn sự nhiệt tình, bụng tốt của Hiếu. Chúc bạn bước chân vào con đường Kỹ thuật điện tại Trường Đại học Tôn Đức Thắng sẽ luôn hiển thị,mạnh mẽ trước mọi khó khăn, khô khan của ngành học. Mong rằng chân thành và ý chí bền bỉ của Hiếu sẽ giúp bạn tự xây dựng một tương lai vững chắc, thành công rực rỡ.`
    },
    {
        name: "Đặng Thị Mỹ Hiếu",
        message: `Gửi Đặng Thị Mỹ Hiếu,

Hai năm trôi qua, cô gái hiền lành, chăm chỉ của 12A3 giờ chắc đã quen với nhịp sống nhộn nhịp ở ngành Công nghệ sinh học - Trường Đại học Nông Lâm. Mình vẫn nhớ mãi sự dịu dàng và nụ cười nở trên môi mỗi khi bạn trò chuyện cùng mọi người. Chúc Hiếu sẽ luôn được sức mạnh, hãy yêu khoa học và sự kiện trong trẻo tuổi trên con đường nghiên cứu phía trước. Mong thử mọi thử đều sẽ nhường bước trước nỗ lực của bạn, mang lại cho bạn một tương lai thật bình yên và ngọt ngào.`
    },
    {
        name: "Đặng Trường An Khang",
        message: `Gửi Đặng Trường An Khang,

Hai năm xa lớp, không biết những hoài bão trẻ của Khang giờ đã đi đến đâu rồi? Nhớ lại những tiếng cười, những câu nói đùa vui vẻ của bạn dưới mái trường cấp ba mà lòng mơ thấy ngọt ngào. Chúc mừng bạn sẽ có một quá trình học đại học thực sự tại Sư phạm Khoa học tự nhiên - Đại học Đồng Tháp. Mong rằng trưởng thành qua từng ngày sẽ giúp bạn trở thành một thầy mẫu mực, biết liễu hiểu và truyền đạt yêu cầu tri thức cho các em học sinh sau này.`
    },
    {
        name: "Đinh Hoàng Khang",
        message: `Gửi Đinh Hoàng Khang,

Hai năm tự nhìn lại chính mình qua những trang văn, những trăn trở của tuổi trưởng thành, tôi mới thấy thanh xuân năm ấy đẹp và đáng trân trọng biết bao. Chúc mừng cho chính bản thân tôi - người đang mang trong mình giấc mơ Sư Tử phạm Ngữ văn tại Đại học Đồng Tháp - sẽ không bao giờ đánh mất đi sự nhạy cảm, xin vuốt ve và trái tim chân thật ngày nào. Dẫu đường phía trước có chông chênh đến đâu, mong rằng khi đứng trên dốc chinh phục, tôi vẫn giữ nguyên cái tâm hồn của tuổi 18, viết nên những bài học Chạm đến cảm xúc của học trò bằng cả chân thành.`
    },
    {
        name: "Nguyễn Thành Luân",
        message: `Gửi Nguyễn Thành Luân,

Thăng thoát đã hai năm, nguồn năng lượng tích cực và sức nhiệt mà Luân từng mang lại cho lớp đôi khi vẫn thiết lập mình tức cười khi hồi tưởng tưởng lại. Chúc bạn ở lĩnh vực Thương mại điện tử - Trường Đại học Công Thương sẽ luôn giữ được sự nhạy cảm, tư duy sắc sâu và tinh thần suy nghĩ sâu làm. Thương trường ngoài kia có thể rất khắc nghiệt, nhưng mình tin với sự vô tư, lanh lợi và bản lĩnh của mình, Luân sẽ chinh phục được những mục tiêu lớn và hái thành công vang dội.`
    },
    {
        name: "Lê Thị Tuyết Ngân",
        message: `Gửi Lê Thị Tuyết Ngân,

Hai năm trôi qua mang theo biết bao thay đổi, nhưng hình ảnh một Tuyết Ngân dịu dàng, nụ cười hiền hòa và sự tinh tế trong cách xử lý với bạn bè vẫn luôn ở đó trong ký ức của mình. Chúc cô gái nhỏ nhắn của lớp khi đối mặt với những con số và áp lực tại Đại học Tài chính - Marketing sẽ luôn vững chắc, bình an. Mong rằng mọi chông gai ngoài kia đều sẽ dịu dàng trước sự trình diễn của bạn, để mỗi ngày trôi qua đều ngập tràn may mắn và hạnh phúc.`
    },
    {
        name: "Trần Như Ngọc",
        message: `Gửi Trần Như Ngọc,

Nhớ những cơn căng thẳng của hai năm về trước, cảm ơn Như Ngọc vì đã luôn là một người bạn dễ mến, luôn sẵn sàng lắng nghe và chia sẻ. Chúc mừng bạn tại Sư phạm Tiếng Anh - Trường Đại học Đồng Tháp sẽ luôn giữ được sự tự tin, năng lượng trẻ tươi và nụ cười rạng rỡ. Mong rằng ngôn ngữ sẽ thực sự là đôi cánh đưa bạn bay cao, bay xa đến những chân trời mới, chạm tay vào những giấc mơ mà bạn đã ấp ủ suốt bao năm tháng thanh xuân.`
    },
    {
        name: "Trương Hoàng Yến Ngọc",
        message: `Gửi Trương Hoàng Yến Ngọc,

Hai năm xa cách, những khoảnh khắc khắc họa cùng vui đùa trong lớp học cũ giờ đã hóa thành hoài niệm đẹp đẽ nhất. Chúc Yến Ngọc khi bước chân vào thế giới rộng lớn của ngành Ngôn ngữ Trung Quốc - Trường Đại học Công Thương TP.HCM sẽ luôn tự tin bước. Dù cuộc sống ngoài kia có lúc chông chênh, với sự thông minh và bản lĩnh sẵn có, mình tin Ngọc sẽ vượt qua tất cả để đến đỉnh vinh quang và tự vẽ nên tương lai rực rỡ cho chính mình.`
    },
    {
        name: "Trương Khôi Nguyên",
        message: `Gửi Trương Khôi Nguyên,

Ngải thoát đã hai năm, những lần Nguyên âm thầm giúp đỡ bạn bè trong tập vẫn là kỷ niệm tưởng mình rất trân quý. Chúc mừng niềm đam mê công nghệ và lập trình của bạn tại Đại học FPT ngày càng đơn hoa kết trái. Ngành Kỹ thuật phần mềm cần lắm một cái lạnh, tỉnh táo và triển lãm như bạn. Mong rằng trong tương lai không xa, chúng ta sẽ tự hào nhìn thấy những sản phẩm mang dấu ấn của kỹ sư tài năng Trương Khôi Nguyên.`
    },
    {
        name: "Đào Xuân Nhật",
        message: `Gửi Đào Xuân Nhật,

Hai năm xa trường cấp ba, không biết Nhật đã đối mặt với bao nhiêu trường, bao nhiêu bài toán khó của ngành Kỹ thuật xây dựng - Trường Đại học Giao thông Vận tải TP.HCM rồi? Mình vẫn nhớ sự nhiệt tình trong các phong trào và tính cách thẳng thắn của bạn. Chúc Nhật Bản luôn được cái đầu lạnh, đôi tay cứng vàng và ý chí cường cường trước mọi thử thách khắc nghiệt của nghề nghiệp, sớm trở thành một kỹ sư xây dựng tài năng giỏi và cứng chãi.`
    },
    {
        name: "Nguyễn Hữu Phát",
        message: `Gửi Nguyễn Hữu Phát,

Hai năm trôi qua, Phát chắc đã lớn hơn và thu hẹp hơn rất nhiều trên hành trình Quản lý giáo dục - Đại học Sư phạm TP.HCM. Cảm ơn bạn vì sự hiền lành, Chăm chỉ và tinh thần trách nhiệm từng góp ý làm một tập thể 12A3 hoàn chỉnh. Chúc bạn luôn được tâm hồn trong trẻo, hãy yêu trẻ và cảm giác sâu sắc. Mong rằng sau này, bạn sẽ góp phần tạo ra những thay đổi ý nghĩa cho giáo dục nước nhà bằng chính cái tâm sáng của mình.`
    },
    {
        name: "Lê Hoàng Quyên",
        message: `Gửi Lê Hoàng Quyên,

Cô gái nhỏ nhắn và hiền lành của 12A3 ơi, mềm thoát đã hai chúng ta bước vào đời. Chúc bạn đối mặt với núi cao tri thức và áp lực nặng nề tại cánh cửa Dược học - Trường Đại học Tôn Đức Thắng sẽ đủ sức mạnh, sự hiện triển và bền bỉ. Ngành Dược đòi hỏi sự cần thiết tuyệt đối, và mình tin sự tinh tế, dịu dàng của Quyên chính là chìa khóa giúp bạn chạm tới ước mơ cứu người, giúp đời mà bạn thường hằng mong ước.`
    },
    {
        name: "Trương Hoàng Tâm",
        message: `Gửi Trương Hoàng Tâm,

Hai năm trôi qua, sự hóm hỉnh và nguồn năng lượng tích cực của Tâm chắc chắn vẫn là điểm sáng ở bất cứ môi trường nào bạn đặt chân tới. Chúc mừng bạn tại ngành Kinh doanh quốc tế - Trường Đại học Công Thương TP.HCM sẽ luôn giữ được sự nhạy cảm, khả năng thích ứng linh hoạt và sự tự tin đáng ngưỡng mộ. Thương trường rộng lớn bên ngoài kia chính là sân chơi để bạn ngọc sức mạnh vùng, khẳng định bản lĩnh và hái thật nhiều thành tích lớn lao.`
    },
    {
        name: "Nguyễn Hoàng Tân",
        message: `Gửi Nguyễn Hoàng Tân,

Hai năm xa cách, những ý tưởng sáng tạo độcg và tâm hồn nghệ sĩ bay bổng của Tân chắc chắn vẫn đang được nuôi dưỡng ở ngành Thiết kế thời trang - Trường Đại học Tôn Đức Thắng. Chúc bạn không bao giờ đánh mất chất riêng và cảm giác nhạy cảm tuyệt vời với cái đẹp. Mong rằng trong tương lai, họ sẽ tự hào ngắm nhìn những bộ sưu tập đậm dấu ấn cá nhân của nhà thiết kế Nguyễn Hoàng Tân trên các sàn diễn lớn của cuộc đời.`
    },
    {
        name: "Phạm Thị Thanh Thảo",
        message: `Gửi Phạm Thị Thanh Thảo,

Thanh thoát đã hai năm, tăng cường thân thiện, hòa đồng và nhiệt huyết tuổi trẻ của Thảo chắc chắn vẫn luôn lan tỏa đến những người xung quanh. Chúc mừng các bạn bước vào ngành Kinh doanh quốc tế - ĐH Sư phạm Kỹ thuật TP.HCM sẽ luôn giữ được sự tự tin, khéo léo. Thế giới kinh doanh ngoài kia tuy viền đầy tranh nhưng cũng vô cùng hấp dẫn, và mình tin với khả năng động của mình, Thảo sẽ nhanh chóng khẳng định được vị trí và hái thật nhiều thành quả ngọt ngọt.`
    },
    {
        name: "Phan Hoài Thịnh",
        message: `Gửi Phan Hoài Thịnh,

Hai năm trôi qua, người bạn yên tĩnh, đáng tin cậy của lớp mình chắc đang từng ngày chính phục thế giới tự động hóa phức tạp tại Trường Đại học Nông Lâm TP.HCM. Chúc Thịnh luôn giữ vững cái đầu lạnh và trái tim nhiệt huyết. Mong rằng mọi máy khách, mọi mạch điện qua bàn tay và tư duy của bạn đều sẽ vận hành trơn tru, đưa bạn tiến xa hơn trên con đường sự nghiệp và khẳng định sẽ giành được giá trị bản thân.`
    },
    {
        name: "Lê Thành Thịnh",
        message: `Gửi Lê Thành,

Thăng thoát đã hai năm trong môi trường Sĩ quan Tăng thiết giáp vũ kỷ luật và thép, chắc chắn Thịnh đã luyện tập được một ý chí cường và bản lĩnh vàng hơn rất nhiều. Cảm ơn bạn vì những kỷ niệm đẹp cùng tập thể lớp năm nào. Chúc bạn luôn vững vàng thần thoại của một chiến binh trẻ, hoàn thành xuất sắc mọi nhiệm vụ mà Tổ quốc và quân đội giao phó, luôn hiên ngang trước mọi cơn giông bão đời.`
    },
    {
        name: "Nguyễn Hòa Thuận",
        message: `Gửi Nguyễn Hòa Thuận,

Hai năm xa cách, tài năng ngoại ngữ và tính cách tự do của Thuận chắc đã đưa bạn đi đến rất nhiều chân trời mới thú vị tại chuyên ngành Ngôn ngữ Anh - Trường Đại học Ngoại ngữ - Tin học TP.HCM. Chúc bạn luôn có được sự tự tin và giọng nói truyền cảm xúc. Mong rằng ngôn ngữ sẽ thực sự là nhịp cầu đưa bạn bước ra thế giới rộng rãi hơn kia, tự tin giao lưu, học hỏi và hái những thành công rực rỡ vượt qua mọi giới hạn.`
    },
    {
        name: "Trần Thị Mỹ Thuyên",
        message: `Gửi Trần Thị Mỹ Thuyên,

Tấn thoát đã hai năm, sự chăm chỉ, cẩn thận và chug của Tuyên chắc đang tỏa sáng trong thế giới Logistics và quản lý chuỗi cung ứng - Trường Đại học Giao thông Vận tải TP.HCM. Chúc mừng bạn luôn được giữ tinh tế, sản phẩm linh hoạt và thủ công tinh xảo. Mong rằng mọi dòng sản phẩm hóa học và chuỗi giá trị trong tương lai dưới sự điều phối của bạn sẽ sẵn sàng chia sẻ, mang lại sự chắc chắn và niềm tự hào lớn lao.`
    },
    {
        name: "Trần Thị Mỹ Tiên",
        message: `Gửi Trần Thị Mỹ Tiên,

Hai năm trôi qua, cô gái sắc vàng của lớp mình chắc chắn đã trang bị thêm cho mình rất nhiều lĩnh vực trên con đường Luật kinh tế - Trường Đại học Công nghiệp TP.HCM. Chúc Tiên luôn giữ được ánh sáng định hình, tinh thần thép và một cái tâm trong sáng. Ngành luật yêu cầu công trí và võ khí lớn, và Tiên của mình sẽ trở thành một chuyên gia sản xuất pháp lý sắc bén, sử dụng tri thức và công nghệ để bảo đảm lẽ phải trong cuộc sống.`
    },
    {
        name: "Lê Tấn Tiên",
        message: `Gửi Lê Tấn Tiên,

Nhánh thoát đã hai năm, sự vui vẻ và tính cách hòa đồng của chắc Tiên vẫn là nguồn năng lượng quen thuộc với các bạn xung quanh. Chúc bạn khi theo đuổi lĩnh vực Tài chính - Ngân hàng - Trường Đại học Công Thương sẽ luôn nhạy cảm với những con số, giữ được linh hoạt và bản lĩnh vực trước mọi biến động thị trường. Mong rằng tương lai phía trước sẽ mở ra cho bạn thật nhiều cơ hội để phát triển năng lực và xây dựng cuộc sống.`
    },
    {
        name: "Thái Thuỳ Trang",
        message: `Gửi Thái Thuỳ Trang,

Hai năm xa cách, sự dịu dàng, từ giá và lòng nhân hậu của Trang chắc chắn vẫn được đơn giản hoa kết trái trên đường trở thành bác sĩ thú y tại Trường Đại học Cần Thơ. Chúc Trang luôn giữ vững ngọn lửa đam mê và chiến đấu. Ngành y tế thú y tuy vất vả, Đòi hỏi sự hy sinh thầm lặng Yên tĩnh, nhưng với lòng trắc ẩn sâu sắc ấy, bạn chắc chắn sẽ xoa dịu và chữa lành cho rất nhiều mảnh đời bé nhỏ.`
    },
    {
        name: "Nguyễn Thị Ngọc Trâm",
        message: `Gửi Nguyễn Thị Ngọc Trâm,

Bước thoát đã hai năm, những đêm thức thức trắng vẽ tiện ích và tâm hồn nghệ thuật của Trâm chắc chắn đang dần dần thực hiện hóa tại ngành Kiến trúc - Trường Đại học Giao thông Vận tải - Phân hiệu tại TP.HCM. Chúc mừng đôi tay khéo léo và tư duy không gian của bạn sẽ xây dựng những công đẹp, để đời bằng chính tâm huyết và tài năng. Áp dụng lực kiến ​​trúc ngành rất lớn, nhưng sự thật hiển nhiên của Trâm sẽ vượt qua tất cả.`
    },
    {
        name: "Đỗ Huỳnh Nhã Trân",
        message: `Gửi Đỗ Huỳnh Nhã Trân,

Hai năm trôi qua, hòa hòa đồng, năng động và nụ cười tươi vui của Trân chắc vẫn làm phấn sáng bất cứ nơi đâu bạn xuất hiện. Chúc bạn bước chân vào môi trường Ngân hàng - Đại học Kinh tế TP.HCM sẽ luôn giữ được sự nhạy cảm, nhạy cảm và may mắn trên thương trường. Sài Gòn hoa lệ đang chờ đón bạn chính phục, hãy cứ tự tin tỏa sáng bằng trí tuệ và sự duyên dáng của chính mình nhé.`
    },
    {
        name: "Nguyễn Thị Trinh",
        message: `Gửi Nguyễn Thị Trinh,

Cô gái có thể vận động năng động và tràn đầy sức sống của lớp ơi, kinh khủng đã hai chúng ta theo một hướng. Chúc Trinh tại ngành Giáo dục thể chất - Đại học Cần Thơ sẽ luôn giữ được sự bền bỉ, sức khỏe dồi dào và tinh thần thép. Mong rằng sau này, trong vai trò là một giáo viên hay huấn luyện viên, bạn sẽ tiếp tục truyền đạt cảm hứng phiêu động, lối sống tích cực cho thật nhiều thế hệ trò chơi noi theo.`
    },
    {
        name: "Huỳnh Thanh Trúc",
        message: `Gửi Huỳnh Thanh Trúc,

Hai năm xa cách, ân cần, dịu dàng và tấm lòng nhân hậu của Trúc chắc đang đêm mài giũa tại cánh cửa Điều dưỡng - Trường đại học Y khoa Phạm Ngọc Thạch. Chúc bạn luôn được trái tim ấm áp và một đôi tay vững chắc, khéo léo. Chế độ điều dưỡng Đòi hỏi sự hy sinh thầm lặng và bảo đảm sức mạnh khủng, nhưng mình tin rằng tận tâm của Trúc sẽ là nguồn sức mạnh để xoa dịu nỗi đau cho các bệnh nhân.`
    },
    {
        name: "Nguyễn Chí Trung",
        message: `Gửi Nguyễn Chí Trung,

Tấn thoát đã hai năm, sự nam tính, tính cách tốt bụng và luôn nhiệt tình giúp đỡ mọi người của Trung chắc chắn đang ngày liền kề với máy móc tại ngành công nghệ ô tô - Trường Cao đẳng Long An. Chúc bạn luôn vững mạnh, tay nghề ngày càng vững vàng. Dầu tẩy, động cơ hỗn hợp đang chờ bạn làm chủ để sau này tự động mở ra một tương lai thực sự mở rộng và chắc chắn cho bản thân.`
    },
    {
        name: "Nguyễn Kiều Vân",
        message: `Gửi Nguyễn Kiều Vân,

Hai năm trôi qua, sự sáng tạo, góc nhìn nghệ thuật độc đáo và những nét tinh tế rất dễ thương của Vân chắc đang bay cao trong thế giới Truyền thông đa phương tiện tiện lợi - Trường Đại học Văn Hiến. Chúc bạn luôn giữ được nguồn cảm hứng bất tận. Mong rằng qua lăng kính và Ngòi bút của bạn, mọi câu chuyện đều sẽ mang lại giá trị truyền cảm hứng mạnh mẽ, đưa bạn tiến xa trong thế giới nghệ thuật đầy màu sắc.`
    },
    {
        name: "Trần Nguyễn Phương Vy",
        message: `Gửi Trần Nguyễn Phương Vy,

Tấn thoát đã hai năm, sự chăm chỉ, cẩn thận và tính cách chug của Vy chắc đang tỏa sáng trên con đường Kế toán - Trường Đại học Tôn Đức Thắng. Chúc bạn luôn giữ được trạng thái bình tĩnh, tỉ đối tuyệt đối trước những con số khô khan. Ngành tài chính kế toán cần có độ chính xác cao, và sự cẩn trọng của Vy chính là chứng chỉ chắc chắn cho một sự nghiệp ổn định, ngày càng thăng tiến trong tương lai.`
    }
];

// CHỨC NĂNG CHUYỂN MÀN HÌNH
function enterSite() {
    document.getElementById('hero-screen').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    renderMembers();
}

// KHỞI TẠO DANH SÁCH
function renderMembers() {
    const teacherContainer = document.getElementById('teacher-container');
    const studentsGrid = document.getElementById('students-grid');

    // Render Cô Giáo
    teacherContainer.innerHTML = createCardHTML(teacherData.name, teacherData.message, true);

    // Render Học Sinh
    studentsGrid.innerHTML = studentsData.map(student => 
        createCardHTML(student.name, student.message, false)
    ).join('');

    attachPressEvents();
}

function createCardHTML(name, message, isTeacher) {
    return `
        <div class="member-card ${isTeacher ? 'teacher-card' : ''}" data-name="${name}" data-message="${escapeHTML(message)}">
            <span class="member-name">${name}</span>
            <div class="progress-bar"></div>
        </div>
    `;
}

function escapeHTML(str) {
    return str.replace(/"/g, '&quot;').replace(/\n/g, '&#10;');
}

// XỬ LÝ SỰ KIỆN NHẤN GIỮ (PRESS & HOLD 1.8S)
let pressTimer = null;

function attachPressEvents() {
    const cards = document.querySelectorAll('.member-card');

    cards.forEach(card => {
        const startPress = (e) => {
            e.preventDefault();
            card.classList.add('pressing');
            const name = card.getAttribute('data-name');
            const message = card.getAttribute('data-message').replace(/&#10;/g, '\n');

            pressTimer = setTimeout(() => {
                openMessage(name, message);
                resetPress(card);
            }, 1800);
        };

        const cancelPress = () => {
            resetPress(card);
        };

        // Pointer Events (Hỗ trợ cả Chuột và Cảm ứng điện thoại)
        card.addEventListener('pointerdown', startPress);
        card.addEventListener('pointerup', cancelPress);
        card.addEventListener('pointerleave', cancelPress);
        card.addEventListener('pointercancel', cancelPress);
    });
}

function resetPress(card) {
    card.classList.remove('pressing');
    if (pressTimer) {
        clearTimeout(pressTimer);
        pressTimer = null;
    }
}

// MỞ VÀ ĐÓNG MODAL LỜI NHẮN
function openMessage(name, message) {
    document.getElementById('letter-recipient').innerText = `Gửi ${name}`;
    document.getElementById('letter-content').innerText = message;
    document.getElementById('modal-overlay').classList.remove('hidden');
}

function closeMessage() {
    document.getElementById('modal-overlay').classList.add('hidden');
}
