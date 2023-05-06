import Button from "~/Components/Button";
import classNames from "classnames/bind"
import styles from "./Menu.module.scss"

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx("menu-item", {
        separate: data.separate
    })
    return (
    <>
        <Button className={classes} to={data.to} leftIcon={data.icon} onClick={onClick}>{data.title}</Button><br/>
    </>
    )
}

export default MenuItem