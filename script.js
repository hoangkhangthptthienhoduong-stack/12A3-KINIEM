const lettersData = [
    {
        title: "Gửi Cô Võ Thị Thanh Truyền",
        content: "Hai năm trôi qua kể từ ngày chúng em rời xa mái trường cấp ba, giữa dòng đời hối hả và bộn bề mưu sinh, khi chững chạc hơn một chút, chúng em mới càng thấm thía và khắc cốt ghi tâm biết bao công ơn của cô. Cô chính là người truyền lửa thầm lặng, luôn ở cạnh chúng em những khi khó khăn nhất, bao bọc, lo lắng cho lớp bằng tất cả sự dịu dàng và tình yêu thương vô bờ bến. Có những lúc tụi em quậy phá, bướng bỉnh khiến đôi mày cô khẽ nhíu lại, nhưng chưa bao giờ cô buông tay, vẫn luôn ân cần, nhẹ nhàng và dành hết những điều tốt đẹp nhất cho tập thể lớp mình. Hình bóng người mẹ thứ hai tần tảo ngày ấy mãi là chốn bình yên nhất để chúng em ngoảnh đầu tìm về sau bao giông bão. Kính chúc cô hai năm qua và mãi về sau luôn thật nhiều sức khỏe, bình an, giữ vững ngọn lửa nhiệt huyết trên bục giảng để tiếp tục chèo lái thêm nhiều thế hệ học trò sang sông."
    },
    {
        title: "Gửi Huỳnh Thị Tuyết Băng",
        content: "Hai năm xa cách, không biết chặng đường làm thợ trang điểm và làm đẹp của Băng hiện giờ thế nào rồi? Mình vẫn nhớ như in hình ảnh một cô gái nhẹ nhàng, trầm tính, ít nói nhưng lại vô cùng quan tâm, thấu hiểu bạn bè và là một cô gái rất hiểu chuyện. Băng luôn đứng ở một góc để quan sát và thấu cảm mọi thứ xung quanh bằng sự tinh tế của mình. Chúc bạn ở hiện tại và tương lai sẽ luôn giữ vững đôi tay tài hoa và sự tỉ mỉ ấy để tô điểm cho đời, cho ước mơ của chính mình, và mong cuộc đời cũng sẽ dịu dàng ôm lấy Băng."
    },
    {
        title: "Gửi Nguyễn Quốc Dinh",
        content: "Dinh ơi, thấm thoát đã hai năm kể từ ngày chúng ta mỗi đứa một ngã rẽ. Mình vẫn nhớ mãi chàng trai rất nhẹ nhàng, trong sáng, đôi khi có chút lười biếng nhưng học rất giỏi và luôn là người tạo ra những tiếng cười giòn tan để cứu rỗi cả lớp trong những giờ học căng thẳng. Chúc Dinh khi mang theo hoài bão đứng trên bục giảng tại Sư phạm Khoa học tự nhiên - Đại học Đồng Tháp sẽ luôn giữ trọn ngọn lửa đam mê với tri thức, để sau này những đứa học trò nhỏ cũng được sưởi ấm bởi sự trong sáng và đáng yêu của thầy giáo Dinh."
    },
    {
        title: "Gửi Huỳnh Huỳnh Giao (Huỳnh Giao)",
        content: "Hai năm trôi qua, khoảng thời gian đủ dài để nhớ về một cô gái đa tài của lớp mình: Giao múa rất đẹp, hát rất hay, học thuộc lòng siêu nhanh và luôn là chiếc phao cứu sinh đáng tin cậy của tụi mình mỗi mùa kiểm tra. Cảm ơn bạn vì đã luôn kiên nhẫn lắng nghe, bảo ban và an ủi bạn bè lúc chông chênh. Chúc cô gái tài năng bước chân vào môi trường Luật kinh tế - Trường Đại học Tài chính - Marketing sẽ luôn giữ được cái đầu lạnh sắc sảo nhưng trái tim thì lúc nào cũng đong đầy tình cảm, vững vàng trước mọi sóng gió cuộc đời."
    },
    {
        title: "Gửi Lê Minh Hiếu",
        content: "Thấm thoát đã hai năm chúng ta không còn nghe tiếng trống trường giục giã. Nhớ những ngày tháng cùng nhau lao động, dọn dẹp lớp học, mình vô cùng biết ơn lớp phó lao động Lê Minh Hiếu - một chàng trai ấm áp, ân cần, chu đáo, siêng năng và luôn bảo vệ bạn bè trước mọi sóng gió. Chúc bạn khi bước chân vào con đường Kỹ thuật điện tại Trường Đại học Tôn Đức Thắng sẽ luôn kiên định, mạnh mẽ, tự tay xây dựng một tương lai vững chãi và thành công rực rỡ."
    },
    {
        title: "Gửi Đặng Thị Mỹ Hiếu",
        content: "Mỹ Hiếu ơi, tổ trưởng tổ 2 tuyệt vời của tụi mình! Bạn là người bạn đồng hành tuyệt vời trong tuổi trẻ, luôn ở bên động viên, sát cánh, an ủi và cùng bạn bè bước qua những tháng ngày bẽ bàng và khó khăn nhất, luôn lắng nghe, ủng hộ và san sẻ trong mọi chuyện, một cô gái cực kỳ hiểu chuyện và sâu sắc. Chúc bạn khi bước vào thế giới rộng lớn tại ngành Công nghệ sinh học - Trường Đại học Nông Lâm sẽ tìm thấy chân trời của riêng mình, luôn giữ nụ cười rạng rỡ và gặt hái thật nhiều trái ngọt."
    },
    {
        title: "Gửi Đặng Trường An Khang",
        content: "Hai năm xa lớp, không biết những hoài bão tuổi trẻ của Khang giờ đã đi đến đâu rồi? Nhớ những lúc Khang đôi lúc hay nóng giận vu vơ nhưng bên trong lại vô cùng ấm áp, chân thành với bạn bè, học giỏi và chơi rất thiệt tình, không toan tính. Chúc bạn sẽ có một hành trình đại học thật trọn vẹn tại Sư phạm Khoa học tự nhiên - Đại học Đồng Tháp, để sau này sự nhiệt huyết và chân thành ấy sẽ truyền lửa cho thật nhiều thế hệ học trò."
    },
    {
        title: "Gửi Đinh Hoàng Khang (Chính mình)",
        content: "Hai năm tự nhìn lại chính mình qua những trang văn và những trăn trở của tuổi trưởng thành, tôi mới thấy thanh xuân năm ấy đẹp và đáng trân trọng biết bao khi được làm tổ trưởng tổ 3, được đồng hành cùng những người bạn tuyệt vời. Chúc cho chính bản thân tôi - người đang mang trong mình giấc mơ Sư phạm Ngữ văn tại Đại học Đồng Tháp - sẽ không bao giờ đánh mất đi sự nhạy cảm, lòng trắc ẩn và trái tim chân thành ngày nào khi đứng trên bục giảng, viết nên những bài học chạm đến cảm xúc của học trò."
    },
    {
        title: "Gửi Nguyễn Thành Luân",
        content: "Thấm thoát đã hai năm, nguồn năng lượng rất có trách nhiệm, đôi chút đào hoa và rất quan tâm yêu thương bạn bè của Luân đôi khi vẫn khiến mọi người bật cười khi nhớ lại. Chúc bạn ở lĩnh vực Thương mại điện tử - Trường Đại học Công Thương sẽ luôn giữ được sự nhạy bén, tư duy sắc sảo và tinh thần dám nghĩ dám làm để chinh phục những mục tiêu lớn trên thương trường khốc liệt ngoài kia."
    },
    {
        title: "Gửi Lê Thị Tuyết Ngân",
        content: "Tuyết Ngân ơi, tụi tôi hay đùa ghẹo bạn là hay nói dối, hay nhiều chuyện lắm, nhưng sâu thẳm trong lòng, ai cũng biết Tuyết Ngân là một cô bí thư vô cùng gương mẫu, có trách nhiệm và thương lớp biết nhường nào. Hai năm trôi qua, chúc cô bí thư ngày nào khi đối mặt với những con số và áp lực tại Đại học Tài chính - Marketing sẽ luôn vững vàng, bình an và gặt hái thật nhiều thành quả ngọt ngào."
    },
    {
        title: "Gửi Trần Như Ngọc",
        content: "Nhớ những mùa thi căng thẳng của hai năm về trước, cô lớp phó học tập học rất giỏi, rất chan hòa, rất dễ tính và quan tâm bạn bè. Mà nhắc đến Như Ngọc là tụi mình lại phì cười vì... nói đùa thế thôi chứ Ngọc nhà mình nhát gan lắm nha, hù nhẹ một cái là giật mình rồi! Chúc bạn tại Sư phạm Tiếng Anh - Trường Đại học Đồng Tháp sẽ luôn giữ được sự tự tin, năng lượng tươi trẻ để ngôn ngữ thực sự là đôi cánh đưa bạn bay cao bay xa."
    },
    {
        title: "Gửi Trương Hoàng Yến Ngọc",
        content: "Yến Ngọc - cô nàng văn chương, nàng thơ của lớp mình, luôn mang đến một cảm giác rất đỗi chân thành, nhẹ nhàng và dễ thương. Hai năm xa cách, những khoảnh khắc cùng nhau đùa giỡn trong lớp học cũ giờ đã hóa thành hoài niệm đẹp đẽ. Chúc Yến Ngọc khi bước chân vào thế giới rộng lớn của ngành Ngôn ngữ Trung Quốc - Trường Đại học Công Thương TP.HCM sẽ luôn tự tin sải bước, chạm đến đỉnh vinh quang."
    },
    {
        title: "Gửi Trương Khôi Nguyên",
        content: "Thấm thoát đã hai năm, chàng trai rất giỏi công nghệ, tính tình dễ thương nhưng lại cực kỳ ít nói như Khôi Nguyên có còn cặm cụi bên những dòng code không? Cảm ơn bạn vì những lần âm thầm giúp đỡ bạn bè trong thầm lặng mà chẳng cần phô trương. Chúc cho niềm đam mê công nghệ tại Đại học FPT ngày càng đơm hoa kết trái, mang lại những sản phẩm mang đậm dấu ấn của kỹ sư tài năng Khôi Nguyên."
    },
    {
        title: "Gửi Đào Xuân Nhật",
        content: "Hai năm xa mái trường cấp ba, không biết Nhật đã đối mặt với bao nhiêu bài toán khó của ngành Kỹ thuật xây dựng - Trường Đại học Giao thông Vận tải TP.HCM rồi? Mình vẫn nhớ một chàng trai có tính khí hòa đồng, ít nói, rất ga lăng, luôn ân cần, nhẹ nhàng, ấm áp và rất thông minh, học lý siêu giỏi. Chúc Nhật luôn giữ vững cái đầu lạnh, đôi tay vững vàng và ý chí kiên cường trước mọi giông bão của cuộc đời."
    },
    {
        title: "Gửi Nguyễn Hữu Phát",
        content: "Hai năm trôi qua, Hữu Phát chắc đã lớn hơn và điềm đạm hơn rất nhiều trên hành trình Quản lí giáo dục - Đại học Sư phạm TP.HCM. Cảm ơn một chàng trai rất thông minh, học rất giỏi, một người đàn ông ấm áp và chân thành, rất biết tạo tiếng cười và niềm vui cho bạn bè, đặc biệt là những màn hay ghẹo chọc nhỏ Trúc lớp trưởng làm cả lớp cười nắc nẻ. Chúc bạn luôn giữ được tâm hồn trong trẻo, lòng yêu trẻ và sự thấu cảm sâu sắc."
    },
    {
        title: "Gửi Lê Hoàng Quyên",
        content: "Cô gái nhỏ nhắn của 12A3 ơi, Quyên rất hiểu chuyện, luôn đồng hành cùng bạn bè trong những tình huống dù khó khăn nhất, luôn ở bên lắng nghe và thấu hiểu. Thấm thoát đã hai năm chúng ta bước vào đời, chúc bạn khi đối mặt với núi cao tri thức và áp lực nặng nề tại cánh cửa Dược học - Trường Đại học Tôn Đức Thắng sẽ luôn đủ sức mạnh và sự bền bỉ để chạm đến ước mơ cứu người, giúp đời."
    },
    {
        title: "Gửi Trương Hoàng Tâm",
        content: "Tâm ít nói lắm, tụi mình hay chọc Tâm là \"Diễm Hương\" từ thuở nào chẳng nhớ, mỗi lần nhắc đến là ai cũng cười tỏa lên, nhưng thật sự Tâm rất nhẹ nhàng, ấm áp, rất chân thành và bao dung. Hai năm trôi qua, chúc bạn tại ngành Kinh doanh quốc tế - Trường Đại học Công Thương TP.HCM sẽ luôn giữ được sự nhạy bén và tự tin để thỏa sức vẫy vùng trên thương trường rộng lớn."
    },
    {
        title: "Gửi Nguyễn Hoàng Tân",
        content: "Hai năm xa cách, chàng trai học giỏi văn lắm, nhẹ nhàng ân cần Hoàng Tân chắc vẫn đang nuôi dưỡng tâm hồn bay bổng của mình. Chúc bạn luôn giữ được sự nhạy cảm tuyệt vời với con chữ và cuộc sống. Mong rằng trong tương lai, mọi dự định của bạn đều sẽ đơm hoa kết trái, mang lại một cuộc đời thật bình yên, ý nghĩa và ngập tràn cảm xúc."
    },
    {
        title: "Gửi Phạm Thị Thanh Thảo",
        content: "Thanh Thảo tưởng nhỏ xíu nhưng mà không hề vô dụng nha! Học giỏi, đôi lúc xéo sắc nhưng rất dễ thương, có một \"đặc sản\" là hay ngủ gật trong giờ học khiến tụi mình nhìn chỉ biết phì cười bất lực. Thấm thoát đã hai năm, chúc bạn khi bước vào ngành Kinh doanh quốc tế - ĐH Sư phạm Kỹ thuật TP.HCM sẽ luôn giữ được sự năng động, khéo léo để gặt hái thật nhiều thành quả ngọt ngào."
    },
    {
        title: "Gửi Phan Hoài Thịnh",
        content: "Hai năm trôi qua, chàng trai nhỏ nhắn nhưng học rất giỏi, hay làm mấy trò mắc cười, rất nhẹ nhàng và rất tình cảm này chắc đang trưởng thành rất nhiều. Chúc Hoài Thịnh luôn giữ vững sự dí dỏm, nụ cười trên môi và trái tim nhiệt huyết để vượt qua mọi thử thách trên con đường học tập và sự nghiệp tương lai."
    },
    {
        title: "Gửi Lê Thành Thịnh",
        content: "Tổ trưởng tổ 1 - Lê Thành Thịnh, một chàng trai học giỏi, ga lăng, rất chăm, nhẹ nhàng và tình cảm. Chúc bạn luôn giữ được tinh thần trách nhiệm và sự ấm áp ấy trong mọi ngã rẽ cuộc đời. Mong rằng sự chăm chỉ và tử tế sẽ luôn dẫn đường để bạn chạm tay đến những đỉnh cao mới, làm rạng danh cho tập thể 12A3 năm nào."
    },
    {
        title: "Gửi Nguyễn Hòa Thuận",
        content: "Hòa Thuận học tiếng Anh giỏi lắm nha! Ít nói nhưng lại rất nhẹ nhàng và ấm áp, rất tình cảm và chân thành. Hai năm xa cách, tài năng ngoại ngữ chắc đã đưa bạn đi đến rất nhiều chân trời mới thú vị. Chúc bạn luôn giữ được sự tự tin, để ngôn ngữ thực sự là nhịp cầu đưa bạn bước ra thế giới rộng lớn ngoài kia, tự tin giao lưu và gặt hái thành công."
    },
    {
        title: "Gửi Trần Thị Mỹ Thuyên",
        content: "Mỹ Thuyên - cô nàng nhẹ nhàng, nền nã, thướt tha. Tụi mình vẫn nhớ hoài kỷ niệm hồi vừa vào lớp 10 đã bị ngay một bản kiểm điểm vì đi trễ, dù trọ rất gần trường, nghĩ lại vừa thương vừa buồn cười! Thấm thoát đã hai năm, chúc cô nàng nền nã ngày nào khi bước vào thế giới Logistics và quản lý chuỗi cung ứng - Trường Đại học Giao thông Vận tải TP.HCM sẽ luôn giữ được sự sắc sảo, đầu óc tổ chức linh hoạt và một cuộc sống thật bình yên."
    },
    {
        title: "Gửi Trần Thị Mỹ Tiên",
        content: "Mỹ Tiên rất tình cảm và ấm áp, viết chữ đẹp lắm, rất tốt, rất chân thành và rất yêu thương bạn bè, luôn tôn trọng, thấu hiểu và sẵn sàng vì bạn bè làm nhiều chuyện. Tiên học rất giỏi và rất chăm, đôi khi tụi tôi không hiểu sao Mỹ Tiên có thể chăm được như vậy! Đặc biệt, Mỹ Tiên học văn giỏi lắm, văn phong giàu cảm xúc và tình thương. Nhớ lại hồi lớp 12, Tiên còn \"cứu bệ hạ\" hú hồn vì mình không thuộc bài nên bị giáo viên bắt, lúc đó hai đứa nhìn nhau mà mắc cười muốn chết, nghĩ lại vẫn thấy thương hết sức! Chúc bạn trên con đường Luật kinh tế - Trường Đại học Công nghiệp TP.HCM sẽ luôn giữ được cái tâm sáng và trái tim đong đầy trắc ẩn ấy."
    },
    {
        title: "Gửi Lê Tấn Tiên",
        content: "Lớp phó trật tự nhưng... không hề trật tự một chút nào! Hay làm trò để cả lớp cười ồ lên rồi quay mấy cái trend TikTok bị cả lớp ghẹo đỏ mặt, nhưng Tấn Tiên lại rất chân thành, ấm áp, cực kỳ tình cảm (chơi với Tiên là không bao giờ buồn nổi đâu, chỉ có cái tội hay nói móc nói méo người ta là đỉnh cao!). Chúc bạn tại Tài chính - Ngân hàng - Trường Đại học Công Thương sẽ luôn nhạy bén với những con số, giữ mãi tiếng cười và sự trẻ trung tưng tửng ấy trong cuộc sống."
    },
    {
        title: "Gửi Thái Thuỳ Trang",
        content: "Thùy Trang rất ít nói nhưng lại rất chân thành, xinh gái, dễ thương. Nhớ hồi đó Trang không biết chạy xe nên ngày nào 3 cũng phải đón đưa. Hai năm trôi qua, chúc cô gái nhẹ nhàng ngày nào sẽ luôn giữ được nụ cười hiền hòa, sự bình an trong tâm hồn. Mong rằng cuộc sống sau này sẽ đối xử thật dịu dàng, che chở cho sự mỏng manh và đáng yêu của bạn."
    },
    {
        title: "Gửi Nguyễn Thị Ngọc Trâm",
        content: "Ngọc Trâm rất dễ tính, bình thường hóa mọi chuyện, đôi khi hay vô tư hay ngủ quên và đi trễ mắc cười lắm, chạy xe là chạy hết cái đường lớn luôn! Nhớ những khoảnh khắc vô tư, hồn nhiên ấy làm sao. Chúc Trâm luôn giữ được năng lượng tích cực, sự phóng phóng đó để bước qua mọi giông bão cuộc đời một cách nhẹ nhàng nhất."
    },
    {
        title: "Gửi Đỗ Huỳnh Nhã Trân",
        content: "Nhã Trân - nữ thần đẹp gái nhưng mà... hơi khùng! Học giỏi dữ lắm nha, hay làm trò cùng với Tấn Tiên, cứ 2 đứa này xúm lại là hơn cái chợ phiên, cười điếc tai! Cảm ơn Nhã Trân vì những tiếng cười sảng khoái mang lại cho lớp. Chúc cô nàng tài sắc vẹn toàn khi bước chân vào môi trường Ngân hàng - Đại học Kinh tế TP.HCM sẽ luôn khôn ngoan, nhạy bén, gặt hái thật nhiều thành công và giữ mãi cái nết tưng tửng đáng yêu ấy."
    },
    {
        title: "Gửi Nguyễn Thị Trinh",
        content: "Nguyễn Thị Trinh - một cô gái mạnh mẽ, ngọt ngào và nhẹ nhàng, luôn quan tâm và động viên, ủng hộ bạn bè thầm lặng. Thấm thoát đã hai năm, chúc Trinh tại ngành Giáo dục thể chất - Đại học Cần Thơ sẽ luôn giữ được sự bền bỉ, sức khỏe dồi dào và tinh thần thép. Mong rằng sau này, bạn sẽ tiếp tục truyền được cảm hứng vận động và lối sống tích cực cho thật nhiều thế hệ học trò."
    },
    {
        title: "Gửi Huỳnh Thanh Trúc",
        content: "Huỳnh Thanh Trúc - lớp trưởng học giỏi, ấm áp, có trách nhiệm, luôn ân cần và rất năng nổ trong mọi hoạt động (và đặc biệt là \"nạn nhân\" bất đắc dĩ hay bị Hữu Phát ghẹo chọc không trượt phát nào!). Cảm ơn Trúc vì đã luôn là chỗ dựa vững chắc cho lớp. Chúc bạn khi bước vào cánh cửa Điều dưỡng - Trường đại học Y khoa Phạm Ngọc Thạch sẽ luôn giữ được trái tim ấm áp, đôi tay vững vàng để xoa dịu nỗi đau cho các bệnh nhân."
    },
    {
        title: "Gửi Nguyễn Chí Trung",
        content: "Chí Trung là một chàng trai rất có trách nhiệm và rất dễ thương. Tụi tôi quý Trung lắm vì bạn luôn sẵn sàng giúp đỡ bạn bè bất cứ lúc nào (và tụi mình thú thật là cực kỳ ấn tượng với cái nón bảo hiểm màu xanh huyền thoại của Trung nữa nha!). Chúc bạn khi theo đuổi đam mê tại ngành Công nghệ ô tô - Trường Cao đẳng Long An sẽ luôn giữ được sự mạnh mẽ, tay nghề vững vàng, tự tay mở ra một tương lai thật rộng mở và vững chắc."
    },
    {
        title: "Gửi Nguyễn Kiều Vân",
        content: "Kiều Vân - cô nàng nhỏ nhắn nhưng rất cá tính, luôn sẵn sàng giúp đỡ và ủng hộ bạn bè, vẫn rất dễ thương, rất ngoan và học rất giỏi. Thấm thoát đã hai năm, chúc Vân luôn giữ được nguồn năng lượng tích cực và sự sắc sảo ấy. Mong rằng qua lăng kính của bạn, mọi dự định trong tương lai đều sẽ đơm hoa kết trái, đưa bạn bay thật xa trên con đường mình đã chọn."
    },
    {
        title: "Gửi Trần Nguyễn Phương Vy",
        content: "Phương Vy rất dễ thương, sâu sắc, nhẹ nhàng, chân thành và chính là tổ trưởng tổ 4 có trách nhiệm của lớp! Nhớ mãi kỷ niệm hồi năm lớp 12 bị công an bắt xe tội lắm, lúc đó cả lớp ai cũng muốn cười rớt hàm nhưng phải ráng nín vì sợ bạn buồn (đùa tí thôi chứ thương Vy lắm!). Chúc cô nàng tổ trưởng chu đáo này khi bước chân vào con đường Kế toán - Trường Đại học Tôn Đức Thắng sẽ luôn giữ được sự bình tĩnh, tỉ mỉ tuyệt đối, bảo chứng cho một sự nghiệp ổn định và ngày càng thăng tiến trong tương lai."
    }
];

// Hàm kích hoạt pháo hoa kim tuyến (Confetti Burst)
function triggerConfetti() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 }
        });
    }
}

// Hàm tạo máy bay giấy & hoa rơi dày đặc bồng bềnh
function initFallingEffect() {
    const container = document.getElementById('falling-container');
    const items = ['✈️', '🌸', '🌼', '🍃', '✨', '🎈'];
    const totalItems = 30; // Số lượng vật thể rơi

    for (let i = 0; i < totalItems; i++) {
        const item = document.createElement('div');
        item.className = 'falling-item';
        item.textContent = items[Math.floor(Math.random() * items.length)];
        
        item.style.left = `${Math.random() * 100}%`;
        item.style.animationDuration = `${5 + Math.random() * 7}s`;
        item.style.animationDelay = `${Math.random() * 5}s`;
        item.style.fontSize = `${1.2 + Math.random() * 1}rem`;

        container.appendChild(item);
    }
}

function renderCards(data) {
    const container = document.getElementById('cards-container');
    container.innerHTML = '';

    if (data.length === 0) {
        container.innerHTML = '<div class="no-result">Không tìm thấy lá thư nào phù hợp.</div>';
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // Nhấn vào thẻ bất kỳ để bắn pháo hoa
        card.addEventListener('click', () => {
            triggerConfetti();
        });

        const title = document.createElement('div');
        title.className = 'card-title';
        title.textContent = item.title;

        const content = document.createElement('div');
        content.className = 'card-content';
        content.textContent = item.content;

        card.appendChild(title);
        card.appendChild(content);
        container.appendChild(card);
    });
}

function initSelectOptions() {
    const select = document.getElementById('select-name');
    lettersData.forEach((item, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = item.title;
        select.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderCards(lettersData);
    initSelectOptions();
    initFallingEffect();

    // Nút "Khám Phá Ký Ức ✨" kích hoạt pháo hoa
    const btnExplore = document.getElementById('btn-explore');
    btnExplore.addEventListener('click', () => {
        triggerConfetti();
    });

    // Bắt sự kiện chọn tên dạng Dropdown
    const selectName = document.getElementById('select-name');
    selectName.addEventListener('change', (e) => {
        const val = e.target.value;
        triggerConfetti();
        if (val === 'ALL') {
            renderCards(lettersData);
        } else {
            renderCards([lettersData[val]]);
        }
    });

    // Tự động phát nhạc khi chạm/cuộn trang
    const audio = document.getElementById('bg-music');
    const startAudio = () => {
        if (audio.paused) {
            audio.play().then(() => removeAudioListeners()).catch(() => {});
        }
    };
    const removeAudioListeners = () => {
        window.removeEventListener('click', startAudio);
        window.removeEventListener('touchstart', startAudio);
        window.removeEventListener('scroll', startAudio);
    };

    audio.play().catch(() => {
        window.addEventListener('click', startAudio, { once: true });
        window.addEventListener('touchstart', startAudio, { once: true });
        window.addEventListener('scroll', startAudio, { once: true });
    });
});
