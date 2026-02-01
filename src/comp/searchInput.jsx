


function SearchInput(props){

    const{label,type,placeholder,value,setValue,isRequired}=props

    return(
        <fieldset>
            <legend>{label}{isRequired&&<span className="required">*</span>}</legend>
            <input
                type={type}
                placeholder={placeholder}
                value={value??""}
                onChange={(e)=>setValue(e.target.value)}
            />                
        </fieldset>
    )
}

export default SearchInput