import PropTypes from 'prop-types'
import FriendListItem from 'components/FriendListItem/FriendListItem'
import css from './FriendList.module.css'

const FriendList = ({friends}) => {
    return(
        <ul className={css.friendList}>
            {friends.map(({avatar, name, isOnline, id}) => {
                return <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id}/>
            })}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape).isRequired
}

export default FriendList;