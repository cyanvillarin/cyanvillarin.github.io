<script>
    document.addEventListener("DOMContentLoaded", function() {
        const carousels = [
            {
                id: 'carouselInner1',
                images: [
                    "assets/img/apps-worked-on/1-mercari/mercari-0.png",
                    "assets/img/apps-worked-on/1-mercari/mercari-1.png",
                    "assets/img/apps-worked-on/1-mercari/mercari-2.png"
                ]
            },
            {
                id: 'carouselInner2',
                images: [
                    "assets/img/apps-worked-on/2-rakuten-card/rakuten-0.png",
                    "assets/img/apps-worked-on/2-rakuten-card/rakuten-1.png",
                    "assets/img/apps-worked-on/2-rakuten-card/rakuten-2.png",
                    "assets/img/apps-worked-on/2-rakuten-card/rakuten-3.png",
                    "assets/img/apps-worked-on/2-rakuten-card/rakuten-4.png",
                    "assets/img/apps-worked-on/2-rakuten-card/rakuten-5.png"
                ]
            }
        ];

        carousels.forEach(carousel => {
            const carouselInner = document.getElementById(carousel.id);
            carousel.images.forEach((src, index) => {
                const itemDiv = document.createElement('div');
                itemDiv.className = `carousel-item ${index === 0 ? 'active' : ''}`;

                const imgContainer = document.createElement('div');
                imgContainer.className = 'd-flex justify-content-center align-items-center carousel-img-container';

                const img = document.createElement('img');
                img.className = 'img-fluid mb-3 mb-lg-0 carousel-img';
                img.src = src;

                imgContainer.appendChild(img);
                itemDiv.appendChild(imgContainer);
                carouselInner.appendChild(itemDiv);
            });
        });
    });
</script>