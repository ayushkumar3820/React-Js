export default function Select({label,id,name,value,onChange,options,defaultOption,error}){
    return(
        <div className="input-container">
            <label htmlFor={label}>{label}</label>
            <select name={name}id={id} value={value} onChange={onChange}>{defaultOption && (
                <option value="" hidden>
                    {defaultOption}
                </option>
            )}
            {options.map((option,i)=>(
                 <option key={i} value={option}>
                    {option}
                 </option>
            ))}
            </select>
            <p className="error">{error}</p>
        </div>

    )
}