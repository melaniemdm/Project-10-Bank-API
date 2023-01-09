

export default function CardAccount(props){
    return        <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{props.titleAccount}</h3>
        <p className="account-amount">{props.dollars}</p>
        <p className="account-amount-description">{props.accountDescription}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
}