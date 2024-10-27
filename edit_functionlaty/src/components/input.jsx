// eslint-disable-next-line react/prop-types
export default function Input({label,id,name,value,onChange,error}){

    return(
        <div className="input-container">
            <label htmlFor={id}>{label}</label>
            <input id={id}name={name} onChange={onChange} value={value} />
            <p className="error">{error}</p>
        </div>
    )

}