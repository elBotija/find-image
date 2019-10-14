import React, { Component } from 'react';


class Form extends Component {
    search = React.createRef()
    
    _sendSearch(e){
        e.preventDefault()
        let search = this.search.current.value
        if(search.length){
            console.log("fee", this.props)
            this.props.setSearch(search)
        }
    }

    render() { 
        return ( 
            <div className="row">
                <form className="col s12"  onSubmit={(e) => this._sendSearch(e)}>
                    <div className="row">
                        <div className="input-field col s10">
                            <input type="text" ref={this.search} placeholder="Busca una imagen"/>
                        </div>
                        <div className="input-field col s2">
                            <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i class="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default Form;