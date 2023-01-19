import React from "react";
import styles from "./uploadimage.module.css"

export default function UploadImage({product}) {
  const [image, setImage] = React.useState(null);
  const [error, setError] = React.useState(false);
  const refere = React.useRef(null);

  const handleClick = () => {
    refere.current.click();
  };

const handleImage = async (e) => {
    setError(false)
    setImage(null)
    let actual_img = e.target.files[0];
    console.log(e.target.files[0]);

    let form = new FormData()

    form.append('image',actual_img);
    try{
      let res = await fetch(`https://api.imgbb.com/1/upload?key=9a0087fec906d3331a3ae743b583860e`, {

          method: 'POST',
          body:form,
      });

      let data = await res.json();
      // console.log(data)
      
      setImage(data.data.display_url);
      product.image=data.data.display_url;

    }catch(err){
      console.log(err)
      setError(true)
    }
}

  return (
    <div className={styles.App}>
      <input ref={refere} type="file" onChange={handleImage} />
      <br />
      <button onClick={handleClick}>Upload Product Image</button>
      <br />
      <br />
      <img src={image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp7FO0tGf6TCT3bMO_V97wHCxGmz3PihxTZM_ll6kUhObSG-anNOg3wNTAFH_s6KyJ1BQ&usqp=CAU"} 
      alt="" 
      style={{border: error ? "2px solid red" : "2px solid black"}}
      />
      {error ? <p style={{ color:"red"}}>Invalid File</p> : <p style={{display:"none"}}></p>}
    </div>
  );
}