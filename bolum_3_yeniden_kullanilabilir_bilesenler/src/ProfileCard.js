//const ProfileCard = ({ handle, title, image }) => {
// Burada her seferinde props yazmamak için bir değişken eşitleyebiliriz:

/*
const title = props.title
const handle = props.handle
*/
// ancak bu şekilde tanımlamaya gerek yok aşağıdaki gibi js özelliklerini de kullanabiliriz.
/*
const {title, handle} = props
*/
// ancak buna da gerek yok fonksiyona verdiğimiz parametreye {title, handle} yazmamız yeterli

/* return (
    <div>
      <img src={image} alt="pda logo" />
      <div>Title is {title}</div>
      <div>Handle is {handle} </div>
    </div>
  );
};
*/
function ProfileCard({ title, handle, image, description }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="pda logo" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
