import React, { Component } from 'react';


class Images extends Component {
    
    render() { 
        const { data } = this.props
        if(!data.length) return ''
        return ( 
            <div className="row parent-cards">
                {data.map(i => (
                    <div className="card-container" >
                        <div className="card">
                            <div className="card-image">
                                <img src={i.previewURL} alt={i.user}/>
                            </div>
                            <div className="card-content">
                                <p>Tamaño: {i.imageWidth} x {i.imageHeight}</p>
                                <p>Autor: {i.user}</p>
                            </div>
                            <div className="card-action">
                                <a href={i.largeImageURL} target="_blanck"> Ver Imagen</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
 
export default Images;