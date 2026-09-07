// ==========================================
// 1. TÍCH HỢP YOUTUBE API (BÀI HÁT: THANH XUÂN - DA LAB)
// ==========================================
var player;
var isPlaying = false;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: 'GgQFO8dL5XQ', // ID bài hát Thanh Xuân - Da LAB
        playerVars: {
            'autoplay': 1,
            'loop': 1,
            'playlist': 'GgQFO8dL5XQ',
            'controls': 0
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
    isPlaying = true;
    updateAudioIcon();
}

// Kích hoạt nhạc ở tương tác đầu tiên
document.addEventListener('click', function playOnFirstClick() {
    if (player && typeof player.playVideo === 'function') {
        player.playVideo();
        isPlaying = true;
        updateAudioIcon();
    }
    document.removeEventListener('click', playOnFirstClick);
}, { once: true });

function toggleAudio() {
    if (!player || typeof player.playVideo !== 'function') return;
    if (isPlaying) {
        player.pauseVideo();
        isPlaying = false;
    } else {
        player.playVideo();
        isPlaying = true;
    }
    updateAudioIcon();
}

function updateAudioIcon() {
    const icon = document.getElementById('audio-icon');
    if (icon) {
        icon.innerText = isPlaying ? '🔊' : '🔇';
    }
}


// ==========================================
// 2. DỮ LIỆU CÔ GIÁO VÀ 32 HỌC SINH 12A3
// ==========================================
const teacherData = {
    name: "Cô Võ Thị Thanh Tuyền",
    message: `Gửi Cô Võ Thị Thanh Tuyền,

Hai năm trôi qua kể từ ngày chúng em rời xa mái trường cấp ba, bươn chải giữa dòng đời rộng lớn, em mới càng cảm nhận và khắc ghi sâu sắc biết bao công ơn sinh thành, giáo dưỡng thứ hai của cô. Nhớ lại những năm tháng 12A3, có những buổi học mệt mỏi, những lần chúng em bướng bỉnh, lơ đễnh làm đôi mày cô mím lại, nhưng chưa một lần cô buông tay hay bỏ mặc chúng em. Cô vẫn ở đó, nhẫn nại, bao dung và dùng hết tình yêu thương của một người mẹ để sẵn sàng đưa chúng em thành người. Giờ đây, khi mỗi đứa trẻ đã tung cánh bay đến những phương trời mới, hình bóng cô với tấm lưng hao gầy và ánh mắt ấm áp ngày ấy vẫn là nơi an yên nhất mỗi khi chúng em ngoảnh nhìn lại. Em kính chúc cô luôn thật nhiều sức khỏe, bình an, giữ vững ngọn lửa nhiệt huyết trên bục giảng để tiếp tục chèo lái thêm nhiều thế hệ học trò sang sông.`
};

const studentsData = [
    {
        name: "Huỳnh Thị Tuyết Băng",
        message: `Gửi Huỳnh Thị Tuyết Băng,

Hai năm xa cách, không biết công việc trang điểm và ước mơ của Băng hiện tại thế nào rồi? Mình vẫn nhớ như in những buổi chiều cùng nhau ngồi trong lớp, chia sẻ từng câu chuyện nho nhỏ của tuổi học trò. Thời gian trôi qua, cuốn từng đứa trẻ vào những lo toan tất bật, nhưng những ký ức về một Tuyết Băng khéo léo, dịu dàng và đầy nhiệt huyết ngày ấy chưa bao giờ phai mờ trong tâm trí mình. Chúc bạn ở hiện tại và tương lai sẽ luôn giữ vững đôi tay tài hoa, không ngừng tỏa sáng trên con đường mình đã chọn. Mong cuộc đời sẽ luôn dịu dàng, tô điểm cho thanh xuân và cuộc sống của bạn thật nhiều rực rỡ, bình an.`
    },
    {
        name: "Nguyễn Quốc Dinh",
        message: `Gửi Nguyễn Quốc Dinh,

Dinh ơi, đã hai năm trôi qua kể từ ngày mỗi đứa một ngả. Mình vẫn nhớ mãi sự đồng hành thầm lặng, điềm tĩnh và tử tế của bạn trong suốt những năm tháng áo trắng. Lúc này, khi bạn đang theo học ngành Sư phạm Khoa học Tự nhiên - Đại học Đồng Tháp, chắc chắn bạn cũng đã trưởng thành hơn rất nhiều, chuẩn bị mang theo hành trang đứng trên bục giảng. Chúc Dinh luôn giữ ngọn lửa đam mê với tri thức, để sau này, những thế hệ học trò của bạn sẽ được truyền cảm hứng từ chính tấm lòng chân thành và sự tận tụy mà ngày xưa chúng mình từng vô cùng quý mến ở bạn.`
    },
    {
        name: "Nguyễn Huỳnh Giao",
        message: `Gửi Nguyễn Huỳnh Giao,

Hai năm trôi qua, một khoảng thời gian đủ dài để một cô gái cá tính, bản lĩnh như Giao trải nghiệm những va vấp đầu đời ở môi trường Luật Kinh tế - Trường Đại học Tài chính - Marketing. Mình vẫn nhớ hoài tiếng cười sảng khoái và những chia sẻ thẳng thắn của bạn trong những ngày tháng 12A3 cũ. Chúc cô gái mạnh mẽ của lớp mình sẽ luôn giữ vững cái đầu lạnh đầy tinh anh, trái tim ấm áp và một bản lĩnh thép trước mọi giông bão ngoài kia. Hãy tự tin vững bước, bảo vệ lẽ phải và đường lối pháp luật mà bạn đã chọn nhé.`
    },
    {
        name: "Lê Minh Hiếu",
        message: `Gửi Lê Minh Hiếu,

Ngoảnh khắc đã hai năm chúng ta không còn nghe tiếng chuông trường báo giờ vào lớp mỗi sáng. Nhớ những ngày tháng cùng nhau chật vật vượt qua những kỳ thi áp lực, mình vô cùng biết ơn sự nhiệt tình, tốt bụng của Hiếu. Chúc bạn bước chân vào con đường Kỹ thuật Điện tại Trường Đại học Tôn Đức Thắng sẽ luôn kiên định, mạnh mẽ trước mọi khó khăn, khô khan của ngành học. Mong rằng sự chân thành và ý chí bền bỉ của Hiếu sẽ giúp bạn tự xây dựng một tương lai vững chắc, thành công rực rỡ.`
    },
    {
        name: "Đặng Thị Mỹ Hiếu",
        message: `Gửi Đặng Thị Mỹ Hiếu,

Hai năm trôi qua, cô gái hiền lành, chăm chỉ của 12A3 giờ chắc đã quen với nhịp sống nhộn nhịp ở ngành Công nghệ Sinh học - Trường Đại học Nông Lâm. Mình vẫn nhớ mãi sự dịu dàng và nụ cười rạng rỡ trên môi mỗi khi bạn trò chuyện cùng mọi người. Chúc Hiếu sẽ luôn dồi dào sức mạnh, giữ trọn tình yêu khoa học và sự trong trẻo của tuổi trẻ trên con đường nghiên cứu phía trước. Mong mọi thử thách đều sẽ nhường bước trước nỗ lực của bạn, mang lại cho bạn một tương lai thật bình yên và ngọt ngào.`
    },
    {
        name: "Đặng Trường An Khang",
        message: `Gửi Đặng Trường An Khang,

Hai năm xa lớp, không biết những hoài bão tuổi trẻ của Khang giờ đã đi đến đâu rồi? Nhớ lại những tiếng cười, những câu nói đùa vui vẻ của bạn dưới mái trường cấp ba mà lòng thấy ấm áp lạ kỳ. Chúc mừng bạn đang có một hành trình học tập tuyệt vời tại Sư phạm Khoa học Tự nhiên - Đại học Đồng Tháp. Mong rằng sự trưởng thành qua từng ngày sẽ giúp bạn trở thành một người thầy mẫu mực, biết thấu hiểu và truyền đạt tri thức bằng tất cả tình yêu thương cho các em học sinh sau này.`
    },
    {
        name: "Đinh Hoàng Khang",
        message: `Gửi Đinh Hoàng Khang,

Hai năm tự nhìn lại chính mình qua những trang văn, những trăn trở của tuổi trưởng thành, tôi mới thấy thanh xuân năm ấy đẹp và đáng trân trọng biết bao. Chúc mừng cho chính bản thân tôi - người đang mang trong mình giấc mơ Sư phạm Ngữ văn tại Đại học Đồng Tháp - sẽ không bao giờ đánh mất đi sự nhạy cảm, sâu sắc và trái tim chân thành ngày nào. Dẫu đường phía trước có chông chênh đến đâu, mong rằng khi đứng trên dốc cao chinh phục, tôi vẫn giữ nguyên tâm hồn tuổi 18, viết nên những bài học chạm đến cảm xúc của học trò bằng cả sự chân thành.`
    },
    {
        name: "Nguyễn Thành Luân",
        message: `Gửi Nguyễn Thành Luân,

Thấm thoát đã hai năm, nguồn năng lượng tích cực và sự nhiệt huyết mà Luân từng mang lại cho lớp đôi khi vẫn làm mình mỉm cười khi hồi tưởng lại. Chúc bạn ở lĩnh vực Thương mại Điện tử - Trường Đại học Công Thương sẽ luôn giữ được sự nhạy bén, tư duy sắc sảo và tinh thần dám nghĩ dám làm. Thương trường ngoài kia có thể rất khắc nghiệt, nhưng mình tin với sự vô tư, lanh lợi và bản lĩnh của mình, Luân sẽ chinh phục được những mục tiêu lớn và hái được thành công vang dội.`
    },
    {
        name: "Lê Thị Tuyết Ngân",
        message: `Gửi Lê Thị Tuyết Ngân,

Hai năm trôi qua mang theo biết bao thay đổi, nhưng hình ảnh một Tuyết Ngân dịu dàng, nụ cười hiền hòa và sự tinh tế trong cách đối xử với bạn bè vẫn luôn ở đó trong ký ức của mình. Chúc cô gái nhỏ nhắn của lớp khi đối mặt với những con số và áp lực tại Đại học Tài chính - Marketing sẽ luôn vững vàng, bình an. Mong rằng mọi chông gai ngoài kia đều sẽ dịu dàng trước sự dịu dàng của bạn, để mỗi ngày trôi qua đều ngập tràn may mắn và hạnh phúc.`
    },
    {
        name: "Trần Như Ngọc",
        message: `Gửi Trần Như Ngọc,

Nhớ những ngày căng thẳng của hai năm về trước, cảm ơn Như Ngọc vì đã luôn là một người bạn dễ mến, sẵn sàng lắng nghe và chia sẻ. Chúc mừng bạn tại Sư phạm Tiếng Anh - Trường Đại học Đồng Tháp sẽ luôn giữ được sự tự tin, năng lượng tươi trẻ và nụ cười rạng rỡ. Mong rằng ngôn ngữ sẽ thực sự là đôi cánh đưa bạn bay cao, bay xa đến những chân trời mới, chạm tay vào những giấc mơ mà bạn đã ấp ủ suốt bao năm tháng thanh xuân.`
    },
    {
        name: "Trương Hoàng Yến Ngọc",
        message: `Gửi Trương Hoàng Yến Ngọc,

Hai năm xa cách, những khoảnh khắc cùng vui đùa trong lớp học cũ giờ đã hóa thành hoài niệm đẹp đẽ nhất. Chúc Yến Ngọc khi bước chân vào thế giới rộng lớn của ngành Ngôn ngữ Trung Quốc - Trường Đại học Công Thương TP.HCM sẽ luôn tự tin vững bước. Dù cuộc sống ngoài kia có lúc chông chênh, với sự thông minh và bản lĩnh sẵn có, mình tin Ngọc sẽ vượt qua tất cả để đến đỉnh vinh quang và tự vẽ nên tương lai rực rỡ cho chính mình.`
    },
    {
        name: "Trương Khôi Nguyên",
        message: `Gửi Trương Khôi Nguyên,

Thấm thoát đã hai năm, những lần Nguyên âm thầm giúp đỡ bạn bè trong học tập vẫn là kỷ niệm mà mình rất trân quý. Chúc niềm đam mê công nghệ và lập trình của bạn tại Đại học FPT ngày càng đơm hoa kết trái. Ngành Kỹ thuật Phần mềm cần lắm một cái đầu lạnh, tỉnh táo và tư duy sắc bén như bạn. Mong rằng trong tương lai không xa, chúng ta sẽ tự hào nhìn thấy những sản phẩm mang dấu ấn của kỹ sư tài năng Trương Khôi Nguyên.`
    },
    {
        name: "Đào Xuân Nhật",
        message: `Gửi Đào Xuân Nhật,

Hai năm xa trường cấp ba, không biết Nhật đã đối mặt với bao nhiêu công trình, bao nhiêu bài toán khó của ngành Kỹ thuật Xây dựng - Trường Đại học Giao thông Vận tải TP.HCM rồi? Mình vẫn nhớ sự nhiệt tình trong các phong trào và tính cách thẳng thắn của bạn. Chúc Nhật luôn giữ được cái đầu lạnh, đôi tay vững vàng và ý chí kiên cường trước mọi thử thách khắc nghiệt của nghề nghiệp, sớm trở thành một kỹ sư xây dựng giỏi giang và vững chãi.`
    },
    {
        name: "Nguyễn Hữu Phát",
        message: `Gửi Nguyễn Hữu Phát,

Hai năm trôi qua, Phát chắc đã trưởng thành và chín chắn hơn rất nhiều trên hành trình Quản lý Giáo dục - Đại học Sư phạm TP.HCM. Cảm ơn bạn vì sự hiền lành, chăm chỉ và tinh thần trách nhiệm từng góp phần làm nên một tập thể 12A3 hoàn chỉnh. Chúc bạn luôn giữ được tâm hồn trong trẻo, tình yêu thương và sự cảm thông sâu sắc. Mong rằng sau này, bạn sẽ góp phần tạo ra những thay đổi ý nghĩa cho giáo dục nước nhà bằng chính cái tâm sáng của mình.`
    },
    {
        name: "Lê Hoàng Quyên",
        message: `Gửi Lê Hoàng Quyên,

Cô gái nhỏ nhắn và hiền lành của 12A3 ơi, thấm thoát đã hai năm chúng ta bước vào đời. Chúc bạn khi đối mặt với núi tri thức và áp lực nặng nề tại cánh cửa Dược học - Trường Đại học Tôn Đức Thắng sẽ có đủ sức mạnh, sự kiên trì và bền bỉ. Ngành Dược đòi hỏi sự tỉ mỉ tuyệt đối, và mình tin sự tinh tế, dịu dàng của Quyên chính là chìa khóa giúp bạn chạm tới ước mơ trị bệnh, giúp đời mà bạn luôn hằng mong ước.`
    },
    {
        name: "Trương Hoàng Tâm",
        message: `Gửi Trương Hoàng Tâm,

Hai năm trôi qua, sự hóm hỉnh và nguồn năng lượng tích cực của Tâm chắc chắn vẫn là điểm sáng ở bất cứ môi trường nào bạn đặt chân tới. Chúc mừng bạn tại ngành Kinh doanh Quốc tế - Trường Đại học Công Thương TP.HCM sẽ luôn giữ được sự nhạy bén, khả năng thích ứng linh hoạt và sự tự tin đáng ngưỡng mộ. Thương trường rộng lớn bên ngoài kia chính là sân chơi để bạn thỏa sức vùng vẫy, khẳng định bản lĩnh và gặt hái thật nhiều thành tích lớn lao.`
    },
    {
        name: "Nguyễn Hoàng Tân",
        message: `Gửi Nguyễn Hoàng Tân,

Hai năm xa cách, những ý tưởng sáng tạo độc đáo và tâm hồn nghệ sĩ bay bổng của Tân chắc chắn vẫn đang được nuôi dưỡng ở ngành Thiết kế Thời trang - Trường Đại học Tôn Đức Thắng. Chúc bạn không bao giờ đánh mất chất riêng và sự nhạy cảm tuyệt vời với cái đẹp. Mong rằng trong tương lai, chúng mình sẽ tự hào ngắm nhìn những bộ sưu tập đậm dấu ấn cá nhân của nhà thiết kế Nguyễn Hoàng Tân trên các sàn diễn lớn của cuộc đời.`
    },
    {
        name: "Phạm Thị Thanh Thảo",
        message: `Gửi Phạm Thị Thanh Thảo,

Thấm thoát đã hai năm, sự thân thiện, hòa đồng và nhiệt huyết tuổi trẻ của Thảo chắc chắn vẫn luôn lan tỏa đến những người xung quanh. Chúc bạn khi bước vào ngành Kinh doanh Quốc tế - ĐH Sư phạm Kỹ thuật TP.HCM sẽ luôn giữ được sự tự tin, khéo léo. Thế giới kinh doanh ngoài kia tuy đầy cạnh tranh nhưng cũng vô cùng hấp dẫn, và mình tin với sự năng động của mình, Thảo sẽ nhanh chóng khẳng định được vị trí và gặt hái thật nhiều quả ngọt.`
    },
    {
        name: "Phan Hoài Thịnh",
        message: `Gửi Phan Hoài Thịnh,

Hai năm trôi qua, người bạn điềm tĩnh, đáng tin cậy của lớp mình chắc đang từng ngày chinh phục thế giới Tự động hóa phức tạp tại Trường Đại học Nông Lâm TP.HCM. Chúc Thịnh luôn giữ vững cái đầu lạnh và trái tim nhiệt huyết. Mong rằng mọi máy móc, mọi mạch điện qua bàn tay và tư duy của bạn đều sẽ vận hành trơn tru, đưa bạn tiến xa hơn trên con đường sự nghiệp và khẳng định được giá trị bản thân.`
    },
    {
        name: "Lê Thành Thịnh",
        message: `Gửi Lê Thành Thịnh,

Thấm thoát đã hai năm trong môi trường Sĩ quan Tăng Thiết giáp đầy kỷ luật và thép, chắc chắn Thịnh đã rèn luyện được một ý chí kiên cường và bản lĩnh vững vàng hơn rất nhiều. Cảm ơn bạn vì những kỷ niệm đẹp cùng tập thể lớp năm nào. Chúc bạn luôn vững vàng khí chất của một chiến binh trẻ, hoàn thành xuất sắc mọi nhiệm vụ mà Tổ quốc và quân đội giao phó, luôn hiên ngang trước mọi sóng gió cuộc đời.`
    },
    {
        name: "Nguyễn Hòa Thuận",
        message: `Gửi Nguyễn Hòa Thuận,

Hai năm xa cách, tài năng ngoại ngữ và tính cách tự do của Thuận chắc đã đưa bạn đi đến rất nhiều chân trời mới thú vị tại chuyên ngành Ngôn ngữ Anh - Trường Đại học Ngoại ngữ - Tin học TP.HCM. Chúc bạn luôn có được sự tự tin và phong thái cuốn hút. Mong rằng ngôn ngữ sẽ thực sự là nhịp cầu đưa bạn bước ra thế giới rộng lớn ngoài kia, tự tin giao lưu, học hỏi và gặt hái những thành công rực rỡ vượt qua mọi giới hạn.`
    },
    {
        name: "Trần Thị Mỹ Thuyên",
        message: `Gửi Trần Thị Mỹ Thuyên,

Thấm thoát đã hai năm, sự chăm chỉ, cẩn thận và chu đáo của Thuyên chắc đang tỏa sáng trong thế giới Logistics và Quản lý Chuỗi cung ứng - Trường Đại học Giao thông Vận tải TP.HCM. Chúc bạn luôn giữ được sự tinh tế, tư duy linh hoạt và tác phong chuyên nghiệp. Mong rằng mọi dòng hàng hóa và chuỗi giá trị trong tương lai dưới sự điều phối của bạn sẽ luôn thông suốt, mang lại sự thành công và niềm tự hào lớn lao.`
    },
    {
        name: "Trần Thị Mỹ Tiên",
        message: `Gửi Trần Thị Mỹ Tiên,

Hai năm trôi qua, cô gái sắc sảo của lớp mình chắc chắn đã trang bị thêm cho mình rất nhiều kiến thức trên con đường Luật Kinh tế - Trường Đại học Công nghiệp TP.HCM. Chúc Tiên luôn giữ được ánh mắt định hình, tinh thần thép và một cái tâm trong sáng. Ngành luật yêu cầu tri thức và bản lĩnh lớn, và Tiên của mình sẽ trở thành một chuyên gia tư vấn pháp lý sắc bén, sử dụng tri thức để bảo vệ lẽ phải trong cuộc sống.`
    },
    {
        name: "Lê Tấn Tiên",
        message: `Gửi Lê Tấn Tiên,

Thấm thoát đã hai năm, sự vui vẻ và tính cách hòa đồng của Tiên chắc vẫn là nguồn năng lượng quen thuộc với các bạn xung quanh. Chúc bạn khi theo đuổi lĩnh vực Tài chính - Ngân hàng - Trường Đại học Công Thương sẽ luôn nhạy bén với những con số, giữ được sự linh hoạt và bản lĩnh trước mọi biến động thị trường. Mong rằng tương lai phía trước sẽ mở ra cho bạn thật nhiều cơ hội để phát triển năng lực và xây dựng sự nghiệp.`
    },
    {
        name: "Thái Thuỳ Trang",
        message: `Gửi Thái Thuỳ Trang,

Hai năm xa cách, sự dịu dàng, từ tốn và lòng nhân hậu của Trang chắc chắn vẫn đang đơm hoa kết trái trên con đường trở thành Bác sĩ Thú y tại Trường Đại học Cần Thơ. Chúc Trang luôn giữ vững ngọn lửa đam mê và sự nhẫn nại. Ngành Y tế Thú y tuy vất vả, đòi hỏi sự hy sinh thầm lặng, nhưng với lòng trắc ẩn sâu sắc ấy, bạn chắc chắn sẽ xoa dịu và chữa lành cho rất nhiều sinh linh bé nhỏ.`
    },
    {
        name: "Nguyễn Thị Ngọc Trâm",
        message: `Gửi Nguyễn Thị Ngọc Trâm,

Thấm thoát đã hai năm, những đêm thức trắng vẽ phác thảo và tâm hồn nghệ thuật của Trâm chắc chắn đang dần thực hiện hóa tại ngành Kiến trúc - Trường Đại học Giao thông Vận tải - Phân hiệu tại TP.HCM. Chúc đôi tay khéo léo và tư duy không gian của bạn sẽ xây nên những công trình đẹp, để đời bằng chính tâm huyết và tài năng. Áp lực ngành Kiến trúc rất lớn, nhưng sự kiên trì của Trâm sẽ vượt qua tất cả.`
    },
    {
        name: "Đỗ Huỳnh Nhã Trân",
        message: `Gửi Đỗ Huỳnh Nhã Trân,

Hai năm trôi qua, sự hòa đồng, năng động và nụ cười tươi vui của Trân chắc vẫn làm bừng sáng bất cứ nơi đâu bạn xuất hiện. Chúc bạn bước chân vào môi trường Ngân hàng - Đại học Kinh tế TP.HCM sẽ luôn giữ được sự nhạy bén, tinh tế và gặp nhiều may mắn trên thương trường. Sài Gòn hoa lệ đang chờ đón bạn chinh phục, hãy cứ tự tin tỏa sáng bằng trí tuệ và sự duyên dáng của chính mình nhé.`
    },
    {
        name: "Nguyễn Thị Trinh",
        message: `Gửi Nguyễn Thị Trinh,

Cô gái thể thao năng động và tràn đầy sức sống của lớp ơi, thấm thoát đã hai năm chúng ta mỗi người một hướng. Chúc Trinh tại ngành Giáo dục Thể chất - Đại học Cần Thơ sẽ luôn giữ được sự bền bỉ, sức khỏe dồi dào và tinh thần thép. Mong rằng sau này, trong vai trò là một giáo viên hay huấn luyện viên, bạn sẽ tiếp tục truyền cảm hứng vận động, lối sống tích cực cho thật nhiều thế hệ học trò noi theo.`
    },
    {
        name: "Huỳnh Thanh Trúc",
        message: `Gửi Huỳnh Thanh Trúc,

Hai năm xa cách, sự ân cần, dịu dàng và tấm lòng nhân hậu của Trúc chắc đang được mài giũa tại cánh cửa Điều dưỡng - Trường Đại học Y khoa Phạm Ngọc Thạch. Chúc bạn luôn giữ được trái tim ấm áp và một đôi tay vững chắc, khéo léo. Nghề điều dưỡng đòi hỏi sự hy sinh thầm lặng và sức chịu đựng lớn, nhưng mình tin rằng sự tận tâm của Trúc sẽ là nguồn sức mạnh xoa dịu nỗi đau cho các bệnh nhân.`
    },
    {
        name: "Nguyễn Chí Trung",
        message: `Gửi Nguyễn Chí Trung,

Thấm thoát đã hai năm, sự nam tính, tính cách tốt bụng và luôn nhiệt tình giúp đỡ mọi người của Trung chắc chắn đang ngày ngày gắn liền với máy móc tại ngành Công nghệ Ô tô - Trường Cao đẳng Long An. Chúc bạn luôn vững vàng, tay nghề ngày càng thành thục. Những động cơ phức tạp đang chờ bạn làm chủ để sau này tự tay mở ra một tương lai thật rộng mở và vững chắc cho bản thân.`
    },
    {
        name: "Nguyễn Kiều Vân",
        message: `Gửi Nguyễn Kiều Vân,

Hai năm trôi qua, sự sáng tạo, góc nhìn nghệ thuật độc đáo và những nét tinh tế rất dễ thương của Vân chắc đang bay cao trong thế giới Truyền thông Đa phương tiện - Trường Đại học Văn Hiến. Chúc bạn luôn giữ được nguồn cảm hứng bất tận. Mong rằng qua lăng kính và ngòi bút của bạn, mọi câu chuyện đều sẽ mang lại giá trị truyền cảm hứng mạnh mẽ, đưa bạn tiến xa trong thế giới nghệ thuật đầy màu sắc.`
    },
    {
        name: "Trần Nguyễn Phương Vy",
        message: `Gửi Trần Nguyễn Phương Vy,

Thấm thoát đã hai năm, sự chăm chỉ, cẩn thận và tính cách chu đáo của Vy chắc đang tỏa sáng trên con đường Kế toán - Trường Đại học Tôn Đức Thắng. Chúc bạn luôn giữ được sự bình tĩnh, tỉ mỉ tuyệt đối trước những con số. Ngành tài chính kế toán cần độ chính xác cao, và sự cẩn trọng của Vy chính là chứng chỉ chắc chắn cho một sự nghiệp ổn định, ngày càng thăng tiến trong tương lai.`
    }
];


// ==========================================
// 3. XỬ LÝ CHUYỂN MÀN HÌNH VÀ TƯƠNG TÁC
// ==========================================
function enterSite() {
    document.getElementById('hero-screen').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    renderMembers();
    if (player && typeof player.playVideo === 'function') {
        player.playVideo();
        isPlaying = true;
        updateAudioIcon();
    }
}

function renderMembers() {
    const teacherContainer = document.getElementById('teacher-container');
    const studentsGrid = document.getElementById('students-grid');

    teacherContainer.innerHTML = createCardHTML(teacherData.name, teacherData.message, true);
    studentsGrid.innerHTML = studentsData.map(student => 
        createCardHTML(student.name, student.message, false)
    ).join('');
}

function createCardHTML(name, message, isTeacher) {
    const escapedMsg = escapeHTML(message);
    return `
        <div class="member-card ${isTeacher ? 'teacher-card' : ''}" onclick="openMessage('${name}', '${escapedMsg}')">
            <span class="member-name">${name}</span>
        </div>
    `;
}

function escapeHTML(str) {
    return str.replace(/'/g, "\\'").replace(/"/g, '&quot;').replace(/\n/g, '\\n');
}


// ==========================================
// 4. MỞ & ĐÓNG POPUP MODAL THƯ
// ==========================================
function openMessage(name, message) {
    document.getElementById('letter-recipient').innerText = name;
    document.getElementById('letter-content').innerText = message;
    document.getElementById('modal-overlay').classList.remove('hidden');
}

function closeMessage() {
    document.getElementById('modal-overlay').classList.add('hidden');
}


// ==========================================
// 5. HIỆU ỨNG RƠI BỒNG BỀNH
// ==========================================
const fallingItems = ['🌸', '🎉', '🪁', '✈️', '✨', '🌸', '🎊'];

function createFallingItem() {
    const container = document.getElementById('falling-container');
    if (!container) return;

    const item = document.createElement('div');
    const randomIcon = fallingItems[Math.floor(Math.random() * fallingItems.length)];
    
    item.innerText = randomIcon;
    item.style.position = 'fixed';
    item.style.top = '-50px';
    item.style.left = Math.random() * 100 + 'vw';
    item.style.fontSize = (Math.random() * 14 + 16) + 'px';
    item.style.opacity = Math.random() * 0.7 + 0.3;
    item.style.pointerEvents = 'none';
    item.style.zIndex = '999';

    container.appendChild(item);

    const duration = Math.random() * 5 + 5;
    const sway = (Math.random() - 0.5) * 200;
    const rotation = Math.random() * 360;

    requestAnimationFrame(() => {
        item.style.transition = `transform ${duration}s linear, top ${duration}s linear, opacity ${duration}s ease-out`;
        item.style.top = '105vh';
        item.style.transform = `translateX(${sway}px) rotate(${rotation}deg)`;
    });

    setTimeout(() => {
        item.remove();
    }, duration * 1000);
}

setInterval(createFallingItem, 400);
