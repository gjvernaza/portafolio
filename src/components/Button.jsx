import "./Button.css"

export default function Button({ isOpen, onClick }) {

    return (


        <button className={isOpen? "btn-active" : "btn-inactive"} onClick={onClick}>
            <div></div>
            <div></div>
            <div></div>
        </button>



    );
}


