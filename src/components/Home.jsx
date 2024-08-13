import { useEffect, useState } from 'react';
import './Home.scss';

function Home() {
  const [change, setChange] = useState('no');
  let active = 0;
  const allViewProducts = document.querySelectorAll('.main-view .container .image .img img');

  const activeProductFunc = (num) => {
    num = Number(num);
    if(num > 0){
      if(active + 1 > allViewProducts.length - 1){
        active = 0;
      } else {
        active++
      }
      const lastActive = document.querySelector('.main-view .container .image .img img.active');
      lastActive.classList.remove('active');
  
      allViewProducts[active].classList.add('active');
    }else if(num < 0){
      if(active - 1 < 0){
        active = allViewProducts.length - 1;
      } else {
        active--
      }
      const lastActive = document.querySelector('.main-view .container .image .img img.active');
      lastActive.classList.remove('active');
  
      allViewProducts[active].classList.add('active');
    }
  } 

  useEffect(() => {
    setTimeout(() => {
      setChange('yees')
    }, 1)
  }, [])

  return (
    <>
      <section className="main-view">
        <div className="container">
          <div className="info">
            <h1 className='title'>Brend bilan doimo birga bo'l</h1>
            <h2 className='desc'>Buyurtma asosida kargo</h2>
            <p className="sale">Birinchi haridingiz uchun 50% gacha bo'lgan chegirmaga ega bo'ling !</p>
            <button className='btn'>Mahsulotlar</button>
          </div>
          <div className="image">
            <div className="img">
              <img className='active' src="https://ae04.alicdn.com/kf/S93db32e07299470e8c338090a3f926a0c.jpg" alt="" />
              <img src="https://ae04.alicdn.com/kf/S4d5c6ef792e14207b7df788336b3a3d1t.jpg_480x480.jpg" alt="" />
              <img src="https://video.dhimgs.com/pullvideo/20230725/afd9cc91f89a45e8a9da431eaeac7f26/cloudv-cover/8954cf7f018910000ea073af00000000.jpg" alt="" />
              <img src="https://img4.dhresource.com/webp/m/0x0/f3/albu/km/h/10/ff9db4aa-17c7-4bda-a6f6-8511a6fb5dfa.jpg" alt="" />
              <img src="https://images.uzum.uz/cesi590l08k0o9qhc8d0/original.jpg" alt="" />
            </div>
            <div className="buttons">
              <button onClick={() => activeProductFunc(-1)}><i class="fa-solid fa-chevron-left"></i></button>
              <button onClick={() => activeProductFunc(1)}><i class="fa-solid fa-chevron-right"></i></button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
