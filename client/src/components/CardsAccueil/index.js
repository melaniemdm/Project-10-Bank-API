import './style.scss';
export default function CardsAccueil(props){
return <div className="feature-item">
          <img src={props.iconFeature} alt="Chat Icon" className="feature-icon" />
          <h3 className="feature-item-title">{props.titleFeature}</h3>
          <p>
            {props.descriptionFeature}
          </p>
        </div>


}