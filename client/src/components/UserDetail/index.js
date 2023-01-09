import './style.scss';
import CardAccount from '../CardAccount';


export default function UserDetail(props) {
    return <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{props.userName}!</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>

      <CardAccount  titleAccount="Argent Bank Checking (x8349)" dollars="$2,082.79" accountDescription ="Available Balance"/>
      <CardAccount  titleAccount="Argent Bank Savings (x6712)" dollars="$10,928.42" accountDescription ="Available Balance"/>
      <CardAccount  titleAccount="Argent Bank Credit Card (x8349)" dollars="$184.30" accountDescription ="Current Balance"/>
       
    </main>

}