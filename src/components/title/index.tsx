import React, { HTMLProps } from 'react'
import style from './index.module.scss'
import IconAwesome from '../base/iconawesome'

interface Props extends HTMLProps<HTMLDivElement> {
    iconClass: string,
    inconTitle: string,
    title: string
    callBackLeftButton?: () => void,
    callBackRightButton?: () => void,
}

const Title = (props: Props) => {
    const { callBackLeftButton, callBackRightButton } = props
    return (
        <div className={style.titleSlide}>
            <IconAwesome iconClass={props.iconClass}> {props.inconTitle}</IconAwesome>
            <h1>{props.title}</h1>
            {(callBackLeftButton && callBackRightButton) &&
                <div className={style.groupButton}>
                    <a onClick={callBackLeftButton}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </a>
                    <a onClick={callBackRightButton}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            }
        </div>
    )
}

export default Title