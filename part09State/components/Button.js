export const Button=({imagesUrl,clickHandle,buttonName})=>{
    return (
        <button onClick={clickHandle} title={buttonName}>
            <img src={imagesUrl} alt="Button " />
        </button>
    )
}