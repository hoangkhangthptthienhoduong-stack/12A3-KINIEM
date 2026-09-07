document.addEventListener('DOMContentLoaded', () => {
    const actionBtn = document.getElementById('action-btn');
    const messageBox = document.getElementById('message-box');
    const bgMusic = document.getElementById('bg-music');

    // Hàm kích hoạt phát nhạc
    function playMusic() {
        if (bgMusic && bgMusic.contentWindow) {
            bgMusic.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }
    }

    // Tự động kích hoạt phát nhạc ngay khi load trang
    playMusic();

    // Do chính sách tự động phát âm thanh (Autoplay Policy) của một số trình duyệt có thể chặn âm thanh
    // khi chưa tương tác, lệnh phát nhạc sẽ được đảm bảo kích hoạt lại ngay ở lần click đầu tiên.
    const startAudioOnFirstInteraction = () => {
        playMusic();
        document.removeEventListener('click', startAudioOnFirstInteraction);
    };
    document.addEventListener('click', startAudioOnFirstInteraction);

    // Bắt đầu hiệu ứng cánh hoa rơi ngay khi mở trang
    createPetals();

    // Sự kiện bấm 1 lần vào nút để mở thông điệp
    actionBtn.addEventListener('click', () => {
        // Đảm bảo nhạc tiếp tục phát
        playMusic();
        
        // Hiển thị nội dung thông điệp
        messageBox.classList.remove('hidden');
        
        // Ẩn nút sau khi đã bấm
        actionBtn.style.display = 'none';
    });

    // Hàm tạo hiệu ứng cánh hoa rơi liên tục
    function createPetals() {
        const container = document.getElementById('falling-container');
        const petalCount = 25;

        for (let i = 0; i < petalCount; i++) {
            const petal = document.createElement('div');
            petal.classList.add('petal');
            
            const size = Math.random() * 10 + 10;
            petal.style.width = `${size}px`;
            petal.style.height = `${size}px`;
            petal.style.left = `${Math.random() * 100}vw`;
            petal.style.animationDuration = `${Math.random() * 3 + 4}s`;
            petal.style.animationDelay = `${Math.random() * 2}s`;

            container.appendChild(petal);
        }
    }
});
