const imageContainer = document.getElementById('imageContainer');
const captionBox = document.getElementById('captionBox');

// JSON 불러오기
fetch('imageData.json')
  .then(response => response.json())
  .then(imageData => {

    imageData.forEach(data => {
      const img = document.createElement('img');
      img.src = `img/${data.file}`;
      img.alt = data.title;

      // 마우스호버시 캡션 띄우기
      img.addEventListener('mouseenter', () => {
        captionBox.innerText = data.caption;
        captionBox.style.display = 'block';
      });

      // 마우스가 움직일 때 위치 업데이트
      img.addEventListener('mousemove', (e) => {
        captionBox.style.left = `${e.clientX + 10}px`;
        captionBox.style.top = `${e.clientY + 10}px`;
      })

      img.addEventListener('mouseleave', () => {
        captionBox.style.display = 'none';
      });

      imageContainer.appendChild(img);
    });

  })
  .catch(error => console.error('JSON 불러오기 오류:', error));
