import './style.css'

export default function Friend({friend}){
    const {name,email,phone}=friend;
    return(
        <div className="box">
            <h5>Name : {name}</h5>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
        </div>
    )
}