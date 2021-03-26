import './AdsPage.css';


const ads = [
    {
      "id": "60083439-afba-4ddd-9e7b-10ab0082ce4a",
      "createdAt": "2021-03-26T17:29:12.000Z",
      "name": "Funda Iphone XS",
      "sale": true,
      "price": 15,
      "tags": [
        "lifestyle",
        "mobile"
      ],
      "photo": null
    },
    {
      "id": "6b3f75b3-a399-44aa-86bb-26cbd76e2638",
      "createdAt": "2021-03-26T17:30:04.000Z",
      "name": "Patinete eléctrico",
      "sale": true,
      "price": 125,
      "tags": [
        "lifestyle",
        "mobile",
        "work"
      ],
      "photo": null
    },
    {
      "id": "3afbde0c-730f-4db8-891c-cc9779c9ce0f",
      "createdAt": "2021-03-26T17:30:24.000Z",
      "name": "Bicicleta estática",
      "sale": false,
      "price": 75,
      "tags": [
        "lifestyle"
      ],
      "photo": null
    },
    {
      "id": "7fbbe0ed-3afa-440d-913d-1acb1d509eaa",
      "createdAt": "2021-03-26T17:30:50.000Z",
      "name": "Monitor Samsung",
      "sale": true,
      "price": 49,
      "tags": [
        "work"
      ],
      "photo": null
    }
  ];



const AdsPage = ()=>{

    const items = ads.map(ad => 
        
        <article key={ad.id} className = "adWrapper">
            <h2 className = "adTitle">{ad.name}</h2>
            
            {ad.sale ? 
            <div className ="venta">
                <span className = "adPrice">Precio: {ad.price} €</span>
            </div> 
            : 
            <div className = "compra">
                <span className = "adPrice">Ofrezco máximo: {ad.price} €</span>

            </div>} 
            <div>{ad.tags.map(tag => 
               <div className="tagItem">#{tag} </div>)}
            
            </div> 
        </article>
        );
    
    return(
        <div>
            <div className= 'adsPage'>{items}</div>
        </div>

        
        
    )
}

export default AdsPage;