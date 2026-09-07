// ==========================================
// 1. KÍCH HOẠT ÂM THANH PHÁT TỨC THÌ
// ==========================================
let audioStarted = false;

function playInstantAudio() {
    if (audioStarted) return;
    const audio = document.getElementById('bg-audio');
    if (audio) {
        audio.play().then(() => {
            audioStarted = true;
            updateAudioIcon(true);
        }).catch(err => {
            console.log("Cần tương tác để phát nhạc:", err);
        });
    }
}

function enterSite(event) {
    if (event) event.stopPropagation();
    playInstantAudio();
    
    // Bắn pháo hoa chào mừng
    triggerConfettiBoom();

    document.getElementById('hero-screen').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    
    renderMembers();
    initFallingEffect();
}

function toggleAudio(event) {
    if (event) event.stopPropagation();
    const audio = document.getElementById('bg-audio');
    if (!audio) return;

    if (audio.paused) {
        audio.play();
        audioStarted = true;
        updateAudioIcon(true);
    } else {
        audio.pause();
        updateAudioIcon(false);
    }
}

function updateAudioIcon(isPlaying) {
    const icon = document.getElementById('audio-icon');
    if (icon) {
        icon.innerText = isPlaying ? '🔊' : '🔇';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('bg-audio');
    if (audio) {
        audio.play().then(() => {
            audioStarted = true;
            updateAudioIcon(true);
        }).catch(() => {});
    }
});

// ==========================================
// 2. HIỆU ỨNG PHÁO HOA & HOA RƠI (CONFETTI & FALLING)
// ==========================================
function triggerConfettiBoom() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6, x: 0.2 }
        });
        confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6, x: 0.8 }
        });
    }
}

function triggerCardConfetti(event) {
    if (typeof confetti === 'function') {
        const x = event ? event.clientX / window.innerWidth : 0.5;
        const y = event ? event.clientY / window.innerHeight : 0.5;

        confetti({
            particleCount: 50,
            spread: 60,
            origin: { x: x, y: y },
            colors: ['#e63946', '#ff758c', '#d4af37', '#ffffff', '#ffb3c1']
        });
    }
}

function initFallingEffect() {
    const container = document.getElementById('falling-container');
    if (!container) return;
    const items = ['🌸', '🍃', '✨', '🎈', '✈️'];
    const totalItems = 25;

    for (let i = 0; i < totalItems; i++) {
        const item = document.createElement('div');
        item.className = 'falling-item';
        item.textContent = items[Math.floor(Math.random() * items.length)];
        item.style.left = `${Math.random() * 100}%`;
        item.style.animationDuration = `${6 + Math.random() * 6}s`;
        item.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(item);
    }
}

// ==========================================
// 3. DỮ LIỆU CÔ GIÁO VÀ HỌC SINH 12A3
// ==========================================
const teacherData = {
    name: "Cô Võ Thị Thanh Truyền",
    message: `Gửi Cô Võ Thị Thanh Truyền,

Hai năm trôi qua kể từ ngày chúng em rời xa mái trường cấp ba, giữa dòng đời hối hả và bộn bề mưu sinh, khi chững chạc hơn một chút, chúng em mới càng thấm thía và khắc cốt ghi tâm biết bao công ơn của cô[cite: 1]. Cô chính là người truyền lửa thầm lặng, luôn ở cạnh chúng em những khi khó khăn nhất, bao bọc, lo lắng cho lớp bằng tất cả sự dịu dàng và tình yêu thương vô bờ bến[cite: 1]. Có những lúc tụi em quậy phá, bướng bỉnh khiến đôi mày cô khẽ nhíu lại, nhưng chưa bao giờ cô buông tay, vẫn luôn ân cần, nhẹ nhàng và dành hết những điều tốt đẹp nhất cho tập thể lớp mình[cite: 1]. Hình bóng người mẹ thứ hai tần tảo ngày ấy mãi là chốn bình yên nhất để chúng em ngoảnh đầu tìm về sau bao giông bão[cite: 1]. Kính chúc cô hai năm qua và mãi về sau luôn thật nhiều sức khỏe, bình an, giữ vững ngọn lửa nhiệt huyết trên bục giảng để tiếp tục chèo lái thêm nhiều thế hệ học trò sang sông[cite: 1].`
};

const studentsData = [
    {
        name: "Huỳnh Thị Tuyết Băng",
        message: `Gửi Huỳnh Thị Tuyết Băng,\n\nHai năm xa cách, không biết chặng đường làm thợ trang điểm và làm đẹp của Băng hiện giờ thế nào rồi[cite: 1]? Mình vẫn nhớ như in hình ảnh một cô gái nhẹ nhàng, trầm tính, ít nói nhưng lại vô cùng quan tâm, thấu hiểu bạn bè và là một cô gái rất hiểu chuyện[cite: 1]. Băng luôn đứng ở một góc để quan sát và thấu cảm mọi thứ xung quanh bằng sự tinh tế của mình[cite: 1]. Chúc bạn ở hiện tại và tương lai sẽ luôn giữ vững đôi tay tài hoa và sự tỉ mỉ ấy để tô điểm cho đời, cho ước mơ của chính mình, và mong cuộc đời cũng sẽ dịu dàng ôm lấy Băng[cite: 1].`
    },
    {
        name: "Nguyễn Quốc Dinh",
        message: `Gửi Nguyễn Quốc Dinh,\n\nDinh ơi, thấm thoát đã hai năm kể từ ngày chúng ta mỗi đứa một ngã rẽ[cite: 1]. Mình vẫn nhớ mãi chàng trai rất nhẹ nhàng, trong sáng, đôi khi có chút lười biếng nhưng học rất giỏi và luôn là người tạo ra những tiếng cười giòn tan để cứu rỗi cả lớp trong những giờ học căng thẳng[cite: 1]. Chúc Dinh khi mang theo hoài bão đứng trên bục giảng tại Sư phạm Khoa học tự nhiên - Đại học Đồng Tháp sẽ luôn giữ trọn ngọn lửa đam mê với tri thức, để sau này những đứa học trò nhỏ cũng được sưởi ấm bởi sự trong sáng và đáng yêu của thầy giáo Dinh[cite: 1].`
    },
    {
        name: "Huỳnh Giao",
        message: `Gửi Huỳnh Huỳnh Giao (Huỳnh Giao),\n\nHai năm trôi qua, khoảng thời gian đủ dài để nhớ về một cô gái đa tài của lớp mình: Giao múa rất đẹp, hát rất hay, học thuộc lòng siêu nhanh và luôn là chiếc phao cứu sinh đáng tin cậy của tụi mình mỗi mùa kiểm tra[cite: 1]. Cảm ơn bạn vì đã luôn kiên nhẫn lắng nghe, bảo ban và an ủi bạn bè lúc chông chênh[cite: 1]. Chúc cô gái tài năng bước chân vào môi trường Luật kinh tế - Trường Đại học Tài chính - Marketing sẽ luôn giữ được cái đầu lạnh sắc sảo nhưng trái tim thì lúc nào cũng đong đầy tình cảm, vững vàng trước mọi sóng gió cuộc đời[cite: 1].`
    },
    {
        name: "Lê Minh Hiếu",
        message: `Gửi Lê Minh Hiếu,\n\nThấm thoát đã hai năm chúng ta không còn nghe tiếng trống trường giục giã[cite: 1]. Nhớ những ngày tháng cùng nhau lao động, dọn dẹp lớp học, mình vô cùng biết ơn lớp phó lao động Lê Minh Hiếu - một chàng trai ấm áp, ân cần, chu đáo, siêng năng và luôn bảo vệ bạn bè trước mọi sóng gió[cite: 1]. Chúc bạn khi bước chân vào con đường Kỹ thuật điện tại Trường Đại học Tôn Đức Thắng sẽ luôn kiên định, mạnh mẽ, tự tay xây dựng một tương lai vững chãi và thành công rực rỡ[cite: 1].`
    },
    {
        name: "Đặng Thị Mỹ Hiếu",
        message: `Gửi Đặng Thị Mỹ Hiếu,\n\nMỹ Hiếu ơi, tổ trưởng tổ 2 tuyệt vời của tụi mình[cite: 1]! Bạn là người bạn đồng hành tuyệt vời trong tuổi trẻ, luôn ở bên động viên, sát cánh, an ủi và cùng bạn bè bước qua những tháng ngày bẽ bàng và khó khăn nhất, luôn lắng nghe, ủng hộ và san sẻ trong mọi chuyện, một cô gái cực kỳ hiểu chuyện và sâu sắc[cite: 1]. Chúc bạn khi bước vào thế giới rộng lớn tại ngành Công nghệ sinh học - Trường Đại học Nông Lâm sẽ tìm thấy chân trời của riêng mình, luôn giữ nụ cười rạng rỡ và gặt hái thật nhiều trái ngọt[cite: 1].`
    },
    {
        name: "Đặng Trường An Khang",
        message: `Gửi Đặng Trường An Khang,\n\nHai năm xa lớp, không biết những hoài bão tuổi trẻ của Khang giờ đã đi đến đâu rồi[cite: 1]? Nhớ những lúc Khang đôi lúc hay nóng giận vu vơ nhưng bên trong lại vô cùng ấm áp, chân thành với bạn bè, học giỏi và chơi rất thiệt tình, không toan tính[cite: 1]. Chúc bạn sẽ có một hành trình đại học thật trọn vẹn tại Sư phạm Khoa học tự nhiên - Đại học Đồng Tháp, để sau này sự nhiệt huyết và chân thành ấy sẽ truyền lửa cho thật nhiều thế hệ học trò[cite: 1].`
    },
    {
        name: "Đinh Hoàng Khang",
        message: `Gửi Đinh Hoàng Khang (Chính mình),\n\nHai năm tự nhìn lại chính mình qua những trang văn và những trăn trở của tuổi trưởng thành, tôi mới thấy thanh xuân năm ấy đẹp và đáng trân trọng biết bao khi được làm tổ trưởng tổ 3, được đồng hành cùng những người bạn tuyệt vời[cite: 1]. Chúc cho chính bản thân tôi - người đang mang trong mình giấc mơ Sư phạm Ngữ văn tại Đại học Đồng Tháp - sẽ không bao giờ đánh mất đi sự nhạy cảm, lòng trắc ẩn và trái tim chân thành ngày nào khi đứng trên bục giảng, viết nên những bài học chạm đến cảm xúc của học trò[cite: 1].`
    },
    {
        name: "Nguyễn Thành Luân",
        message: `Gửi Nguyễn Thành Luân,\n\nThấm thoát đã hai năm, nguồn năng lượng rất có trách nhiệm, đôi chút đào hoa và rất quan tâm yêu thương bạn bè của Luân đôi khi vẫn khiến mọi người bật cười khi nhớ lại[cite: 1]. Chúc bạn ở lĩnh vực Thương mại điện tử - Trường Đại học Công Thương sẽ luôn giữ được sự nhạy bén, tư duy sắc sảo và tinh thần dám nghĩ dám làm để chinh phục những mục tiêu lớn trên thương trường khốc liệt ngoài kia[cite: 1].`
    },
    {
        name: "Lê Thị Tuyết Ngân",
        message: `Gửi Lê Thị Tuyết Ngân,\n\nTuyết Ngân ơi, tụi tôi hay đùa ghẹo bạn là hay nói dối, hay nhiều chuyện lắm, nhưng sâu thẳm trong lòng, ai cũng biết Tuyết Ngân là một cô bí thư vô cùng gương mẫu, có trách nhiệm và thương lớp biết nhường nào[cite: 1]. Hai năm trôi qua, chúc cô bí thư ngày nào khi đối mặt với những con số và áp lực tại Đại học Tài chính - Marketing sẽ luôn vững vàng, bình an và gặt hái thật nhiều thành quả ngọt ngào[cite: 1].`
    },
    {
        name: "Trần Như Ngọc",
        message: `Gửi Trần Như Ngọc,\n\nNhớ những mùa thi căng thẳng của hai năm về trước, cô lớp phó học tập học rất giỏi, rất chan hòa, rất dễ tính và quan tâm bạn bè[cite: 1]. Mà nhắc đến Như Ngọc là tụi mình lại phì cười vì... nói đùa thế thôi chứ Ngọc nhà mình nhát gan lắm nha, hù nhẹ một cái là giật mình rồi[cite: 1]! Chúc bạn tại Sư phạm Tiếng Anh - Trường Đại học Đồng Tháp sẽ luôn giữ được sự tự tin, năng lượng tươi trẻ để ngôn ngữ thực sự là đôi cánh đưa bạn bay cao bay xa[cite: 1].`
    },
    {
        name: "Trương Hoàng Yến Ngọc",
        message: `Gửi Trương Hoàng Yến Ngọc,\n\nYến Ngọc - cô nàng văn chương, nàng thơ của lớp mình, luôn mang đến một cảm giác rất đỗi chân thành, nhẹ nhàng và dễ thương[cite: 1]. Hai năm xa cách, những khoảnh khắc cùng nhau đùa giỡn trong lớp học cũ giờ đã hóa thành hoài niệm đẹp đẽ[cite: 1]. Chúc Yến Ngọc khi bước chân vào thế giới rộng lớn của ngành Ngôn ngữ Trung Quốc - Trường Đại học Công Thương TP.HCM sẽ luôn tự tin sải bước, chạm đến đỉnh vinh quang[cite: 1].`
    },
    {
        name: "Trương Khôi Nguyên",
        message: `Gửi Trương Khôi Nguyên,\n\nThấm thoát đã hai năm, chàng trai rất giỏi công nghệ, tính tình dễ thương nhưng lại cực kỳ ít nói như Khôi Nguyên có còn cặm cụi bên những dòng code không[cite: 1]? Cảm ơn bạn vì những lần âm thầm giúp đỡ bạn bè trong thầm lặng mà chẳng cần phô trương[cite: 1]. Chúc cho niềm đam mê công nghệ tại Đại học FPT ngày càng đơm hoa kết trái, mang lại những sản phẩm mang đậm dấu ấn của kỹ sư tài năng Khôi Nguyên[cite: 1].`
    },
    {
        name: "Đào Xuân Nhật",
        message: `Gửi Đào Xuân Nhật,\n\nHai năm xa mái trường cấp ba, không biết Nhật đã đối mặt với bao nhiêu bài toán khó của ngành Kỹ thuật xây dựng - Trường Đại học Giao thông Vận tải TP.HCM rồi[cite: 1]? Mình vẫn nhớ một chàng trai có tính khí hòa đồng, ít nói, rất ga lăng, luôn ân cần, nhẹ nhàng, ấm áp và rất thông minh, học lý siêu giỏi[cite: 1]. Chúc Nhật luôn giữ vững cái đầu lạnh, đôi tay vững vàng và ý chí kiên cường trước mọi giông bão của cuộc đời[cite: 1].`
    },
    {
        name: "Nguyễn Hữu Phát",
        message: `Gửi Nguyễn Hữu Phát,\n\nHai năm trôi qua, Hữu Phát chắc đã lớn hơn và điềm đạm hơn rất nhiều trên hành trình Quản lí giáo dục - Đại học Sư phạm TP.HCM[cite: 1]. Cảm ơn một chàng trai rất thông minh, học rất giỏi, một người đàn ông ấm áp và chân thành, rất biết tạo tiếng cười và niềm vui cho bạn bè, đặc biệt là những màn hay ghẹo chọc nhỏ Trúc lớp trưởng làm cả lớp cười nắc nẻ[cite: 1]. Chúc bạn luôn giữ được tâm hồn trong trẻo, lòng yêu trẻ và sự thấu cảm sâu sắc[cite: 1].`
    },
    {
        name: "Lê Hoàng Quyên",
        message: `Gửi Lê Hoàng Quyên,\n\nCô gái nhỏ nhắn của 12A3 ơi, Quyên rất hiểu chuyện, luôn đồng hành cùng bạn bè trong những tình huống dù khó khăn nhất, luôn ở bên lắng nghe và thấu hiểu[cite: 1]. Thấm thoát đã hai năm chúng ta bước vào đời, chúc bạn khi đối mặt với núi cao tri thức và áp lực nặng nề tại cánh cửa Dược học - Trường Đại học Tôn Đức Thắng sẽ luôn đủ sức mạnh và sự bền bỉ để chạm đến ước mơ cứu người, giúp đời[cite: 1].`
    },
    {
        name: "Trương Hoàng Tâm",
        message: `Gửi Trương Hoàng Tâm,\n\nTâm ít nói lắm, tụi mình hay chọc Tâm là "Diễm Hương" từ thuở nào chẳng nhớ, mỗi lần nhắc đến là ai cũng cười tỏa lên, nhưng thật sự Tâm rất nhẹ nhàng, ấm áp, rất chân thành và bao dung[cite: 1]. Hai năm trôi qua, chúc bạn tại ngành Kinh doanh quốc tế - Trường Đại học Công Thương TP.HCM sẽ luôn giữ được sự nhạy bén và tự tin để thỏa sức vẫy vùng trên thương trường rộng lớn[cite: 1].`
    },
    {
        name: "Nguyễn Hoàng Tân",
        message: `Gửi Nguyễn Hoàng Tân,\n\nHai năm xa cách, chàng trai học giỏi văn lắm, nhẹ nhàng ân cần Hoàng Tân chắc vẫn đang nuôi dưỡng tâm hồn bay bổng của mình[cite: 1]. Chúc bạn luôn giữ được sự nhạy cảm tuyệt vời với con chữ và cuộc sống[cite: 1]. Mong rằng trong tương lai, mọi dự định của bạn đều sẽ đơm hoa kết trái, mang lại một cuộc đời thật bình yên, ý nghĩa và ngập tràn cảm xúc[cite: 1].`
    },
    {
        name: "Phạm Thị Thanh Thảo",
        message: `Gửi Phạm Thị Thanh Thảo,\n\nThanh Thảo tưởng nhỏ xíu nhưng mà không hề vô dụng nha[cite: 1]! Học giỏi, đôi lúc xéo sắc nhưng rất dễ thương, có một "đặc sản" là hay ngủ gật trong giờ học khiến tụi mình nhìn chỉ biết phì cười bất lực[cite: 1]. Thấm thoát đã hai năm, chúc bạn khi bước vào ngành Kinh doanh quốc tế - ĐH Sư phạm Kỹ thuật TP.HCM sẽ luôn giữ được sự năng động, khéo léo để gặt hái thật nhiều thành quả ngọt ngào[cite: 1].`
    },
    {
        name: "Phan Hoài Thịnh",
        message: `Gửi Phan Hoài Thịnh,\n\nHai năm trôi qua, chàng trai nhỏ nhắn nhưng học rất giỏi, hay làm mấy trò mắc cười, rất nhẹ nhàng và rất tình cảm này chắc đang trưởng thành rất nhiều[cite: 1]. Chúc Hoài Thịnh luôn giữ vững sự dí dỏm, nụ cười trên môi và trái tim nhiệt huyết để vượt qua mọi thử thách trên con đường học tập và sự nghiệp tương lai[cite: 1].`
    },
    {
        name: "Lê Thành Thịnh",
        message: `Gửi Lê Thành Thịnh,\n\nTổ trưởng tổ 1 - Lê Thành Thịnh, một chàng trai học giỏi, ga lăng, rất chăm, nhẹ nhàng và tình cảm[cite: 1]. Chúc bạn luôn giữ được tinh thần trách nhiệm và sự ấm áp ấy trong mọi ngã rẽ cuộc đời[cite: 1]. Mong rằng sự chăm chỉ và tử tế sẽ luôn dẫn đường để bạn chạm tay đến những đỉnh cao mới, làm rạng danh cho tập thể 12A3 năm nào[cite: 1].`
    },
    {
        name: "Nguyễn Hòa Thuận",
        message: `Gửi Nguyễn Hòa Thuận,\n\nHòa Thuận học tiếng Anh giỏi lắm nha[cite: 1]! Ít nói nhưng lại rất nhẹ nhàng và ấm áp, rất tình cảm và chân thành[cite: 1]. Hai năm xa cách, tài năng ngoại ngữ chắc đã đưa bạn đi đến rất nhiều chân trời mới thú vị[cite: 1]. Chúc bạn luôn giữ được sự tự tin, để ngôn ngữ thực sự là nhịp cầu đưa bạn bước ra thế giới rộng lớn ngoài kia, tự tin giao lưu và gặt hái thành công[cite: 1].`
    },
    {
        name: "Trần Thị Mỹ Thuyên",
        message: `Gửi Trần Thị Mỹ Thuyên,\n\nMỹ Thuyên - cô nàng nhẹ nhàng, nền nã, thướt tha[cite: 1]. Tụi mình vẫn nhớ hoài kỷ niệm hồi vừa vào lớp 10 đã bị ngay một bản kiểm điểm vì đi trễ, dù trọ rất gần trường, nghĩ lại vừa thương vừa buồn cười[cite: 1]! Thấm thoát đã hai năm, chúc cô nàng nền nã ngày nào khi bước vào thế giới Logistics và quản lý chuỗi cung ứng - Trường Đại học Giao thông Vận tải TP.HCM sẽ luôn giữ được sự sắc sảo, đầu óc tổ chức linh hoạt và một cuộc sống thật bình yên[cite: 1].`
    },
    {
        name: "Trần Thị Mỹ Tiên",
        message: `Gửi Trần Thị Mỹ Tiên,\n\nMỹ Tiên rất tình cảm và ấm áp, viết chữ đẹp lắm, rất tốt, rất chân thành và rất yêu thương bạn bè, luôn tôn trọng, thấu hiểu và sẵn sàng vì bạn bè làm nhiều chuyện[cite: 1]. Tiên học rất giỏi và rất chăm, đôi khi tụi tôi không hiểu sao Mỹ Tiên có thể chăm được như vậy[cite: 1]! Đặc biệt, Mỹ Tiên học văn giỏi lắm, văn phong giàu cảm xúc và tình thương[cite: 1]. Nhớ lại hồi lớp 12, Tiên còn "cứu bệ hạ" hú hồn vì mình không thuộc bài nên bị giáo viên bắt, lúc đó hai đứa nhìn nhau mà mắc cười muốn chết, nghĩ lại vẫn thấy thương hết sức[cite: 1]! Chúc bạn trên con đường Luật kinh tế - Trường Đại học Công nghiệp TP.HCM sẽ luôn giữ được cái tâm sáng và trái tim đong đầy trắc ẩn ấy[cite: 1].`
    },
    {
        name: "Lê Tấn Tiên",
        message: `Gửi Lê Tấn Tiên,\n\nLớp phó trật tự nhưng... không hề trật tự một chút nào[cite: 1]! Hay làm trò để cả lớp cười ồ lên rồi quay mấy cái trend TikTok bị cả lớp ghẹo đỏ mặt, nhưng Tấn Tiên lại rất chân thành, ấm áp, cực kỳ tình cảm (chơi với Tiên là không bao giờ buồn nổi đâu, chỉ có cái tội hay nói móc nói méo người ta là đỉnh cao!)[cite: 1]. Chúc bạn tại Tài chính - Ngân hàng - Trường Đại học Công Thương sẽ luôn nhạy bén với những con số, giữ mãi tiếng cười và sự trẻ trung tưng tửng ấy trong cuộc sống[cite: 1].`
    },
    {
        name: "Thái Thuỳ Trang",
        message: `Gửi Thái Thuỳ Trang,\n\nThùy Trang rất ít nói nhưng lại rất chân thành, xinh gái, dễ thương[cite: 1]. Nhớ hồi đó Trang không biết chạy xe nên ngày nào 3 cũng phải đón đưa[cite: 1]. Hai năm trôi qua, chúc cô gái nhẹ nhàng ngày nào sẽ luôn giữ được nụ cười hiền hòa, sự bình an trong tâm hồn[cite: 1]. Mong rằng cuộc sống sau này sẽ đối xử thật dịu dàng, che chở cho sự mỏng manh và đáng yêu của bạn[cite: 1].`
    },
    {
        name: "Nguyễn Thị Ngọc Trâm",
        message: `Gửi Nguyễn Thị Ngọc Trâm,\n\nNgọc Trâm rất dễ tính, bình thường hóa mọi chuyện, đôi khi hay vô tư hay ngủ quên và đi trễ mắc cười lắm, chạy xe là chạy hết cái đường lớn luôn[cite: 1]! Nhớ những khoảnh khắc vô tư, hồn nhiên ấy làm sao[cite: 1]. Chúc Trâm luôn giữ được năng lượng tích cực, sự phóng khoáng đó để bước qua mọi giông bão cuộc đời một cách nhẹ nhàng nhất[cite: 1].`
    },
    {
        name: "Đỗ Huỳnh Nhã Trân",
        message: `Gửi Đỗ Huỳnh Nhã Trân,\n\nNhã Trân - nữ thần đẹp gái nhưng mà... hơi khùng[cite: 1]! Học giỏi dữ lắm nha, hay làm trò cùng với Tấn Tiên, cứ 2 đứa này xúm lại là hơn cái chợ phiên, cười điếc tai[cite: 1]! Cảm ơn Nhã Trân vì những tiếng cười sảng khoái mang lại cho lớp[cite: 1]. Chúc cô nàng tài sắc vẹn toàn khi bước chân vào môi trường Ngân hàng - Đại học Kinh tế TP.HCM sẽ luôn khôn ngoan, nhạy bén, gặt hái thật nhiều thành công và giữ mãi cái nết tưng tửng đáng yêu ấy[cite: 1].`
    },
    {
        name: "Nguyễn Thị Trinh",
        message: `Gửi Nguyễn Thị Trinh,\n\nNguyễn Thị Trinh - một cô gái mạnh mẽ, ngọt ngào và nhẹ nhàng, luôn quan tâm và động viên, ủng hộ bạn bè thầm lặng[cite: 1]. Thấm thoát đã hai năm, chúc Trinh tại ngành Giáo dục thể chất - Đại học Cần Thơ sẽ luôn giữ được sự bền bỉ, sức khỏe dồi dào và tinh thần thép[cite: 1]. Mong rằng sau này, bạn sẽ tiếp tục truyền được cảm hứng vận động và lối sống tích cực cho thật nhiều thế hệ học trò[cite: 1].`
    },
    {
        name: "Huỳnh Thanh Trúc",
        message: `Gửi Huỳnh Thanh Trúc,\n\nHuỳnh Thanh Trúc - lớp trưởng học giỏi, ấm áp, có trách nhiệm, luôn ân cần và rất năng nổ trong mọi hoạt động (và đặc biệt là "nạn nhân" bất đắc dĩ hay bị Hữu Phát ghẹo chọc không trượt phát nào!)[cite: 1]. Cảm ơn Trúc vì đã luôn là chỗ dựa vững chắc cho lớp[cite: 1]. Chúc bạn khi bước vào cánh cửa Điều dưỡng - Trường đại học Y khoa Phạm Ngọc Thạch sẽ luôn giữ được trái tim ấm áp, đôi tay vững vàng để xoa dịu nỗi đau cho các bệnh nhân[cite: 1].`
    },
    {
        name: "Nguyễn Chí Trung",
        message: `Gửi Nguyễn Chí Trung,\n\nChí Trung là một chàng trai rất có trách nhiệm và rất dễ thương[cite: 1]. Tụi tôi quý Trung lắm vì bạn luôn sẵn sàng giúp đỡ bạn bè bất cứ lúc nào (và tụi mình thú thật là cực kỳ ấn tượng với cái nón bảo hiểm màu xanh huyền thoại của Trung nữa nha!)[cite: 1]. Chúc bạn khi theo đuổi đam mê tại ngành Công nghệ ô tô - Trường Cao đẳng Long An sẽ luôn giữ được sự mạnh mẽ, tay nghề vững vàng, tự tay mở ra một tương lai thật rộng mở và vững chắc[cite: 1].`
    },
    {
        name: "Nguyễn Kiều Vân",
        message: `Gửi Nguyễn Kiều Vân,\n\nKiều Vân - cô nàng nhỏ nhắn nhưng rất cá tính, luôn sẵn sàng giúp đỡ và ủng hộ bạn bè, vẫn rất dễ thương, rất ngoan và học rất giỏi[cite: 1]. Thấm thoát đã hai năm, chúc Vân luôn giữ được nguồn năng lượng tích cực và sự sắc sảo ấy[cite: 1]. Mong rằng qua lăng kính của bạn, mọi dự định trong tương lai đều sẽ đơm hoa kết trái, đưa bạn bay thật xa trên con đường mình đã chọn[cite: 1].`
    },
    {
        name: "Trần Nguyễn Phương Vy",
        message: `Gửi Trần Nguyễn Phương Vy,\n\nPhương Vy rất dễ thương, sâu sắc, nhẹ nhàng, chân thành và chính là tổ trưởng tổ 4 có trách nhiệm của lớp[cite: 1]! Nhớ mãi kỷ niệm hồi năm lớp 12 bị công an bắt xe tội lắm, lúc đó cả lớp ai cũng muốn cười rớt hàm nhưng phải ráng nín vì sợ bạn buồn (đùa tí thôi chứ thương Vy lắm!)[cite: 1]. Chúc cô nàng tổ trưởng chu đáo này khi bước chân vào con đường Kế toán - Trường Đại học Tôn Đức Thắng sẽ luôn giữ được sự bình tĩnh, tỉ mỉ tuyệt đối, bảo chứng cho một sự nghiệp ổn định và ngày càng thăng tiến trong tương lai[cite: 1].`
    }
];

// ==========================================
// 4. HIỂN THỊ THẺ THÀNH VIÊN VÀ XỬ LÝ POPUP
// ==========================================
function createCardHTML(name, message, isTeacher = false) {
    const cardClass = isTeacher ? 'member-card teacher-card' : 'member-card';
    const escapedMessage = encodeURIComponent(message);
    const escapedName = encodeURIComponent(name);

    return `
        <div class="${cardClass}" onclick="openMessage('${escapedName}', '${escapedMessage}', event)">
            <div class="member-name">${name}</div>
        </div>
    `;
}

function renderMembers() {
    const teacherContainer = document.getElementById('teacher-container');
    const studentsGrid = document.getElementById('students-grid');

    if (teacherContainer) {
        teacherContainer.innerHTML = createCardHTML(teacherData.name, teacherData.message, true);
    }

    if (studentsGrid) {
        studentsGrid.innerHTML = studentsData.map(student => 
            createCardHTML(student.name, student.message, false)
        ).join('');
    }
}

function openMessage(name, message, event) {
    if (event) event.stopPropagation();
    
    // Kích hoạt pháo hoa khi bấm vào thẻ
    triggerCardConfetti(event);

    const decodedName = decodeURIComponent(name);
    const decodedMessage = decodeURIComponent(message);

    document.getElementById('letter-recipient').innerText = decodedName;
    document.getElementById('letter-content').innerText = decodedMessage;

    const modal = document.getElementById('modal-overlay');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function closeMessage() {
    const modal = document.getElementById('modal-overlay');
    if (modal) {
        modal.classList.add('hidden');
    }
}
