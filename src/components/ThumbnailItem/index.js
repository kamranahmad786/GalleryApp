import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbnailId} = props
  const {ThumbnailUrl, ThumbnailAltText, id} = imageDetails
  const ThumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'

  const onClickThumbnail = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnail}
      >
        <img
          src={ThumbnailUrl}
          alt={ThumbnailAltText}
          className={ThumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
