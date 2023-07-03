import  moment from 'moment';


    interface Comic {
    safe_title: string;
    img: string;
    year: number;
    month: number;
    day: number;
    alt: string;
    releaseDate: string;
  }
  
  interface ApiResponse {
    id: number;
  }
  
  const button = document.querySelector(".get-comic-btn");
  if (button) {
    button.addEventListener('click', async function() {
      const email: string = 'v.patrina@innopolis.university';
      const urlParams: URLSearchParams = new URLSearchParams({ email });
      const url: string = `https://fwd.innopolis.app/api/hw2?email=${email}`;
      try {
        const response = await fetch(url);
        const data: ApiResponse = await response.json();
        const id = data;
        const comicUrl = `https://fwd.innopolis.university/api/comic?id=${id}`;
        const comicResponse = await fetch(comicUrl);
        const comic: Comic = await comicResponse.json();
        const title = comic.safe_title;
        const imageUrl = comic.img;
        const date = new Date(comic.year, comic.month - 1, comic.day);
        const altText = comic.alt;
        const image = document.createElement('img');
        image.src = imageUrl;
        image.alt = altText;
        const heading = document.createElement('h2');
        heading.textContent = title;
        const dateElement = document.createElement('p');

        const releaseDate = date;
        const difference = moment(releaseDate).fromNow();
        console.log(`Comics released ${difference}`);

        dateElement.textContent = date.toLocaleDateString();
        const resultContainer = document.getElementById('result-container');
        if (resultContainer) {
          resultContainer.innerHTML = '';
          resultContainer.appendChild(image);
          resultContainer.appendChild(heading);
          resultContainer.appendChild(dateElement);
          
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });
  } else {
    console.error('Button not found!');
  }



