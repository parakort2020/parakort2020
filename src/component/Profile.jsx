import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return <div className={s.content}><div>
    <img src="https://img3.akspic.ru/image/33593-fruktovoe_derevo-mestnoe_blyudo-apelsin-kozhura-pishha-1920x1080.jpg"/></div>
    <div>
      ava + discription
    </div>
    <div>
      My post
    </div>
    <div>
      New post
    </div>
    <div className={s.item}>post 1</div>
    <div className={s.item}>post 2</div>
    </div>
    
}
export default Profile;