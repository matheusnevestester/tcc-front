import React from 'react';
import {Link, useHistory} from 'react-router-dom';

function BookGroupItem(props) {
    const history = useHistory();

    return (
        <>
            <li className='cards__item'  onClick={() => history.push("/group", { bookGroup: props.groupId })}>
                <Link className='cards__item__link' to={props.path}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img
                            className='cards__item__img'
                            alt='Travel Image'
                            src={props.src}
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default BookGroupItem;
