const Notification = ({ message, colorNotification }) => {
    const notificationStyle = {
        color: colorNotification
    }

    if (message === null) {
        return null
    }

    return (
        <div className="notification" style={notificationStyle}>
            {message}
        </div>
    )
}

export default Notification;