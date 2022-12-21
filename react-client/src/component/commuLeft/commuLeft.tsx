import Menu from "./menu/menuIndex"
import Profile from "./profile/profileIndex"
import './commuLeft.css'

const CommuLeft = () => {


  return (
    <section className="commu-left">
      <Profile />
      <Menu />
    </section>
  )
}

export default CommuLeft