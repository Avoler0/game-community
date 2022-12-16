import './profile.css'

const Profile = () => {
  const point = 1000;
  return (
    <section className='profile'>
      <div className='nickName'>스쿵씨</div>
      <div className='my-data'>
        <p className='point'>포인트
          <span> {point}</span>
        </p>
        <p>쪽지함</p>
      </div>
      <div className='my-data'>
        <p>내 정보</p>
        <p>로그아웃</p>
      </div>
    </section>
  )
}

export default Profile;