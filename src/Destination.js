import React from 'react';
import style from '../Styles/destination.module.css';
import locationIcon from '../placeholder.png';

export default function Destination(props) {
  const {
    imageContainer,
    image,
    icon,
    country,
    location,
    title,
    date,
    description,
  } = style;
  return (
    <div className={style.container}>
      <div className={imageContainer}>
        <img className={image} alt={props.name} src={props.imageUrl}></img>
      </div>
      <div className={style.locationContainer}>
        <img className={icon} alt='icon' src={locationIcon}></img>
        <p className={country}>{props.location.toUpperCase()}</p>
        <a
          className={location}
          href={props.googleMapsUrl}
          target='_blank'
          rel='noreferrer'
        >
          View on Google maps
        </a>
      </div>
      <div className={style.descriptionContainer}>
        <h2 className={title}>{props.title}</h2>
        <p className={date}>
          {props.startDate} - {props.endDate}
        </p>
        <p className={description}>{props.description}</p>
      </div>
    </div>
  );
}
